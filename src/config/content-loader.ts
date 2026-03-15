import type { BaseRecitationModel } from "@/models/recitation";

// Vite resolves import.meta.glob statically at build time
const modules = import.meta.glob<{ default: BaseRecitationModel[] }>(
  "../data/*.ts",
  { eager: true },
);

// Normalize keys from "../data/foo.ts" to "foo"
export const contentModules = new Map<string, BaseRecitationModel[]>();

for (const [path, mod] of Object.entries(modules)) {
  const name = path.replace("../data/", "").replace(".ts", "");
  contentModules.set(name, mod.default);
}
