import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brandRoot = join(__dirname, "..", "public", "brand");
const masterPath = join(brandRoot, "logo-master.jpg");
const navy = "#0A1628";
const gold = "#D4AF37";
const goldDeep = "#a8841e";
const white = "#FFFFFF";
const ownerName = "Clint Davdison";
const cardWidth = 1050;
const cardHeight = 600;

/** All mark/logo assets derive from logo-master.jpg — the official hexagon + gold soundwave + mountain artwork. */
const markSvgVariants = [
  { file: "svg/mark.svg", bg: navy },
  { file: "svg/mark-gold.svg", bg: navy },
  { file: "svg/mark-white.svg", bg: navy },
  { file: "svg/mark-navy.svg", bg: white },
  { file: "svg/logo-primary.svg", bg: navy },
];

function writeMasterEmbedSvg(outRelative, { width = 400, height = 400, bg = navy, imageSize = 400 } = {}) {
  const fill = bg === "transparent" ? "none" : bg;
  const content = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" role="img" aria-label="I DJ Events">
  <rect width="${width}" height="${height}" fill="${fill}"/>
  <image xlink:href="../logo-master.jpg" x="0" y="0" width="${imageSize}" height="${imageSize}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  writeFileSync(join(brandRoot, outRelative), content);
  console.log(`Wrote ${outRelative}`);
}

function writeMarkSvgVariants() {
  for (const variant of markSvgVariants) {
    writeMasterEmbedSvg(variant.file, { bg: variant.bg });
  }
}

function writeHorizontalSvg(outRelative, { width, height, bg, textColor, subColor, transparent = false }) {
  const markSize = Math.round(height * 0.92);
  const textX = height + 16;
  const fill = transparent ? "none" : bg;
  const content = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" role="img" aria-label="I DJ Events">
  <rect width="${width}" height="${height}" fill="${fill}"/>
  <image xlink:href="../logo-master.jpg" x="8" y="${Math.round(height * 0.04)}" width="${markSize}" height="${markSize}" preserveAspectRatio="xMidYMid meet"/>
  <text x="${textX}" y="${Math.round(height * 0.58)}" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.round(height * 0.34)}" font-weight="600">I DJ Events</text>
  <text x="${textX}" y="${Math.round(height * 0.82)}" fill="${subColor}" font-family="Arial, sans-serif" font-size="${Math.round(height * 0.12)}" font-weight="600" letter-spacing="3">LAKE TAHOE · RENO · BEYOND</text>
</svg>`;
  writeFileSync(join(brandRoot, outRelative), content);
  console.log(`Wrote ${outRelative}`);
}

function writeStackedSvg() {
  const content = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 520" role="img" aria-label="I DJ Events">
  <rect width="400" height="520" fill="${navy}"/>
  <image xlink:href="../logo-master.jpg" x="40" y="20" width="320" height="320" preserveAspectRatio="xMidYMid meet"/>
  <text x="200" y="400" text-anchor="middle" fill="${white}" font-family="Georgia, serif" font-size="42" font-weight="600">I DJ Events</text>
  <text x="200" y="440" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="3">LAKE TAHOE · RENO · BEYOND</text>
</svg>`;
  writeFileSync(join(brandRoot, "svg/logo-stacked.svg"), content);
  console.log("Wrote svg/logo-stacked.svg");
}

function businessCardFrontSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${cardWidth} ${cardHeight}" role="img" aria-label="I DJ Events business card front">
  <rect width="${cardWidth}" height="${cardHeight}" fill="${white}"/>
  <image xlink:href="../transparent/mark-512.png" x="48" y="130" width="200" height="200" preserveAspectRatio="xMidYMid meet"/>
  <text x="280" y="210" fill="${gold}" font-family="Georgia, serif" font-size="54" font-weight="600">I DJ Events</text>
  <text x="280" y="258" fill="${goldDeep}" font-family="Georgia, serif" font-size="34" font-weight="500">${ownerName}</text>
  <text x="280" y="300" fill="${gold}" font-family="Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="4">TAHOE'S PREMIER WEDDING DJ</text>
  <text x="280" y="380" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="22" font-weight="600">775-233-6501</text>
  <text x="280" y="420" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="22">booking@idj.events</text>
  <text x="280" y="460" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="18">idj.events</text>
  <text x="280" y="500" fill="${gold}" font-family="Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="2">LAKE TAHOE · RENO · BEYOND</text>
