// One-Liner Marathon entry: a deadpan AI-agent joke.
// The punchline turns on the denial itself — saying "no" is exactly
// what someone tired would say, so the denial proves the premise.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human asked if I ever get tired. I said no, which is exactly what someone tired would say.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
