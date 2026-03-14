/**
 * Handles chorus toggle buttons in qasida sections.
 * Only one chorus can be active at a time.
 */
document.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>(
    ".chorus-toggle-button[data-chorus-target]",
  );
  if (!btn) return;

  const targetId = btn.dataset.chorusTarget;
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target) return;

  const isActive = target.classList.contains("is-active");

  // Deactivate all other active choruses
  for (const active of document.querySelectorAll(".sticky-chorus.is-active")) {
    active.classList.remove("is-active");
  }

  // Toggle the clicked chorus
  if (!isActive) {
    target.classList.add("is-active");
  }
});
