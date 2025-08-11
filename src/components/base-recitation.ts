import { css, LitElement } from "lit";

export class BaseRecitation extends LitElement {
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
}
