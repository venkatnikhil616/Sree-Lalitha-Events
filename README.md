# 🌸 Sree Lalitha Events (శ్రీ లలితా ఈవెంట్స్)

A world-class, royal **Hindu Traditional Event Management & Pooja Samagri** website crafted with rich temple aesthetics, gold filigree styling, 3D interactive showcase, WhatsApp quote builder, and divine ambience audio.

---

## 🌐 Live Website
- **Production URL**: [https://sree-lalitha-events.vercel.app](https://sree-lalitha-events.vercel.app)

---

## ✨ Features & Architecture

### 🪔 1. Royal Hindu Traditional Aesthetics
- **Temple Palette**: Sacred Temple Maroon (`#3D0711`), Rich Gold Gradients, Haldi Ochre, Kumkum accents, and Chandanam ivory tones.
- **Sacred Ornaments**: Top hanging traditional Toran garland (mango leaves & marigolds), auspicious shlokas (*"|| ॐ శ్రీ లలితాంబికాయై నమః ||"*), and mandala overlays.
- **Golden Sparkle Particles**: Dynamic HTML5 Canvas particle system mimicking sacred diya / havan embers.
- **Divine Ambience Audio**: Built-in Web Audio API synthesizer that plays a soothing Tanpura & Temple Bell acoustic chime with zero external audio file dependencies.

### 🎡 2. Interactive 3D Card Carousel
- Full 3D perspective rotation (`perspective: 1200px`) with smooth transitions.
- Next / Previous controls + interactive indicator dots.
- Touch swipe & drag gestures for mobile & desktop.
- Smart auto-rotation (every 3.5s) with pause-on-hover.

### 🪔 3. Complete Pooja Samagri & Vratham Spotlight (మా ప్రత్యేకత)
- Dedicated showcase for 100% authentic, pure Pooja Samagri kits (Satyanarayana Swamy Vratham, Vivaham, Grihapravesham, Ganapathi Homam, Seemantham).
- Custom hand-carved wedding *Kobbari Bondalu* and royal *Pelli Buttalu*.

### 📋 4. Instant WhatsApp Muhurtham Quote Builder
- Interactive form allowing customers to select event type, date, venue, guest count, and service checkboxes.
- Auto-generates a formatted Telugu/English WhatsApp inquiry message with one click.

### 📸 5. Divine Photo Gallery with Lightbox
- Category filter tabs (*All, Bridal & Groom, Mandapam Decors, Haldi & Mehendi, Food & Stalls*).
- Fullscreen modal lightbox viewer with captions.

### 📞 6. Auspicious Floating Speed Dial & Call Modal
- Floating golden speed dial for instant WhatsApp, Instagram, and direct calling.
- Direct call popup modal with all 3 verified phone numbers (`9398665711`, `9182700508`, `7780223497`).

---

## 📁 Project Structure

```
Sree-Lalitha-Events/
├── index.html          # Main HTML structure with traditional sections & Telugu typography
├── style.css           # Royal Hindu theme styles, animations, variables, quote form, & modal
├── carousel.css        # 3D carousel transform geometry, card frames, & responsive controls
├── main.js             # Particles canvas, audio synthesizer, WhatsApp quote builder, & lightbox
├── carousel.js         # 3D carousel logic, touch swipe/drag gestures, & autoplay
├── images/             # Visual assets
│   ├── bg.jpg          # Background texture
│   ├── bridal.jpg      # Bridal makeup showcase
│   ├── groom.jpg       # Groom styling showcase
│   ├── mehandi.jpg     # Mehendi & Haldi ceremonies
│   ├── stalls.jpg      # Welcome girls & entertainment stalls
│   ├── food.jpg        # Traditional food stalls & feasts
│   └── decors.jpg      # Mandapam & lighting decors
└── README.md           # Project documentation
```

---

## 🚀 How to Run Locally

```bash
# Start local Python server
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.
