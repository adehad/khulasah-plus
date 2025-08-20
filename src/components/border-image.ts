import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("border-image")
export class BorderImage extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      top: calc(env(titlebar-area-height, 30px) + 12px); /* Adjust for header height */
      pointer-events: none;
      border-style: solid;
      border-width: 50px;
      border-image-source: url("/assets/images/ornamental-border-simplified.png");
      border-image-slice: 20% 20%; /* top and bottom | left and right */
      border-image-repeat: round;
    }
  `;

  render() {
    return html``;
  }
}
