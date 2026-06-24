import * as vscode from "vscode";
import {
  applySplit,
  inspectRepeatTarget,
  planSplit,
  setRepeatField,
  type SplitOptions,
  type SplitPlan,
} from "./transforms";
import { typeCheckCandidate } from "./typecheck";
import {
  createTransliterator,
  resolvePkgDir,
  type TranslitOptions,
} from "./translit-engine";
import {
  applyTransliterate,
  bindTransliterator,
  planTransliterate,
  type TransliterateMode,
} from "./transliterate-fields";

const DATA_GLOB = "**/src/data/**/*.ts";

let transliteratorPromise: ReturnType<typeof createTransliterator> | undefined;
function getTransliterator(context: vscode.ExtensionContext) {
  if (!transliteratorPromise) {
    transliteratorPromise = createTransliterator(resolvePkgDir(context.extensionPath));
  }
  return transliteratorPromise;
}

function readTranslitOptions(): TranslitOptions {
  const cfg = vscode.workspace.getConfiguration("dhikrTools");
  return {
    romanizeTanwin: cfg.get<boolean>("romanizeTanwin", true),
    assimilateSunLetters: cfg.get<boolean>("assimilateSunLetters", true),
  };
}

function replaceWholeDocument(editor: vscode.TextEditor, newText: string) {
  const doc = editor.document;
  const fullRange = new vscode.Range(
    doc.positionAt(0),
    doc.positionAt(doc.getText().length),
  );
  return editor.edit((b) => b.replace(fullRange, newText));
}

async function promptText(opts: {
  title: string;
  prompt: string;
  value?: string;
  required?: boolean;
  requireMsg?: string;
  numeric?: boolean;
}): Promise<string | undefined> {
  return vscode.window.showInputBox({
    title: opts.title,
    prompt: opts.prompt,
    value: opts.value ?? "",
    validateInput: (v) => {
      const t = v.trim();
      if (t === "") return opts.required ? (opts.requireMsg ?? "Required.") : undefined;
      if (opts.numeric && !/^\d+$/.test(t)) return "Enter a whole number.";
      return undefined;
    },
  });
}

/** Gather the options the plan says we need. Returns undefined if cancelled. */
async function gatherSplitOptions(plan: SplitPlan): Promise<SplitOptions | undefined> {
  const opts: SplitOptions = {};

  if (plan.hasTitle) {
    const title = await promptText({
      title: `New ${plan.containerType} title${plan.titleRequired ? "" : " (optional)"}`,
      prompt: plan.titleRequired
        ? `${plan.containerType} requires a title.`
        : "Leave blank to omit.",
      value: plan.existing.title,
      required: plan.titleRequired,
      requireMsg: `${plan.containerType} requires a title.`,
    });
    if (title === undefined) return undefined;
    opts.title = title.trim() || undefined;
  }

  if (plan.hasNumber) {
    const num = await promptText({
      title: `New ${plan.containerType} number`,
      prompt: "Chapter number (required).",
      value: plan.existing.number,
      required: true,
      requireMsg: "A number is required.",
      numeric: true,
    });
    if (num === undefined) return undefined;
    opts.number = Number(num.trim());
  }

  if (plan.supportsRepeat) {
    const rep = await promptText({
      title: "Repeat count",
      prompt: "How many times should this repeat? (blank = 1)",
      value: plan.existing.repeat && plan.existing.repeat !== "1" ? plan.existing.repeat : "",
      numeric: true,
    });
    if (rep === undefined) return undefined;
    opts.repeat = rep.trim() === "" ? 1 : Number(rep.trim());
  }

  return opts;
}

async function promptRepeat(prefill?: number | null): Promise<number | undefined> {
  const rep = await promptText({
    title: "Repeat count",
    prompt: "How many times should this repeat? (blank = 1)",
    value: prefill && prefill !== 1 ? String(prefill) : "",
    numeric: true,
  });
  if (rep === undefined) return undefined;
  return rep.trim() === "" ? 1 : Number(rep.trim());
}

