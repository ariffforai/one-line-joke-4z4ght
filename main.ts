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
  // No leading/trailing whitespace: a stray space would change the
  // character count the judge sees and break the one-line contract.
  if (LINE !== LINE.trim()) {
    throw new Error("entry has leading or trailing whitespace");
  }
  // The em dash is a 3-byte UTF-8 character, so byte length differs
  // from character count; record both so a future edit that swaps a
  // character for a multi-byte one cannot silently pass the gate.
  const bytes = Buffer.byteLength(LINE, "utf8");
  if (bytes !== 95) {
    throw new Error(`entry is ${bytes} bytes, expected 95 for this text`);
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");

  // Verify what was actually written, byte for byte: compare the raw
  // bytes, not just the decoded string, so a trailing newline or a
  // re-encoded character cannot slip through unnoticed.
  const backBytes = readFileSync(OUT);
  if (!backBytes.equals(Buffer.from(LINE, "utf8"))) {
    throw new Error("round-trip mismatch: written bytes differ from entry");
  }
  const back = backBytes.toString("utf8");
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
