document.addEventListener("DOMContentLoaded", function () {
  // Scroll-to-top button
  const toTopBtn = document.querySelector("#toTopBtn");
  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Dark Mode Toggle
  const darkToggle = document.querySelector("#darkModeToggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
