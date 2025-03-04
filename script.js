<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const themes = ["default-theme", "dark-blue", "dark-purple"];
    
    // Apply a random dark theme on load
    function changeTheme() {
        document.body.className = themes[Math.floor(Math.random() * themes.length)];
    }
    
    changeTheme(); // Initial theme change
    
    // Change theme quickly on hover/touch
    document.body.addEventListener("mousemove", changeTheme);
    document.body.addEventListener("touchstart", changeTheme);
    
    // Dynamic Age Calculation
    const birthYear = 2007;
    const currentYear = new Date().getFullYear();
    document.getElementById("dynamic-age").textContent = currentYear - birthYear;
    
    // Dynamic Year Update
    document.getElementById("year").textContent = currentYear;
    
    // Function to get site title and favicon from a URL
    function getSiteInfo(url) {
        try {
            const urlObj = new URL(url);
            const siteTitle = urlObj.hostname.replace("www.", "").split(".")[0];
            const favicon = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
            return { siteTitle, favicon };
        } catch (error) {
            console.error("Invalid URL:", url);
            return { siteTitle: "Website", favicon: "" };
        }
    }

    // Function to generate buttons for project links
    function generateProjectButtons(links) {
        return links.map(link => {
            const { siteTitle, favicon } = getSiteInfo(link);
            if (link.includes("github.com")) {
                return `<a href="${link}" target="_blank" class="github-btn"><i class="fab fa-github"></i> View on GitHub</a>`;
            } else {
                return `<a href="${link}" target="_blank" class="custom-btn">
                            <img src="${favicon}" alt="${siteTitle}" class="favicon"> View on ${siteTitle}
                        </a>`;
            }
        }).join(""); 
    }

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const workingContent = document.getElementById("working-content");
            workingContent.innerHTML = ""; 

            data.projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.className = "project-card";

                let projectDescription = project.description.replace(/\n/g, "<br>");
                let projectLinks = project.links ? generateProjectButtons(project.links) : "";

                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${projectDescription}</p>
                    <div class="project-links">${projectLinks}</div>
                `;

                workingContent.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
=======
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
>>>>>>> branch 'main' of https://github.com/junaidcodingmaster/abujuni-dev-portfolio.git
