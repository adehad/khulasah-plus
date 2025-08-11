import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DhikrEntryModel } from "../../types/recitation";

@customElement("kp-dhikr-entry")
export class DhikrEntry extends LitElement {
  @property({ type: Object }) entry!: DhikrEntryModel;

  static styles = css`
    .entry {
      margin-bottom: 1em;
    }

    .arabic {
      font-family: 'Scheherazade New', serif;
      font-size: 2.2em;
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
    const repeatText = this.entry.repeat > 1 ? ` (x${this.entry.repeat})` : "";

    return html`
      <div class="entry">
        <div class="arabic">${this.entry.arabic}${repeatText}</div>
        <div class="translit">${this.entry.translit}${repeatText}</div>
        <div class="translation">${this.entry.translation}${repeatText}</div>
      </div>
    `;
  }
}
