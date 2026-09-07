"""
Clean I DJ Events transparent brand marks (despill / choke / regenerate sizes).

Usage (from repo root, on a machine with Pillow + scipy + numpy):
  python scripts/clean_brand_logos.py

Reads public/brand/print/mark-transparent-3000.png (or git HEAD copy),
removes near-black / near-white / navy matte fringe on alpha edges,
regenerates transparent web/apparel/print sizes with premultiplied resize,
and refreshes og-image.jpg + business-card PNGs that embed the mark.

Does not redesign the logo. Leaves SVG vectors and public/brand/anim/ alone.
"""
from __future__ import annotations

import json
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont
from scipy import ndimage

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "public" / "brand"
QC = ROOT / "scripts" / "_logo_qc"


def fringe_stats(im_or_path) -> dict:
    im = Image.open(im_or_path) if isinstance(im_or_path, (str, Path)) else im_or_path
    arr = np.asarray(im.convert("RGBA"), dtype=np.float32)
    rgb, a = arr[..., :3], arr[..., 3]
    soft = (a >= 5) & (a <= 250)
    lum = rgb[soft].mean(axis=1) if soft.any() else np.array([])
    return {
        "size": f"{arr.shape[1]}x{arr.shape[0]}",
        "soft": int(soft.sum()),
        "whiteish": int(((lum > 200) & (a[soft] < 220)).sum()) if soft.any() else 0,
        "blackish": int(((lum < 40) & (a[soft] > 20) & (a[soft] < 220)).sum()) if soft.any() else 0,
    }


def opaque_neighbor_mean(rgb: np.ndarray, solid: np.ndarray, radius: int = 2) -> np.ndarray:
    w = np.ones((2 * radius + 1, 2 * radius + 1), dtype=np.float64)
    solid_f = solid.astype(np.float64)
    count = ndimage.convolve(solid_f, w, mode="nearest")
    out = np.zeros_like(rgb, dtype=np.float64)
    for c in range(3):
        acc = ndimage.convolve(rgb[..., c] * solid_f, w, mode="nearest")
        out[..., c] = np.divide(acc, count, out=np.zeros_like(acc), where=count > 0)
    gmean = rgb[solid].mean(axis=0) if solid.any() else np.array([212.0, 175.0, 55.0])
    out[count == 0] = gmean
    return out.astype(np.float32)


def clean_fringe(im: Image.Image, choke: bool = True) -> Image.Image:
    arr = np.asarray(im.convert("RGBA"), dtype=np.float32)
    rgb = arr[..., :3].copy()
    a = arr[..., 3].copy()
    solid = a >= 245
    soft = (a > 0) & (a < 245)
    radius = 2 if max(im.size) < 600 else 3
    neigh = opaque_neighbor_mean(rgb, solid, radius=radius)
    lum = rgb.mean(axis=-1)
    delta = np.linalg.norm(rgb - neigh, axis=-1)
    contaminated = soft & (
        (delta > 28)
        | (lum < 55)
        | ((lum > 200) & (a < 220))
        | ((rgb[..., 2] + 8 >= rgb[..., 0]) & (rgb[..., 0] < 130) & (lum < 140))
    )
    rgb = np.where(contaminated[..., None], neigh, rgb)
    mild = soft & (~contaminated)
    rgb = np.where(mild[..., None], rgb * 0.55 + neigh * 0.45, rgb)

    a2 = a.copy()
    a2[a2 < 14] = 0
    if choke:
        eroded = np.asarray(
            Image.fromarray(a2.astype(np.uint8), "L").filter(ImageFilter.MinFilter(3)),
            dtype=np.float32,
        )
        a2 = np.minimum(a2, eroded * 0.5 + a2 * 0.5)
        a2[a2 < 12] = 0
        blur_a = np.asarray(
            Image.fromarray(a2.astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(0.35)),
            dtype=np.float32,
        )
        edge = (a2 > 0) & (a2 < 255)
        a2 = np.where(edge, blur_a, a2)

    soft2 = (a2 > 0) & (a2 < 245)
    solid2 = a2 >= 245
    neigh2 = opaque_neighbor_mean(rgb, solid2 if solid2.any() else solid, radius=2)
    rgb = np.where(soft2[..., None], neigh2, rgb)
    rgb = np.where(a2[..., None] < 1, 0.0, rgb)
    return Image.fromarray(
        np.dstack([np.clip(rgb, 0, 255), np.clip(a2, 0, 255)]).astype(np.uint8), "RGBA"
    )


