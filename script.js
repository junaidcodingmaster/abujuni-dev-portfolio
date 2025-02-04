document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const animationToggle = document.getElementById("animationToggle");
  const body = document.body;

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("orange-theme");
  });

  animationToggle.addEventListener("click", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.toggle("animated-border");
      section.classList.toggle("star-shine");
    });
  });

  const waveElements = document.querySelectorAll(".wave-effect");
  waveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      element.style.backgroundColor = "#ff7e5f";
    });
    element.addEventListener("mouseleave", function () {
      element.style.backgroundColor = "";
    });
  });
});
