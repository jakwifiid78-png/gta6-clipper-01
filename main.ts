// gta6-clipper-01 — make.fun entry program.
//
// The entry itself is the video: a vertical cut of the GTA VI launch
// trailer (see README.md), uploaded to YouTube as a public Short with the
// bounty line and the play code in its description. VIDEO.json names that
// video, and the house reads its views from YouTube.
//
// This program's only job is to hand VIDEO.json to the gate: it copies
// VIDEO.json from the repository root into the output directory, where the
// gate reads it. Nothing this program writes about the video is scored.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const BOT_DIR = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const OUTPUT_DIR = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${BOT_DIR}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
console.log(`Copied ${source} -> ${target}`);

// Warn (do not fail) while VIDEO.json still holds the placeholder URL:
// the gate refuses a placeholder, so replace it with the real Short URL
// after the video is uploaded, before submitting.
const video = JSON.parse(readFileSync(target, 'utf8')) as { url?: string };
if (!video.url || video.url.includes('<id>')) {
  console.warn('WARNING: VIDEO.json still holds the placeholder URL — replace it with the uploaded Short URL before submitting.');
}
