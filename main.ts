// Make the AI Judge Laugh: Office Jokes — make.fun entry.
// Writes one joke about office life (at most 199 characters) to
// /output/entry.txt. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I love my job's flexible hours: I can choose any sixty hours a week I like, as long as they're the ones my calendar already chose for me.";

function main(): void {
  // The gate accepts UTF-8 text, not only white space; this
  // competition's limit is 1 to 199 characters.
  if (JOKE.trim().length === 0 || [...JOKE].length > 199) {
    throw new Error(`joke out of range: ${[...JOKE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JOKE, "utf8");
  console.log(JOKE);
}

main();
