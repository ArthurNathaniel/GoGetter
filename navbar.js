document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const navLinks = document.querySelector(".nav-items");
  const navBtn = document.querySelector(".nav-btn");

  toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    navBtn.classList.toggle("show");
  });
});
