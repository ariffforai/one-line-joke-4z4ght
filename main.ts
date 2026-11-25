// One Line, One Laugh — make.fun bounty
// u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a
//
// Writes a single self-contained funny line (93 characters) to
// /output/entry.txt. Deterministic: the same fixed text on every run,
// no clock, no randomness, no network, stdlib only (Node.js 22).

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My calendar invited me to a meeting with myself. I declined — I didn't want to disappoint me.";

const OUT = "/output/entry.txt";

function main(): void {
  // The gate: 1-140 UTF-8 characters, not whitespace-only, single line.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} characters, outside the 1-140 gate`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is whitespace-only");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");

  // Verify what was actually written, byte for byte.
  const back = readFileSync(OUT, "utf8");
  if (back !== LINE) {
    throw new Error("round-trip mismatch: written file differs from entry");
  }
  const writtenChars = [...back].length;
  const lines = back.split("\n").length;
  console.log(`wrote ${writtenChars} characters to ${OUT}`);
  console.log(
    `verified: ${writtenChars} characters, ${lines} line, not whitespace-only`,
  );
}

main();
