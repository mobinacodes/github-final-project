// Shows a confirmation popup. Called ONLY when a new recommendation is submitted.
function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  // Auto-hide after a few seconds so it doesn't linger forever.
  clearTimeout(showPopup._timer);
  showPopup._timer = setTimeout(() => {
    popup.classList.add("hidden");
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recommendationForm");
  const list = document.getElementById("recommendationsList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("recName").value.trim();
    const title = document.getElementById("recTitle").value.trim();
    const text = document.getElementById("recText").value.trim();

    if (!name || !title || !text) {
      return;
    }

    const entry = document.createElement("blockquote");
    entry.className = "recommendation recommendation-new";
    entry.innerHTML = `
      <p>"${text}"</p>
      <footer>&mdash; ${name}, ${title}</footer>
    `;

    list.appendChild(entry);
    form.reset();

    // showPopup fires only here, i.e. only on a successful new-recommendation submission.
    showPopup();

    entry.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
