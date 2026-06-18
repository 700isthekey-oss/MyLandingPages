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
  const { data: posts, error: postError } = await supabaseClient
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(12);

  if (postError) {
    guestbookList.innerHTML = "<p>방명록을 불러오지 못했습니다.</p>";
    return;
  }

  const postIds = posts.map((post) => post.id);
  let comments = [];

  if (postIds.length > 0) {
    const { data: commentData, error: commentError } = await supabaseClient
      .from("guestbook_comments")
      .select("*")
      .in("guestbook_id", postIds)
      .order("created_at", { ascending: true });

    if (!commentError) {
      comments = commentData || [];
    }
  }

  guestbookList.innerHTML = posts.map((post) => {
    const postComments = comments.filter(
      (comment) => comment.guestbook_id === post.id
    );

    return `
      <article class="guestbook-card">
        <p class="guestbook-message">“${escapeHtml(post.message)}”</p>
        <p class="guestbook-name">— ${escapeHtml(post.name)}</p>

        <div class="guestbook-comments">
          ${postComments.map((comment) => `
            <div class="guestbook-comment">
              <strong>${escapeHtml(comment.name)}</strong>
              <p>${escapeHtml(comment.message)}</p>
            </div>
          `).join("")}
        </div>

        <form class="comment-form" data-post-id="${post.id}">
          <input type="text" name="name" placeholder="Name" maxlength="30" required>
          <input type="text" name="message" placeholder="Reply" maxlength="300" required>
          <button type="submit">Reply</button>
        </form>
      </article>
    `;
  }).join("");
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

guestbookList.addEventListener("submit", async (event) => {
  const form = event.target.closest(".comment-form");
  if (!form) return;

  event.preventDefault();

  const guestbookId = Number(form.dataset.postId);
  const name = form.name.value.trim();
  const message = form.message.value.trim();

  if (!guestbookId || !name || !message) return;

  const { error } = await supabaseClient
    .from("guestbook_comments")
    .insert({
      guestbook_id: guestbookId,
      name,
      message,
    });

  if (error) {
    alert("댓글 저장에 실패했습니다.");
    return;
  }

  form.reset();
  loadGuestbook();
});

loadGuestbook();
