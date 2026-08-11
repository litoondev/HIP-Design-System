#!/usr/bin/env node
/**
 * Grab all real images from a client's old website into a staging folder.
 *
 * Usage:
 *   node scripts/grab-images.mjs https://old-client-site.com [more page URLs...]
 *
 * Images land in public/sections/_incoming/<hostname>/ with their original
 * names, plus a manifest.json describing where each came from. From there,
 * pick the good ones and rename them to slot names (hero.jpg, doctor.jpg, ...)
 * one level up in public/sections/.
 *
 * Zero dependencies — uses Node 18+ global fetch.
 */

import fs from "fs";
import path from "path";

const MIN_BYTES = 8 * 1024; // skip tracking pixels / tiny icons
const EXT_OK = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg", ".gif"]);
const UA = "Mozilla/5.0 (compatible; HIP-DS-image-grabber)";

const pages = process.argv.slice(2);
if (pages.length === 0) {
  console.error("Usage: node scripts/grab-images.mjs <old-site-url> [more URLs...]");
  process.exit(1);
}

/** Pull every candidate image URL out of an HTML string. */
function extractImageUrls(html, baseUrl) {
  const urls = new Set();
  const add = (raw) => {
    if (!raw) return;
    try {
      const u = new URL(raw.trim(), baseUrl);
      if (u.protocol === "http:" || u.protocol === "https:") urls.add(u.href);
    } catch {}
  };

  // <img src> and lazy-load variants
  for (const m of html.matchAll(/<img[^>]+(?:src|data-src|data-lazy-src)=["']([^"']+)["']/gi))
    add(m[1]);
  // srcset — take the last (largest) candidate of each set
  for (const m of html.matchAll(/(?:srcset|data-srcset)=["']([^"']+)["']/gi)) {
    const candidates = m[1].split(",").map((c) => c.trim().split(/\s+/)[0]);
    add(candidates[candidates.length - 1]);
  }
  // og:image / twitter:image
  for (const m of html.matchAll(/<meta[^>]+content=["']([^"']+)["'][^>]*>/gi))
    if (/og:image|twitter:image/i.test(m[0])) add(m[1]);
  // inline background-image
  for (const m of html.matchAll(/background(?:-image)?\s*:\s*url\(["']?([^"')]+)["']?\)/gi))
    add(m[1]);

  return [...urls];
}

function filenameFor(imgUrl, index) {
  const u = new URL(imgUrl);
  let base = path.basename(u.pathname) || `image-${index}`;
  base = decodeURIComponent(base).replace(/[^\w.\-]+/g, "-");
  if (!EXT_OK.has(path.extname(base).toLowerCase())) base += ".jpg";
  return base;
}

async function download(imgUrl, destDir, index) {
  const res = await fetch(imgUrl, { headers: { "user-agent": UA } });
  if (!res.ok) return { skipped: `HTTP ${res.status}` };
  const type = res.headers.get("content-type") ?? "";
  if (!type.startsWith("image/") && !imgUrl.match(/\.(jpe?g|png|webp|avif|svg|gif)(\?|$)/i))
    return { skipped: `not an image (${type})` };
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < MIN_BYTES && !type.includes("svg"))
    return { skipped: `too small (${buf.length} B)` };

  let name = filenameFor(imgUrl, index);
  let dest = path.join(destDir, name);
  for (let n = 2; fs.existsSync(dest); n++) {
    const ext = path.extname(name);
    dest = path.join(destDir, `${path.basename(name, ext)}-${n}${ext}`);
  }
  fs.writeFileSync(dest, buf);
  return { file: path.basename(dest), bytes: buf.length };
}

const host = new URL(pages[0]).hostname.replace(/^www\./, "");
const destDir = path.join(process.cwd(), "public", "sections", "_incoming", host);
fs.mkdirSync(destDir, { recursive: true });

const manifest = [];
for (const page of pages) {
  console.log(`\nScanning ${page} ...`);
  let html;
  try {
    const res = await fetch(page, { headers: { "user-agent": UA } });
    html = await res.text();
  } catch (e) {
    console.error(`  ! could not fetch page: ${e.message}`);
    continue;
  }
  const urls = extractImageUrls(html, page);
  console.log(`  found ${urls.length} image URLs`);
  let saved = 0;
  for (const [i, imgUrl] of urls.entries()) {
    try {
      const r = await download(imgUrl, destDir, i);
      if (r.file) {
        saved++;
        manifest.push({ file: r.file, from: imgUrl, page, bytes: r.bytes });
        console.log(`  + ${r.file} (${Math.round(r.bytes / 1024)} KB)`);
      }
    } catch (e) {
      console.error(`  ! ${imgUrl}: ${e.message}`);
    }
  }
  console.log(`  saved ${saved}`);
}

fs.writeFileSync(path.join(destDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`\nDone. ${manifest.length} images in ${path.relative(process.cwd(), destDir)}`);
console.log(`Next: pick the best ones and rename into public/sections/ as slot names`);
console.log(`(hero, step, practice, doctor, who-we-help, how-we-help, instagram, cta, testimonial, location).`);
