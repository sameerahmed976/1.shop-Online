import "./style.css";
const hamburgerButton = document.querySelector(".hamburger");
const navLinksEach = document.querySelectorAll(".nav__links li a");

const navLinks = document.querySelector(".nav__links");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("change");
  navLinks.classList.toggle("active");
});
