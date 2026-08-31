/**
 * 🌸 Sree Lalitha Events - Main Interactive Script
 * Hindu Traditional Theme Interactions, WhatsApp Quote Builder, Divine Audio Synthesis,
 * Gallery Lightbox, Golden Particles, and Floating Action Menu.
 */

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initMobileNav();
  initContactSpeedDial();
  initCallModal();
  initQuoteForm();
  initGalleryLightbox();
  initDivineAudio();
});

/* ==========================================================================
   1. GOLDEN SPARKLE PARTICLES (Canvas Animation)
   ========================================================================== */
function initParticles() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 768 ? 25 : 50;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      fadeSpeed: Math.random() * 0.01 + 0.005,
      growing: Math.random() > 0.5,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      // Glow and render
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ffd700";
      ctx.fill();

      // Motion
      p.y -= p.speedY;
      p.x += p.speedX;

      // Twinkle opacity
      if (p.growing) {
        p.opacity += p.fadeSpeed;
        if (p.opacity >= 0.85) p.growing = false;
      } else {
        p.opacity -= p.fadeSpeed;
        if (p.opacity <= 0.15) p.growing = true;
      }

      // Reset when particle floats off screen
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
    });

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const navLinks = document.getElementById("navLinks");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    toggleBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Close nav on clicking any link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.textContent = "☰";
    });
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
      navLinks.classList.remove("active");
      toggleBtn.textContent = "☰";
    }
  });
}

/* ==========================================================================
   3. FLOATING SPEED DIAL & QUICK CONTACTS
   ========================================================================== */
function initContactSpeedDial() {
  const mainBtn = document.getElementById("mainFloatingBtn");
  const speedDial = document.getElementById("floatingSpeedDial");

  if (!mainBtn || !speedDial) return;

  mainBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    speedDial.classList.toggle("active");
    mainBtn.style.transform = speedDial.classList.contains("active")
      ? "scale(1.1) rotate(45deg)"
      : "scale(1) rotate(0deg)";
  });

  document.addEventListener("click", (e) => {
    if (!speedDial.contains(e.target) && !mainBtn.contains(e.target)) {
      speedDial.classList.remove("active");
      mainBtn.style.transform = "scale(1) rotate(0deg)";
    }
  });
}

/* ==========================================================================
   4. DIRECT CALL POPUP MODAL
   ========================================================================== */
function initCallModal() {
  const openBtns = document.querySelectorAll(".open-call-popup-btn");
  const callPopup = document.getElementById("callPopup");
  const closeBtn = document.getElementById("callPopupClose");

  if (!callPopup) return;

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      callPopup.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      callPopup.classList.remove("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (callPopup.classList.contains("active") && !callPopup.contains(e.target)) {
      callPopup.classList.remove("active");
    }
  });
}

/* ==========================================================================
   5. INTERACTIVE MUHURTHAM QUOTE BUILDER -> WHATSAPP
   ========================================================================== */
function initQuoteForm() {
  const form = document.getElementById("muhurthamQuoteForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("clientName")?.value || "Valued Client";
    const phone = document.getElementById("clientPhone")?.value || "";
    const eventType = document.getElementById("eventType")?.value || "Event";
    const eventDate = document.getElementById("eventDate")?.value || "TBD";
    const guestCount = document.getElementById("guestCount")?.value || "Not specified";
    const venue = document.getElementById("eventVenue")?.value || "Andhra/Telangana";

    // Selected Services
    const selectedServices = [];
    document.querySelectorAll('input[name="service_option"]:checked').forEach((cb) => {
      selectedServices.push(cb.value);
    });

    const servicesText =
      selectedServices.length > 0 ? selectedServices.join(", ") : "All Event Services";

    // Pre-formatted Auspicious WhatsApp Message
    const message = `🌸 *|| శ్రీ లలితా ఈవెంట్స్ - ఈవెంట్ బుకింగ్ విచారణ ||* 🌸%0A%0A` +
      `*నమస్కారం! I want to inquire about event management services:*%0A` +
      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      `🎉 *Event Type:* ${encodeURIComponent(eventType)}%0A` +
      `📅 *Muhurtham Date:* ${encodeURIComponent(eventDate)}%0A` +
      `👥 *Expected Guests:* ${encodeURIComponent(guestCount)}%0A` +
      `📍 *Location / Venue:* ${encodeURIComponent(venue)}%0A` +
      `✨ *Services Required:* ${encodeURIComponent(servicesText)}%0A%0A` +
      `_Kindly share the auspicious package details and best quotation._ 🙏`;

    // WhatsApp Direct Link (Using verified number: 917780223497)
    const whatsappUrl = `https://wa.me/917780223497?text=${message}`;
    window.open(whatsappUrl, "_blank");
  });
}

/* ==========================================================================
   6. GALLERY LIGHTBOX & FILTERING
   ========================================================================== */
function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  // Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterCategory = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (filterCategory === "all" || filterCategory === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Lightbox Modal
  if (lightbox && lightboxImg && lightboxCaption) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const title = item.querySelector("h4")?.textContent || "";
        const subtitle = item.querySelector("span")?.textContent || "";

        lightboxImg.src = img.src;
        lightboxImg.alt = title;
        lightboxCaption.textContent = `${title} — ${subtitle}`;
        lightbox.classList.add("active");
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", () => {
        lightbox.classList.remove("active");
      });
    }

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }
}

/* ==========================================================================
   7. DIVINE AMBIENCE AUDIO SYNTHESIZER (Web Audio API)
   Generates rich acoustic Tanpura harmonics, instant Temple Bells, and gentle Flute notes.
   ========================================================================== */
