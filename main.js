function toggleContactMenu(e) {
  e.stopPropagation();

  const menu = document.getElementById("contactMenu");
  const popup = document.getElementById("callPopup");

  menu.classList.toggle("active");
  popup.classList.remove("active");
}

function openCallPopup(e) {
  e.preventDefault();
  e.stopPropagation();

  const popup = document.getElementById("callPopup");
  const menu = document.getElementById("contactMenu");

  popup.classList.toggle("active");
  menu.classList.remove("active");
}

document.querySelector(".contact-wrapper").addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", function () {
  document.getElementById("contactMenu").classList.remove("active");
  document.getElementById("callPopup").classList.remove("active");
});
