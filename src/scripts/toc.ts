/**
 * Populates the TOC dropdown in the header from page headings.
 * Content is in the light DOM so we can query headings directly.
 */
function initToc() {
  const tocDropdown = document.getElementById("toc-dropdown");
  const tocMenu = document.getElementById("toc-menu");
  if (!tocDropdown || !tocMenu) return;

  const headings = document.querySelectorAll("main h1[id], main h2[id]");
  if (headings.length === 0) return;

  for (const heading of headings) {
    const item = document.createElement("sl-menu-item");
    item.textContent = heading.textContent?.trim() ?? "";
    item.addEventListener("click", () => {
      // Scroll directly — setting hash alone doesn't scroll inside overflow containers
      heading.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${heading.id}`);
    });
    tocMenu.appendChild(item);
  }

  tocDropdown.style.display = "";
}

initToc();
