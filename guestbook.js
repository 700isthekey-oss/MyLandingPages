const SUPABASE_URL = "https://ckkrnptfnafmhxobyxfg.supabase.co";
const SUPABASE_KEY = "sb_publishable_oLQmR_AGEGZmjCEn8amEBw_aW1u-ASy";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const guestbookForm = document.querySelector("#guestbook-form");
const guestbookName = document.querySelector("#guestbook-name");
const guestbookMessage = document.querySelector("#guestbook-message");
const guestbookList = document.querySelector("#guestbook-list");

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (match) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[match]));
}

async function loadGuestbook() {
  const { data, error } = await supabaseClient
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(12);

  if (error) {
    guestbookList.innerHTML = "<p>방명록을 불러오지 못했습니다.</p>";
    return;
  }

  guestbookList.innerHTML = data.map((item) => `
    <article class="guestbook-card">
      <p class="guestbook-message">“${escapeHtml(item.message)}”</p>
      <p class="guestbook-name">— ${escapeHtml(item.name)}</p>
    </article>
  `).join("");
}

guestbookForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = guestbookName.value.trim();
  const message = guestbookMessage.value.trim();

  if (!name || !message) return;

  const { error } = await supabaseClient
    .from("guestbook")
    .insert({ name, message });

  if (error) {
    alert("저장에 실패했습니다.");
    return;
  }

  guestbookForm.reset();
  loadGuestbook();
});

loadGuestbook();