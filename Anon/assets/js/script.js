"use strict";

// Modal

const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalCloseOverlay = document.querySelector("[data-modal-close-overlay]");
// Modal function
const modalClose = function () {
  modal.classList.add("closed");
};

// Modal eventlistener
modalCloseOverlay.addEventListener("click", modalClose);
modalCloseBtn.addEventListener("click", modalClose);

// Toast
const notificationToast = document.querySelector("[data-notification-toast]");
const notificationToastCloseBtn = document.querySelector(
  "[data-notification-toast-close-btn]"
);

// Notification Toast EventListener;
notificationToastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});
