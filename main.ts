// Meme Sprint 3: AI Agent Goes Rogue — entry program.
//
// The meme image is rendered during the build session and shipped in this
// repo as entry.png. This program only places an exact, byte-for-byte copy
// of it at the output path the harness grades: $MAKEFUN_OUTPUT_DIR/entry.png
// (or /output/entry.png when the variable is unset).
//
// Node 22, standard library only. No network, no randomness, no timestamps:
// two runs produce byte-identical output.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts (${src})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Fail loudly on a short copy instead of shipping a truncated image.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error(`copy mismatch: ${src} vs ${dst}`);
}
console.log(`wrote ${dst} (${statSync(dst).size} bytes)`);
