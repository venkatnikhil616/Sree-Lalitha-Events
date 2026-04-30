document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("carousel");

  let angle = 0;
  const step = 60;

  function rotate() {
    angle -= step;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }

  setInterval(rotate, 3000);

});
