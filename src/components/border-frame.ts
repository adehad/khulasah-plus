import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js"; // Import 'property'

@customElement("border-frame")
export class BorderFrame extends LitElement {
  @property({ type: Boolean })
  dialogOpen = false; // to receive state from app-index

  static styles = css`
    :host {
      overflow: hidden;
      display: block;
      position: relative;
      inset: 0;
      width: 100%;
      height: calc(100vh - env(titlebar-area-height, 30px) - 12px);
      top: calc(env(titlebar-area-height, 30px) + 12px); /* Adjust for header height */
      border-style: solid;
      border-width: 33px;
      border-image-source: url("/assets/images/ornamental-border-simplified.png");
      border-image-slice: 20% 20%;
      border-image-repeat: round;
      /* Ensure content inside is not clipped by the border */
      box-sizing: border-box;
      pointer-events: none;  /* Pass Pointer Events to main content */
    }

    :host([dialog-open]) { /* When dialogOpen is true, attribute 'dialogopen' will be present */
      z-index: -1; /* So settings-dialog is not obscured by border */
    }
  `;

  render() {
    return html`<slot></slot>`; // Renders whatever is placed inside <border-frame>
  }
}
