// Toggle Contact Menu
function toggleMenu() {
  const menu = document.getElementById("contactMenu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Close menu if user clicks outside
document.addEventListener("click", function (e) {
  const menu = document.getElementById("contactMenu");
  const button = document.querySelector(".contact-btn");

  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Optional: small entrance animation for contact button
window.addEventListener("load", () => {
  const btn = document.querySelector(".contact-btn");

  btn.style.transform = "scale(0)";
  
  setTimeout(() => {
    btn.style.transition = "transform 0.5s ease";
    btn.style.transform = "scale(1)";
  }, 300);
});
