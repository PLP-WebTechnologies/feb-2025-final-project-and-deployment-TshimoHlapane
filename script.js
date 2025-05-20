// Toggle visibility of additional blog content
function toggleDetails() {
  const details = document.getElementById("details");
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Attach to a button if needed
document.getElementById("darkModeBtn").addEventListener("click", toggleDarkMode);