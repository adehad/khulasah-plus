import { css } from "lit";

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;

export const textStyles = css`
  .arabic {
    font-family: "Uthmanic Hafs Punctuation", var(--preferred-arabic-font-family), "Scheherazade New", "Uthmanic Hafs", serif;
    direction: rtl;
    line-height: 1.7em;
    font-size: var(--arabic-font-size);
    display: var(--show-arabic, block);
  }

  .quran {
    font-family: "Uthmanic Hafs", "Scheherazade New", serif;
    font-size: calc(var(--arabic-font-size)*1.1); /* Font is a bit smaller */
  }

  .translation {
    font-size: var(--translation-font-size);
    display: var(--show-translation, block);
    font-weight: bold;
  }

  .translit {
    font-size: var(--transliteration-font-size);
    display: var(--show-transliteration, block);
    font-style: italic;
  }

  .instruction {
    font-size: var(--translation-font-size);
    font-style: italic;
    color: var(--sl-color-primary-500);
  }
`;

export const circleButtonStyles = css`
  .circle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }

  .circle-btn:hover {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-300);
  }

  .circle-btn sl-icon,
  .circle-btn svg {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    fill: currentColor;
    color: var(--sl-color-primary-500);
  }

  /* For sl-icon-button elements (Shoelace component) */
  sl-icon-button.circle-btn {
    font-size: 1.5rem;
    color: var(--sl-color-primary-500);
  }

  sl-icon-button.circle-btn:hover::part(base) {
    color: var(--sl-color-primary-700);
  }
`;
