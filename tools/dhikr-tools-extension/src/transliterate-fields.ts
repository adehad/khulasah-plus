import {
  IndentationText,
  Node,
  Project,
  QuoteKind,
  type ObjectLiteralExpression,
} from "ts-morph";
import type { Transliterator, TranslitOptions } from "./translit-engine";

export type TransliterateMode = "fillEmpty" | "overwriteAll";

export interface TransliteratePlan {
  total: number;
  empty: number;
  nonEmpty: number;
}

function makeProject(): Project {
  return new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      quoteKind: QuoteKind.Double,
    },
  });
}

interface EntryTarget {
  obj: ObjectLiteralExpression;
  arabic: string;
  /** Current translit literal value (trimmed); undefined if not a string literal. */
  translitValue: string | undefined;
}

function stringValue(obj: ObjectLiteralExpression, name: string): string | undefined {
  const prop = obj.getProperty(name);
  if (prop && Node.isPropertyAssignment(prop)) {
    const init = prop.getInitializer();
    if (init && Node.isStringLiteral(init)) return init.getLiteralValue();
  }
  return undefined;
}

/**
 * A recitation entry is any object literal that has BOTH `arabic` and `translit`
 * properties. This structurally matches RecitationEntry implementers without
 * hardcoding class names. Entries whose `arabic` is not a plain string literal
 * are skipped (nothing to read).
 */
function collectTargets(
  text: string,
  selStart?: number,
  selEnd?: number,
): { sf: ReturnType<Project["createSourceFile"]>; targets: EntryTarget[] } {
  const sf = makeProject().createSourceFile("temp.ts", text);
  const targets: EntryTarget[] = [];
  sf.forEachDescendant((node) => {
    if (!Node.isObjectLiteralExpression(node)) return;
    const translitProp = node.getProperty("translit");
    const arabic = stringValue(node, "arabic");
    if (arabic === undefined || !translitProp) return;
    if (
      selStart !== undefined &&
      selEnd !== undefined &&
      !(node.getEnd() > selStart && node.getStart() < selEnd)
    ) {
      return;
    }
    targets.push({ obj: node, arabic, translitValue: stringValue(node, "translit")?.trim() });
  });
  return { sf, targets };
}

export function planTransliterate(
  text: string,
  selStart?: number,
  selEnd?: number,
): TransliteratePlan {
  const { targets } = collectTargets(text, selStart, selEnd);
  const empty = targets.filter((t) => !t.translitValue).length;
  return { total: targets.length, empty, nonEmpty: targets.length - empty };
}

export function applyTransliterate(
  text: string,
  mode: TransliterateMode,
  transliterate: (arabic: string) => string,
  selStart?: number,
  selEnd?: number,
): string {
  const { sf, targets } = collectTargets(text, selStart, selEnd);
  for (const t of targets) {
    if (mode === "fillEmpty" && t.translitValue) continue;
    const prop = t.obj.getProperty("translit");
    if (prop && Node.isPropertyAssignment(prop)) {
      // Source `arabic` often has trailing whitespace, which the engine passes
      // through; never write leading/trailing whitespace into the field.
      prop.setInitializer(JSON.stringify(transliterate(t.arabic).trim()));
    }
  }
  return sf.getFullText();
}

/** Adapt an engine Transliterator + options into the single-arg function above. */
export function bindTransliterator(
  engine: Transliterator,
  opts: TranslitOptions,
): (arabic: string) => string {
  return (arabic) => engine(arabic, opts);
}
