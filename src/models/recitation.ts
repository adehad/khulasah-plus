/**
 * Configuration for audio playback associated with a recitation.
 */
export interface AudioConfig {
  /** URL to the audio file (typically OPUS format) */
  url: string;
  /** Optional title for the audio (falls back to filename if not provided) */
  title?: string;
  /** Start playback from this time in seconds */
  startTime?: number;
  /** Pause playback when reaching this time in seconds */
  endTime?: number;
}

/** Repeat count above which a dhikr counter widget is shown instead of just text */
export const DHIKR_COUNTER_THRESHOLD = 50;

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
  entries: (QasidaEntryModel | QuranEntryModel)[];
  chorus: boolean;

  constructor({
    entries,
    chorus = false,
  }: {
    entries: (QasidaEntryModel | QuranEntryModel)[];
    chorus?: boolean;
  }) {
    this.entries = entries;
    this.chorus = chorus;
  }
}

/**
 * Base class for recitation models.
 *
 * Represents a generic recitation item, such as a dhikr or a Quran recitation.
 *
 * @property title - The title of the recitation.
 * @property instruction - Optional instructions for the recitation.
 */
export abstract class BaseRecitationModel {
  constructor(
    public title: string,
    public instruction?: string,
  ) {}
}

/**
 * A collapsible wrapper for grouping recitation content.
 *
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
}

/**
 * Represents a model for a Dhikr recitation.
 *
 * @extends BaseRecitationModel
 *
 * @property {DhikrEntryModel[]} entries - The list of Dhikr entries associated with this model.
 */
export class DhikrModel extends BaseRecitationModel {
  /** Number of times to repeat the entire dhikr (all entries together) */
  repeat: number;
  entries: DhikrEntryModel[];

  constructor({
    entries,
    instruction,
    title,
    repeat = 1,
  }: {
    entries?: DhikrEntryModel[];
    instruction?: string;
    title?: string;
    repeat?: number;
  }) {
    super(title ?? "", instruction);
    this.entries = entries ?? [];
    this.repeat = repeat;
  }
}

export class WirdModel extends BaseRecitationModel {
  entries: (DhikrModel | QuranModel | ExpandModel)[];
  audio?: AudioConfig;

  constructor({
    title,
    entries,
    instruction,
    audio,
  }: {
    title: string;
    entries: (DhikrModel | QuranModel | ExpandModel)[];
    instruction?: string;
    audio?: AudioConfig;
  }) {
    super(title, instruction);
    this.entries = entries;
    this.audio = audio;
  }
}

/**
 * Represents a Quran recitation model.
 *
 * @extends BaseRecitationModel
 *
 * @property {string} title - The title of the recitation.
 * @property {number} surah - The surah number associated with the recitation.
 * @property {QuranEntryModel[]} entries - The list of Quran entry models.
 */
export class QuranModel extends BaseRecitationModel {
  surah: number;
  entries: QuranEntryModel[];
  basmallah: boolean;
  repeat: number;

  constructor({
    title,
    surah,
    entries,
    instruction,
    basmallah = false,
    repeat = 1,
  }: {
    title: string;
    surah: number;
    entries: QuranEntryModel[];
    instruction?: string;
    basmallah?: boolean;
    repeat?: number;
  }) {
    super(title, instruction);
    this.surah = surah;
    this.entries = entries;
    this.basmallah = basmallah;
    this.repeat = repeat;
  }
}

/**
 * Represents a chapter within a Qasida.
 *
 * @extends BaseRecitationModel
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
}

/**
 * Represents a Qasida recitation model.
 *
 * @extends BaseRecitationModel
 *
 * @property {string} title - The title of the recitation.
 * @property {(QasidaChapterModel | QasidaVerseModel | ExpandModel)[]} entries - The list of Qasida entry models.
 */
export class QasidaModel extends BaseRecitationModel {
  entries: (QasidaVerseModel | QasidaChapterModel | ExpandModel)[];
  audio?: AudioConfig;

  constructor({
    title,
    entries,
    instruction,
    audio,
  }: {
    title: string;
    entries: (QasidaVerseModel | QasidaChapterModel | ExpandModel)[];
    instruction?: string;
    audio?: AudioConfig;
  }) {
    super(title, instruction);
    this.entries = entries;
    this.audio = audio;
  }
}
