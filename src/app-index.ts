import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

// import "@/pages/app-home";
import "@/components/header";
import "@/styles/global.css";
import { router } from "@/router";
import "@/components/settings-menu";
import "./components/border-frame.ts"; // <-- New line inserted here

/* We have to import all components here for stuff to work */
import "@/components/dhikr.ts";
import "@/components/quran.ts";
import "@/components/settings-menu";
import "@/components/theme-switcher";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@/components/nav-button.ts";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/range/range.js";
import "@shoelace-style/shoelace/dist/components/switch/switch.js";
import { darkTheme, lightTheme } from "@/themes/khulasah";

/* end magic imports */

import type { SettingsChangeEvent } from "@/components/settings-menu";

@customElement("app-index")
export class AppIndex extends LitElement {
  @state()
  private isSettingsDialogOpen = false;

  @state()
  private isDarkTheme = false;

  static styles = [
    lightTheme,
    darkTheme,
    css`
      main {
        display: block;
        position: absolute;
        inset: 0;
        height: 100%; /* Fill the height of border-frame */
        overflow-y: auto; /* Enable vertical scrolling for main content */
        box-sizing: border-box; /* Include padding in the element's total width and height */
        padding: 5px; /* Add padding to account for the border-frame's border-width */
        pointer-events: auto; /* Ensure main content is interactive */
      }
    `,
  ];

  firstUpdated() {
    this.loadSettings();

    router.addEventListener("route-changed", () => {
      if ("startViewTransition" in document) {
        document.startViewTransition(() => this.requestUpdate());
      } else {
        this.requestUpdate();
      }
    });

    // Observe changes to the <html> element's class attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          this.isDarkTheme =
            document.documentElement.classList.contains("sl-theme-dark");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Initial check for dark theme
    this.isDarkTheme =
      document.documentElement.classList.contains("sl-theme-dark");
  }

  loadSettings() {
    const settings = JSON.parse(localStorage.getItem("settings") || "{}");
    for (const [key, value] of Object.entries(settings)) {
      this.updateStyles(key, value);
    }
  }

  updateStyles(name: string, value: any) {
    const root = document.documentElement;
    if (typeof value === "boolean") {
      root.style.setProperty(
        `--show-${name.replace("show", "").toLowerCase()}`,
        value ? "block" : "none",
      );
    } else if (name.includes("FontSize")) {
      root.style.setProperty(
        `--${name.replace("FontSize", "-font-size").toLowerCase()}`,
        `${value}rem`,
      );
    } else {
      root.style.setProperty(`--${name}`, value);
    }
  }

  setIsSettingDialogOpen(isOpen: boolean) {
    this.isSettingsDialogOpen = isOpen;
  }

  render() {
    const invertStyle = this.isDarkTheme ? "filter: invert(1);" : "";

    return html`
      <app-header>
        <settings-menu
          slot="actions"
          @settings-change=${(e: SettingsChangeEvent) => this.updateStyles(e.detail.name, e.detail.value)}
          @dialog-open-change=${(e: CustomEvent) => this.setIsSettingDialogOpen(e.detail.isOpen)}
        ></settings-menu>
      </app-header>
      <border-frame ?dialog-open=${this.isSettingsDialogOpen} style=${invertStyle} ?dark-theme=${this.isDarkTheme}>
        <main style=${invertStyle}>
          ${router.render()}
        </main>
      </border-frame>
    `;
  }
}
