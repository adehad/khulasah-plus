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
      font-size: 1.2em;
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
    return html`
      <div class="entry">
        <div class="arabic"><slot name="arabic"></slot></div>
        <div class="translit"><slot name="translit"></slot></div>
        <div class="translation"><slot name="translation"></slot></div>
        ${this.repeat > 1 ? html`<div class="repeat">Repeat ${this.repeat} times</div>` : ''}
      </div>
    `;
  }
}
