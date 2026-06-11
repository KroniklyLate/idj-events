import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

/**
 * Generates the 1200x630 social share (Open Graph / Twitter) image used when
 * idj.events links are shared on Facebook, iMessage, LinkedIn, etc.
 *
 * Composition: the home hero photo, darkened with a navy gradient for legibility,
 * the white brand mark, and the wordmark + tagline in the brand typography.
 *
 * Run with: npm run export-og
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicRoot = join(__dirname, "..", "public");

const width = 1200;
const height = 630;
const navy = "#0A1628";
const gold = "#D4AF37";
const white = "#FFFFFF";

const heroPath = join(publicRoot, "images", "backgrounds", "hero-home.jpg");
const markPath = join(publicRoot, "brand", "web", "mark-transparent-512.png");
const outPath = join(publicRoot, "brand", "web", "og-image.jpg");

const markSize = 200;

// Navy gradient overlay + wordmark text, anchored to the canvas center.
const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${navy}" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="${navy}" stop-opacity="0.62"/>
      <stop offset="100%" stop-color="${navy}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#shade)"/>
  <text x="${width / 2}" y="430" text-anchor="middle" fill="${white}"
        font-family="Georgia, 'Times New Roman', serif" font-size="86" font-weight="700">I DJ Events</text>
  <text x="${width / 2}" y="492" text-anchor="middle" fill="${gold}"
        font-family="Georgia, 'Times New Roman', serif" font-size="38" font-weight="600"
        font-style="italic">Tahoe's Premier Wedding DJ</text>
  <text x="${width / 2}" y="548" text-anchor="middle" fill="${white}" fill-opacity="0.9"
        font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600"
        letter-spacing="8">LAKE TAHOE · RENO · BEYOND</text>
</svg>`;

async function run() {
  const background = await sharp(heroPath)
    .resize(width, height, { fit: "cover", position: "centre" })
    .toBuffer();

  const mark = await sharp(markPath)
    .resize(markSize, markSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(background)
    .composite([
      { input: Buffer.from(overlaySvg), top: 0, left: 0 },
      { input: mark, top: 150, left: Math.round((width - markSize) / 2) },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outPath);

  console.log(`Wrote ${outPath}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
