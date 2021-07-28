"use strict";

// burger menu 
const navbarBtn = document.querySelector(".navbar__open-btn"),
      navbarBtnLine = document.querySelector(".navbar__btn-line"),
      navMenu = document.querySelector(".nav-menu"),
      pageBody = document.querySelector("body");

if (navMenu) {
   navbarBtn.addEventListener("click", () => {
      pageBody.classList.toggle("lock");
      navbarBtnLine.classList.toggle("active");
      navMenu.classList.toggle("active");
   })
}