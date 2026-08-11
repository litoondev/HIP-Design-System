import type { CSSProperties } from "react";
import { icons } from "./iconData";

/**
 * Renders an icon from the global icon library by name (see /icons for the
 * gallery). The stored markup is normalized so the glyph inherits `currentColor`
 * and fills its box — size it with the `size` prop (defaults to the global
 * --btn-icon-size token) or via a className.
 */
export default function Icon({
  name,
  size,
  className,
}: {
  /** Exact icon name as listed in the icon library. */
  name: string;
  /** CSS size (both dimensions), e.g. "20px" or "var(--btn-icon-size)". */
  size?: string;
  className?: string;
}) {
  const matches = icons.filter((icon) => icon.name === name);
  if (matches.length === 0) {
    throw new Error(`Unknown icon in global library: "${name}"`);
  }
  /**
   * Two entries once shared a name (nine of them did), and the old `.find()` silently
   * returned whichever happened to be first in the array — so `"Arrow Down"` resolved to a
   * solid triangle while the gallery also offered a chevron under that same label, and
   * reordering the data would have changed glyphs across the app with nothing failing.
   * Ambiguity is now a build-time error rather than a silent wrong drawing.
   */
  if (matches.length > 1) {
    throw new Error(
      `Ambiguous icon name "${name}": ${matches.length} entries share it ` +
        `(${matches.map((m) => m.node).join(", ")}). Icon names must be unique.`
    );
  }
  const entry = matches[0];

  const svg = entry.svg
    .replace(/<svg /, '<svg style="display:block;width:100%;height:100%" ')
    .replace(/\s(width|height)="\d+"/g, "")
    .replace(/(fill|stroke)="#[0-9a-fA-F]{3,8}"/g, '$1="currentColor"')
    .replace(/(fill|stroke)="(?:white|black)"/g, '$1="currentColor"');

  /**
   * `size` sets the HEIGHT; the width follows the glyph's own viewBox ratio.
   *
   * Every glyph used to be forced into a square box. That was invisible while the library
   * was 141 square icons, but a wide mark — the HIP wordmark is 134x60, ratio 2.23 — would
   * letterbox inside that square and render at 45% of the height asked for. Deriving width
   * from the viewBox keeps any aspect ratio correct and leaves square icons untouched
   * (ratio 1 -> width === height, the previous behaviour exactly).
   */
  const viewBox = /viewBox="[\d.-]+ [\d.-]+ ([\d.]+) ([\d.]+)"/.exec(entry.svg);
  const ratio = viewBox ? Number(viewBox[1]) / Number(viewBox[2]) : 1;
  const height = size ?? "var(--btn-icon-size)";

  const style: CSSProperties = {
    display: "inline-block",
    // calc() rather than a precomputed px value, so a token size stays live and responsive.
    width: ratio === 1 ? height : `calc(${height} * ${ratio})`,
    height,
    flexShrink: 0,
  };

  return (
    <span
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
