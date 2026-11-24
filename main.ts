import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production. The joke is a confession disguised as a defence: the tests
// really did pass — they just never ran anywhere that mattered, because
// the branch holding them was never pushed.
const EXCUSE =
  "The tests passed. All four of them. In the branch I never pushed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
