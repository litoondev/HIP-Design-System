/**
 * Spacing primitives — single source of truth.
 *
 * Transcribed from the Figma `primitives` collection of Master V3 (test) (Copy),
 * file `lQhaGAYFACOxjyrdMpUJwi`, mode `Mode 1`. 53 tokens, all values in px.
 *
 * This is the PRIMITIVE layer: a flat, mode-agnostic value scale. It does not change
 * per breakpoint. The responsive layer — section padding, grid gaps, the Text Container
 * rhythm — lives in the separate Figma `styles` collection (Desk / Tab / Mobi modes) and
 * is documented by ResponsiveSpacingTable; those semantic tokens alias values from this
 * scale rather than inventing their own.
 *
 * Rule: never write an arbitrary spacing value. Pick the nearest token from this scale.
 */

/** Where a token sits on the scale — the scale changes character as it grows. */
export type SpacingTier = "micro" | "component" | "layout" | "block" | "container";

export interface SpacingToken {
  /** Figma token name, e.g. `spacing/24`. */
  name: string;
  /** Numeric suffix of the token name — also its px value. */
  key: number;
  /** Value in px. */
  px: number;
  tier: SpacingTier;
  /**
   * Off the otherwise clean rhythm of the scale — likely a one-off value that crept in.
   * Flagged for review rather than removed, since some are load-bearing (see `usedFor`).
   */
  offScale?: boolean;
  /** Where this project already consumes the token, if anywhere. */
  usedFor?: string;
}

export const spacingTiers: Record<
  SpacingTier,
  { label: string; range: string; usage: string }
> = {
  micro: {
    label: "Micro",
    range: "0 – 10px",
    usage: "Border widths, icon nudges, optical alignment, tight inline gaps",
  },
  component: {
    label: "Component",
    range: "12 – 40px",
    usage: "Padding and gaps inside a component — buttons, inputs, cards, list rows",
  },
  layout: {
    label: "Layout",
    range: "50 – 120px",
    usage: "Section padding, container gutters, gaps between grid cells",
  },
  block: {
    label: "Block",
    range: "160 – 320px",
    usage: "Section-to-section rhythm, large block offsets, narrow column widths",
  },
  container: {
    label: "Container",
    range: "380 – 1920px",
    usage: "Content column and container widths; the top of the scale mirrors the breakpoints",
  },
};

/**
 * Every raw value in the collection, ascending. Tier and notes are derived below so this
 * list stays a plain transcription of Figma — the only thing to edit when the collection
 * changes.
 */
const values = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 36, 40,
  50, 60, 64, 80, 96, 100, 120, 160, 192, 224, 240, 256, 280, 285, 300, 320, 380, 480, 560,
  640, 688, 720, 768, 1024, 1280, 1440, 1600, 1920,
] as const;

/** Values that break the scale's rhythm — carried through so the docs can flag them. */
const OFF_SCALE = new Set([25, 26, 285, 688]);

/**
 * Tokens this design system already consumes, and where. Sourced from the Responsive
 * Spacing & Layout table and the `:root` token blocks in app/globals.css — so the
 * primitives page shows which values are load-bearing rather than merely available.
 */
const USED_FOR: Record<number, string> = {
  4: "Eyebrow → header gap (mobile)",
  6: "Eyebrow → header gap (tablet)",
  8: "Eyebrow → header gap (desktop)",
  12: "Button padding-y (tablet), button icon gap (tablet)",
  16: "Button padding-y, icon gap and icon size (desktop); paragraph spacing",
  20: "Container gutter (mobile), grid gap (mobile), button icon size",
  24: "Header → paragraph gap (desktop), button padding-x (tablet)",
  30: "Paragraph gap and button-to-button gap (desktop)",
  32: "Button padding-x (desktop)",
  40: "Grid gap and content → button gap (desktop), container gutter (tablet)",
  60: "Section padding-y (tablet)",
  100: "Container gutter (desktop)",
  120: "Section padding-y (desktop)",
  240: "Section-to-section gap (desktop, 120 + 120)",
  280: "Text Container width (mobile)",
  688: "Text Container width (desktop & tablet)",
  768: "Tablet breakpoint",
  1440: "Desktop breakpoint",
};

function tierOf(px: number): SpacingTier {
  if (px <= 10) return "micro";
  if (px <= 40) return "component";
  if (px <= 120) return "layout";
  if (px <= 320) return "block";
  return "container";
}

/** All 53 primitives, ascending. */
export const spacingPrimitives: SpacingToken[] = values.map((px) => ({
  name: `spacing/${px}`,
  key: px,
  px,
  tier: tierOf(px),
  ...(OFF_SCALE.has(px) ? { offScale: true } : {}),
  ...(USED_FOR[px] ? { usedFor: USED_FOR[px] } : {}),
}));

/** Tokens of one tier, ascending — how the docs table groups its rows. */
export function spacingByTier(tier: SpacingTier): SpacingToken[] {
  return spacingPrimitives.filter((token) => token.tier === tier);
}

/** The CSS variable that carries a spacing token, e.g. `--spacing-24`. */
export function spacingVarName(px: number): string {
  return `--spacing-${px}`;
}

/**
 * The `:root` block publishing every primitive as a CSS variable, generated from the same
 * list the docs table renders — so `var(--spacing-24)` and the Spacing Primitives page can
 * never disagree. Injected once in app/layout.tsx, next to colorVarsCss().
 *
 * Deliberately NOT wired into Tailwind's numeric `spacing` scale: that scale is keyed in
 * rem multiples (`p-4` = 16px, `mb-16` = 64px) and is used throughout this project, so
 * overriding key `16` with 16px would silently resize every existing utility. Consume a
 * primitive as `p-[var(--spacing-24)]`, or from CSS as `padding: var(--spacing-24)`.
 */
export function spacingVarsCss(): string {
  const lines = spacingPrimitives.map(
    (token) => `  ${spacingVarName(token.px)}: ${token.px}px;`
  );
  return `:root {\n${lines.join("\n")}\n}`;
}
