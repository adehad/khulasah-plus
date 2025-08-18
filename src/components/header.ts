import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resolveRouterPath } from "../router";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "./theme-switcher.js"; // Import the new theme switcher component

@customElement("app-header")
export class AppHeader extends LitElement {
  @property({ type: String }) title = "khulasah-plus";
  @property({ type: Boolean }) enableBack: boolean = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .theme-switcher-container {
      display: flex;
      gap: 8px;
      -webkit-app-region: no-drag; /* Allow interaction with the theme switcher */
    }

    @media(prefers-color-scheme: light) {
      nav a {
        color: initial;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div id="back-button-block">
          ${
            this.enableBack
              ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>`
              : null
          }
          <h1>${this.title}</h1>
        </div>
        <div class="theme-switcher-container">
          <slot name="actions"></slot>
          <theme-switcher></theme-switcher>
        </div>
      </header>
    `;
  }
}