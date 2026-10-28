// 자동 생성 (tools/make_sw.mjs). 수정하지 마세요.
const CACHE = 'bizenglish-vmvsmnw1y';
const FILES = [
 "./",
 "./css/style.css",
 "./icons/icon-180.png",
 "./icons/icon-192.png",
 "./icons/icon-512.png",
 "./icons/icon-maskable-512.png",
 "./icons/icon.svg",
 "./index.html",
 "./js/check.js",
 "./js/data/ch_a.js",
 "./js/data/ch_b.js",
 "./js/data/ch_c.js",
 "./js/data/ch_d.js",
 "./js/data/ch_e.js",
 "./js/data/ch_f.js",
 "./js/data/ch_g.js",
 "./js/data/ch_h.js",
 "./js/data/h.js",
 "./js/data/index.js",
 "./js/data/ref.js",
 "./js/data/tune.js",
 "./js/main.js",
 "./js/screens.js",
 "./js/store.js",
 "./js/tts.js",
 "./js/util.js",
 "./manifest.webmanifest",
 "./package.json"
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
    return res;
  }).catch(() => caches.match('./index.html'))));
});
