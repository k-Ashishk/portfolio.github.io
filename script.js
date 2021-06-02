const nav_toggle = document.querySelector(".nav_toggle");
const nav_ul = document.querySelector(".nav_list_ul");

nav_toggle.addEventListener('click', () =>{
    nav_ul.classList.toggle("nav_responsive");
})
