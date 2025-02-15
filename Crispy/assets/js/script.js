"use strict";

// Add Event Listener on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Mobile Nav

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElements(navbarTogglers, "click", toggleNav);

// Navbar Close

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};
addEventOnElements(navbarLinks, "click", closeNav);

// Fixed Header & Back To Top;

const header = document.querySelector("[data-header]");
const backToTop = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  backToTop.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});
