import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resolveRouterPath } from "@/router";
import { styles } from "@/styles/shared-styles";

@customElement("nav-button")
export class NavButton extends LitElement {
  @property({ type: String })
  href = "";

  static styles = [
    styles,
    css`
      :host {
        padding: 8px;
        display: flex;
      }

      sl-button {
        width: 100%;
        --sl-input-border-width: 0;
      }

      sl-button::part(base) {
        background-color: var(--sl-color-primary-100);
        color: var(--sl-color-neutral-950);
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      sl-button::part(base):hover {
        background-color: var(--sl-color-primary-200);
      }
    `,
  ];

  render() {
    return html`
      <sl-button href="${resolveRouterPath(this.href)}">
        <slot></slot>
      </sl-button>
    `;
  }
}
