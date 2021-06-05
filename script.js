const nav_toggle = document.querySelector(".nav_toggle");
const nav_ul = document.querySelector(".nav_list_ul");
const nav_menu = document.querySelector(".nav_menu");
const nav_li = document.querySelectorAll(".nav_list_ul_li");

nav_toggle.addEventListener("click", () => {
  nav_ul.classList.toggle("nav_responsive");
});

nav_li.forEach((element) => {
  element.addEventListener("click", () => {
    nav_ul.classList.remove("nav_responsive");
  });
});

window.onscroll = function () {
  let scrY = window.scrollY;
  if (scrY > 60) {
    // nav_menu.style.border = "2px solid red";
    nav_menu.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.7)";
  } else {
    nav_menu.style.boxShadow = "none";
  }
};
