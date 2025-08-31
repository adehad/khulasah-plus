import type { TemplateResult } from "lit";
import { html } from "lit";

export class NavModel {
  href: string;
  title: string;

  constructor({ href, title }: { href: string; title: string }) {
    this.href = href;
    this.title = title;
  }

  render(): TemplateResult {
    return html`<nav-button href=${this.href}>${this.title}</nav-button>`;
  }
}
