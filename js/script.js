// Scroll-to-top tool
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#toTopBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
