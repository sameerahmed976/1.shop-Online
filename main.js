import "./style.css";
const hamburgerButton = document.querySelector(".hamburger");
const navLinksEach = document.querySelectorAll(".nav__links li a");

const navLinks = document.querySelector(".nav__links");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("change");
  navLinks.classList.toggle("nav__active");
});

navLinksEach.forEach((element) => {
  navLinksEach[0].classList.add("active");

  element.addEventListener("click", function () {
    navLinksEach.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
  });
});
