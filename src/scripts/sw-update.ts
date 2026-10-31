import { UPDATE_APPLY_EVENT } from "@/components/update-toast";
import { audioPlayerService } from "@/services/audio-player-service";
import { resolveBasePath } from "@/utils/paths";

// Installed PWAs are resumed rather than navigated, so the browser's own navigation-time check
// may never run; these checks are what let a long-lived page notice a deploy.
const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;

// A waiting worker can turn redundant (a newer deploy replaced it) and never take over, which
// would leave the toast on "Updating…" for good; reloading picks up whatever is current instead.
const SKIP_WAITING_TIMEOUT_MS = 5000;

let reloadRequested = false;

if ("serviceWorker" in navigator) {
  registerServiceWorker();
}

async function registerServiceWorker() {
  // Dev serves src/sw.ts unbundled from vite-plugin-pwa's dev URL, so it must run as a module.
  const [swFile, type]: [string, WorkerType] = import.meta.env.DEV
    ? ["dev-sw.js?dev-sw", "module"]
    : ["sw.js", "classic"];
  // Read before registering: a first install claims this page, and only a page that already had a
  // worker is running against a precache that a new worker can replace.
  let controlled = navigator.serviceWorker.controller !== null;
  const registration = await navigator.serviceWorker.register(
    resolveBasePath(swFile),
    { type, updateViaCache: "none" },
  );

  if (registration.waiting) offerUpdate(registration);
  registration.addEventListener("updatefound", () => {
    const installing = registration.installing;
    installing?.addEventListener("statechange", () => {
      if (installing.state === "installed") offerUpdate(registration);
    });
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    const wasControlled = controlled;
    controlled = true;
    if (reloadRequested) {
      window.location.reload();
    } else if (wasControlled) {
      reloadWhenAudioStops();
    }
  });

  const checkForUpdate = () => registration.update().catch(() => {});
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForUpdate();
  });
  window.setInterval(checkForUpdate, UPDATE_CHECK_INTERVAL_MS);
}

function offerUpdate(registration: ServiceWorkerRegistration) {
  // Without a controller this is the first install, which activates on its own with nothing stale to replace.
  if (!navigator.serviceWorker.controller) return;
  if (document.querySelector("kp-update-toast")) return;

  const toast = document.createElement("kp-update-toast");
  toast.addEventListener(UPDATE_APPLY_EVENT, () => applyUpdate(registration));
  document.body.append(toast);
}

function applyUpdate(registration: ServiceWorkerRegistration) {
  const waiting = registration.waiting;
  // Another tab already activated the new worker, so this page is controlled by it and only needs reloading.
  if (!waiting) {
    window.location.reload();
    return;
  }
  reloadRequested = true;
  waiting.postMessage({ type: "SKIP_WAITING" });
  window.setTimeout(() => window.location.reload(), SKIP_WAITING_TIMEOUT_MS);
}

// Another tab applied the update, so the new worker has already dropped the precache this page
// loaded from and any page it fetches next may not match. A countdown would only prolong that,
// so the page reloads at once, holding off only while a recitation plays; the toast stays up
// meanwhile so the reload when audio stops does not come out of nowhere.
function reloadWhenAudioStops() {
  if (!audioPlayerService.state.isPlaying) {
    window.location.reload();
    return;
  }
  const onAudioState = () => {
    if (audioPlayerService.state.isPlaying) return;
    audioPlayerService.removeEventListener("state-changed", onAudioState);
    window.location.reload();
  };
  audioPlayerService.addEventListener("state-changed", onAudioState);
  if (!document.querySelector("kp-update-toast")) {
    const toast = document.createElement("kp-update-toast");
    toast.addEventListener(UPDATE_APPLY_EVENT, () => window.location.reload());
    document.body.append(toast);
  }
}
