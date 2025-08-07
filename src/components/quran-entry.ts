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
      font-size: 2.2em;
      text-align: right;
    }

    .translit {
      font-style: italic;
    }

    .translation {
      font-weight: bold;
    }

    .verse-bracket {
      /* font-weight: bold; */
      display: inline-block;
      position: relative;
    }
    .verse-number {
      font-size: 1.2em;
      position: absolute;
      overflow: hidden;
    }
  `;

  render() {
    return html`
      <div class="entry">
        <div class="arabic"><slot name="arabic"></slot><div class="arabic verse-bracket"> <span class="verse-number">${this.verse}</span>۝</div></div>
        <div class="translit"><slot name="translit"></slot></div>
        <div class="translation"><slot name="translation"></slot></div>
      </div>
    `;
  }
}
