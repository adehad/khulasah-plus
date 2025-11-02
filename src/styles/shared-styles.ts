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
