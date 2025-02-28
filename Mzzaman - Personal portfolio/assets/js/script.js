"use strict";

// Preloader

const preloader = document.querySelector("[data-preloader]");
window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Multiple EventListener;

const addEventOnElements = function (elements, evenType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(evenType, callback);
  }
};

// Mobile navbar toggle;

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
});

// Scroll bar;

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

// Element title effect

const tilt = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {
  // get title element center position;
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const titlePositionY = ((event.offsetX - centerX) / centerX) * 10;
  const titlePositionX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${titlePositionX}deg) rotateY(${
    titlePositionY - titlePositionY * 2
  }deg)`;
};

addEventOnElements(tilt, "mousemove", initTilt);

// titleElement.addEventListener("mousemove", initTilt);

const inOutTilt = function () {
  let getBackToDefaultPosition = `perspective(1000px) rotateX(0) rotateY(0)`;
  this.style.transform = getBackToDefaultPosition;
};

addEventOnElements(tilt, "mouseout", inOutTilt);

// Tab-active

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {
  if (!(lastActiveTabBtn === this)) {
    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");
    this.classList.add("active");
    lastActiveTabBtn = this;
    const currentTabContent = document.querySelector(
      `[data-tab-content="${this.dataset.tabBtn}"]`
    );
    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;
  }
};

addEventOnElements(tabBtns, "click", filterContent);

// Custom Cursor;

const cursors = document.querySelectorAll("[data-cursor]");

const hoveredElements = [
  ...document.querySelectorAll("button"),
  ...document.querySelectorAll("a"),
];

window.addEventListener("mousemove", function (event) {
  const posX = event.clientX;
  const posY = event.clientY;

  // cursor dot position;

  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  // Cursor outline position;

  this.setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);
});

// Add hovered class when mouseover on elements
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0; i < cursors.length; i++) {
    cursors[i].classList.add("hovered");
  }
});

// remove hovered class when mouseover on elements
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0; i < cursors.length; i++) {
    cursors[i].classList.remove("hovered");
  }
});
