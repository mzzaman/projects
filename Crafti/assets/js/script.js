"use strict";

// Mobile Screen
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

// AddEventListener;
navTogglers.forEach((navToggler) => {
  navToggler.addEventListener("click", toggleNav);
});

// Fixed Header;

const header = document.querySelector("[data-header]");
const fixedHeader = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", fixedHeader);
