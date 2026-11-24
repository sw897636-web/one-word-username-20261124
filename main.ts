// One Word, One Username, One Reward
// make.fun competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// The entry is the entrant's own make.fun username, sent as a single word
// and nothing else: exactly "sw897636-web" (12 characters, no spaces,
// no padding, no gloss). This program writes that one word to entry.txt,
// deterministically, byte for byte, every run.
//
// Revision note (v2): the username, the output path and the write itself
// are unchanged from v1; only these comments were revised, to state the
// exact character count (12, counted from the string itself) and to make
// explicit that entry.txt carries no trailing newline, so the gate sees
// exactly the 12 characters of the handle and nothing else.

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const USERNAME = "sw897636-web";

const outDir = dirname(fileURLToPath(import.meta.url));
const outPath = join(outDir, "entry.txt");

writeFileSync(outPath, USERNAME, "utf8");
console.log(`wrote ${USERNAME.length} characters to entry.txt: ${USERNAME}`);
