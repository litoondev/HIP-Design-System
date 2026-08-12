import { sectionImage, type ImageSlot } from "./sectionImages";
import styles from "./SectionImage.module.css";

interface SectionImageProps {
  slot: ImageSlot;
  /** optional per-instance file, e.g. how-we-help-braces.jpg */
  variant?: string;
  /** the caption shown inside the placeholder image */
  label: string;
  /** the section's own placeholder class(es), e.g. styles.hipStepsImg */
  className: string;
  alt?: string;
}

/**
 * The no-photo state is still a real <img> tag: an inline SVG placeholder (neutral
 * ground, image glyph, slot label) so the DOM is identical with and without a photo —
 * whatever is in public/sections/ simply swaps the src.
 * Grays are hardcoded because CSS variables can't reach into an SVG data URI; they
 * mirror gray-100/300/400 from the neutral ramp.
 */
function placeholderSrc(label: string): string {
  const text = label.toUpperCase().replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">` +
    `<rect width="400" height="300" fill="#f5f5f5"/>` +
    `<g transform="translate(168,108)" fill="none" stroke="#d4d4d4" stroke-width="4">` +
    `<rect x="0" y="0" width="64" height="52" rx="6"/>` +
    `<circle cx="18" cy="16" r="7" fill="#d4d4d4" stroke="none"/>` +
    `<path d="M4 44 22 28 34 38 48 22 60 44" stroke-linejoin="round"/>` +
    `</g>` +
    `<text x="200" y="196" text-anchor="middle" fill="#a3a3a3" ` +
    `font-family="Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">${text}</text>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * One image slot. With nothing in public/sections/ it renders an <img> pointing at the
 * inline SVG placeholder; once a file is there the same <img> renders the photo instead.
 */
export default function SectionImage({
  slot,
  variant,
  label,
  className,
  alt,
}: SectionImageProps) {
  const src = sectionImage(slot, variant);

  return (
    <div className={`${className} ${styles.filled}`}>
      {/* Plain <img>: these are fixed-frame design references, so next/image's layout and
          optimisation machinery buys nothing here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.img} src={src ?? placeholderSrc(label)} alt={alt ?? label} />
    </div>
  );
}
