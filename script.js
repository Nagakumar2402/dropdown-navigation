const close = document.querySelector(".close");
const open = document.querySelector(".hamburger__menu");
const mobileMenu = document.querySelector(".mobile");

open.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});
close.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

const mobileNavMenu = document.querySelectorAll(".mobile__nav li");
const subMenu = document.querySelectorAll(".mobile__hover__menu");

mobileNavMenu.forEach((nav) => {
  nav.addEventListener("click", () => {
    if (nav.textContent.includes("Features")) {
      subMenu[0].classList.toggle("active");
    } else if (nav.textContent.includes("Company")) {
      subMenu[1].classList.toggle("active");
    }
  });
});