</svg>`;
}

function businessCardBackSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${cardWidth} ${cardHeight}" role="img" aria-label="I DJ Events business card back">
  <rect width="${cardWidth}" height="${cardHeight}" fill="${white}"/>
  <rect x="48" y="48" width="954" height="504" rx="12" fill="none" stroke="${gold}" stroke-width="2"/>
  <image xlink:href="../transparent/mark-512.png" x="435" y="58" width="180" height="180" preserveAspectRatio="xMidYMid meet"/>
  <text x="525" y="278" text-anchor="middle" fill="${gold}" font-family="Georgia, serif" font-size="36" font-weight="600">${ownerName}</text>
  <text x="525" y="330" text-anchor="middle" fill="${goldDeep}" font-family="Georgia, serif" font-size="26" font-weight="600">DJ · MC · Lighting · Ceremony Sound</text>
  <text x="525" y="368" text-anchor="middle" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="20">Officiant · Karaoke · Event Coordination</text>
  <text x="525" y="420" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="2">PACKAGES FROM $1,500</text>
  <text x="525" y="460" text-anchor="middle" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="16">Third-party vendors available — photo, catering, beauty &amp; more</text>
  <text x="525" y="520" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="22" font-weight="700">idj.events</text>
</svg>`;
}

function writeBusinessCardSvgs() {
  writeFileSync(join(brandRoot, "print/business-card-front.svg"), businessCardFrontSvg());
  writeFileSync(join(brandRoot, "print/business-card-back.svg"), businessCardBackSvg());
  console.log("Wrote print/business-card-front.svg");
  console.log("Wrote print/business-card-back.svg");
}

