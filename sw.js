/* NLOGA — offline-first service worker (cache-first shell, network images). */
var CACHE = 'nloga-v2';
var SHELL = [
  './',
  'index.html',
  'css/styles.css?v=3',
  'js/script.js?v=3',
  'js/i18n.js?v=2',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) { return cache.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () {})
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  /* Navigations: network first, fall back to the cached shell offline. */
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(function () { return caches.match('index.html'); })
    );
    return;
  }
  /* Static assets: cache first, then network (and cache the fresh copy). */
  event.respondWith(
    caches.match(req, { ignoreSearch: false }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put(req, copy); }).catch(function () {});
        return res;
      }).catch(function () { return caches.match('index.html'); });
    })
  );
});
