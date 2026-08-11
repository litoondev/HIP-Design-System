/**
 * Icon size tokens — single source of truth for the docs table.
 *
 * A responsive collection: unlike Global Radius, every token carries a different value
 * per breakpoint, so an icon scales with the layout instead of staying visually huge on
 * a phone. The three values map to the same breakpoints the rest of the system uses —
 * Desktop 1440, Tablet 768, Mobile 320.
 *
 * The values themselves are published as CSS variables in app/globals.css
 * (`--icon-xs` … `--icon-max`), where the media queries live. Consume a token as
 * `var(--icon-lg)`, never a hardcoded px size.
 *
 * `--btn-icon-size` is an alias of `--icon-md` — the button icon size was already
 * 20 / 20 / 16, which is exactly this token.
 */

export interface IconSizeToken {
  /** Token name without the `--` prefix, e.g. `icon-lg`. */
  name: string;
  /** px at Desktop (≥769). */
  desktop: number;
  /** px at Tablet (521–768). */
  tablet: number;
  /** px at Mobile (≤520). */
  mobile: number;
  /** Where a size of this weight belongs — guidance, not a hard rule. */
  usage: string;
  /** Set when the project already consumes this token under another name. */
  aliasedBy?: string;
}

/** All 12 tokens, smallest to largest. */
export const iconSizes: IconSizeToken[] = [
  {
    name: "icon-xs",
    desktop: 14,
    tablet: 12,
    mobile: 12,
    usage: "Inline meta and captions — timestamps, small indicators, table affordances",
  },
  {
    name: "icon-sm",
    desktop: 16,
    tablet: 16,
    mobile: 14,
    usage: "Inline with body copy — bullet markers, link glyphs, form field icons",
  },
  {
    name: "icon-md",
    desktop: 20,
    tablet: 20,
    mobile: 16,
    usage: "Buttons and nav links — the default UI icon size",
    aliasedBy: "--btn-icon-size",
  },
  {
    name: "icon-lg",
    desktop: 24,
    tablet: 24,
    mobile: 20,
    usage: "Utility bar and social icons, input adornments, list-row leading icons",
  },
  {
    name: "icon-xl",
    desktop: 32,
    tablet: 28,
    mobile: 24,
    usage: "Card and tab icons — first size that reads as a graphic rather than a glyph",
  },
  {
    name: "icon-2xl",
    desktop: 48,
    tablet: 40,
    mobile: 32,
    usage: "Highlight tiles, trust badges, feature-row icons",
  },
  {
    name: "icon-3xl",
    desktop: 64,
    tablet: 48,
    mobile: 40,
    usage: "Step markers and service card icons",
  },
  {
    name: "icon-4xl",
    desktop: 80,
    tablet: 64,
    mobile: 48,
    usage: "Section feature icons that anchor a column of copy",
  },
  {
    name: "icon-5xl",
    desktop: 96,
    tablet: 80,
    mobile: 64,
    usage: "Supporting graphics beside a heading; large empty-state marks",
  },
  {
    name: "icon-6xl",
    desktop: 128,
    tablet: 96,
    mobile: 80,
    usage: "Decorative marks — the icon is the focal point of its block",
  },
  {
    name: "icon-7xl",
    desktop: 160,
    tablet: 128,
    mobile: 96,
    usage: "Oversized display icons in hero and CTA compositions",
  },
  {
    name: "icon-max",
    desktop: 200,
    tablet: 160,
    mobile: 128,
    usage: "Full-bleed decorative / watermark marks — one per section at most",
  },
];

/** The CSS variable that carries an icon size token, e.g. `--icon-lg`. */
export function iconSizeVar(name: string): string {
  return `--${name}`;
}
