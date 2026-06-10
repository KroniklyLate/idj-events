import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import ImageTracer from "imagetracerjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brandRoot = join(__dirname, "..", "public", "brand");
const embroideryRoot = join(brandRoot, "embroidery");
const masterPath = join(brandRoot, "logo-master.jpg");
const gold = "#D4AF37";
const navy = "#0A1628";

const bgKey = { r: 10, g: 22, b: 40 };
const bgThreshold = 42;
const bgFeather = 28;

function isNavyBackgroundPixel(r, g, b) {
  const max = Math.max(r, g, b);
  if (max > 145) return false;
  const isGold = r > 95 && g > 70 && r + g > b * 1.55 && r >= g - 10;
  if (isGold) return false;
  return b >= r - 6 && g >= r - 22;
}

function alphaFromBackground(r, g, b) {
  if (isNavyBackgroundPixel(r, g, b)) return 0;
  const dr = r - bgKey.r;
  const dg = g - bgKey.g;
  const db = b - bgKey.b;
  const dist = Math.sqrt(dr * dr + dg * dg + db * db);
  if (dist <= bgThreshold) return 0;
  if (dist >= bgThreshold + bgFeather) return 255;
  return Math.round(((dist - bgThreshold) / bgFeather) * 255);
}

async function buildTransparentMarkBuffer(workSize = 2048) {
  const { data, info } = await sharp(masterPath)
    .resize(workSize, workSize, {
      fit: "contain",
      background: { ...bgKey, alpha: 1 },
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    data[i + 3] = alphaFromBackground(data[i], data[i + 1], data[i + 2]);
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .png()
    .trim()
    .toBuffer();
}

async function buildTraceImageData(maxSize = 1400) {
  const trimmed = await buildTransparentMarkBuffer();
  const { data, info } = await sharp(trimmed)
    .resize(maxSize, maxSize, {
      fit: "inside",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8ClampedArray(info.width * info.height * 4);
  for (let i = 0; i < data.length; i += info.channels) {
    const o = i;
    const alpha = data[i + 3];
    const isLogo = alpha > 48;
    pixels[o] = isLogo ? 20 : 255;
    pixels[o + 1] = isLogo ? 20 : 255;
    pixels[o + 2] = isLogo ? 20 : 255;
    pixels[o + 3] = 255;
  }

  return { width: info.width, height: info.height, data: pixels };
}

function traceToSvg(imageData) {
  return ImageTracer.imagedataToSVG(imageData, {
    ltres: 0.8,
    qtres: 0.8,
    pathomit: 14,
    colorsampling: 0,
    numberofcolors: 2,
    mincolorratio: 0,
    colorquantcycles: 1,
    scale: 1,
    strokewidth: 0,
    linefilter: true,
    blurradius: 0,
    blurdelta: 0,
    rightangleenhance: true,
  });
}

function polishEmbroiderySvg(rawSvg, { width, height }) {
  const inner = rawSvg
    .replace(/^<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<rect[^>]*fill="rgb\(255,255,255\)"[^>]*\/>/g, "")
    .replace(/<path[^>]*d="M 0 0 L [^"]* L 0 0 Z "[^>]*\/>/g, "")
    .replace(/fill="rgb\(\d+,\d+,\d+\)"/g, `fill="${gold}"`)
    .replace(/fill="#000000"/g, `fill="${gold}"`)
    .replace(/stroke="[^"]*"/g, 'stroke="none"');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="I DJ Events embroidery mark">
  <title>I DJ Events — embroidery vector</title>
  <desc>Single-color gold vector mark for hat embroidery. Thread color: Pantone 871 C / gold #D4AF37 on navy or white caps.</desc>
  <rect width="${width}" height="${height}" fill="none"/>
  ${inner}
</svg>`;
}

async function exportReferencePng() {
  const trimmed = await buildTransparentMarkBuffer();
  const out = join(embroideryRoot, "logo-mark-reference-3000.png");
  await sharp(trimmed)
    .resize(3000, 3000, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);
  console.log("Exported embroidery/logo-mark-reference-3000.png");
}

mkdirSync(embroideryRoot, { recursive: true });

const imageData = await buildTraceImageData(1400);
const traced = traceToSvg(imageData);
const embroiderySvg = polishEmbroiderySvg(traced, imageData);

writeFileSync(join(embroideryRoot, "logo-mark-embroidery.svg"), embroiderySvg);
console.log("Wrote embroidery/logo-mark-embroidery.svg");

writeFileSync(
  join(embroideryRoot, "logo-mark-embroidery-one-color.svg"),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 400" role="img" aria-label="I DJ Events embroidery mark">
  <title>I DJ Events — hat embroidery (linked high-res)</title>
  <desc>Embroidery shops: use logo-mark-embroidery.svg for vector paths, or logo-mark-reference-3000.png for digitizing.</desc>
  <image xlink:href="logo-mark-reference-3000.png" x="0" y="0" width="400" height="400" preserveAspectRatio="xMidYMid meet"/>
</svg>`,
);
console.log("Wrote embroidery/logo-mark-embroidery-one-color.svg");

await exportReferencePng();

console.log("Embroidery vector package ready.");