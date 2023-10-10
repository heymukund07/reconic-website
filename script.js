/* ********** NAVBAR CHANGES COLOR ************ */
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("navbar", window.scrollY > 0);
});

/* ************* OPEN SOCIAL MEDIA PROFILES **************** */

document.getElementById("linkedin-icon").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/afreen-hossain/", "_blank");
});

document.getElementById("twitter-icon").addEventListener("click", function () {
  window.open("https://twitter.com/ReconicEsports", "_blank");
});

document
  .getElementById("instagram-icon")
  .addEventListener("click", function () {
    window.open("https://www.instagram.com/reconicesports/", "_blank");
  });
document.getElementById("youtube-icon").addEventListener("click", function () {
  window.open("https://www.youtube.com/@reconicesports", "_blank");
});
document.getElementById("discord-icon").addEventListener("click", function () {
  window.open("https://discord.com/invite/reconic", "_blank");
});

/* ******************** SMOOTH SCROLLING *********************** */

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll(".nav-links a");
const homeLink = document.querySelector(".home");

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();

//       const targetId = this.getAttribute("href");
//       const targetElement = document.querySelector(targetId);

//       targetElement.scrollIntoView({ behavior: "smooth" });
//     });
//   });

homeLink.addEventListener("click", function (event) {
  event.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});
// });

/* ********************** TOGGLE MENU (RESPONSIVENESS FOR NAVBAR) ******************** */

// function toggleMenu() {
//   const toggleMenu = document.querySelector(".menu-icon");
//   const nav = document.querySelector(".nav-links");
//   toggleMenu.classList.toggle("active");
//   nav.classList.toggle("active");
// }

const menu = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});
