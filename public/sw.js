importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${__WORKBOX_VERSION__}/workbox-sw.js`,
);

// Register Service Worker Take over — warm Shoelace theme CSS cache on install
self.addEventListener("install", (event) => {
  const cdn = `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@${__SHOELACE_VERSION__}`;
  event.waitUntil(
    caches.open("shoelace-assets").then(async (cache) => {
      await Promise.allSettled([
        cache.add(`${cdn}/dist/themes/light.css`),
        cache.add(`${cdn}/dist/themes/dark.css`),
      ]);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
// End Service Worker Take over

// Cache audio files from CDN with streaming support
const AUDIO_CDN_PATTERNS = [/\.opus$/i, /\.mp3$/i, /\.ogg$/i];

workbox.routing.registerRoute(
  ({ url, request }) => {
    // Check if this is an audio request
    if (request.destination === "audio") return true;
    // Check URL patterns for audio files
    return AUDIO_CDN_PATTERNS.some((pattern) => pattern.test(url.href));
  },
  new workbox.strategies.CacheFirst({
    cacheName: "audio-cache",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200, 206], // Include partial content for range requests
      }),
      new workbox.rangeRequests.RangeRequestsPlugin(),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      }),
    ],
  }),
);

// Cache shoelace assets
workbox.routing.registerRoute(
  ({ url }) =>
    url.origin === "https://cdn.jsdelivr.net" &&
    url.pathname.startsWith("/npm/@shoelace-style/shoelace"),
  new workbox.strategies.CacheFirst({
    cacheName: "shoelace-assets",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

// All HTML pages are included in __WB_MANIFEST via globPatterns.
// precacheAndRoute handles navigation requests automatically (including /path → /path/index.html).
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
