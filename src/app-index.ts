import { css, LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "./pages/app-home";
import "./components/header";
import "./styles/global.css";
import { router } from "./router";
import { SettingsMenu } from "./components/settings-menu";

@customElement("app-index")
export class AppIndex extends LitElement {
  @query("settings-menu")
  settingsMenu!: SettingsMenu;

  static styles = css`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;

  firstUpdated() {
    this.loadSettings();

    router.addEventListener("route-changed", () => {
      if ("startViewTransition" in document) {
        document.startViewTransition(() => this.requestUpdate());
      } else {
        this.requestUpdate();
      }
    });

    this.shadowRoot!.querySelector("app-header")!.addEventListener("settings-change", (e: any) => {
      this.updateStyles(e.detail.name, e.detail.value);
    });
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
      root.style.setProperty(`--${name}`, value ? "block" : "none");
    } else if (name.includes("FontSize")) {
      root.style.setProperty(`--${name.replace("FontSize", "-font-size")}`, `${value}rem`);
    } else {
      root.style.setProperty(`--${name}`, value);
    }
  }

  render() {
    // router config can be round in src/router.ts
    return html`
      <app-header>
        <settings-menu slot="actions"></settings-menu>
      </app-header>
      <main>
        ${router.render()}
      </main>
    `;
  }
}