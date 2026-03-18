import type { NavModel } from "@/models/nav";
import type { BaseRecitationModel } from "@/models/recitation";

export type ContentModel = BaseRecitationModel | NavModel;

// Vite resolves import.meta.glob statically at build time
const modules = import.meta.glob<{ default: ContentModel[] }>("../data/*.ts", {
  eager: true,
});

// Normalize keys from "../data/foo.ts" to "foo"
export const contentModules = new Map<string, ContentModel[]>();

for (const [path, mod] of Object.entries(modules)) {
  const name = path.replace("../data/", "").replace(".ts", "");
  contentModules.set(name, mod.default);
}
