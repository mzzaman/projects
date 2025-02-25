"use strict";

// Add Event on multiple elements;
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/*
 *Mobile Navbar,
 *Navbar will show after clicking menu button,
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElements(navLinks, "click", navClose);

/*
 *Header
 * header will be active after scrolled down to 100px of screen
 */
const header = document.querySelector("[data-header]");
const backToTopBtn = document.querySelector("[data-back-to-top-btn]");

const activeElement = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backToTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backToTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElement);

/*
 * Button hover ripple effect;
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
};

addEventOnElements(buttons, "mousemove", buttonHoverRipple);

// buttons.addEventListener("mousemove", buttonHoverRipple);

/*
 * Scroll reveal;
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealElementOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const isElementInsideWindow =
      revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);

// Custom Cursor;

const cursors = document.querySelector("[data-cursor]");
const hoverElements = [
  ...document.querySelectorAll("a"),
  ...document.querySelectorAll("button"),
];

const cursorMove = function (event) {
  cursors.style.top = `${event.clientY}px`;
  cursors.style.left = `${event.clientX}px`;
};

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursors.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursors.classList.remove("hovered");
});
