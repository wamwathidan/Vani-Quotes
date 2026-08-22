# Vani-Quotes 🪔

**Vani-Quotes** is a lightweight, responsive Progressive Web App (PWA) designed to generate beautifully styled devotional quote cards for social media sharing (Instagram, WhatsApp, Facebook, etc.).

---

### Features ✨

* **Optimized Layout:** Designed with a 4:5 aspect ratio (400×500px canvas) ideal for social platforms.
* **Dynamic Auto-Sizing Text:** Automatically scales quote text size to perfectly fit the card container.
* **Interactive Prabhupada Photo:** Tap or click Srila Prabhupada's photo on the canvas to cycle through image presets.
* **Custom Background Textures:** Multiple built-in devotional templates (Saffron, Parchment, Dark Devotional, Ethereal, Modern).
* **Custom Speaker Uploads:** Supports preset speaker images or custom local photo uploads.
* **PWA & Offline Support:** Installable as a web app with service worker caching.
* **Direct PNG Download & Web Share:** Save directly as high-resolution PNG or share natively via mobile share sheets.

---

### Project Structure 📂

```text
├── assets/
│   ├── icon.png
│   ├── Maharaj/
│   │   ├── m1.jpg
│   │   ├── m2.jpg
│   │   └── m3.jpg
│   └── Prabhupada/
│       ├── 1.jpg
│       ├── 2.jpg
│       └── 3.jpg
├── index.html       # Main application & inline styles/scripts
├── manifest.json    # PWA configuration
├── sw.js           # Service worker for offline functionality
└── README.md
