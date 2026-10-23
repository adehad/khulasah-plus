import {
  IndentationText,
  Node,
  Project,
  QuoteKind,
  SyntaxKind,
  type ArrayLiteralExpression,
  type NewExpression,
  type ObjectLiteralExpression,
} from "ts-morph";

/** Models in recitation.ts that actually declare a `repeat` field. */
const REPEAT_CAPABLE = new Set(["DhikrEntryModel", "DhikrModel", "QuranModel"]);

interface ContainerRule {
  /** Does this model accept a `title` field at all? */
  hasTitle: boolean;
  /** Is `title` required (no default in the constructor)? */
  titleRequired: boolean;
  /** Does it have a required `number` field (QasidaChapterModel)? */
  hasNumber: boolean;
  /** Does it support a `repeat` field? */
  supportsRepeat: boolean;
}

/**
 * Container models we know how to split. The new sibling is always the SAME
 * type as the container, which guarantees the result is a legal element of the
 * array that already holds the original. The per-type flags tell the caller
 * which fields it must prompt for so the candidate is well-formed; the actual
 * type checker (see typecheck.ts) is the final arbiter.
 */
const CONTAINER_RULES: Record<string, ContainerRule> = {
  DhikrModel: { hasTitle: true, titleRequired: false, hasNumber: false, supportsRepeat: true },
  WirdModel: { hasTitle: true, titleRequired: true, hasNumber: false, supportsRepeat: false },
  QasidaModel: { hasTitle: true, titleRequired: true, hasNumber: false, supportsRepeat: false },
  QasidaChapterModel: { hasTitle: true, titleRequired: true, hasNumber: true, supportsRepeat: false },
  QasidaVerseModel: { hasTitle: false, titleRequired: false, hasNumber: false, supportsRepeat: false },
};

function makeProject(): Project {
  return new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      quoteKind: QuoteKind.Double,
    },
  });
}

type SourceFile = ReturnType<Project["createSourceFile"]>;

function descendantAt(sf: SourceFile, pos: number) {
  return sf.getDescendantAtPos(pos) ?? sf.getDescendantAtPos(Math.max(0, pos - 1));
}

interface SplitContext {
  childArray: ArrayLiteralExpression;
  containerObj: ObjectLiteralExpression;
  container: NewExpression;
  containerType: string;
  parentArray: ArrayLiteralExpression;
  containerIndex: number;
  selectedIdx: number[];
}

function locateContext(sf: SourceFile, selStart: number, selEnd: number): SplitContext {
  let childArray: ArrayLiteralExpression | undefined;
  for (let a: Node | undefined = descendantAt(sf, selStart); a; a = a.getParent()) {
    if (
      Node.isArrayLiteralExpression(a) &&
      a.getStart() <= selStart &&
      a.getEnd() >= selEnd
    ) {
      childArray = a;
      break;
    }
  }
  if (!childArray) {
    throw new Error("Place the selection inside an entries: [ ... ] array.");
  }

  const entriesProp = childArray.getParentIfKind(SyntaxKind.PropertyAssignment);
  if (!entriesProp || entriesProp.getName() !== "entries") {
    throw new Error("Selection must be inside an entries: [ ... ] array of a model.");
  }
  const containerObj = entriesProp.getParentIfKind(SyntaxKind.ObjectLiteralExpression);
  const container = containerObj?.getParentIfKind(SyntaxKind.NewExpression);
  if (!container || !containerObj) {
    throw new Error("Could not find the enclosing model.");
  }
  const containerType = container.getExpression().getText();
  if (!(containerType in CONTAINER_RULES)) {
    throw new Error(`Splitting "${containerType}" isn't supported.`);
  }

  const parentArray = container.getParentIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!parentArray) {
    throw new Error(
      `This ${containerType} isn't inside an array, so it has no sibling list to extend.`,
    );
  }
  const containerIndex = parentArray.getElements().indexOf(container);

  const elements = childArray.getElements();
  const selectedIdx: number[] = [];
  elements.forEach((e, i) => {
    if (e.getEnd() > selStart && e.getStart() < selEnd) selectedIdx.push(i);
  });
  if (selectedIdx.length === 0) {
    throw new Error("No entries are covered by the selection.");
  }
  if (selectedIdx[selectedIdx.length - 1] - selectedIdx[0] + 1 !== selectedIdx.length) {
    throw new Error("Selected entries must be contiguous.");
  }
  if (selectedIdx.length === elements.length) {
    throw new Error(
      `That's every entry in this ${containerType} — select a subset to split off.`,
    );
  }

  return {
    childArray,
    containerObj,
    container,
    containerType,
    parentArray,
    containerIndex,
    selectedIdx,
  };
}

function literalValueOf(obj: ObjectLiteralExpression, name: string): string | undefined {
  const prop = obj.getProperty(name);
  if (prop && Node.isPropertyAssignment(prop)) {
    const init = prop.getInitializer();
    if (init && (Node.isStringLiteral(init) || Node.isNumericLiteral(init))) {
      return String(init.getLiteralValue());
    }
    return init?.getText();
  }
  return undefined;
}

export interface SplitPlan {
  /** The kind of model that will be created (same as the container). */
  containerType: string;
  count: number;
  hasTitle: boolean;
  titleRequired: boolean;
  hasNumber: boolean;
  supportsRepeat: boolean;
  /** Existing values on the container, used to pre-fill prompts. */
  existing: { title?: string; number?: string; repeat?: string };
}

