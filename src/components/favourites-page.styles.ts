import { css } from "lit";

export const favouritesPageStyles = css`
  :host {
    display: block;
  }

  /* Modest because the header breadcrumb already names the page; it mainly gives the folder a heading */
  h1 {
    margin: 8px;
    font-size: var(--sl-font-size-large);
    font-weight: var(--sl-font-weight-semibold);
    text-align: center;
  }

  h1:focus {
    outline: none;
  }

  .crumbs ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--sl-spacing-2x-small);
    margin: 8px;
    padding: 0;
    list-style: none;
  }

  .crumbs li:not(:last-child)::after {
    content: "/";
    margin-inline-start: var(--sl-spacing-2x-small);
    color: var(--sl-color-neutral-500);
  }

  .crumbs a {
    color: var(--sl-color-primary-700);
  }

  .crumbs [aria-current] {
    font-weight: var(--sl-font-weight-semibold);
  }

  /* NavGrid's 8px tile margins collapse to an 8px gap; matching it makes this page read like the other menus */
  .tiles {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 8px;
    list-style: none;
  }

  .tile {
    box-sizing: border-box;
    height: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--sl-spacing-x-small);
    text-align: center;
    background-color: var(--sl-color-primary-100);
    color: var(--sl-color-neutral-950);
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .tile:hover {
    background-color: var(--sl-color-primary-200);
  }

  .tile:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: 2px;
  }

  /*
   * The accent is mixed into the page background rather than used solid, so neutral text stays readable on
   * any user-picked colour in both themes; the solid colour is kept for the icon and edge.
   */
  .folder {
    background-color: color-mix(
      in srgb,
      var(--folder-color) 28%,
      var(--sl-color-neutral-0)
    );
    border-inline-start: 4px solid var(--folder-color);
  }

  .folder:hover {
    background-color: color-mix(
      in srgb,
      var(--folder-color) 42%,
      var(--sl-color-neutral-0)
    );
  }

  .folder .label svg,
  .folder > svg {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--folder-color);
  }

  .tiles > li {
    position: relative;
  }

  /* Drawn in the middle of the 8px gap between tiles, so the indicator never shifts the layout */
  .tiles > li.drop-before::before,
  .tiles > li.drop-after::after {
    content: "";
    position: absolute;
    inset-inline: 0;
    height: 3px;
    border-radius: 2px;
    background: var(--sl-color-primary-600);
    /* Above the dragged tile, which would otherwise hide the line when dropping next to where it started */
    z-index: 2;
  }

  .tiles > li.drop-before::before {
    top: -5.5px;
  }

  .tiles > li.drop-after::after {
    bottom: -5.5px;
  }

  .tiles.dragging {
    user-select: none;
  }

  .tiles > li.dragged {
    z-index: 1;
  }

  .tiles > li.dragged .tile {
    box-shadow: var(--sl-shadow-large);
  }

  /* Handle and edit buttons sit at the edges so the title stays centred like on a normal tile */
  /* 8px plus the 40px buttons matches a normal tile's height, so tiles don't jump when editing starts */
  .editable {
    justify-content: space-between;
    padding: 8px 4px;
  }

  .editable:hover {
    background-color: var(--sl-color-primary-100);
  }

  .editable.folder:hover {
    background-color: color-mix(
      in srgb,
      var(--folder-color) 28%,
      var(--sl-color-neutral-0)
    );
  }

  .editable .label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--sl-spacing-x-small);
    min-width: 0;
  }

  .tile-button {
    flex: none;
    display: inline-flex;
    padding: 12px;
    border: none;
    border-radius: 4px;
    background: none;
    color: inherit;
    cursor: pointer;
  }

  .tile-button:hover {
    background-color: color-mix(in srgb, currentColor 10%, transparent);
  }

  .tile-button:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .tile-button svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  /* Without touch-action: none the browser claims a touch drag as a scroll and cancels the pointer events */
  .handle {
    cursor: grab;
    touch-action: none;
  }

  .dragging .handle {
    cursor: grabbing;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: var(--sl-spacing-small);
  }

  .empty {
    margin: 16px 8px;
    text-align: center;
    color: var(--sl-color-neutral-700);
  }

  .tools {
    display: flex;
    flex-direction: column;
    gap: var(--sl-spacing-medium);
    margin: var(--sl-spacing-large) 8px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: var(--sl-spacing-small);
  }

  /* The basis lets the controls beside a field drop to their own line on phones instead of squashing it */
  .row sl-input {
    flex: 1 1 14rem;
    min-width: 0;
  }

  .error {
    color: var(--sl-color-danger-600);
    font-size: var(--sl-font-size-small);
  }

  .toggle-new-folder {
    align-self: flex-start;
  }
`;
