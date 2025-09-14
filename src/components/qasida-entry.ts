import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { QasidaEntryModel } from "@/models/recitation.ts";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-qasida-entry")
export class QasidaEntry extends LitElement {
  @property({ type: Object }) entry!: QasidaEntryModel;

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
    return html`
      <div class="entry">
        <div class="arabic">${this.entry.arabic}</div>
        <div class="translit">${this.entry.translit}</div>
        <div class="translation">${this.entry.translation}</div>
      </div>
    `;
  }
}
