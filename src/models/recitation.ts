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
  enableCounter?: boolean;

  constructor({
    arabic,
    translit,
    translation,
    repeat = 1,
    enableCounter,
  }: {
    arabic: string;
    translit: string;
    translation: string;
    repeat?: number;
    enableCounter?: boolean;
  }) {
    this.arabic = arabic;
    this.translit = translit;
    this.translation = translation;
    this.repeat = repeat;
    this.enableCounter = enableCounter;
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
 * Represents a single entry of Qasida verse.
 *
 * @implements {RecitationEntry}
 */
export class QasidaEntryModel implements RecitationEntry {
  arabic: string;
  translit: string;
  translation: string;

  constructor({
    arabic,
    translit,
    translation,
  }: {
    arabic: string;
    translit: string;
    translation: string;
  }) {
    this.arabic = arabic;
    this.translit = translit;
    this.translation = translation;
  }
}

export class QasidaVerseModel {
  entries: QasidaEntryModel[];
  chorus: boolean;

  constructor({
    entries,
    chorus = false,
  }: {
    entries: QasidaEntryModel[];
    chorus?: boolean;
  }) {
    this.entries = entries;
    this.chorus = chorus;
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
  constructor(
    public title: string,
    public instruction?: string,
  ) {}

  abstract render(): TemplateResult;
}

/**
 * A collapsible wrapper for grouping recitation content.
 *
 * Renders as a button (styled like NavButton) that toggles visibility of its children.
 * Useful for optional sections or logically grouping content on a single page.
 *
 * @extends BaseRecitationModel
 *
 * @property {BaseRecitationModel[]} entries - The content to show when expanded.
 * @property {boolean} startExpanded - Whether to start in expanded state (default: false).
 *
 * @example
 * new ExpandModel({
 *   title: "Optional Istighfar",
 *   entries: [new DhikrModel(...)],
 *   startExpanded: false,
 * })
 */
export class ExpandModel extends BaseRecitationModel {
  entries: BaseRecitationModel[];
  startExpanded: boolean;

  constructor({
    title,
    entries,
    startExpanded = false,
  }: {
    title: string;
    entries: BaseRecitationModel[];
    startExpanded?: boolean;
  }) {
    super(title, "");
    this.entries = entries;
    this.startExpanded = startExpanded;
  }

  render(): TemplateResult {
    return html`<kp-expand .model=${this}></kp-expand>`;
  }
}

/**
 * Represents a model for a Dhikr recitation, extending the BaseRecitationModel.
 *
 * @extends BaseRecitationModel
 *
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
  constructor(
    instruction?: string,
    public entries?: DhikrEntryModel[],
    title?: string,
  ) {
    super(title ?? "", instruction);
    this.entries = entries ?? [];
  }

  render() {
    return html`<kp-dhikr .recitation=${this}></kp-dhikr>`;
  }
}

export class WirdModel extends BaseRecitationModel {
  constructor(
    title: string,
    public entries: (DhikrModel | QuranModel | ExpandModel)[],
    instruction?: string,
  ) {
    super(title, instruction);
  }

  render() {
    return html`<kp-wird .recitation=${this}></kp-wird>`;
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
 * @property {string} title - The title of the recitation.
 * @property {number} surah - The surah number associated with the recitation.
 * @property {QuranEntryModel[]} entries - The list of Quran entry models.
 *
 * @param {string} title - The title of the recitation.
 * @param {number} surah - The surah number.
 * @param {QuranEntryModel[]} entries - The entries for the recitation.
 * @param {string} [instruction] - Optional instruction for the recitation.
 * @param {boolean} [basmallah] - Optional basmallah for the recitation. Default false.
 *
 * @method render
 * Renders the recitation using the <kp-mushaf> custom element.
 *
 * @returns {TemplateResult} The rendered HTML template for the recitation.
 */
export class QuranModel extends BaseRecitationModel {
  basmallah: boolean;
  repeat: number;

  constructor(
    public title: string,
    public surah: number,
    public entries: QuranEntryModel[],
    instruction?: string,
    basmallah?: boolean,
    repeat?: number,
  ) {
    super(title, instruction);
    this.basmallah = basmallah ?? false;
    this.repeat = repeat ?? 1;
  }

  render() {
    return html`<kp-mushaf .recitation=${this}></kp-mushaf>`;
  }
}

/**
 * Represents a single entry of Quran recitation, including the Arabic text,
 * its transliteration, translation, and verse number.
 *
 * @implements {RecitationEntry}
 */
export class QasidaChapterModel extends BaseRecitationModel {
  number: number;
  entries: (QasidaVerseModel | QasidaChapterModel | ExpandModel)[];

  constructor({
    number,
    title,
    entries,
    instruction,
  }: {
    number: number;
    title: string;
    entries: (QasidaVerseModel | QasidaChapterModel | ExpandModel)[];
    instruction?: string;
  }) {
    super(title, instruction);
    this.number = number;
    this.entries = entries;
  }

  render() {
    return html`<kp-qasida-chapter .entries=${this}></kp-qasida-chapter>`;
  }
}

/**
 * Represents a Qasida recitation model, extending the BaseRecitationModel.
 *
 * @remarks
 * This model is used to encapsulate the details of a Qasida recitation,
 * including its title and associated entries.
 *
 * @extends BaseRecitationModel
 *
 * @property {string} title - The title of the recitation.
 * @property {(QasidaChapterModel | QasidaVerseModel)[]} entries - The list of Qasida entry models.
 *
 * @param {string} title - The title of the recitation.
 * @param {(QasidaChapterModel | QasidaVerseModel)[]} entries - The entries for the recitation.
 * @param {string} [instruction] - Optional instruction for the recitation.
 *
 * @method render
 * Renders the recitation using the <kp-qasida> custom element.
 *
 * @returns {TemplateResult} The rendered HTML template for the recitation.
 */
export class QasidaModel extends BaseRecitationModel {
  constructor(
    public title: string,
    public entries: (QasidaVerseModel | QasidaChapterModel | ExpandModel)[],
    instruction?: string,
  ) {
    super(title, instruction);
  }

  render() {
    return html`<kp-qasida .qasida=${this}></kp-qasida>`;
  }
}
