/**
 * Root application component that orchestrates theme management, routing, and layout.
 *
 */

import { provide } from "@lit/context";
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import {
  applySettingsToCSS,
  applySingleSettingToCSS,
  type SettingsUpdater,
  settingsContext,
  settingsUpdaterContext,
} from "@/context/settings-context";
import { resolveRouterPath, router } from "@/router";
import {
  LifecycleRegistry,
  type SettingsModel,
  storage,
} from "@/utils/storage";

/* We have to import all components here for stuff to work */
import "@/components/dhikr.ts";
import "@/components/header";
import "@/components/nav-button.ts";
import "@/components/quran.ts";
import "@/components/search-button";
import "@/components/settings-menu";
import "@/components/theme-switcher";
import "@/styles/global.css";
/* shoelace specific components used */
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/range/range.js";
import "@shoelace-style/shoelace/dist/components/switch/switch.js";
/* end magic imports */

@customElement("app-index")
export class AppIndex extends LitElement {
  /**
   * Tracks dark theme state for conditional styling (e.g., border inversion).
   * Updated by MutationObserver watching document.documentElement class changes.
   */
  @state()
  private isDarkTheme = false;

  /**
   * Root-level settings state. Using @provide makes this available to all
   * descendants via @consume without prop drilling through intermediate components.
   *
   * Merges defaults with persisted data to ensure backward compatibility when
   * new settings are added - prevents undefined values for newly added properties.
   */
  @provide({ context: settingsContext })
  @state()
  private _settings: SettingsModel = {
    ...storage.getDefault("settings"),
    ...storage.get("settings"),
  };

  /**
   * Centralized settings updater that handles the three concerns atomically:
   * 1. Persist to localStorage (source of truth for page reloads)
   * 2. Update reactive state (triggers Context propagation to consumers)
   * 3. Apply to CSS (immediate visual feedback)
   *
   * Providing this as a separate context maintains unidirectional data flow -
   * consumers can't accidentally mutate _settings directly.
   */
  @provide({ context: settingsUpdaterContext })
  // Used by child components via @consume - appears unused here but is consumed by settings-menu
  protected _updateSetting: SettingsUpdater = (key, value) => {
    storage.update("settings", (s) => ({ ...s, [key]: value }));
    this._settings = { ...this._settings, [key]: value };
    applySingleSettingToCSS(key, value);
  };

  // Registry for lifecycle management (setup/cleanup pairs)
  private _lifecycle = new LifecycleRegistry<"themeObserver">();

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100dvh;
      }

      main {
        display: block;
        flex: 1;
        min-height: 0; /* Allow flex item to shrink below content size */
        overflow-y: auto; /* Enable vertical scrolling for main content */
        box-sizing: border-box; /* Include padding in the element's total width and height */


        /* Decorative border - scales with viewport, capped at 33px */
        border-style: solid;
        border-width: clamp(15px, 5vw, 33px);
        border-image-source: url("/assets/images/ornamental-border-simplified.png");
        border-image-slice: 20% 20%;
        border-image-repeat: round;
      }

    `,
    css`
      @media print {
        app-header {
          display: none !important;
        }

        :host {
          /* allow the border to span all pages */
          display: block !important;
          height: auto !important;
        }

        main {
          overflow-y: visible !important;
        }
      }
    `,
  ];

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

  /**
   * Sets up route change listener with View Transitions API support.
   * Uses startViewTransition when available for smooth page transitions,
   * falls back to immediate update for browsers without support.
   */
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

  /**
   * Applies persisted settings as CSS custom properties on initial load.
   * Uses the type-safe CSS mapping to sync :root variables with stored preferences.
   */
  private loadSettings() {
    applySettingsToCSS(this._settings);
  }

  render() {
    const invertStyle = this.isDarkTheme ? "filter: invert(1)" : "";
    return html`
      <app-header>
        <kp-search-button slot="actions"></kp-search-button>
        <settings-menu slot="actions"></settings-menu>
      </app-header>
      <main style=${invertStyle}>
        ${router.render()}
      </main>
    `;
  }
}
