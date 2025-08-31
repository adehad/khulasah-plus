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
        width: unset !important;
        margin: 0px 0px 24px;
        padding: 8px;
        letter-spacing: normal;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        font-style: normal;
        text-decoration-line: none;
        text-decoration-style: solid;
        text-transform: none;
        font-family: "Open Sans";
        font-variant: normal;
        font-weight: 400;
        color: var(--sl-color-primary-950);
        background-color: rgba(var(--sl-color-primary-300-rgb), 0.32);
        border-style: none;
        display: flex;
        position: relative;
        opacity: 1;
        overflow: visible;
        backface-visibility: hidden;
        flex: 0 0 auto;
        flex-flow: column;
        place-content: stretch center;
        align-self: stretch;
        align-items: stretch;
        border-radius: 12px;
        border-width: 0px;
      }

      sl-button {
        width: 100%;
        --sl-input-border-width: 0;
        --sl-input-border-radius: 12px;
        --sl-input-font-size-medium: 20px;
        --sl-input-height-medium: 56px;
        --sl-button-font-weight: 400;
        --sl-button-color: var(--sl-color-primary-950);
        --sl-button-background-color: transparent;
        --sl-button-hover-background-color: rgba(var(--sl-color-primary-300-rgb), 0.5);
        --sl-button-active-background-color: rgba(var(--sl-color-primary-300-rgb), 0.7);
      }

      sl-button::part(base) {
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
