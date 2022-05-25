const openMenuBtn = document.querySelector(".mobile-menu-btn");
const navigation = document.querySelector(".nav");
const btnImg = document.querySelector(".mobile-menu__img");
const page = document.querySelector(".page");

openMenuBtn.addEventListener("click", () => {
  navigation.classList.toggle("menu-active");
  if (navigation.classList.contains("menu-active")) {
    btnImg.setAttribute("src", "img/mobile-menu-btn.svg");
    openMenuBtn.style.cssText += "position: static;";
    page.classList.remove("dis-scroll");
  } else {
    btnImg.setAttribute("src", "img/icon-close.svg");
    openMenuBtn.style.cssText += "position: fixed; right: 15px;";
    page.classList.add("dis-scroll");
  }
});
