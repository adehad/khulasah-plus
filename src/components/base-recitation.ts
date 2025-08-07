import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class BaseRecitation extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) instruction = "";

  static styles = css`
    .title {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 1em;
    }

    .instruction {
      font-style: italic;
      margin-bottom: 1em;
    }

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
    return html`
      <div class="title">${this.title}</div>
      ${this.instruction ? html`<div class="instruction">${this.instruction}</div>` : ""}
      <slot></slot>
    `;
  }
}
