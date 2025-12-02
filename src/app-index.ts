import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

// import "@/pages/app-home";
import "@/components/header";
import "@/styles/global.css";
import { resolveRouterPath, router } from "@/router";
import "@/components/settings-menu";
import "./components/border-frame.ts"; // <-- New line inserted here
import { LifecycleRegistry, storage } from "@/utils/storage";

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

  // Registry for lifecycle management (setup/cleanup pairs)
  private _lifecycle = new LifecycleRegistry<"themeObserver">();

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
    css`
      @media print {
        app-header {
          display: none !important;
        }

        main {
          position: static !important;
          height: auto !important;
          overflow-y: visible !important;
          padding: 0 !important;
        }
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
    this.setupTheme();
    this.setupServiceWorker();
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

  /**
   * Loads the service worker. Choses a dev worker during local development.
   */
  private setupServiceWorker() {
    if ("serviceWorker" in navigator) {
      const swPath = import.meta.env.PROD ? "/sw.js" : "/sw.dev.js";
      window.addEventListener("load", () => {
        navigator.serviceWorker.register(resolveRouterPath(swPath));
      });
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
   * Initializes theme management by observing <html> class changes.
   *
   * It sets up a listener for theme class modifications and applies the current theme on load.
   * This covers: device auto changing theme AND theme switcher triggered theme change.
   */
  private setupTheme() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          this.applyTheme();
        }
      }
    });

    this._lifecycle.register("themeObserver", {
      setup: () =>
        observer.observe(document.documentElement, { attributes: true }),
      cleanup: () => observer.disconnect(),
    });

    this.applyTheme();
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  /**
   *  Activates the appropriate theme stylesheet.
   *
   * It reads the <html> class, updates internal state, and toggles the CSS's
   * <link> tag media attributes to enable/disable themes.
   */
  private applyTheme() {
    const isDark = document.documentElement.classList.contains("sl-theme-dark");
    this.isDarkTheme = isDark;

    const lightTheme = document.querySelector(
      "#light-theme",
    ) as HTMLLinkElement;
    const darkTheme = document.querySelector("#dark-theme") as HTMLLinkElement;

    lightTheme.media = isDark ? "not all" : "all";
    darkTheme.media = isDark ? "all" : "not all";
  }

  loadSettings() {
    const settings = storage.get("settings");
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
