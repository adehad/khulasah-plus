/**
 * Handles hash navigation for static pages:
 * - Scrolls to the target element on page load and hash change
 * - Auto-expands <details> elements that contain the target
 */

function extractElementId(hash: string): string {
  if (!hash || hash.length <= 1) return "";
  const fragment = hash.substring(1);
  // Strip text fragment directive (:~:text=...)
  const delimiterIndex = fragment.indexOf(":~:");
  return delimiterIndex !== -1 ? fragment.substring(0, delimiterIndex) : fragment;
}

function navigateToHash() {
  const elementId = extractElementId(window.location.hash);
  if (!elementId) return;

  const target = document.getElementById(elementId);
  if (!target) return;

  // Auto-expand any collapsed <details> ancestors
  let parent: HTMLElement | null = target.parentElement;
  while (parent) {
    if (parent.tagName === "DETAILS" && !(parent as HTMLDetailsElement).open) {
      (parent as HTMLDetailsElement).open = true;
    }
    parent = parent.parentElement;
  }

  // Scroll with a small delay to allow layout to settle after expanding
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth" });
  });
}

// On page load
navigateToHash();

// On hash change
window.addEventListener("hashchange", navigateToHash);