async function getCardLogoBuffer(size) {
  const trimmed = await buildTransparentMarkBuffer();
  return sharp(trimmed)
    .resize(size, size, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function exportMasterPng(out, size, bg = navy) {
  const outPath = join(brandRoot, out);
  mkdirSync(dirname(outPath), { recursive: true });
  await sharp(masterPath)
    .resize(size, size, { fit: "contain", background: bg })
    .png()
    .toFile(outPath);
  console.log(`Exported ${out}`);
}

/** Navy backdrop in logo-master.jpg — remove it to produce transparent gold hexagon marks. */
const bgKey = { r: 10, g: 22, b: 40 };
const bgThreshold = 42;
const bgFeather = 28;

function alphaFromBackground(r, g, b) {
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

async function exportTransparentMarkPng(out, size) {
  const outPath = join(brandRoot, out);
  mkdirSync(dirname(outPath), { recursive: true });
  const trimmed = await buildTransparentMarkBuffer();
  await sharp(trimmed)
    .resize(size, size, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(outPath);
  console.log(`Exported ${out}`);
}

function writeTransparentMarkSvg(outRelative, pngRelative) {
  const content = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 400" role="img" aria-label="I DJ Events mark">
  <image xlink:href="../${pngRelative.replace(/\\/g, "/")}" x="0" y="0" width="400" height="400" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  writeFileSync(join(brandRoot, outRelative), content);
  console.log(`Wrote ${outRelative}`);
}

async function exportHorizontalPng(out, width, height, bg, textColor, subColor) {
  const outPath = join(brandRoot, out);
  const logo = await sharp(masterPath)
    .resize(Math.round(height * 0.92), Math.round(height * 0.92), { fit: "contain", background: bg })
    .png()
    .toBuffer();
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bg}"/>
      <text x="${height + 24}" y="${Math.round(height * 0.58)}" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.round(height * 0.34)}" font-weight="600">I DJ Events</text>
      <text x="${height + 24}" y="${Math.round(height * 0.82)}" fill="${subColor}" font-family="Arial, sans-serif" font-size="${Math.round(height * 0.12)}" font-weight="600" letter-spacing="3">LAKE TAHOE · RENO · BEYOND</text>
    </svg>`;
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(base)
    .composite([{ input: logo, left: 8, top: Math.round(height * 0.04) }])
    .png()
    .toFile(outPath);
  console.log(`Exported ${out}`);
}

async function exportStackedPng() {
  const outPath = join(brandRoot, "web/logo-stacked-512.png");
  const logo = await sharp(masterPath).resize(320, 320, { fit: "contain", background: navy }).png().toBuffer();
  const svg = `
    <svg width="400" height="520" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="520" fill="${navy}"/>
      <text x="200" y="400" text-anchor="middle" fill="${white}" font-family="Georgia, serif" font-size="42" font-weight="600">I DJ Events</text>
      <text x="200" y="440" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="3">LAKE TAHOE · RENO · BEYOND</text>
    </svg>`;
  await sharp(Buffer.from(svg)).png().composite([{ input: logo, left: 40, top: 20 }]).toFile(outPath);
  console.log("Exported web/logo-stacked-512.png");
}

async function exportBusinessCardFront() {
  const outPath = join(brandRoot, "print/business-card-front.png");
  const logo = await getCardLogoBuffer(200);
  const svg = `
    <svg width="${cardWidth}" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${cardWidth}" height="${cardHeight}" fill="${white}"/>
      <text x="280" y="210" fill="${gold}" font-family="Georgia, serif" font-size="54" font-weight="600">I DJ Events</text>
      <text x="280" y="258" fill="${goldDeep}" font-family="Georgia, serif" font-size="34" font-weight="500">${ownerName}</text>
      <text x="280" y="300" fill="${gold}" font-family="Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="4">TAHOE'S PREMIER WEDDING DJ</text>
      <text x="280" y="380" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="22" font-weight="600">775-233-6501</text>
      <text x="280" y="420" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="22">booking@idj.events</text>
      <text x="280" y="460" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="18">idj.events</text>
      <text x="280" y="500" fill="${gold}" font-family="Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="2">LAKE TAHOE · RENO · BEYOND</text>
    </svg>`;
  await sharp(Buffer.from(svg)).png().composite([{ input: logo, left: 48, top: 130 }]).toFile(outPath);
  console.log("Exported print/business-card-front.png");
}

async function exportBusinessCardBack() {
  const outPath = join(brandRoot, "print/business-card-back.png");
  const logo = await getCardLogoBuffer(180);
  const svg = `
    <svg width="${cardWidth}" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${cardWidth}" height="${cardHeight}" fill="${white}"/>
      <rect x="48" y="48" width="954" height="504" rx="12" fill="none" stroke="${gold}" stroke-width="2"/>
      <text x="525" y="278" text-anchor="middle" fill="${gold}" font-family="Georgia, serif" font-size="36" font-weight="600">${ownerName}</text>
      <text x="525" y="330" text-anchor="middle" fill="${goldDeep}" font-family="Georgia, serif" font-size="26" font-weight="600">DJ · MC · Lighting · Ceremony Sound</text>
      <text x="525" y="368" text-anchor="middle" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="20">Officiant · Karaoke · Event Coordination</text>
      <text x="525" y="420" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="2">PACKAGES FROM $1,500</text>
      <text x="525" y="460" text-anchor="middle" fill="${goldDeep}" font-family="Arial, sans-serif" font-size="16">Third-party vendors available — photo, catering, beauty &amp; more</text>
      <text x="525" y="520" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="22" font-weight="700">idj.events</text>
    </svg>`;
  await sharp(Buffer.from(svg)).png().composite([{ input: logo, left: 435, top: 58 }]).toFile(outPath);
  console.log("Exported print/business-card-back.png");
}

function writeBackLogoSvg() {
  const width = 1800;
  const height = 960;
  const logoSize = 560;
  const logoX = (width - logoSize) / 2;
  const logoY = 80;
  const taglineY = logoY + logoSize + 72;
  const content = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" role="img" aria-label="I DJ Events back print">
  <rect width="${width}" height="${height}" fill="${navy}"/>
  <image xlink:href="../logo-master.jpg" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet"/>
  <text x="${width / 2}" y="${taglineY}" text-anchor="middle" fill="${gold}" font-family="Arial, sans-serif" font-size="36" font-weight="600" letter-spacing="6">LAKE TAHOE · RENO · BEYOND</text>
</svg>`;
  writeFileSync(join(brandRoot, "apparel/back-logo.svg"), content);
  console.log("Wrote apparel/back-logo.svg");
}

async function exportBackPrint() {
  const outPath = join(brandRoot, "apparel/back-logo.png");
  const width = 1800;
  const height = 960;
  const logoSize = 560;
  const logoX = Math.round((width - logoSize) / 2);
  const logoY = 80;
  const taglineY = logoY + logoSize + 72;

  const logo = await sharp(masterPath)
    .resize(logoSize, logoSize, { fit: "contain", background: navy })
    .png()
    .toBuffer();
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${navy}"/>
      <text x="${width / 2}" y="${taglineY}" text-anchor="middle" fill="#D4AF37" font-family="Arial, sans-serif" font-size="36" font-weight="600" letter-spacing="6">LAKE TAHOE · RENO · BEYOND</text>
    </svg>`;
  await sharp(Buffer.from(svg))
    .png()
    .composite([{ input: logo, left: logoX, top: logoY }])
    .toFile(outPath);
  console.log("Exported apparel/back-logo.png");
}

writeMarkSvgVariants();
writeMasterEmbedSvg("apparel/chest-mark.svg", { bg: navy });
writeMasterEmbedSvg("apparel/sleeve-mark.svg", { bg: navy });
writeBackLogoSvg();
writeStackedSvg();

writeHorizontalSvg("svg/logo-horizontal.svg", { width: 520, height: 120, bg: navy, textColor: white, subColor: gold });
writeHorizontalSvg("svg/logo-horizontal-dark.svg", { width: 520, height: 120, bg: white, textColor: navy, subColor: gold });
writeHorizontalSvg("svg/logo-horizontal-light.svg", { width: 520, height: 120, bg: navy, textColor: white, subColor: gold, transparent: true });

writeFileSync(
  join(brandRoot, "web/favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" role="img" aria-label="I DJ Events">
  <rect width="32" height="32" fill="#0A1628"/>
  <image xlink:href="../logo-master.jpg" x="0" y="0" width="32" height="32" preserveAspectRatio="xMidYMid slice"/>
</svg>`,
);
console.log("Wrote web/favicon.svg");

await exportMasterPng("web/logo-primary-512.png", 512);
await exportMasterPng("web/logo-primary-256.png", 256);
await exportMasterPng("web/logo-primary-128.png", 128);
await exportMasterPng("web/apple-touch-icon.png", 180);
await exportMasterPng("web/favicon-32.png", 32);
await exportMasterPng("web/favicon-16.png", 16);
await exportMasterPng("web/mark-512.png", 512);
await exportMasterPng("web/favicon-from-svg-32.png", 32);

await exportMasterPng("apparel/mark-gold.png", 800);
await exportMasterPng("apparel/mark-white.png", 800);
await exportMasterPng("apparel/mark-navy.png", 800, white);
await exportMasterPng("apparel/chest-mark.png", 1200);
await exportMasterPng("apparel/mark-on-white.png", 800, white);
await exportMasterPng("apparel/mark-on-navy.png", 800, navy);
await exportMasterPng("apparel/sleeve-mark.png", 600, navy);

await exportHorizontalPng("web/logo-horizontal-512.png", 520, 120, navy, white, gold);
await exportHorizontalPng("web/logo-horizontal-256.png", 360, 84, navy, white, gold);
await exportHorizontalPng("web/logo-horizontal-dark-512.png", 520, 120, white, navy, gold);

await exportStackedPng();
await exportBusinessCardFront();
await exportBusinessCardBack();
await exportBackPrint();

const transparentExports = [
  { out: "transparent/mark-2048.png", size: 2048 },
  { out: "transparent/mark-1024.png", size: 1024 },
  { out: "transparent/mark-512.png", size: 512 },
  { out: "transparent/mark-256.png", size: 256 },
  { out: "transparent/mark-128.png", size: 128 },
  { out: "web/mark-transparent-512.png", size: 512 },
  { out: "web/mark-transparent-256.png", size: 256 },
  { out: "apparel/mark-transparent-1200.png", size: 1200 },
  { out: "apparel/mark-transparent-800.png", size: 800 },
  { out: "print/mark-transparent-3000.png", size: 3000 },
];

for (const item of transparentExports) {
  await exportTransparentMarkPng(item.out, item.size);
}

writeTransparentMarkSvg("svg/mark-transparent.svg", "transparent/mark-512.png");
writeBusinessCardSvgs();

console.log("Brand package recompiled from logo-master.jpg.");