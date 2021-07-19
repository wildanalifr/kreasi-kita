const navbar = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar ul");
const menuHamburger = document.querySelector(".fa-bars");
const menuExit = document.querySelector(".fa-times");

navbar.addEventListener("click", function () {
  if (navbarMenu.classList.contains("translate-x-full")) {
    navbarMenu.classList.remove("translate-x-full");
    navbarMenu.classList.add("translate-x-0");
    menuHamburger.classList.add("hidden");
    menuExit.classList.remove("hidden");
  } else if (navbarMenu.classList.contains("translate-x-0")) {
    navbarMenu.classList.remove("translate-x-0");
    navbarMenu.classList.add("translate-x-full");
    menuHamburger.classList.remove("hidden");
    menuExit.classList.add("hidden");
  }
});
