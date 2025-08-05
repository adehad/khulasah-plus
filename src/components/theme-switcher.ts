import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/button-group/button-group.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";

@customElement("theme-switcher")
export class ThemeSwitcher extends LitElement {
  @property({ type: String }) theme: "auto" | "light" | "dark" = "auto";

  static styles = css`
    :host {
      display: block;
    }
    sl-button-group {
      /* Adjust as needed */
    }
    sl-button {
      --sl-spacing-x-small: 0.5rem; /* Adjust padding */
      --sl-button-font-size-small: 0.8rem; /* Adjust font size */
    }
    sl-icon {
      font-size: 1.2em; /* Adjust icon size */
    }
    .auto-icon svg {
      width: 1.2em;
      height: 1.2em;
      vertical-align: middle;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    // Dynamically load Material Symbols Outlined font
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    document.head.appendChild(link);

    const savedTheme = localStorage.getItem("theme") as
      | "auto"
      | "light"
      | "dark";
    if (savedTheme) {
      this.theme = savedTheme;
    }
    this._applyTheme(this.theme);
  }

  _setTheme(newTheme: "auto" | "light" | "dark") {
    this.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    this._applyTheme(newTheme);
  }

  _applyTheme(theme: "auto" | "light" | "dark") {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");

    if (theme === "auto") {
      // No specific class needed, relies on prefers-color-scheme
    } else {
      htmlElement.classList.add(theme);
    }
  }

  renderAutoIcon() {
    // Simple SVG for auto mode (circle with a vertical line)
    return html`
      <svg class="auto-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    `;
  }

  render() {
    return html`
      <sl-button-group>
        <sl-button size="small" ?variant=${this.theme === "auto" ? "primary" : "default"} @click=${() => this._setTheme("auto")}>
          ${this.renderAutoIcon()} Auto
        </sl-button>
        <sl-button size="small" ?variant=${this.theme === "light" ? "primary" : "default"} @click=${() => this._setTheme("light")}>
          <sl-icon name="light_mode"></sl-icon> Light
        </sl-button>
        <sl-button size="small" ?variant=${this.theme === "dark" ? "primary" : "default"} @click=${() => this._setTheme("dark")}>
          <sl-icon name="dark_mode"></sl-icon> Dark
        </sl-button>
      </sl-button-group>
    `;
  }
}