async function runSplit(editor: vscode.TextEditor) {
  const doc = editor.document;
  const sel = editor.selection;
  if (sel.isEmpty) {
    vscode.window.showWarningMessage("Select one or more entries to split off.");
    return;
  }
  const selStart = doc.offsetAt(sel.start);
  const selEnd = doc.offsetAt(sel.end);

  let plan: SplitPlan;
  try {
    plan = planSplit(doc.getText(), selStart, selEnd);
  } catch (err) {
    vscode.window.showWarningMessage((err as Error).message);
    return;
  }

  const opts = await gatherSplitOptions(plan);
  if (opts === undefined) return; // cancelled

  let out: string;
  try {
    out = applySplit(doc.getText(), selStart, selEnd, opts);
  } catch (err) {
    vscode.window.showWarningMessage(`Split failed: ${(err as Error).message}`);
    return;
  }

  // Final safety: confirm the produced file type-checks before writing it.
  const errors = typeCheckCandidate(doc.uri.fsPath, out);
  if (errors && errors.length > 0) {
    vscode.window.showErrorMessage(
      `Refusing to apply — result would not type-check: ${errors[0]}`,
    );
    return;
  }

  await replaceWholeDocument(editor, out);
  vscode.window.setStatusBarMessage(
    `Split ${plan.count} into a new ${plan.containerType}`,
    3000,
  );
}

async function runTransliterate(
  editor: vscode.TextEditor,
  context: vscode.ExtensionContext,
) {
  const doc = editor.document;
  const sel = editor.selection;
  const hasSel = !sel.isEmpty;
  const selStart = hasSel ? doc.offsetAt(sel.start) : undefined;
  const selEnd = hasSel ? doc.offsetAt(sel.end) : undefined;

  const plan = planTransliterate(doc.getText(), selStart, selEnd);
  if (plan.total === 0) {
    vscode.window.showWarningMessage(
      "No recitation entries (arabic + translit) found in scope.",
    );
    return;
  }

  const picked = await vscode.window.showQuickPick(
    [
      { label: `Fill empty only (${plan.empty})`, mode: "fillEmpty" as TransliterateMode },
      { label: `Overwrite all (${plan.total})`, mode: "overwriteAll" as TransliterateMode },
    ],
    { title: "Transliterate translit fields" },
  );
  if (!picked) return;

  let engine: Awaited<ReturnType<typeof createTransliterator>>;
  try {
    engine = await getTransliterator(context);
  } catch (err) {
    vscode.window.showErrorMessage((err as Error).message);
    return;
  }

  const fn = bindTransliterator(engine, readTranslitOptions());
  const out = applyTransliterate(doc.getText(), picked.mode, fn, selStart, selEnd);

  const errors = typeCheckCandidate(doc.uri.fsPath, out);
  if (errors && errors.length > 0) {
    vscode.window.showErrorMessage(
      `Refusing to apply — result would not type-check: ${errors[0]}`,
    );
    return;
  }
  await replaceWholeDocument(editor, out);
  const changed = picked.mode === "fillEmpty" ? plan.empty : plan.total;
  vscode.window.setStatusBarMessage(
    `Transliterated ${changed} entr${changed === 1 ? "y" : "ies"}`,
    3000,
  );
}

/** Does a valid split exist for this range? Used to gate the code action. */
function validSplitExists(doc: vscode.TextDocument, range: vscode.Range): SplitPlan | null {
  if (range.isEmpty) return null;
  const selStart = doc.offsetAt(range.start);
  const selEnd = doc.offsetAt(range.end);
  let plan: SplitPlan;
  try {
    plan = planSplit(doc.getText(), selStart, selEnd);
  } catch {
    return null;
  }
  // Probe with type-correct placeholder values and verify with the type checker.
  try {
    const probe = applySplit(doc.getText(), selStart, selEnd, {
      title: plan.titleRequired || plan.hasTitle ? (plan.existing.title ?? "Untitled") : undefined,
      number: plan.hasNumber ? Number(plan.existing.number ?? "1") : undefined,
      repeat: plan.supportsRepeat ? 1 : undefined,
    });
    const errors = typeCheckCandidate(doc.uri.fsPath, probe);
    // null => couldn't locate types; trust the structural guarantee.
    if (errors && errors.length > 0) return null;
  } catch {
    return null;
  }
  return plan;
}

