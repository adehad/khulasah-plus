/**
 * Folder-picking pieces shared by the favourite dialog, the favourites page and its edit dialog, so every
 * folder list looks and behaves the same.
 */

import { css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import "@shoelace-style/shoelace/dist/components/option/option.js";

import {
  DEFAULT_FOLDER_COLOUR,
  type FavouriteFolder,
} from "@/services/favourites-store";

/** The first swatch is the default colour for new folders. */
export const FOLDER_SWATCHES = [
  DEFAULT_FOLDER_COLOUR,
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#64748b",
] as const;

/** sl-select treats an empty value as "nothing selected", so the top level needs a real option value. */
export const TOP_LEVEL = "top-level";

export type FolderEntry = { folder: FavouriteFolder; depth: number };

export function parentIdFromOption(value: string): string | null {
  return value === TOP_LEVEL ? null : value;
}

/** As an option value: TOP_LEVEL when the node is not inside any folder. */
export function parentOptionOf(folders: FolderEntry[], id: string): string {
  return (
    folders.find(({ folder }) =>
      folder.children.some((child) => child.id === id),
    )?.folder.id ?? TOP_LEVEL
  );
}

/** "Top level" plus each folder, indented by depth and marked with its colour, for an sl-select. */
export function renderFolderOptions(folders: FolderEntry[]) {
  return html`
    <sl-option value=${TOP_LEVEL}>Top level</sl-option>
    ${folders.map(
      ({ folder, depth }) => html`
        <sl-option
          value=${folder.id}
          style=${styleMap({ paddingInlineStart: `${depth * 1.25}rem` })}
        >
          <span
            slot="prefix"
            class="folder-swatch"
            style=${styleMap({ background: folder.color })}
          ></span>
          ${folder.title}
        </sl-option>
      `,
    )}
  `;
}

export const folderSwatchStyles = css`
  .folder-swatch {
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
`;
