importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${__WORKBOX_VERSION__}/workbox-sw.js`,
);

// Register Service Worker Take over
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
// End Service Worker Take over

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

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

function SPASpecificHacks() {
  INDEX_CACHE_ENTRY = "index.html";
  workbox.routing.registerRoute(
    ({ request }) => request.mode === "navigate",
    workbox.precaching.createHandlerBoundToURL(INDEX_CACHE_ENTRY),
  );
}

SPASpecificHacks();
