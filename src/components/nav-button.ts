import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

@customElement('nav-button')
export class NavButton extends LitElement {
  @property({ type: String })
  href = '';

  render() {
    return html`
      <sl-button href="${resolveRouterPath(this.href)}">
        <slot></slot>
      </sl-button>
    `;
  }
}
