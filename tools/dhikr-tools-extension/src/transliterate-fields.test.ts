import { test, expect } from "bun:test";
import { applyTransliterate, planTransliterate } from "./transliterate-fields";

const SRC = `import { DhikrModel, DhikrEntryModel } from "@/models/recitation";
export default new DhikrModel({
  title: "t",
  entries: [
    new DhikrEntryModel({ arabic: "ابجد", translit: "", translation: "a" }),
    new DhikrEntryModel({ arabic: "هوز", translit: "existing", translation: "b" }),
  ],
});
`;

const stub = (s: string) => `X:${s}`;

test("plan counts empty vs non-empty across whole file", () => {
  expect(planTransliterate(SRC)).toEqual({ total: 2, empty: 1, nonEmpty: 1 });
});

test("fillEmpty only fills the blank translit", () => {
  const out = applyTransliterate(SRC, "fillEmpty", stub);
  expect(out).toContain('translit: "X:ابجد"');
  expect(out).toContain('translit: "existing"');
});

test("overwriteAll replaces every translit", () => {
  const out = applyTransliterate(SRC, "overwriteAll", stub);
  expect(out).toContain('translit: "X:ابجد"');
  expect(out).toContain('translit: "X:هوز"');
  expect(out).not.toContain('translit: "existing"');
});

test("trims surrounding whitespace from the produced value", () => {
  const pad = (s: string) => `  X:${s}  `;
  const out = applyTransliterate(SRC, "overwriteAll", pad);
  expect(out).toContain('translit: "X:ابجد"');
  expect(out).not.toContain("X:ابجد  ");
});

test("selection restricts the plan to intersecting entries", () => {
  const secondStart = SRC.indexOf('arabic: "هوز"');
  const plan = planTransliterate(SRC, secondStart, secondStart + 5);
  expect(plan.total).toBe(1);
  expect(plan.nonEmpty).toBe(1);
});
