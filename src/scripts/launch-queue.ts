import { OPEN_SEARCH_EVENT, SEARCH_PARAM } from "@/components/search-button";
import { resolveBasePath } from "@/utils/paths";

interface LaunchParams {
  targetURL?: string;
}

interface LaunchQueue {
  setConsumer(consumer: (params: LaunchParams) => void): void;
}

declare global {
  interface Window {
    launchQueue?: LaunchQueue;
  }
}

// The manifest's launch_handler focuses an open window rather than navigating it, so tapping the
// app icon never pulls a reader off their page; shortcuts and protocol links that land in that
// window arrive only here and are applied by hand.
window.launchQueue?.setConsumer(({ targetURL }) => {
  if (!targetURL) return;
  const target = new URL(targetURL);

  if (target.searchParams.has(SEARCH_PARAM)) {
    window.dispatchEvent(new Event(OPEN_SEARCH_EVENT));
    return;
  }

  // The hash counts, so a permalink to an entry on the open page still scrolls to it.
  const targetPath = target.pathname + target.search + target.hash;
  // The plain start_url is what the app icon launches, which should leave the reader where they are.
  if (targetPath === resolveBasePath()) return;
  const { pathname, search, hash } = window.location;
  if (targetPath === pathname + search + hash) return;
  window.location.assign(target.href);
});
