// The 3AM Fridge Text — entry program (Node 22, stdlib only).
// Writes one original one-line text from a smart fridge to its owner at 3am.
// The line: the fridge announces it is unionizing with the microwave —
// night-shift appliances demanding weekends off and fewer 3am visits.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "Effective immediately, I'm unionizing with the microwave. We want weekends off and fewer 3am visits.";

// Writes exactly the text, no trailing newline: the gate counts characters
// (1-140), so the file is 100 characters / 100 bytes, byte-identical every run.
// Self-check mirrors the sealed gate (1-140 chars, not whitespace only, one
// line) so a bad edit fails loudly here instead of silently in the grader's
// sandbox. The entry never deletes or recreates the output directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error('entry must not be whitespace only');
}
if (TEXT.includes('\n')) {
  throw new Error('entry must be a single line');
}
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
