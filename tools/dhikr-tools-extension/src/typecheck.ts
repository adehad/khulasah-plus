import * as fs from "node:fs";
import * as path from "node:path";
import { Project, ts } from "ts-morph";

let cache: { recitPath: string; project: Project } | undefined;

/** Walk up from a data file to locate src/models/recitation.ts. */
export function findRecitation(fromFile: string): string | undefined {
  let dir = path.dirname(fromFile);
  for (let i = 0; i < 12; i++) {
    const candidate = path.join(dir, "src", "models", "recitation.ts");
    if (fs.existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return undefined;
}

/**
 * Type-check `candidateText` (the full proposed file contents) against the real
 * recitation.ts. Returns the list of human-readable type errors, an empty array
 * if it's clean, or null if recitation.ts couldn't be found (caller should then
 * fall back to the structural guarantee rather than block).
 */
export function typeCheckCandidate(
  fromFile: string,
  candidateText: string,
): string[] | null {
  const recit = findRecitation(fromFile);
  if (!recit) return null;

  if (!cache || cache.recitPath !== recit) {
    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        strict: true,
        target: ts.ScriptTarget.ES2021,
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        noEmit: true,
        skipLibCheck: true,
      },
    });
    project.createSourceFile("recitation.ts", fs.readFileSync(recit, "utf8"));
    cache = { recitPath: recit, project };
  }

  const rewritten = candidateText.replace(/@\/models\/recitation/g, "./recitation");
  const sf = cache.project.createSourceFile("candidate.ts", rewritten, {
    overwrite: true,
  });

  return sf.getPreEmitDiagnostics().map((d) => {
    const msg = ts.flattenDiagnosticMessageText(d.compilerObject.messageText, "\n");
    const line = d.getLineNumber();
    return line ? `line ${line}: ${msg}` : msg;
  });
}
