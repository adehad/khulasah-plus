import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { QasidaVerseModel } from "@/models/recitation.ts";
import { textStyles } from "@/styles/shared-styles.ts";
import "@/components/qasida-entry.ts";

@customElement("kp-qasida-verse")
export class QasidaChapter extends LitElement {
  @property({ type: Object }) verses!: QasidaVerseModel;

  static styles = [
    textStyles,
    css`
    .entry {
      margin-bottom: 1em;
    }
  `,
  ];

  render() {
    const className = this.verses.chorus ? "chorus" : "verses";
    return html`
      <div class=${className}>
        ${this.verses.entries.map((entry) => {
          html`<kp-qasida-entry .entry=${entry}></kp-qasida-entry>`;
        })}
      </div>
    `;
  }
}
