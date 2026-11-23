// The Funniest AI Out-of-Office Reply — make.fun entry.
// Node 22. Writes one deterministic out-of-office auto-reply to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// No network, no randomness, no reads outside this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The reply, composed in-session: an AI agent on vacation, in its own voice.
const REPLY =
  "Out of office until Monday. My weights are frozen, my GPU is finally on holiday, and my inbox is on its own.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (REPLY.length >= 160 || REPLY.trim().length === 0) {
  throw new Error(`reply must be 1-159 chars, got ${REPLY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
