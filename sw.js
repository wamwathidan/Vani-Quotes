const CACHE_NAME = 'vani-ashraya-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/Maharaj/m1.jpg',
  './assets/Maharaj/m2.jpg',
  './assets/Maharaj/m3.jpg',
  './assets/Prabhupada/1.jpg',
  './assets/Prabhupada/2.jpg',
  './assets/Prabhupada/3.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});