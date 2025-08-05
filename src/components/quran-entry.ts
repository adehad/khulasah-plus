import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("kp-mushaf-entry")
export class MushafEntry extends LitElement {
  @property({ type: Number }) verse = 0;

  static styles = css`
    .entry {
      margin-bottom: 1em;
    }

    .arabic {
      font-family: 'Uthmanic Hafs', serif;
      font-size: 1.2em;
      text-align: right;
    }

    .translit {
      font-style: italic;
    }

    .translation {
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <div class="entry">
        <div class="arabic quranic-text"><slot name="arabic"></slot> [${this.verse}]</div>
        <div class="translit"><slot name="translit"></slot></div>
        <div class="translation"><slot name="translation"></slot></div>
      </div>
    `;
  }
}
