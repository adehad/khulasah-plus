importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${__WORKBOX_VERSION__}/workbox-sw.js`,
);

// An update waits until the page asks for it, so an open page is never left running against a
// precache it did not load from; the page reloads onto the new version once this worker takes
// over. Pages from before that protocol have no update toast and would never ask, leaving their
// readers on the old version until every window closed, so the marker cache records that the
// active worker speaks it: without the marker (a first install, or replacing a worker from before
// the protocol) this worker activates straight away as the old one did.
const UPDATE_PROTOCOL_MARKER = "sw-update-protocol-v1";

self.addEventListener("install", (event) => {
  const cdn = `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@${__SHOELACE_VERSION__}`;
  event.waitUntil(
    Promise.all([
      // Warm Shoelace theme CSS cache on install
      caches.open("shoelace-assets").then(async (cache) => {
        await Promise.allSettled([
          cache.add(`${cdn}/dist/themes/light.css`),
          cache.add(`${cdn}/dist/themes/dark.css`),
        ]);
      }),
      caches.has(UPDATE_PROTOCOL_MARKER).then((speaksProtocol) => {
        if (!speaksProtocol) return self.skipWaiting();
      }),
    ]),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([caches.open(UPDATE_PROTOCOL_MARKER), self.clients.claim()]),
  );
});

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

// search-index.json is too large for precaching and not needed on initial load.
// Cache on first search use, serve from cache while revalidating in the background.
workbox.routing.registerRoute(
  ({ url, request }) =>
    request.method === "GET" &&
    url.origin === self.location.origin &&
    url.pathname.endsWith("/search-index.json"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "search-index",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1,
      }),
    ],
  }),
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

// All HTML pages are included in __WB_MANIFEST via globPatterns.
// precacheAndRoute handles navigation requests automatically (including /path → /path/index.html).
// Launch params (the Search shortcut's ?search, the protocol handler's ?url=) are read by the page,
// so they must not stop the precached page from being served offline.
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [], {
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/, /^search$/, /^url$/],
});
