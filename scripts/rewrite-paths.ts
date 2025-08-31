/*
We need to rewrite the paths because with GitHub Pages,
the base path is not just `/` but `/<repo-name>/`
https://<your-username>.github.io/<your-repo-name>/
NOT https://<your-username>.github.io/
*/
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoName = process.argv[2]; // Get repo name from command line argument

if (!repoName) {
  console.error("Usage: bun run scripts/rewrite-paths.ts <repository-name>");
  process.exit(1);
}

console.log(`Rewriting paths for repository: ${repoName}`);

const filesToModify = [
  {
    path: "index.html",
    replacements: [
      { old: "manifest.json", new: `/${repoName}/manifest.json` },
      { old: "/sw.js", new: `/${repoName}/sw.js` },
    ],
  },
  {
    path: "public/manifest.json",
    replacements: [
      { old: '"/"', new: `"/${repoName}/"` }, // Note: Escaping quotes for JSON string
    ],
  },
];

for (const file of filesToModify) {
  const filePath = join(process.cwd(), file.path);
  console.log(`Processing file: ${filePath}`);
  try {
    let content = readFileSync(filePath, "utf8");
    let modified = false;

    for (const rep of file.replacements) {
      const originalContent = content;
      // Using a global regex to replace all occurrences
      const regex = new RegExp(
        rep.old.replace(/[.*+?^${}()|[\]/]/g, "\$&"),
        "g",
      );
      content = content.replace(regex, rep.new);
      if (content !== originalContent) {
        modified = true;
        console.log(`  Replaced "${rep.old}" with "${rep.new}"`);
      } else {
        console.log(`  "${rep.old}" not found or no replacement needed.`);
      }
    }

    if (modified) {
      writeFileSync(filePath, content, "utf8");
      console.log(`Successfully updated ${file.path}`);
    } else {
      console.log(`No changes made to ${file.path}`);
    }
  } catch (error) {
    console.error(`Error processing ${file.path}:`, error);
    process.exit(1);
  }
}

console.log("Path rewriting complete.");
