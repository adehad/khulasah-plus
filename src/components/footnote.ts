import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";

@customElement("kp-footnote")
export class Footnote extends LitElement {
  @property({ type: String }) type: 'book' | 'hadith' | 'question' | 'quran' = 'question';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.9em;
    }
  `;

  private getIconName() {
    switch (this.type) {
      case 'book':
      case 'quran':
        return 'book';
      case 'hadith':
        return 'quote';
      case 'question':
        return 'patch-question';
    }
  }

  render() {
    return html`
      <sl-icon name=${this.getIconName()}></sl-icon>
      <slot></slot>
    `;
  }
}
