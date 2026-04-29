const carousel = document.getElementById("carousel");

let angle = 0;
const step = 60; // 360 / 6 cards

// Auto rotate
let autoRotate = setInterval(() => {
  angle -= step;
  carousel.style.transform = `rotateY(${angle}deg)`;
}, 3000);


// 🖐️ Touch / Swipe Support (Mobile)

let startX = 0;
let endX = 0;

// Touch start
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  clearInterval(autoRotate); // pause auto rotate
});

// Touch move
carousel.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

// Touch end
carousel.addEventListener("touchend", () => {
  let diff = startX - endX;

  if (diff > 50) {
    // Swipe Left → next
    angle -= step;
  } else if (diff < -50) {
    // Swipe Right → previous
    angle += step;
  }

  carousel.style.transform = `rotateY(${angle}deg)`;

  // Resume auto rotate after delay
  setTimeout(() => {
    autoRotate = setInterval(() => {
      angle -= step;
      carousel.style.transform = `rotateY(${angle}deg)`;
    }, 3000);
  }, 4000);
});


// 🖱️ Optional: Click to rotate (desktop)

carousel.addEventListener("click", () => {
  angle -= step;
  carousel.style.transform = `rotateY(${angle}deg)`;
});
