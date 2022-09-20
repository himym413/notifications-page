"use strict";

// Selecting elements
const markAsReadBtn = document.querySelector(".mark-as-read");
const numberOfNotifications = document.querySelector(".notifications-number");
const allNotifications = document.querySelectorAll(".notification-box");
const allDots = document.querySelectorAll(".notification-new");

// Adding event listener to 'Mark all as read' button
markAsReadBtn.addEventListener("click", function () {
  // Setting number of notifications to 0
  numberOfNotifications.textContent = "0";

  // Removing background for new notifications
  allNotifications.forEach((notif) => {
    notif.classList.remove("background-light");
  });

  // Removing dots for new notifications
  allDots.forEach((dot) => {
    dot.style.display = "none";
  });
});
