/**
 * Adds the page's headings, as chapters, to the title dropdown in the header, after any parent pages
 * already in it. Content is in the light DOM so we can query headings directly.
 */
import "@shoelace-style/shoelace/dist/components/divider/divider.js";
import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
import "@shoelace-style/shoelace/dist/components/menu/menu.js";
import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";

function initToc() {
  const tocDropdown = document.getElementById("toc-dropdown");
  const tocMenu = document.getElementById("toc-menu");
  if (!tocDropdown || !tocMenu) return;

  const headings = document.querySelectorAll("main h1[id], main h2[id]");
  const hasParents = tocMenu.childElementCount > 0;
  // With no parents, a lone heading is usually the page's own title, so the menu would hold only the page
  if (headings.length === 0 || (!hasParents && headings.length === 1)) return;

  if (hasParents) {
    tocMenu.append(document.createElement("sl-divider"));
  }

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

  // A page without parent pages renders the dropdown and its title disabled until it has chapters
  tocDropdown.removeAttribute("disabled");
  tocDropdown.querySelector(".title-trigger")?.removeAttribute("disabled");
}

initToc();