export function planSplit(text: string, selStart: number, selEnd: number): SplitPlan {
  const ctx = locateContext(
    makeProject().createSourceFile("temp.ts", text),
    selStart,
    selEnd,
  );
  const rule = CONTAINER_RULES[ctx.containerType];
  return {
    containerType: ctx.containerType,
    count: ctx.selectedIdx.length,
    ...rule,
    existing: {
      title: literalValueOf(ctx.containerObj, "title"),
      number: literalValueOf(ctx.containerObj, "number"),
      repeat: literalValueOf(ctx.containerObj, "repeat"),
    },
  };
}

export interface SplitOptions {
  title?: string;
  number?: number;
  repeat?: number;
}

/**
 * Build the new sibling: identity fields (prompted) first, then the selected
 * entries, then EVERY other property of the original container carried forward
 * verbatim (so instruction / audio / chorus / basmallah etc. are never lost),
 * then repeat where applicable.
 */
function buildContainer(
  ctx: SplitContext,
  selectedTexts: string[],
  opts: SplitOptions,
): string {
  const rule = CONTAINER_RULES[ctx.containerType];
  const handled = new Set<string>(["entries"]);
  const head: string[] = [];

  if (rule.hasTitle && (opts.title !== undefined || rule.titleRequired)) {
    head.push(`  title: ${JSON.stringify(opts.title ?? "")},`);
    handled.add("title");
  }
  if (rule.hasNumber) {
    head.push(`  number: ${opts.number ?? 0},`);
    handled.add("number");
  }
  if (rule.supportsRepeat) handled.add("repeat");

  const entriesBlock = [
    "  entries: [",
    ...selectedTexts.map((t) => `    ${t},`),
    "  ],",
  ];

  // Carry forward any remaining property of the original verbatim.
  const carried: string[] = [];
  for (const prop of ctx.containerObj.getProperties()) {
    const name = Node.isPropertyAssignment(prop) ? prop.getName() : undefined;
    if (!name || handled.has(name)) continue;
    carried.push(`  ${prop.getText()},`);
  }

  const tail: string[] = [];
  if (rule.supportsRepeat && opts.repeat && opts.repeat !== 1) {
    tail.push(`  repeat: ${opts.repeat},`);
  }

  const lines = [...head, ...entriesBlock, ...carried, ...tail];
  return `new ${ctx.containerType}({\n${lines.join("\n")}\n})`;
}

export function applySplit(
  text: string,
  selStart: number,
  selEnd: number,
  opts: SplitOptions = {},
): string {
  const sf = makeProject().createSourceFile("temp.ts", text);
  const ctx = locateContext(sf, selStart, selEnd);

  const elements = ctx.childArray.getElements();
  const selectedTexts = ctx.selectedIdx.map((i) => elements[i].getText());
  const newText = buildContainer(ctx, selectedTexts, opts);

  for (let i = ctx.selectedIdx.length - 1; i >= 0; i--) {
    ctx.childArray.removeElement(ctx.selectedIdx[i]);
  }

  const inserted = ctx.parentArray.insertElement(ctx.containerIndex + 1, newText);
  inserted.formatText({ indentSize: 2, tabSize: 2, convertTabsToSpaces: true });

  return sf.getFullText();
}

// ---------------------------------------------------------------------------
// repeat-field command
// ---------------------------------------------------------------------------

function findRepeatTarget(node: Node | undefined): NewExpression | undefined {
  for (let n: Node | undefined = node; n; n = n.getParent()) {
    if (Node.isNewExpression(n) && REPEAT_CAPABLE.has(n.getExpression().getText())) {
      return n;
    }
  }
  return undefined;
}

export interface RepeatTargetInfo {
  className: string;
  current: number | null;
}

export function inspectRepeatTarget(text: string, offset: number): RepeatTargetInfo {
  const sf = makeProject().createSourceFile("temp.ts", text);
  const target = findRepeatTarget(descendantAt(sf, offset));
  if (!target) {
    throw new Error(
      "Place the cursor inside a DhikrEntryModel, DhikrModel, or QuranModel.",
    );
  }
  const arg = target.getArguments()[0];
  let current: number | null = null;
  if (arg && Node.isObjectLiteralExpression(arg)) {
    const existing = arg.getProperty("repeat");
    if (existing && Node.isPropertyAssignment(existing)) {
      const init = existing.getInitializer();
      const n = init ? Number(init.getText()) : Number.NaN;
      current = Number.isFinite(n) ? n : null;
    }
  }
  return { className: target.getExpression().getText(), current };
}

export function setRepeatField(text: string, offset: number, value: number): string {
  const sf = makeProject().createSourceFile("temp.ts", text);
  const target = findRepeatTarget(descendantAt(sf, offset));
  if (!target) {
    throw new Error(
      "Place the cursor inside a DhikrEntryModel, DhikrModel, or QuranModel.",
    );
  }
  const arg = target.getArguments()[0];
  if (!arg || !Node.isObjectLiteralExpression(arg)) {
    throw new Error("Target has no object-literal argument to edit.");
  }
  const existing = arg.getProperty("repeat");
  if (existing && Node.isPropertyAssignment(existing)) {
    existing.setInitializer(String(value));
  } else {
    arg.addPropertyAssignment({ name: "repeat", initializer: String(value) });
  }
  return sf.getFullText();
}
