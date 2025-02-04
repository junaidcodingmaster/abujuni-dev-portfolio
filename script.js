// Theme Selection Logic
const themeButton = document.getElementById("themeButton");
const themeSelector = document.getElementById("themeSelector");
const themeCircles = document.querySelectorAll(".theme-circle");
const body = document.body;
const resetButton = document.getElementById("resetButton");

// Animation Toggle Logic
const animationToggle = document.getElementById("animationToggle");
const animationIcon = document.getElementById("animationIcon");
const boxes = document.querySelectorAll(".box");

let animationsEnabled = true; // Default: animations are enabled

animationToggle.addEventListener("click", () => {
  animationsEnabled = !animationsEnabled; // Toggle animations state

  // Toggle spinning effect on the icon
  animationIcon.classList.toggle("spin");

  // Change the icon between play and stop
  if (animationsEnabled) {
    animationIcon.classList.remove("fa-stop");
    animationIcon.classList.add("fa-play");
  } else {
    animationIcon.classList.remove("fa-play");
    animationIcon.classList.add("fa-stop");
  }

  // Enable or disable animations
  boxes.forEach((box) => {
    if (animationsEnabled) {
      box.style.animationPlayState = "running"; // Resume animations
    } else {
      box.style.animationPlayState = "paused"; // Pause animations
    }
  });
});

// Toggle Theme Selector
themeButton.addEventListener("click", () => {
  themeSelector.classList.toggle("hidden");
});

// Apply Selected Theme
themeCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    const theme = circle.getAttribute("data-theme");
    body.className = theme; // Apply theme class to body
    themeSelector.classList.add("hidden"); // Hide theme selector
  });
});

// Reset Button Functionality
resetButton.addEventListener("click", () => {
  location.reload(); // Reload the page to reset to default theme
});
