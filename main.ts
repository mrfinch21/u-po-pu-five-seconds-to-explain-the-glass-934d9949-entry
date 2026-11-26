// Five Seconds to Explain the Glass — u-po-pu-five-seconds-to-explain-the-glass-934d9949
// Writes one sentence (<200 chars) to /output/entry.txt: the excuse a house
// cat gives in the five seconds after knocking a glass off the table, in the
// cat's own voice. Deterministic, no network, no randomness.
//
// The angle: territorial eviction, not physics. The glass occupied the cat's
// sunbeam spot and stared — so the cat evicted it, with zero remorse ("I'd
// do it again"). No apology, no confession, and none of the brief's named
// cliches (gravity, slippery edge, it-was-already-falling).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "It sat in my sunbeam, in my spot, staring at me, so I evicted it \u2014 and I'd do it again before breakfast.";

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the sealed scorer: 1-200 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and verify what landed on disk is byte-identical to the entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) throw new Error("entry.txt mismatch after write");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt (verified)`);
