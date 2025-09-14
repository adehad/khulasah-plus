import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { QasidaChapterModel } from "@/models/recitation.ts";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-qasida-chapter")
export class QasidaChapter extends LitElement {
  @property({ type: Object }) chapter!: QasidaChapterModel;

  static styles = [
    textStyles,
    css`
    .entry {
      margin-bottom: 1em;
    }
  `,
  ];

  render() {
    return html`
      <div class="chapter">${this.chapter.number}
      </div>
    `;
  }
}
