import { readFileSync, mkdirSync, existsSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brandRoot = join(__dirname, "..", "public", "brand");

const exports = [
  { src: "svg/logo-horizontal-light.svg", out: "web/logo-horizontal-512.png", width: 512, bg: "transparent" },
  { src: "svg/logo-horizontal-light.svg", out: "web/logo-horizontal-256.png", width: 256, bg: "transparent" },
  { src: "svg/logo-horizontal-dark.svg", out: "web/logo-horizontal-dark-512.png", width: 512, bg: "white" },
  { src: "svg/mark.svg", out: "web/mark-512.png", width: 512, bg: "transparent" },
  { src: "svg/mark.svg", out: "web/apple-touch-icon.png", width: 180, bg: "transparent" },
  { src: "web/favicon.svg", out: "web/favicon-32.png", width: 32, bg: "transparent" },
  { src: "web/favicon.svg", out: "web/favicon-16.png", width: 16, bg: "transparent" },
  { src: "svg/logo-stacked.svg", out: "web/logo-stacked-512.png", width: 512, bg: "transparent" },
  { src: "print/business-card-front.svg", out: "print/business-card-front.png", width: 1050, bg: "transparent" },
  { src: "print/business-card-back.svg", out: "print/business-card-back.png", width: 1050, bg: "white" },
  { src: "apparel/chest-mark.svg", out: "apparel/chest-mark.png", width: 1200, bg: "transparent" },
  { src: "apparel/back-logo.svg", out: "apparel/back-logo.png", width: 1800, bg: "#0c1929" },
  { src: "apparel/sleeve-mark.svg", out: "apparel/sleeve-mark.png", width: 600, bg: "#0c1929" },
  { src: "svg/mark-white.svg", out: "apparel/mark-white.png", width: 800, bg: "#0c1929" },
  { src: "svg/mark-navy.svg", out: "apparel/mark-navy.png", width: 800, bg: "white" },
  { src: "svg/mark-gold.svg", out: "apparel/mark-gold.png", width: 800, bg: "transparent" },
];

for (const item of exports) {
  const srcPath = join(brandRoot, item.src);
  const outPath = join(brandRoot, item.out);
  const outDir = dirname(outPath);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const svg = readFileSync(srcPath, "utf8");
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: item.width },
    background: item.bg === "transparent" ? undefined : item.bg,
  });
  writeFileSync(outPath, resvg.render().asPng());
  console.log(`Exported ${item.out}`);
}