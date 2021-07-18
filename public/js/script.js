const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", function () {
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
  } else if (menu.classList.contains("translate-x-0")) {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  }
});
