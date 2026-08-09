import fs from "fs";
import path from "path";

/**
 * Image slots in the section designs. Each name matches the Google Drive subfolder the
 * DS note points at, so `Step Section` → "step", `Testimonial Section` → "testimonial".
 */
export type ImageSlot =
  | "hero"
  | "step"
  | "practice"
  | "doctor"
  | "who-we-help"
  | "how-we-help"
  | "instagram"
  | "cta"
  | "testimonial"
  | "location";

const PUBLIC_DIR = path.join(process.cwd(), "public", "sections");
const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif", "svg"];

function findFile(basename: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(PUBLIC_DIR, `${basename}.${ext}`))) {
      return `/sections/${basename}.${ext}`;
    }
  }
  return null;
}

/**
 * Resolves the image for a slot, most specific first:
 *   1. public/sections/<slot>-<variant>.<ext>   e.g. how-we-help-braces.jpg
 *   2. public/sections/<slot>.<ext>             e.g. cta.jpg
 *   3. public/sections/placeholder.<ext>        the one shared stand-in
 * Returns null when none exist, and the section falls back to its gradient box.
 *
 * Resolution happens on the server as the page renders, so in production a newly added
 * file shows up on the next build, not on refresh.
 */
export function sectionImage(slot: ImageSlot, variant?: string): string | null {
  return (
    (variant ? findFile(`${slot}-${variant}`) : null) ?? findFile(slot) ?? findFile("placeholder")
  );
}
