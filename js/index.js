"use strict"
const Hamburger = document.getElementById("hamburger-menu");
const class_open = "open_menu";
const HamburgerMenu = document.getElementById("change-menu");
const Menu = document.getElementById("menu_opciones");
const menu_open = "menu_options_open";
// toggle menu
let click = false;
Hamburger.addEventListener("click", (e) => {
    click = true;
    if(click){
        HamburgerMenu.classList.toggle(class_open);
        Menu.classList.toggle(menu_open);
    }
})
