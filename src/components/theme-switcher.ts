import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("theme-switcher")
export class ThemeSwitcher extends LitElement {
  @state()
  private theme: "light" | "dark" | "auto" = "auto";

  @state()
  private prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  static styles = css`
    .theme-toggle-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 1px solid transparent;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }

    .theme-toggle-button:hover {
      background-color: var(--sl-color-primary-100);
      border-color: var(--sl-color-primary-300);
    }

    .theme-toggle-button svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: currentColor;
      color: var(--sl-color-primary-500);
    }

    /* Hide all icons by default */
    .theme-toggle-button .icon {
      display: none;
    }

    /* Show the correct icon based on the theme */
    :host(.light) .icon-sun,
    :host(.dark) .icon-moon,
    :host(.auto[data-prefers-dark]) .icon-moon-with-sun,
    :host(.auto:not([data-prefers-dark])) .icon-sun-with-moon {
      display: block;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "auto"
      | null;
    if (storedTheme) {
      this.setTheme(storedTheme);
    } else {
      this.setTheme(this.theme);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        this.prefersDark = e.matches;
      });
  }

  setTheme(theme: "light" | "dark" | "auto") {
    this.theme = theme;
    this.classList.remove("light", "dark", "auto");
    this.classList.add(theme);
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }

  toggleTheme() {
    const currentTheme = this.theme;
    const newTheme =
      {
        auto: "light",
        light: "dark",
        dark: "auto",
      }[currentTheme] || "auto";

    this.setTheme(newTheme as "light" | "dark" | "auto");
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("prefersDark")) {
      this.toggleAttribute("data-prefers-dark", this.prefersDark);
    }
  }

  render() {
    return html`
      <button
        class="theme-toggle-button"
        @click=${this.toggleTheme}
        aria-label="Toggle theme"
      >
        <span class="icon icon-sun">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather-sun">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </span>
        <span class="icon icon-moon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon-tabler-moon">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        </span>
        <span class="icon icon-sun-with-moon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon-custom-derived-from-feather-sun-and-tabler-moon">
            <path style="opacity: 50%" d="M 5.411 14.504 C 5.471 14.504 5.532 14.504 5.591 14.504 C 3.639 16.319 4.383 19.569 6.931 20.352 C 7.693 20.586 8.512 20.551 9.25 20.252 C 8.023 23.207 4.056 23.725 2.11 21.184 C 0.166 18.642 1.702 14.949 4.874 14.536 C 5.051 14.512 5.231 14.5 5.411 14.5 L 5.411 14.504 Z"></path>
            <line x1="14.5" y1="3.25" x2="14.5" y2="1.25"></line>
            <line x1="14.5" y1="15.85" x2="14.5" y2="17.85"></line>
            <line x1="10.044" y1="5.094" x2="8.63" y2="3.68"></line>
            <line x1="19" y1="14.05" x2="20.414" y2="15.464"></line>
            <line x1="8.2" y1="9.55" x2="6.2" y2="9.55"></line>
            <line x1="20.8" y1="9.55" x2="22.8" y2="9.55"></line>
            <line x1="10.044" y1="14.006" x2="8.63" y2="15.42"></line>
            <line x1="19" y1="5.05" x2="20.414" y2="3.636"></line>
            <circle cx="14.5" cy="9.55" r="3.6"></circle>
          </svg>
        </span>
        <span class="icon icon-moon-with-sun">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon-custom-derived-from-feather-sun-and-tabler-moon">
            <path d="M 8.282 7.007 C 8.385 7.007 8.494 7.007 8.595 7.007 C 5.18 10.184 6.481 15.869 10.942 17.24 C 12.275 17.648 13.706 17.589 15 17.066 C 12.851 22.236 5.91 23.143 2.505 18.696 C -0.897 14.249 1.791 7.786 7.342 7.063 C 7.652 7.021 7.965 7 8.282 7 L 8.282 7.007 Z"></path>
            <line style="opacity: 50%" x1="18" y1="3.705" x2="18" y2="2.5"></line>
            <line style="opacity: 50%" x1="18" y1="11.295" x2="18" y2="12.5"></line>
            <line style="opacity: 50%" x1="15.316" y1="4.816" x2="14.464" y2="3.964"></line>
            <line style="opacity: 50%" x1="20.711" y1="10.212" x2="21.563" y2="11.063"></line>
            <line style="opacity: 50%" x1="14.205" y1="7.5" x2="13.001" y2="7.5"></line>
            <line style="opacity: 50%" x1="21.795" y1="7.5" x2="23" y2="7.5"></line>
            <line style="opacity: 50%" x1="15.316" y1="10.184" x2="14.464" y2="11.036"></line>
            <line style="opacity: 50%" x1="20.711" y1="4.789" x2="21.563" y2="3.937"></line>
            <circle style="opacity: 50%" cx="18" cy="7.5" r="2.169"></circle>
          </svg>
        </span>
      </button>
    `;
  }
}
