import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type QasidaEntryModel, QuranEntryModel } from "@/models/recitation.ts";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-qasida-entry")
export class QasidaEntry extends LitElement {
  @property({ type: Object }) entry!: QasidaEntryModel | QuranEntryModel;

  static styles = [
    textStyles,
    css`
    .entry {
      margin-bottom: 1em;
      text-align: center;
    }

  `,
  ];

  render() {
    let extraClass = "";
    if (this.entry instanceof QuranEntryModel) {
      extraClass = "quran";
    }

    return html`
      <div class="entry">
        <div class="arabic ${extraClass}">${this.entry.arabic}</div>
        <div class="translit">${this.entry.translit}</div>
        <div class="translation">${this.entry.translation}</div>
      </div>
    `;
  }
}