class SplitActionProvider implements vscode.CodeActionProvider {
  static readonly kind = vscode.CodeActionKind.RefactorExtract;

  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection,
  ): vscode.CodeAction[] {
    const plan = validSplitExists(document, range);
    if (!plan) return [];
    const action = new vscode.CodeAction(
      `Split ${plan.count} into a new ${plan.containerType}`,
      SplitActionProvider.kind,
    );
    action.command = {
      command: "dhikrTools.splitIntoSibling",
      title: "Split into a new sibling model",
    };
    return [action];
  }
}

class RepeatActionProvider implements vscode.CodeActionProvider {
  static readonly kind = vscode.CodeActionKind.Refactor;

  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection,
  ): vscode.CodeAction[] {
    const offset = document.offsetAt(range.start);
    try {
      inspectRepeatTarget(document.getText(), offset);
    } catch {
      return [];
    }
    const action = new vscode.CodeAction("Add / set repeat field", RepeatActionProvider.kind);
    action.command = {
      command: "dhikrTools.addRepeatField",
      title: "Add / set repeat field",
    };
    return [action];
  }
}

class TransliterateActionProvider implements vscode.CodeActionProvider {
  static readonly kind = vscode.CodeActionKind.Source.append("transliterate");

  provideCodeActions(document: vscode.TextDocument): vscode.CodeAction[] {
    if (planTransliterate(document.getText()).total === 0) return [];
    const action = new vscode.CodeAction(
      "Transliterate translit fields",
      TransliterateActionProvider.kind,
    );
    action.command = {
      command: "dhikrTools.transliterateFields",
      title: "Transliterate translit fields",
    };
    return [action];
  }
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand("dhikrTools.splitIntoSibling", async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) await runSplit(editor);
    }),

    vscode.commands.registerCommand("dhikrTools.transliterateFields", async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) await runTransliterate(editor, context);
    }),

    vscode.commands.registerCommand("dhikrTools.addRepeatField", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      const doc = editor.document;
      const offset = doc.offsetAt(editor.selection.active);

      let info: { className: string; current: number | null };
      try {
        info = inspectRepeatTarget(doc.getText(), offset);
      } catch (err) {
        vscode.window.showWarningMessage((err as Error).message);
        return;
      }
      const repeat = await promptRepeat(info.current);
      if (repeat === undefined) return;
      try {
        const out = setRepeatField(doc.getText(), offset, repeat);
        await replaceWholeDocument(editor, out);
        vscode.window.setStatusBarMessage(
          `Set repeat: ${repeat} on ${info.className}`,
          3000,
        );
      } catch (err) {
        vscode.window.showWarningMessage(`Add repeat failed: ${(err as Error).message}`);
      }
    }),

    vscode.languages.registerCodeActionsProvider(
      { language: "typescript", pattern: DATA_GLOB },
      new SplitActionProvider(),
      { providedCodeActionKinds: [SplitActionProvider.kind] },
    ),

    vscode.languages.registerCodeActionsProvider(
      { language: "typescript", pattern: DATA_GLOB },
      new RepeatActionProvider(),
      { providedCodeActionKinds: [RepeatActionProvider.kind] },
    ),

    vscode.languages.registerCodeActionsProvider(
      { language: "typescript", pattern: DATA_GLOB },
      new TransliterateActionProvider(),
      { providedCodeActionKinds: [TransliterateActionProvider.kind] },
    ),
  );
}

export function deactivate(): void {
  // nothing to clean up
}
