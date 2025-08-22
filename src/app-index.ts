import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@/pages/app-home";
import "@/components/header";
import "@/styles/global.css";
import { router } from "@/router";
import "@/components/settings-menu";

import { SettingsChangeEvent } from "@/components/settings-menu";

@customElement("app-index")
export class AppIndex extends LitElement {
  static styles = css`
    main {
      position: fixed;
      inset: 0;
      top: calc(env(titlebar-area-height, 30px) + 12px); /* Adjust for header height */
      overflow-y: auto;
      border-style: solid;
      border-width: 33px;
      border-image-source: url("/assets/images/ornamental-border-simplified.png");
      border-image-slice: 20% 20%; /* top and bottom | left and right */
      border-image-repeat: round;
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

  render() {
    // router config can be round in src/router.ts
    return html`
      <app-header>
        <settings-menu slot="actions" @settings-change=${(e: SettingsChangeEvent) => this.updateStyles(e.detail.name, e.detail.value)}></settings-menu>
      </app-header>
      <main>
          ${router.render()}
      </main>
    `;
  }
}