def resize_rgba_premultiplied(im: Image.Image, size: int) -> Image.Image:
    arr = np.asarray(im.convert("RGBA"), dtype=np.float32)
    rgb, a = arr[..., :3], arr[..., 3]
    solid = a >= 240
    mean_solid = (
        rgb[solid].mean(axis=0)
        if solid.any()
        else np.array([212.0, 175.0, 55.0], dtype=np.float32)
    )
    fill = rgb.copy()
    fill[a < 1] = mean_solid
    a01 = a / 255.0
    premul_im = Image.fromarray(
        np.clip(np.dstack([fill * a01[..., None], a]), 0, 255).astype(np.uint8), "RGBA"
    )
    premul_im.thumbnail((size, size), Image.Resampling.LANCZOS)
    p = np.asarray(premul_im, dtype=np.float32)
    prgb, pa = p[..., :3], p[..., 3]
    mask = pa > 0.5
    out_rgb = np.zeros_like(prgb)
    out_rgb[mask] = np.clip(prgb[mask] / (pa[mask] / 255.0)[..., None], 0, 255)
    return Image.fromarray(np.dstack([out_rgb, pa]).astype(np.uint8), "RGBA")


def composite_on(bg_rgb, mark, canvas=420):
    bg = Image.new("RGBA", (canvas, canvas), bg_rgb + (255,))
    m = mark.copy()
    m.thumbnail((int(canvas * 0.84), int(canvas * 0.84)), Image.Resampling.LANCZOS)
    bg.alpha_composite(m, ((canvas - m.width) // 2, (canvas - m.height) // 2))
    return bg.convert("RGB")


def make_comparison(before, after, out: Path) -> None:
    panels = []
    for label, im, bg in [
        ("BEFORE navy", before, (10, 22, 40)),
        ("AFTER navy", after, (10, 22, 40)),
        ("BEFORE gold", before, (212, 175, 55)),
        ("AFTER gold", after, (212, 175, 55)),
        ("BEFORE white", before, (255, 255, 255)),
        ("AFTER white", after, (255, 255, 255)),
    ]:
        panel = composite_on(bg, im, 360)
        d = ImageDraw.Draw(panel)
        d.rectangle((0, 0, 359, 26), fill=(0, 0, 0))
        d.text((8, 6), label, fill=(255, 255, 255))
        panels.append(panel)
    sheet = Image.new("RGB", (panels[0].width * 2, panels[0].height * 3), (16, 16, 16))
    for i, p in enumerate(panels):
        sheet.paste(p, ((i % 2) * p.width, (i // 2) * p.height))
    out.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(out, "JPEG", quality=92)


def regenerate_og(mark512: Path, out_path: Path) -> None:
    width, height = 1200, 630
    hero = ROOT / "public" / "images" / "backgrounds" / "hero-home.jpg"
    bg = Image.open(hero).convert("RGB").resize((width, height), Image.Resampling.LANCZOS)
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    ov = ImageDraw.Draw(overlay)
    for y in range(height):
        t = y / (height - 1)
        op = (
            (0.55 + (0.62 - 0.55) * (t / 0.55))
            if t < 0.55
            else (0.62 + (0.85 - 0.62) * ((t - 0.55) / 0.45))
        )
        ov.line([(0, y), (width, y)], fill=(10, 22, 40, int(255 * op)))
    composed = Image.alpha_composite(bg.convert("RGBA"), overlay)
    mark = Image.open(mark512).convert("RGBA")
    mark.thumbnail((200, 200), Image.Resampling.LANCZOS)
    composed.alpha_composite(mark, ((width - mark.width) // 2, 150))
    draw = ImageDraw.Draw(composed)
    try:
        font_title = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 86)
        font_sub = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 38)
        font_small = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 22)
    except OSError:
        font_title = font_sub = font_small = ImageFont.load_default()

    def center_text(y, text, font, fill):
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        draw.text(((width - tw) / 2, y - (bbox[3] - bbox[1])), text, font=font, fill=fill)

    center_text(430, "I DJ Events", font_title, (255, 255, 255, 255))
    center_text(492, "Tahoe's Premier Wedding DJ", font_sub, (212, 175, 55, 255))
    center_text(548, "LAKE TAHOE  ·  RENO  ·  BEYOND", font_small, (255, 255, 255, 230))
    composed.convert("RGB").save(out_path, "JPEG", quality=88, optimize=True)


def regenerate_business_cards(mark_master: Image.Image) -> None:
    gold = (212, 175, 55)
    gold_deep = (168, 132, 30)
    w, h = 1050, 600

    def card_base():
        im = Image.new("RGB", (w, h), (255, 255, 255))
        d = ImageDraw.Draw(im)
        d.rounded_rectangle((48, 48, 1002, 552), radius=12, outline=gold, width=2)
        return im, d

    try:
        fonts = {
            k: ImageFont.truetype(p, s)
            for k, p, s in [
                ("title", "C:/Windows/Fonts/georgia.ttf", 54),
                ("name", "C:/Windows/Fonts/georgia.ttf", 34),
                ("small", "C:/Windows/Fonts/arial.ttf", 16),
                ("body", "C:/Windows/Fonts/arial.ttf", 22),
                ("tiny", "C:/Windows/Fonts/arial.ttf", 14),
                ("bt", "C:/Windows/Fonts/georgia.ttf", 36),
                ("bs", "C:/Windows/Fonts/georgia.ttf", 26),
                ("bb", "C:/Windows/Fonts/arial.ttf", 20),
                ("bsm", "C:/Windows/Fonts/arial.ttf", 18),
                ("bxs", "C:/Windows/Fonts/arial.ttf", 16),
                ("url", "C:/Windows/Fonts/arialbd.ttf", 22),
            ]
        }
    except OSError:
        dflt = ImageFont.load_default()
        fonts = {k: dflt for k in ["title", "name", "small", "body", "tiny", "bt", "bs", "bb", "bsm", "bxs", "url"]}

    front, d = card_base()
    logo = clean_fringe(resize_rgba_premultiplied(mark_master, 200), choke=False)
    front.paste(logo, (48, 130), logo)
    d.text((280, 168), "I DJ Events", font=fonts["title"], fill=gold)
    d.text((280, 230), "Clint Davidson", font=fonts["name"], fill=gold_deep)
    d.text((280, 284), "TAHOE'S PREMIER WEDDING DJ", font=fonts["small"], fill=gold)
    d.text((280, 358), "775-233-6501", font=fonts["body"], fill=gold_deep)
    d.text((280, 398), "booking@idj.events", font=fonts["body"], fill=gold_deep)
    d.text((280, 438), "idj.events", font=fonts["body"], fill=gold_deep)
    d.text((280, 486), "LAKE TAHOE · RENO · BEYOND", font=fonts["tiny"], fill=gold)
    front.save(BRAND / "print" / "business-card-front.png", "PNG", optimize=True)

    back, d = card_base()
    logo2 = clean_fringe(resize_rgba_premultiplied(mark_master, 180), choke=False)
    back.paste(logo2, (435, 58), logo2)

    def ctext(y, text, font, fill):
        bbox = d.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        d.text(((w - tw) / 2, y), text, font=font, fill=fill)

    ctext(248, "Clint Davidson", fonts["bt"], gold)
    ctext(300, "DJ · MC · Lighting · Ceremony Sound", fonts["bs"], gold_deep)
    ctext(348, "Officiant · Karaoke · Event Coordination", fonts["bb"], gold_deep)
    ctext(400, "Custom packages for every celebration", fonts["bsm"], gold)
    ctext(440, "Third-party vendors available — photo, catering, beauty & more", fonts["bxs"], gold_deep)
    ctext(498, "idj.events", fonts["url"], gold)
    back.save(BRAND / "print" / "business-card-back.png", "PNG", optimize=True)


def git_blob(path: str) -> bytes:
    return subprocess.check_output(["git", "show", f"HEAD:{path}"], cwd=ROOT)


def main() -> None:
    QC.mkdir(parents=True, exist_ok=True)

    orig_3000 = QC / "orig-mark-3000.png"
    orig_3000.write_bytes(git_blob("public/brand/print/mark-transparent-3000.png"))
    before_512 = QC / "before-mark-transparent-512.png"
    before_512.write_bytes(git_blob("public/brand/web/mark-transparent-512.png"))

    before = {
        "print/3000": fringe_stats(orig_3000),
        "web/512": fringe_stats(before_512),
    }
    print("BEFORE", json.dumps(before, indent=2))

    cleaned = clean_fringe(Image.open(orig_3000).convert("RGBA"))
    cleaned.save(QC / "cleaned-master-trimmed.png")
    print("AFTER master", fringe_stats(cleaned))
    make_comparison(Image.open(before_512).convert("RGBA"), cleaned, QC / "compare-before-after.jpg")

    exports = [
        ("transparent/mark-2048.png", 2048),
        ("transparent/mark-1024.png", 1024),
        ("transparent/mark-512.png", 512),
        ("transparent/mark-256.png", 256),
        ("transparent/mark-128.png", 128),
        ("web/mark-transparent-512.png", 512),
        ("web/mark-transparent-256.png", 256),
        ("apparel/mark-transparent-1200.png", 1200),
        ("apparel/mark-transparent-800.png", 800),
        ("print/mark-transparent-3000.png", 3000),
        ("embroidery/logo-mark-reference-3000.png", 3000),
    ]
    after = {}
    for rel, size in exports:
        out_im = cleaned if size >= max(cleaned.size) else clean_fringe(
            resize_rgba_premultiplied(cleaned, size), choke=False
        )
        out_im.save(BRAND / rel, "PNG", optimize=True)
        after[rel] = fringe_stats(out_im)
        print("Wrote", rel, after[rel])

    regenerate_og(BRAND / "web" / "mark-transparent-512.png", BRAND / "web" / "og-image.jpg")
    regenerate_business_cards(cleaned)
    (QC / "fringe-report.json").write_text(
        json.dumps({"before": before, "after": after}, indent=2), encoding="utf-8"
    )
    print("Done. QC artifacts:", QC)


if __name__ == "__main__":
    main()
