import { readFileSync, mkdirSync, existsSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brandRoot = join(__dirname, "..", "public", "brand");
const masterPath = join(brandRoot, "logo-master.jpg");
const navy = "#0A1628";

async function exportMasterPng(out, size, bg = navy) {
  const outPath = join(brandRoot, out);
  mkdirSync(dirname(outPath), { recursive: true });
  await sharp(masterPath)
    .resize(size, size, { fit: "contain", background: bg })
    .png()
    .toFile(outPath);
  console.log(`Exported ${out}`);
}

async function exportBusinessCardFront() {
  const outPath = join(brandRoot, "print", "business-card-front.png");
  const width = 1050;
  const height = 600;
  const logo = await sharp(masterPath).resize(220, 220, { fit: "contain", background: navy }).png().toBuffer();
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0A1628"/>
          <stop offset="100%" stop-color="#152a45"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <text x="300" y="250" fill="#ffffff" font-family="Georgia, serif" font-size="54" font-weight="600">I DJ Events</text>
      <text x="300" y="292" fill="#D4AF37" font-family="Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="4">TAHOE'S PREMIER WEDDING DJ</text>
      <text x="300" y="380" fill="#ffffff" font-family="Arial, sans-serif" font-size="22" font-weight="600">775-233-6501</text>
      <text x="300" y="420" fill="#93c5fd" font-family="Arial, sans-serif" font-size="22">booking@idj.events</text>
      <text x="300" y="460" fill="#ffffff" font-family="Arial, sans-serif" font-size="18">idj.events</text>
      <text x="300" y="500" fill="#D4AF37" font-family="Arial, sans-serif" font-size="14" letter-spacing="2">LAKE TAHOE · RENO · BEYOND</text>
    </svg>`;
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(base)
    .composite([{ input: logo, left: 48, top: 140 }])
    .png()
    .toFile(outPath);
  console.log("Exported print/business-card-front.png");
}

async function exportBusinessCardBack() {
  const outPath = join(brandRoot, "print", "business-card-back.png");
  const width = 1050;
  const height = 600;
  const logo = await sharp(masterPath).resize(180, 180, { fit: "contain", background: "#f8fafc" }).png().toBuffer();
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f8fafc"/>
      <rect x="48" y="48" width="954" height="504" rx="12" fill="none" stroke="#D4AF37" stroke-width="2"/>
      <text x="525" y="300" text-anchor="middle" fill="#0A1628" font-family="Georgia, serif" font-size="28" font-weight="600">DJ · MC · Lighting · Ceremony Sound</text>
      <text x="525" y="340" text-anchor="middle" fill="#152a45" font-family="Arial, sans-serif" font-size="20">Officiant · Karaoke · Event Coordination</text>
      <text x="525" y="400" text-anchor="middle" fill="#a8841e" font-family="Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="2">PACKAGES FROM $1,500</text>
      <text x="525" y="450" text-anchor="middle" fill="#1d4ed8" font-family="Arial, sans-serif" font-size="16">Third-party vendors available — photo, catering, beauty &amp; more</text>
      <text x="525" y="520" text-anchor="middle" fill="#0A1628" font-family="Arial, sans-serif" font-size="22" font-weight="700">idj.events</text>
    </svg>`;
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(base)
    .composite([{ input: logo, left: 435, top: 70 }])
    .png()
    .toFile(outPath);
  console.log("Exported print/business-card-back.png");
}

async function exportBackPrint() {
  const outPath = join(brandRoot, "apparel", "back-logo.png");
  const width = 1800;
  const height = 900;
  const logo = await sharp(masterPath).resize(700, 700, { fit: "contain", background: navy }).png().toBuffer();
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${navy}"/>
      <text x="900" y="760" text-anchor="middle" fill="#D4AF37" font-family="Arial, sans-serif" font-size="36" font-weight="600" letter-spacing="6">LAKE TAHOE · RENO · BEYOND</text>
    </svg>`;
  const base = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(base)
    .composite([{ input: logo, left: 550, top: 40 }])
    .png()
    .toFile(outPath);
  console.log("Exported apparel/back-logo.png");
}

function exportSvgPng(src, out, width, bg) {
  const srcPath = join(brandRoot, src);
  const outPath = join(brandRoot, out);
  mkdirSync(dirname(outPath), { recursive: true });
  const svg = readFileSync(srcPath, "utf8");
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background: bg === "transparent" ? undefined : bg,
  });
  writeFileSync(outPath, resvg.render().asPng());
  console.log(`Exported ${out}`);
}

await exportMasterPng("web/logo-primary-512.png", 512);
await exportMasterPng("web/logo-primary-256.png", 256);
await exportMasterPng("web/logo-primary-128.png", 128);
await exportMasterPng("web/apple-touch-icon.png", 180);
await exportMasterPng("web/favicon-32.png", 32);
await exportMasterPng("web/favicon-16.png", 16);
await exportMasterPng("apparel/chest-mark.png", 1200);
await exportMasterPng("apparel/mark-on-white.png", 800, "#ffffff");
await exportMasterPng("apparel/mark-on-navy.png", 800, navy);

await exportBusinessCardFront();
await exportBusinessCardBack();
await exportBackPrint();

exportSvgPng("web/favicon.svg", "web/favicon-from-svg-32.png", 32, navy);