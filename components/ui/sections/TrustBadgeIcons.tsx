import {
  TRUST_BADGE_GLYPHS,
  type TrustBadgeGlyphName,
} from "../icons/trustBadgeGlyphs";

interface TrustBadgeIconProps {
  name: TrustBadgeGlyphName;
  className?: string;
}

/**
 * Renders a trust badge glyph as inline SVG.
 *
 * Inline rather than <img>: it keeps the icon in the server-rendered payload (no extra
 * request, no layout shift) and lets it inherit `currentColor`, so the grid tints it with
 * a DS token. Sized by the caller via className; viewBox plus the default
 * preserveAspectRatio reproduce the source's `object-fit: contain` behaviour.
 *
 * Path data lives in icons/trustBadgeGlyphs.ts, shared with the icon library.
 */
export default function TrustBadgeIcon({ name, className }: TrustBadgeIconProps) {
  const glyph = TRUST_BADGE_GLYPHS[name];

  return (
    <svg
      className={className}
      viewBox={glyph.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {glyph.paths.map((path, i) => (
        <path
          key={i}
          d={path.d}
          fill="currentColor"
          fillRule={path.evenOdd ? "evenodd" : undefined}
          clipRule={path.evenOdd ? "evenodd" : undefined}
        />
      ))}
    </svg>
  );
}
