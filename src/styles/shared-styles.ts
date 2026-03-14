import { css } from "lit";

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
