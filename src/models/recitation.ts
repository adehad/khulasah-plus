import type { TemplateResult } from "lit";
import { html } from "lit";

/**
 * Represents a single recitation entry containing the original Arabic text,
 * its transliteration, and its translation.
 *
 * @property arabic - The original Arabic text of the recitation.
 * @property translit - The transliteration of the Arabic text.
 * @property translation - The translation of the recitation into another language.
 */
export interface RecitationEntry {
  arabic: string;
  translit: string;
  translation: string;
}

/**
 * Represents a single dhikr (remembrance) entry with its Arabic text, transliteration,
 * translation, and the number of times it should be repeated.
 *
 * @implements {RecitationEntry}
 */
export class DhikrEntryModel implements RecitationEntry {
  arabic: string;
  translit: string;
  translation: string;
  repeat: number;

  constructor({
    arabic,
    translit,
    translation,
    repeat = 1,
  }: {
    arabic: string;
    translit: string;
    translation: string;
    repeat?: number;
  }) {
    this.arabic = arabic;
    this.translit = translit;
    this.translation = translation;
    this.repeat = repeat;
  }
}

/**
 * Represents a single entry of Quran recitation, including the Arabic text,
 * its transliteration, translation, and verse number.
 *
 * @implements {RecitationEntry}
 */
export class QuranEntryModel implements RecitationEntry {
  arabic: string;
  translit: string;
  translation: string;
  verse: number;

  constructor({
    arabic,
    translit,
    translation,
    verse,
  }: { arabic: string; translit: string; translation: string; verse: number }) {
    this.arabic = arabic;
    this.translit = translit;
    this.translation = translation;
    this.verse = verse;
  }
}

/**
 * Abstract base class for recitation models.
 *
 * Represents a generic recitation item, such as a dhikr or a Quran recitation.
 *
 * @abstract
 * @property type - The type of recitation, either 'dhikr' or 'quran'.
 * @property title - The title of the recitation.
 * @property instruction - Optional instructions for the recitation.
 *
 * @method render - Abstract method to render the recitation as a TemplateResult.
 */
export abstract class BaseRecitationModel {
  abstract type: "dhikr" | "quran";
  constructor(
    public title: string,
    public instruction?: string,
  ) {}

  abstract render(): TemplateResult;
}

/**
 * Represents a model for a Dhikr recitation, extending the BaseRecitationModel.
 *
 * @extends BaseRecitationModel
 *
 * @property {'dhikr'} type - The type of recitation, fixed as 'dhikr'.
 * @property {DhikrEntryModel[]} entries - The list of Dhikr entries associated with this model.
 *
 * @constructor
 * @param {string} title - The title of the Dhikr recitation.
 * @param {DhikrEntryModel[]} entries - The entries that make up the Dhikr recitation.
 * @param {string} [instruction] - Optional instructions for the recitation.
 *
 * @method render
 * Renders the Dhikr recitation as a custom element.
 * @returns {TemplateResult} The rendered kp-dhikr element with the recitation data.
 */
export class DhikrModel extends BaseRecitationModel {
  public type: "dhikr" = "dhikr";
  constructor(
    title: string,
    public entries: DhikrEntryModel[],
    instruction?: string,
  ) {
    super(title, instruction);
  }

  render() {
    return html`<kp-dhikr .recitation=${this}></kp-dhikr>`;
  }
}

/**
 * Represents a Quran recitation model, extending the BaseRecitationModel.
 *
 * @remarks
 * This model is used to encapsulate the details of a Quran recitation,
 * including its title, surah number, and associated entries.
 *
 * @extends BaseRecitationModel
 *
 * @property {'quran'} type - The type of recitation, fixed as 'quran'.
 * @property {string} title - The title of the recitation.
 * @property {number} surah - The surah number associated with the recitation.
 * @property {QuranEntryModel[]} entries - The list of Quran entry models.
 *
 * @param {string} title - The title of the recitation.
 * @param {number} surah - The surah number.
 * @param {QuranEntryModel[]} entries - The entries for the recitation.
 * @param {string} [instruction] - Optional instruction for the recitation.
 *
 * @method render
 * Renders the recitation using the <kp-mushaf> custom element.
 *
 * @returns {TemplateResult} The rendered HTML template for the recitation.
 */
export class QuranModel extends BaseRecitationModel {
  public type: "quran" = "quran";
  constructor(
    public title: string,
    public surah: number,
    public entries: QuranEntryModel[],
    instruction?: string,
  ) {
    super(title, instruction);
  }

  render() {
    return html`<kp-mushaf .recitation=${this}></kp-mushaf>`;
  }
}
