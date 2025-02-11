"use strict";

/*
 * Header Animation;
 * When scrolled down to 100px header will be active;
 */

const header = document.querySelector("[data-header]");
const backToTopBtn = document.querySelector("[data-back-to-top-btn]");
window.addEventListener("scroll", () => {
  if (this.window.scrollY > 100) {
    header.classList.add("active");
    backToTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backToTopBtn.classList.remove("active");
  }
});

// Multiple Event on Elements;

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Mobile Navbar Toggler;

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/*
 *Slider Part
 */
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPreviewButton = document.querySelector("[data-slider-prev]");
const sliderNextButton = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);

let totalSliderItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePosition = 0;
const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePosition].offsetLeft}px)`;
};

// Next Slide

const slideNext = function () {
  const slideEnd = currentSlidePosition >= totalSliderItems;
  if (slideEnd) {
    currentSlidePosition = 0;
  } else {
    currentSlidePosition++;
  }

  moveSliderItem();
};

sliderNextButton.addEventListener("click", slideNext);

// Preview Slide

const slidePreview = function () {
  if (currentSlidePosition <= 0) {
    currentSlidePosition = totalSliderItems;
  } else {
    currentSlidePosition--;
  }

  moveSliderItem();
};

sliderPreviewButton.addEventListener("click", slidePreview);

/*
* Responsive

*/

window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(
    this.getComputedStyle(slider).getPropertyValue("--slider-item")
  );

  totalSliderItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});
