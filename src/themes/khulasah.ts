/* https://codepen.io/claviska/full/QWveRgL */
import { css } from "lit";

export const lightTheme = css`
  :root,
  :host,
  .sl-theme-light {
    --sl-color-primary-50:  rgb(240 252 251);
    --sl-color-primary-100: rgb(203 244 241);
    --sl-color-primary-200: rgb(170 234 229);
    --sl-color-primary-300: rgb(158 218 213);
    --sl-color-primary-400: rgb(142 196 192);
    --sl-color-primary-500: rgb(122 168 165);
    --sl-color-primary-600: rgb(101 139 136);
    --sl-color-primary-700: rgb(83 114 112);
    --sl-color-primary-800: rgb(68 94 92);
    --sl-color-primary-900: rgb(48 67 65);
    --sl-color-primary-950: rgb(30 41 40);
  }
`;

export const darkTheme = css`
  :root,
  :host,
  .sl-theme-dark {
    --sl-color-primary-950: rgb(240 252 251);
    --sl-color-primary-900: rgb(203 244 241);
    --sl-color-primary-800: rgb(170 234 229);
    --sl-color-primary-700: rgb(158 218 213);
    --sl-color-primary-600: rgb(142 196 192);
    --sl-color-primary-500: rgb(122 168 165);
    --sl-color-primary-400: rgb(101 139 136);
    --sl-color-primary-300: rgb(83 114 112);
    --sl-color-primary-200: rgb(68 94 92);
    --sl-color-primary-100: rgb(48 67 65);
    --sl-color-primary-50:  rgb(30 41 40);
  }
`;
