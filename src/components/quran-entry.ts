import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { QuranEntryModel } from "../../types/recitation";

@customElement("kp-mushaf-entry")
export class MushafEntry extends LitElement {
  @property({ type: Object }) entry!: QuranEntryModel;

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
      line-height: 0.8em
    }
    .verse-number {
      font-size: 1.2em;
      position: absolute;
      overflow: hidden;
      /* Align the number to be inside the verse bracket */
      transform: translateX(-30%) translateY(7%) scale(0.3);
      text-align: center;
      width: 3ch;
      font-family: 'Amiri', serif; /* Transform is font specific */
    }
  `;

  render() {
    return html`
      <div class="entry">
        <div class="arabic">${this.entry.arabic}<div class="arabic verse-bracket"> <span class="verse-number">${this.entry.verse}</span>۝</div></div>
        <div class="translit">${this.entry.translit}</div>
        <div class="translation">${this.entry.translation}</div>
      </div>
    `;
  }
}
