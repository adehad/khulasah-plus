import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

// import "@/pages/app-home";
import "@/components/header";
import "@/styles/global.css";
import { resolveRouterPath, router } from "@/router";
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

/* end magic imports */

import type { SettingsChangeEvent } from "@/components/settings-menu";

@customElement("app-index")
export class AppIndex extends LitElement {
  @state()
  private isDarkTheme = false;

  @state()
  private putBorderToBackground = false;

  static styles = [
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

  handleBorderStateChange(e: CustomEvent) {
    this.putBorderToBackground = e.detail.background;
  }

  firstUpdated() {
    this.handleProtocol();
    this.loadSettings();
    this.setupRouter();
    this.setupThemeObserver();
  }

  /**
   * Handles an incoming custom/protocol URL passed via the current page's query string.
   *
   * Reads the current window location, looks for a "url" search parameter, and if present:
   * - Parses the value as a URL.
   * - Extracts the pathname (removing the leading '/').
   * - Instructs the application router to navigate to that path.
   *
   * Invalid or unparsable URLs are caught and logged to the console; no navigation is attempted in that case.
   *
   * @private
   * @remarks
   * - Relies on a global or surrounding-scope `router` object exposing a `navigate(path: string)` method.
   * - Uses the browser `URL` constructor for robust parsing and `window.location.href` as the source URL.
   *
   * @returns void
   */
  private handleProtocol() {
    const url = new URL(window.location.href);
    const protocolUrlString = url.searchParams.get("url");

    if (protocolUrlString) {
      try {
        const protocolUrl = new URL(protocolUrlString);
        const path = protocolUrl.pathname.substring(1); // Remove leading '/'
        router.navigate(path);
      } catch (e) {
        console.error("Invalid protocol URL:", protocolUrlString, e);
      }
    }
  }

  private setupRouter() {
    router.addEventListener("route-changed", () => {
      if ("startViewTransition" in document) {
        document.startViewTransition(() => this.requestUpdate());
      } else {
        this.requestUpdate();
      }
    });
  }

  /**
   * Observes the document root for theme changes and updates the component's
   * `isDarkTheme` flag when the "sl-theme-dark" class is added or removed.
   *
   * The method:
   * - Creates a MutationObserver that listens for attribute changes on
   *   `document.documentElement`.
   * - Filters mutations to changes of the `"class"` attribute and updates
   *   `this.isDarkTheme` to reflect whether the `"sl-theme-dark"` class is present.
   * - Begins observing immediately with `{ attributes: true }`.
   * - Performs an initial synchronous check to set `this.isDarkTheme` based on
   *   the current document state.
   *
   * @remarks
   * - This method does not disconnect the observer; callers should keep a
   *   reference to the observer and disconnect it (e.g., in a cleanup or
   *   component teardown) to avoid memory leaks.
   * - Assumes `this.isDarkTheme` is a boolean property on the surrounding class.
   *
   * @returns void
   */
  private setupThemeObserver() {
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

  // biome-ignore lint/suspicious/noExplicitAny: TODO to make interface more restricted.
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

  render() {
    const invertStyle = this.isDarkTheme ? "filter: invert(1);" : "";
    const borderImageURL = resolveRouterPath(
      "assets/images/ornamental-border-simplified.png",
    );
    return html`
      <app-header @border-state-change=${this.handleBorderStateChange}>
        <settings-menu
          slot="actions"
          @settings-change=${(e: SettingsChangeEvent) => this.updateStyles(e.detail.name, e.detail.value)}
        ></settings-menu>
      </app-header>
      <border-frame
          style="${invertStyle} --border-img: url(${borderImageURL})"
          ?dark-theme=${this.isDarkTheme}
          ?put-border-to-background=${this.putBorderToBackground}>
        <main style=${invertStyle}>
          ${router.render()}
        </main>
      </border-frame>
    `;
  }
}
