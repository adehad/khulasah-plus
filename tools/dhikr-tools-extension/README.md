# Dhikr Tools (repo-local VS Code extension)

A dev-only extension for editing the recitation data files in `src/data/*.ts`.
Loaded in development mode (no install, no Marketplace) and only active for
TypeScript files under `src/data/`.

## Where the commands live (menu model)

All commands are surfaced as VS Code **Code Actions**, not as right-click
`editor/context` entries:

- **Split** and **Add / set repeat** are `Refactor` actions — the lightbulb and
  the **Refactor…** menu (`Ctrl/Cmd+Shift+R`).
- **Transliterate** is a `Source` action — the **Source Action…** menu (it
  transforms the whole file, and could later be wired to run on save).
- All three are also in the **Command Palette** (filtered to `src/data/`).
- The keybindings `Ctrl/Cmd+Alt+G` (split) and `Ctrl/Cmd+Alt+R` (repeat) remain.

Code Actions over a right-click submenu/group: it avoids cluttering the context
menu, drops the submenu caret, and lets us gate visibility on real validity.

## Commands

### Dhikr: Split selection into a new sibling model (`Ctrl/Cmd+Alt+G`)

Select a **contiguous subset** of entries inside a model. The selected entries
are moved out into a **new sibling of the same kind as their container**,
inserted right after it. Because the new sibling is the same type as the
original, it always lands in an array that already accepts that type, so the
result can never be an illegal nesting. Supported containers:

| Selection sits inside | New sibling created | Prompts |
| --- | --- | --- |
| `DhikrModel` | `DhikrModel` | title (optional), repeat (optional) |
| `WirdModel` | `WirdModel` | title (required) |
| `QasidaModel` | `QasidaModel` | title (required) |
| `QasidaChapterModel` | `QasidaChapterModel` | number + title (required) |
| `QasidaVerseModel` | `QasidaVerseModel` | none (no title field) |

Prompts are pre-filled from the original (e.g. the current `repeat`, `title`,
`number`) where present.

### Dhikr: Add / set repeat field (`Ctrl/Cmd+Alt+R`)

Cursor inside a `DhikrEntryModel`, `DhikrModel`, or `QuranModel` → adds or
updates `repeat: N` (prompt pre-filled with the current value).

## How validity is enforced (type-aware)

The transforms parse with `ts-morph`, and validity is checked against your real
`src/models/recitation.ts` using the actual TypeScript checker — not a
hand-written rulebook:

- **Lightbulb (Code Actions):** the "Split into a new …" action only appears
  when the produced file would type-check. Invalid selections surface nothing.
  (VS Code right-click / palette `when` clauses are static and cannot run a type
  checker, so those entries are always visible under `src/data/` — but see next.)
- **On run:** before writing, the command type-checks the result and refuses to
  apply if it wouldn't compile, showing the real compiler error.

So even if the models change later, an edit that would break the types simply
stops being offered.

## Field preservation

Nothing is silently dropped on a split:

- **Moved entries** keep all their own fields (their exact source text is
  copied — `arabic`, `translit`, `translation`, `repeat`, `enableCounter`, …).
- **The new sibling** carries forward every property of the original container
  verbatim *except* `entries` (replaced by the subset) and the identity fields
  you're prompted for (`title`, `number`, `repeat`). So an existing
  `instruction`, `audio`, `chorus`, `basmallah`, etc. is reproduced on the new
  sibling. (The original keeps its fields too; only the moved entries leave it.)

After a change, save (or `bun run format`) so Biome normalises trailing commas
and indentation.

## Setup & running

```bash
cd tools/dhikr-tools-extension && bun install
```

Open the **repo root** and press **F5** (`Dev: Dhikr Tools`). A second window
opens with this extension loaded live. To iterate: run the `watch-dhikr-ext`
task, then restart the dev window. Breakpoints in `src/*.ts` work.

## Transliteration library

The transliterate command uses [`ar-transliteration`](https://github.com/adehad/ar-transliteration),
a Rust→WASM library (`arabic_to_latin`). It is **not published to npm**, so it
is bundled rather than installed:

- **Committed snapshot:** `vendor/ar-transliteration/` holds the prebuilt pkg
  (`.js`, `.wasm`, `.d.ts`). This is what ships, so **F5 works on any clone**
  without the Rust repo present.
- **Refresh the snapshot:** `bun run update-vendor` copies a fresh build in.
  Source defaults to `C:/dev/ar-transliteration/pkg`; override with the
  `AR_TRANSLITERATION_PKG` env var.
- **Develop against a local build:** `bun run link-local` creates a **gitignored**
  junction `vendor/ar-transliteration.local/` → your local pkg, which the loader
  prefers when present — so local Rust/WASM edits show up live without touching
  the committed snapshot. `bun run unlink-local` removes it.

These are `package.json` scripts; `bun run <name>` runs them, or run a script
file directly with `bun scripts/link-local.mjs`.

Loader detail (`src/translit-engine.ts`): the glue is ESM and this extension
emits CommonJS, so it's loaded via a runtime dynamic `import()`; the wasm is
instantiated synchronously from raw bytes (`initSync`) — no fetch, no network.

## Tests

```bash
bun test          # pure transform + engine unit tests
```

The VS Code wiring (commands, code-action providers, QuickPick) can't be
unit-tested without a host — it's covered by `bun run compile` plus the F5 smoke
test. `*.test.ts` files are excluded from the `tsc` build (they use `bun:test`).

## Extending

- `CONTAINER_RULES` in `src/transforms.ts` lists the splittable container types
  and which fields they require. Add a row to support another model; the type
  checker (see `src/typecheck.ts`) verifies any candidate, so a wrong row can't
  produce broken code — it just won't be offered.
- `REPEAT_CAPABLE` lists models the repeat command targets.
- AST logic is pure (string in, string out) and testable outside VS Code;
  `typecheck.ts` is the only module that touches the filesystem.
