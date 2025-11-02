import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js"; // Import 'property'

@customElement("border-frame")
export class BorderFrame extends LitElement {
  @property({ type: Boolean })
  putBorderToBackground = false;

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
      border-image-source: var(--border-img); /* In order to ensure the asset has its path resolved, we need to pass in the source after resolution */
      border-image-slice: 20% 20%;
      border-image-repeat: round;
      /* Ensure content inside is not clipped by the border */
      box-sizing: border-box;
      pointer-events: none;  /* Pass Pointer Events to main content */
    }

    :host([put-border-to-background]) {
      z-index: -1; /* So other elements are not obscured by border */
    }

    @media print {
      :host {
        position: static !important;
        display: block !important;
        height: auto !important;
        width: auto !important;
        overflow: visible !important;
        padding: 0 !important;
        top: 0 !important;
      }
    }
  `;

  render() {
    return html`<slot></slot>`; // Renders whatever is placed inside <border-frame>
  }
}
