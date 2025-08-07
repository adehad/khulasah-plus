import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("kp-dhikr-entry")
export class DhikrEntry extends LitElement {
  @property({ type: Number }) repeat = 1;

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
    const repeatText = this.repeat > 1 ? ` (x${this.repeat})` : "";

    return html`
      <div class="entry">
        <div class="arabic"><slot name="arabic"></slot>${repeatText}</div>
        <div class="translit"><slot name="translit"></slot>${repeatText}</div>
        <div class="translation"><slot name="translation"></slot>${repeatText}</div>
      </div>
    `;
  }
}
