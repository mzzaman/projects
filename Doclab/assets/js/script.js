"use strict";

// Preloader
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
  preloader.classList.toggle("loaded");
  document.body.classList.toggle("loaded");
});

// Header Active And Back-To-Top-Btn
const header = document.querySelector("[data-header]");
const backToTopBtn = document.querySelector("[data-back-to-top]");

const fixedHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backToTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backToTopBtn.classList.remove("active");
  }
};
window.addEventListener("scroll", fixedHeader);

// Add EventOnElements;

const eventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Mobile Navbar
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

eventOnElements(navTogglers, "click", toggleNav);

// Scroll on Reveal

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScreen = function () {
  for (let i = 0; i < revealElements.length; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScreen);
window.addEventListener("load", revealElementOnScreen);
