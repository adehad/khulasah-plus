import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { QuranEntryModel } from "@/models/recitation.ts";

import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-mushaf-entry")
export class MushafEntry extends LitElement {
  @property({ type: Boolean }) openingBrace!: boolean;
  @property({ type: Boolean }) closingBrace!: boolean;
  @property({ type: String }) repeatText!: string;
  @property({ type: Object }) entry!: QuranEntryModel;

  static styles = [
    textStyles,
    css`
    .entry {
      margin-bottom: 1em;
    }

    .verse-bracket {
      /* font-weight: bold; */
      display: inline-block;
      position: relative;
      line-height: 0.8em
    }
    .verse-number {
      position: absolute;
      overflow: hidden;
      /* Align the number to be inside the verse bracket */
      transform: translateX(+25%) translateY(+10%) scale(0.4);
      text-align: center;
      width: 3ch;
      font-family: 'Amiri', serif; /* Transform is font specific */
    }
  `,
  ];

  render() {
    return html`
      <div class="entry">
        <div class="arabic">
          <span class="arabic verse-bracket">${this.openingBrace ? "﴿" : ""}</span>
          ${this.entry.arabic}
          <div class="arabic verse-bracket">
            <span class="arabic verse-number">${this.entry.verse}</span>
            ۝
          </div>
          <span class="arabic verse-bracket">${this.closingBrace ? "﴾" : ""}</span>
          <span class="arabic verse-bracket">${this.repeatText ?? ""}</span>
        </div>
        <div class="translit">${this.entry.translit}
          <span class="translit">${this.repeatText ?? ""}</span>
        </div>
        <div class="translation">${this.entry.translation}
          <span class="translation">${this.repeatText ?? ""}</span>
        </div>
      </div>
    `;
  }
}
