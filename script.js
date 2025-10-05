document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".profile-card");
  const extra = document.querySelector(".extra");
  const toggleBtn = document.getElementById("toggle");
  const closeBtn = document.getElementById("close");

  toggleBtn.onclick = () => {
    card.classList.add("activate");
    extra.classList.add("activate");
  };
  closeBtn.onclick = () => {
    card.classList.remove("activate");
    extra.classList.remove("activate");
  };
});