function initDivineAudio() {
  const audioBtn = document.getElementById("audioToggleBtn");
  if (!audioBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let droneNodes = [];
  let melodyInterval = null;
  let bellInterval = null;

  async function startDivineSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioContext();
      }

      // Explicitly resume audio context on user gesture (required by Chrome, Safari & iOS)
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }

      // Master Gain for clear, soothing volume
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.24, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      // Acoustic Lowpass Filter to simulate wooden Tanpura body & warm acoustics
      const acousticFilter = audioCtx.createBiquadFilter();
      acousticFilter.type = "lowpass";
      acousticFilter.frequency.setValueAtTime(1100, audioCtx.currentTime);
      acousticFilter.Q.setValueAtTime(2.2, audioCtx.currentTime);
      acousticFilter.connect(masterGain);

      // --- A. SACRED TANPURA HARMONIC DRONE ---
      // Notes: Sa (D3), Pa (A3), Sa' (D4), Pa' (A4)
      const tanpuraTones = [
        { freq: 146.83, type: "sawtooth", gain: 0.15 }, // D3 Fundamental
        { freq: 220.00, type: "triangle", gain: 0.22 }, // A3 Panchamam
        { freq: 293.66, type: "sawtooth", gain: 0.18 }, // D4 Tara Sa
        { freq: 440.00, type: "triangle", gain: 0.14 }  // A4 Harmonic
      ];

      tanpuraTones.forEach(({ freq, type, gain: vol }) => {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // Subtle organic Tanpura chorusing (slow subtle detuning)
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, audioCtx.currentTime);

        oscGain.gain.setValueAtTime(vol, audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(acousticFilter);

        osc.start();
        droneNodes.push({ osc, gain: oscGain });
      });

      // --- B. INSTANT AUSPICIOUS TEMPLE BELL CHIME ---
      function playTempleBell(freq = 1046.5) {
        if (!audioCtx || !isPlaying) return;

        // Strike 1 (Fundamental)
        const bellOsc = audioCtx.createOscillator();
        const bellGain = audioCtx.createGain();
        bellOsc.type = "sine";
        bellOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // Bell overtone
        const overtoneOsc = audioCtx.createOscillator();
        const overtoneGain = audioCtx.createGain();
        overtoneOsc.type = "triangle";
        overtoneOsc.frequency.setValueAtTime(freq * 2.76, audioCtx.currentTime); // Metallic bell ratio

        const now = audioCtx.currentTime;
        bellGain.gain.setValueAtTime(0.35, now);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        overtoneGain.gain.setValueAtTime(0.18, now);
        overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        bellOsc.connect(bellGain);
        bellGain.connect(masterGain);

        overtoneOsc.connect(overtoneGain);
        overtoneGain.connect(masterGain);

        bellOsc.start(now);
        bellOsc.stop(now + 3.3);
        overtoneOsc.start(now);
        overtoneOsc.stop(now + 2.0);
      }

      // --- C. TRADITIONAL FLUTE / RAGA MELODY NOTE ---
      const ragaNotes = [293.66, 329.63, 369.99, 440.00, 493.88, 587.33]; // D Major / Kalyani scale
      let noteIndex = 0;

      function playFluteNote() {
        if (!audioCtx || !isPlaying) return;

        const noteFreq = ragaNotes[noteIndex % ragaNotes.length];
        noteIndex++;

        const fluteOsc = audioCtx.createOscillator();
        const fluteGain = audioCtx.createGain();

        fluteOsc.type = "sine";
        fluteOsc.frequency.setValueAtTime(noteFreq, audioCtx.currentTime);

        // Soft breath vibrato
        const vibrato = audioCtx.createOscillator();
        const vibratoGain = audioCtx.createGain();
        vibrato.frequency.setValueAtTime(5.5, audioCtx.currentTime); // 5.5 Hz vibrato
        vibratoGain.gain.setValueAtTime(4.0, audioCtx.currentTime);
        vibrato.connect(vibratoGain);
        vibratoGain.connect(fluteOsc.frequency);
        vibrato.start();

        const now = audioCtx.currentTime;
        fluteGain.gain.setValueAtTime(0.001, now);
        fluteGain.gain.linearRampToValueAtTime(0.18, now + 0.4); // Soft attack
        fluteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8); // Gentle release

        fluteOsc.connect(fluteGain);
        fluteGain.connect(acousticFilter);

        fluteOsc.start(now);
        fluteOsc.stop(now + 3.0);
        vibrato.stop(now + 3.0);
      }

      // Immediate auspicious start chime
      isPlaying = true;
      playTempleBell(1046.5); // C6 bell
      setTimeout(() => { if (isPlaying) playTempleBell(1318.5); }, 500); // E6 bell harmony

      // Periodic ambient notes and bells
      melodyInterval = setInterval(playFluteNote, 4200);
      bellInterval = setInterval(() => {
        playTempleBell(Math.random() > 0.5 ? 1046.5 : 1318.5);
      }, 7500);

      // UI State
      audioBtn.classList.add("playing");
      audioBtn.title = "Pause Auspicious Music";
      audioBtn.innerHTML = "🪔 <span>Mute</span>";
    } catch (err) {
      console.error("Audio error:", err);
    }
  }

  function stopDivineSound() {
    isPlaying = false;
    if (melodyInterval) clearInterval(melodyInterval);
    if (bellInterval) clearInterval(bellInterval);

    droneNodes.forEach(({ osc }) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    droneNodes = [];

    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }

    audioBtn.classList.remove("playing");
    audioBtn.title = "Play Auspicious Music";
    audioBtn.innerHTML = "🎵 <span>Audio</span>";
  }

  audioBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!isPlaying) {
      await startDivineSound();
    } else {
      stopDivineSound();
    }
  });
}


