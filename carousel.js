/**
 * 🌸 Sree Lalitha Events - 3D Royal Carousel Script
 * Features: Auto-rotation, Next/Prev controls, Indicator dots, Touch swipe & Mouse drag, Pause on hover
 */

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const container = document.querySelector(".carousel-container");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const dotsContainer = document.getElementById("carouselDots");
  const cards = document.querySelectorAll(".carousel .card");

  if (!carousel || cards.length === 0) return;

  const totalCards = cards.length;
  const stepAngle = 360 / totalCards;
  let currentIndex = 0;
  let currentAngle = 0;
  let autoPlayTimer = null;
  const autoPlayInterval = 3500;

  // Create indicator dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement("button");
      dot.className = `carousel-dot ${i === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    currentAngle = -currentIndex * stepAngle;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        const normalizedIndex = ((currentIndex % totalCards) + totalCards) % totalCards;
        dot.classList.toggle("active", idx === normalizedIndex);
      });
    }

    // Highlight front card
    cards.forEach((card, idx) => {
      const normalizedIndex = ((currentIndex % totalCards) + totalCards) % totalCards;
      if (idx === normalizedIndex) {
        card.style.borderColor = "var(--gold-pure, #ffd700)";
        card.style.filter = "brightness(1.15)";
      } else {
        card.style.borderColor = "var(--gold-warm, #d4af37)";
        card.style.filter = "brightness(0.75)";
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex--;
    updateCarousel();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoPlay();
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Event Listeners for Controls
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });
  }

  // Pause on hover
  if (container) {
    container.addEventListener("mouseenter", stopAutoPlay);
    container.addEventListener("mouseleave", startAutoPlay);
  }

  // Touch and Drag Gestures
  let startX = 0;
  let isDragging = false;

  function handleTouchStart(e) {
    stopAutoPlay();
    isDragging = true;
    startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.type.includes("mouse") ? e.pageX : e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    startAutoPlay();
  }

  if (container) {
    container.addEventListener("mousedown", handleTouchStart);
    window.addEventListener("mouseup", handleTouchEnd);

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
  }

  // Initial render & autoplay
  updateCarousel();
  startAutoPlay();
});

