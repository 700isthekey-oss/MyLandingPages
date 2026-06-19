const SUPABASE_URL = "https://ckkrnptfnafmhxobyxfg.supabase.co";
const SUPABASE_KEY = "sb_publishable_oLQmR_AGEGZmjCEn8amEBw_aW1u-ASy";

const authClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.querySelector("#signup-form");
const usernameInput = document.querySelector("#signup-username");
const emailInput = document.querySelector("#signup-email");
const phoneInput = document.querySelector("#signup-phone");
const passwordInput = document.querySelector("#signup-password");
const confirmInput = document.querySelector("#signup-password-confirm");
const submitButton = document.querySelector("#signup-submit");

const usernameHelp = document.querySelector("#username-help");
const emailHelp = document.querySelector("#email-help");
const phoneHelp = document.querySelector("#phone-help");
const passwordHelp = document.querySelector("#password-help");
const confirmHelp = document.querySelector("#confirm-help");
const message = document.querySelector("#signup-message");

let usernameAvailable = false;

const setHelp = (element, text, status) => {
  element.textContent = text;
  element.classList.remove("is-valid", "is-invalid", "is-checking");
  element.classList.add(status);
};

const isEmailValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isUsernameValid = (username) =>
  /^[a-z0-9_]{4,16}$/.test(username);

const isPhoneValid = (phone) =>
  /^010\d{8}$/.test(phone);

const isPasswordValid = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);

const updateSubmitState = () => {
  const valid =
    usernameAvailable &&
    isEmailValid(emailInput.value.trim()) &&
    isPhoneValid(phoneInput.value.trim()) &&
    isPasswordValid(passwordInput.value) &&
    passwordInput.value === confirmInput.value;

  submitButton.disabled = !valid;
};

let usernameTimer;

usernameInput.addEventListener("input", () => {
  const username = usernameInput.value.trim().toLowerCase();
  usernameInput.value = username;

  usernameAvailable = false;
  clearTimeout(usernameTimer);

  if (!isUsernameValid(username)) {
    setHelp(usernameHelp, "영문 소문자, 숫자, _ 포함 4~16자로 입력해 주세요.", "is-invalid");
    updateSubmitState();
    return;
  }

  setHelp(usernameHelp, "아이디 중복 확인 중...", "is-checking");

  usernameTimer = setTimeout(async () => {
    const { data, error } = await authClient
      .from("profiles")
      .select("username")
      .eq("username", username)
      .maybeSingle();

    if (error) {
      setHelp(usernameHelp, "아이디 확인 중 오류가 발생했습니다.", "is-invalid");
      usernameAvailable = false;
    } else if (data) {
      setHelp(usernameHelp, "이미 사용 중인 아이디입니다.", "is-invalid");
      usernameAvailable = false;
    } else {
      setHelp(usernameHelp, "사용 가능한 아이디입니다.", "is-valid");
      usernameAvailable = true;
    }

    updateSubmitState();
  }, 400);
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  if (isEmailValid(email)) {
    setHelp(emailHelp, "사용 가능한 이메일 형식입니다.", "is-valid");
  } else {
    setHelp(emailHelp, "유효한 이메일 주소를 입력해 주세요.", "is-invalid");
  }

  updateSubmitState();
});

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 11);

  if (isPhoneValid(phoneInput.value)) {
    setHelp(phoneHelp, "사용 가능한 전화번호입니다.", "is-valid");
  } else {
    setHelp(phoneHelp, "010으로 시작하는 숫자 11자리를 입력해 주세요.", "is-invalid");
  }

  updateSubmitState();
});

passwordInput.addEventListener("input", () => {
  if (isPasswordValid(passwordInput.value)) {
    setHelp(passwordHelp, "안전한 비밀번호입니다.", "is-valid");
  } else {
    setHelp(passwordHelp, "8자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.", "is-invalid");
  }

  if (confirmInput.value) {
    confirmInput.dispatchEvent(new Event("input"));
  }

  updateSubmitState();
});

confirmInput.addEventListener("input", () => {
  if (confirmInput.value && passwordInput.value === confirmInput.value) {
    setHelp(confirmHelp, "비밀번호가 일치합니다.", "is-valid");
  } else {
    setHelp(confirmHelp, "비밀번호가 일치하지 않습니다.", "is-invalid");
  }

  updateSubmitState();
});
confirmInput.addEventListener("paste", () => {
  setTimeout(() => {
    confirmInput.dispatchEvent(new Event("input"));
  }, 0);
});

updateSubmitState();

document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(`#${button.dataset.target}`);
    if (!target) return;

    target.type = target.type === "password" ? "text" : "password";
    button.textContent = target.type === "password" ? "👁" : "🙈";
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;

  submitButton.disabled = true;
  message.textContent = "회원가입 중입니다...";

  const { data: signUpData, error: signUpError } = await authClient.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    message.textContent = signUpError.message;
    submitButton.disabled = false;
    return;
  }

  const user = signUpData.user;

  if (!user) {
    message.textContent = "이메일 인증이 필요한 상태입니다. Supabase Auth 설정을 확인해 주세요.";
    submitButton.disabled = false;
    return;
  }

  const { error: profileError } = await authClient
    .from("profiles")
    .insert({
      user_id: user.id,
      username,
      email,
      phone,
    });

  if (profileError) {
    message.textContent = "프로필 저장에 실패했습니다: " + profileError.message;
    submitButton.disabled = false;
    return;
  }

  const { error: loginError } = await authClient.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    alert("환영합니다. 이메일 인증 후 로그인해 주세요.");
    window.location.href = "./login.html";
    return;
  }

  alert("환영합니다.");
  window.location.href = "./index.html";
});
usernameInput.addEventListener("input", () => {
  usernameInput.value = usernameInput.value
    .replace(/[^\w]/g, "")
    .toLowerCase();
});
