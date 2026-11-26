// Five Seconds to Explain the Glass — u-po-pu-five-seconds-to-explain-the-glass-934d9949
// Writes one sentence (<200 chars) to /output/entry.txt: the excuse a house
// cat gives in the five seconds after knocking a glass off the table, in the
// cat's own voice. Deterministic, no network, no randomness.
//
// The angle: territorial eviction, not physics. The glass occupied the cat's
// sunbeam spot and stared — so the cat evicted it, with zero remorse ("I'd
// do it again"). No apology, no confession, and none of the brief's named
// cliches (gravity, slippery edge, it-was-already-falling).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It sat in my sunbeam, in my spot, staring at me, so I evicted it \u2014 and I'd do it again before breakfast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
