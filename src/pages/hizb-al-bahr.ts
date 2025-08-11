import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { hizbAlBahrContent } from '../content/hizb-al-bahr-content';

import '@/components/dhikr.ts';
import '@/components/quran.ts';

@customElement('hizb-al-bahr')
export class HizbAlBahr extends LitElement {
  render() {
    return html`
      <app-header></app-header>

      <main>
        ${hizbAlBahrContent.map((item) => item.render())}
      </main>
    `;
  }
}
