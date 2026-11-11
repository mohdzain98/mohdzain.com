// One-off/idempotent: convert raster images in src/assets to WebP and
// rewrite references in src. Usage: node scripts/optimize-images.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const ASSETS = path.join(ROOT, "src/assets");
const MAX_WIDTH = 1600;

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
}

const converted = [];
let before = 0;
let after = 0;

for (const file of walk(ASSETS)) {
  if (!/\.(png|jpe?g|avif)$/i.test(file)) continue;
  const out = file.replace(/\.(png|jpe?g|avif)$/i, ".webp");
  const input = fs.readFileSync(file);
  const buf = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
  before += input.length;
  after += buf.length;
  fs.writeFileSync(out, buf);
  fs.unlinkSync(file);
  converted.push([path.basename(file), path.basename(out)]);
}

// Rewrite references like "gnost.png" -> "gnost.webp".
const srcFiles = walk(path.join(ROOT, "src")).filter((f) =>
  /\.(tsx?|css)$/.test(f),
);
for (const f of srcFiles) {
  let t = fs.readFileSync(f, "utf8");
  const o = t;
  for (const [from, to] of converted) t = t.split(from).join(to);
  if (t !== o) fs.writeFileSync(f, t);
}

console.log(
  `${converted.length} images: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`,
);
