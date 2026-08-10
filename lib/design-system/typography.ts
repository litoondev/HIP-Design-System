import type { ElementType } from "react";
import type { TextColorRole } from "@/lib/colors";

/**
 * HIP typography design system — tokens + responsive variant definitions.
 *
 * Transcribed from the Figma "Global Fonts" style guide (node 7383:49362). Every style is
 * defined at three explicit breakpoints; this is NOT a scaled ramp, each breakpoint carries
 * its own font-size / line-height / letter-spacing.
 *
 *   base (no prefix)  mobile   0–767px
 *   md:               tablet   768–1023px
 *   lg:               desktop  1024px+
 *
 * Layering:
 *   1. primitive tokens  — fontFamilies / fontWeights / fontSizes / lineHeights / letterSpacings
 *   2. variant tokens    — typographyTokens: each style names the primitives it composes
 *   3. class strings     — typographyVariants: built from the above, consumed by <Typography>
 *
 * Every primitive is written as a complete literal Tailwind class (including the `md:`/`lg:`
 * prefix) rather than assembled from a prefix at runtime. Tailwind's JIT scanner reads source
 * text, so a class it never sees written out is a class it never generates — `md:` + `text-[48px]`
 * concatenated at runtime would type-check, render, and silently have no CSS behind it.
 * This file is in tailwind.config.ts `content` so these literals get picked up.
 */

/* ------------------------------------------------------------------ *
 * 1. Primitive tokens
 * ------------------------------------------------------------------ */

/**
 * The Figma "Font Family" variable collection, one entry per variable:
 *
 *   header -> Figtree
 *   body   -> Inter
 *
 * Keyed by the variable name rather than by the typeface, because that is what a variant
 * actually references — `fontFamily: "header"` is a role, so retargeting the collection to a
 * different typeface moves every style that points at it without touching a single variant.
 *
 * Both families are already configured in tailwind.config.ts (`fontFamily.header` / `.body`)
 * and loaded once by app/layout.tsx via next/font/google; the stacks are not restated here.
 */
export const fontFamilyTokens = {
  header: { family: "Figtree", className: "font-header", cssVar: "--font-figtree" },
  body: { family: "Inter", className: "font-body", cssVar: "--font-inter" },
} as const;

export type FontFamilyToken = keyof typeof fontFamilyTokens;

/** token -> Tailwind class, the form the variant composer consumes. */
export const fontFamilies = {
  header: fontFamilyTokens.header.className,
  body: fontFamilyTokens.body.className,
} as const satisfies Record<FontFamilyToken, string>;

/** Display name of the typeface behind a token — "Figtree" / "Inter". */
export function fontFamilyName(token: FontFamilyToken): string {
  return fontFamilyTokens[token].family;
}

/**
 * Only the two weights the reference actually uses. Both are already loaded for both
 * families, so no new font payload.
 */
export const fontWeights = {
  regular: "font-[400]",
  bold: "font-[700]",
} as const;

export type FontWeightToken = keyof typeof fontWeights;

/** Numeric weight behind each token — used by the style-guide spec tables. */
export const fontWeightValues = {
  regular: 400,
  bold: 700,
} as const satisfies Record<FontWeightToken, number>;

/**
 * Text Color roles as utility classes. `text-textcolor-body` compiles to
 * `color: var(--color-textcolor-body)`, which lib/colors.ts aliases to --color-gray-600
 * (colors/Base/Gray Main) — so the variant references the role, never the value, and
 * retargeting the role in lib/colors.ts moves every body paragraph with it.
 */
export const textColorClasses = {
  preheader: "text-textcolor-preheader",
  h2: "text-textcolor-h2",
  h3: "text-textcolor-h3",
  h4: "text-textcolor-h4",
  h5: "text-textcolor-h5",
  body: "text-textcolor-body",
  link: "text-textcolor-link",
} as const satisfies Record<TextColorRole, string>;

export const textTransforms = {
  uppercase: "uppercase",
  none: "normal-case",
} as const;

export type TextTransformToken = keyof typeof textTransforms;

/** Every font size in the reference, in px. Keys are the px value. */
export type FontSizeToken =
  | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 28 | 30 | 32
  | 36 | 38 | 40 | 42 | 48 | 54 | 56 | 72 | 100 | 120;

export const fontSizes: Record<"mobile" | "tablet" | "desktop", Record<FontSizeToken, string>> = {
  mobile: {
    10: "text-[10px]", 12: "text-[12px]", 14: "text-[14px]", 16: "text-[16px]",
    18: "text-[18px]", 20: "text-[20px]", 22: "text-[22px]", 24: "text-[24px]",
    28: "text-[28px]", 30: "text-[30px]", 32: "text-[32px]", 36: "text-[36px]",
    38: "text-[38px]", 40: "text-[40px]", 42: "text-[42px]", 48: "text-[48px]",
    54: "text-[54px]", 56: "text-[56px]", 72: "text-[72px]", 100: "text-[100px]",
    120: "text-[120px]",
  },
  tablet: {
    10: "md:text-[10px]", 12: "md:text-[12px]", 14: "md:text-[14px]", 16: "md:text-[16px]",
    18: "md:text-[18px]", 20: "md:text-[20px]", 22: "md:text-[22px]", 24: "md:text-[24px]",
    28: "md:text-[28px]", 30: "md:text-[30px]", 32: "md:text-[32px]", 36: "md:text-[36px]",
    38: "md:text-[38px]", 40: "md:text-[40px]", 42: "md:text-[42px]", 48: "md:text-[48px]",
    54: "md:text-[54px]", 56: "md:text-[56px]", 72: "md:text-[72px]", 100: "md:text-[100px]",
    120: "md:text-[120px]",
  },
  desktop: {
    10: "lg:text-[10px]", 12: "lg:text-[12px]", 14: "lg:text-[14px]", 16: "lg:text-[16px]",
    18: "lg:text-[18px]", 20: "lg:text-[20px]", 22: "lg:text-[22px]", 24: "lg:text-[24px]",
    28: "lg:text-[28px]", 30: "lg:text-[30px]", 32: "lg:text-[32px]", 36: "lg:text-[36px]",
    38: "lg:text-[38px]", 40: "lg:text-[40px]", 42: "lg:text-[42px]", 48: "lg:text-[48px]",
    54: "lg:text-[54px]", 56: "lg:text-[56px]", 72: "lg:text-[72px]", 100: "lg:text-[100px]",
    120: "lg:text-[120px]",
  },
};

/** Every line height in the reference, in px. Keys are the px value. */
export type LineHeightToken =
  | 15 | 18 | 20 | 22 | 24 | 26 | 27 | 28 | 30 | 33 | 34 | 36
  | 40 | 44 | 46 | 50 | 56 | 68 | 72 | 100 | 140;

export const lineHeights: Record<"mobile" | "tablet" | "desktop", Record<LineHeightToken, string>> = {
  mobile: {
    15: "leading-[15px]", 18: "leading-[18px]", 20: "leading-[20px]", 22: "leading-[22px]",
    24: "leading-[24px]", 26: "leading-[26px]", 27: "leading-[27px]", 28: "leading-[28px]",
    30: "leading-[30px]", 33: "leading-[33px]", 34: "leading-[34px]", 36: "leading-[36px]",
    40: "leading-[40px]", 44: "leading-[44px]", 46: "leading-[46px]", 50: "leading-[50px]",
    56: "leading-[56px]", 68: "leading-[68px]", 72: "leading-[72px]", 100: "leading-[100px]",
    140: "leading-[140px]",
  },
  tablet: {
    15: "md:leading-[15px]", 18: "md:leading-[18px]", 20: "md:leading-[20px]", 22: "md:leading-[22px]",
    24: "md:leading-[24px]", 26: "md:leading-[26px]", 27: "md:leading-[27px]", 28: "md:leading-[28px]",
    30: "md:leading-[30px]", 33: "md:leading-[33px]", 34: "md:leading-[34px]", 36: "md:leading-[36px]",
    40: "md:leading-[40px]", 44: "md:leading-[44px]", 46: "md:leading-[46px]", 50: "md:leading-[50px]",
    56: "md:leading-[56px]", 68: "md:leading-[68px]", 72: "md:leading-[72px]", 100: "md:leading-[100px]",
    140: "md:leading-[140px]",
  },
  desktop: {
    15: "lg:leading-[15px]", 18: "lg:leading-[18px]", 20: "lg:leading-[20px]", 22: "lg:leading-[22px]",
    24: "lg:leading-[24px]", 26: "lg:leading-[26px]", 27: "lg:leading-[27px]", 28: "lg:leading-[28px]",
    30: "lg:leading-[30px]", 33: "lg:leading-[33px]", 34: "lg:leading-[34px]", 36: "lg:leading-[36px]",
    40: "lg:leading-[40px]", 44: "lg:leading-[44px]", 46: "lg:leading-[46px]", 50: "lg:leading-[50px]",
    56: "lg:leading-[56px]", 68: "lg:leading-[68px]", 72: "lg:leading-[72px]", 100: "lg:leading-[100px]",
    140: "lg:leading-[140px]",
  },
};

/**
 * The five tracking values in the reference. Named rather than keyed by px because "0.75px"
 * is not a legal object key without quoting, and the names read better at the call site.
 */
export type LetterSpacingToken = "none" | "sm" | "md" | "lg" | "xl";

/** px value behind each tracking token — used by the style-guide spec table. */
export const letterSpacingPx: Record<LetterSpacingToken, number> = {
  none: 0,
  sm: 0.5,
  md: 0.75,
  lg: 1.25,
  xl: 3,
};

export const letterSpacings: Record<
  "mobile" | "tablet" | "desktop",
  Record<LetterSpacingToken, string>
> = {
  mobile: {
    none: "tracking-[0px]",
    sm: "tracking-[0.5px]",
    md: "tracking-[0.75px]",
    lg: "tracking-[1.25px]",
    xl: "tracking-[3px]",
  },
  tablet: {
    none: "md:tracking-[0px]",
    sm: "md:tracking-[0.5px]",
    md: "md:tracking-[0.75px]",
    lg: "md:tracking-[1.25px]",
    xl: "md:tracking-[3px]",
  },
  desktop: {
    none: "lg:tracking-[0px]",
    sm: "lg:tracking-[0.5px]",
    md: "lg:tracking-[0.75px]",
    lg: "lg:tracking-[1.25px]",
    xl: "lg:tracking-[3px]",
  },
};

/* ------------------------------------------------------------------ *
 * 2. Variant definitions
 * ------------------------------------------------------------------ */

export const breakpoints = ["mobile", "tablet", "desktop"] as const;
export type Breakpoint = (typeof breakpoints)[number];

/** Min-widths that must stay in step with tailwind `screens.md` / `screens.lg`. */
export const breakpointMinWidth: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

/** One breakpoint's metrics, as token references. */
export interface TypeStep {
  fontSize: FontSizeToken;
  lineHeight: LineHeightToken;
  letterSpacing: LetterSpacingToken;
}

export interface TypographyDefinition {
  /** Name as it appears in the Figma style list. */
  label: string;
  fontFamily: FontFamilyToken;
  fontWeight: FontWeightToken;
  /**
   * Default text colour, named as a Text Color role rather than a colour. Only the standard
   * body-copy variants carry one — see the note on `typographyTokens` below. `className` still
   * wins, so body copy on a dark surface overrides it with the approved on-colour token.
   */
  textColor?: TextColorRole;
  /** Applied by the style itself, not left to the content. Omitted where not specified. */
  textTransform?: TextTransformToken;
  /** Default element when `as` is not passed. Appearance and semantics stay independent. */
  defaultTag: ElementType;
  mobile: TypeStep;
  tablet: TypeStep;
  desktop: TypeStep;
}

/**
 * Every style in the reference. Values are token references, not raw CSS — a size that
 * isn't in the scale is a type error rather than a one-off number.
 *
 * Heading colors stay absent. Figma pins Header 3 / Header 5 to Primary and Header 4 to
 * Secondary, but those are color decisions, not type decisions; they stay available as the
 * existing `text-textcolor-h3` / `-h4` / `-h5` tokens and are passed via `className`, so a
 * heading can be recolored for a dark section without forking the type style.
 *
 * The three standard body-copy variants are the exception: body1, body2 and innerpageBody
 * default to the `body` Text Color role — colors/Base/Gray Main, an alias of --color-gray-600.
 * That is the design system's answer for normal content text, so a paragraph should not have
 * to restate it. It is a role reference, never a value, and `className` still overrides it for
 * copy on a dark or brand-colored surface.
 */
export const typographyTokens = {
  mainHeader: {
    label: "Main Header",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h1",
    mobile: { fontSize: 40, lineHeight: 40, letterSpacing: "none" },
    tablet: { fontSize: 56, lineHeight: 68, letterSpacing: "none" },
    desktop: { fontSize: 100, lineHeight: 100, letterSpacing: "none" },
  },
  header1: {
    label: "Header 1",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h1",
    mobile: { fontSize: 36, lineHeight: 44, letterSpacing: "none" },
    tablet: { fontSize: 48, lineHeight: 56, letterSpacing: "none" },
    desktop: { fontSize: 72, lineHeight: 72, letterSpacing: "none" },
  },
  header2: {
    label: "Header 2",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h2",
    mobile: { fontSize: 32, lineHeight: 40, letterSpacing: "none" },
    tablet: { fontSize: 42, lineHeight: 50, letterSpacing: "none" },
    desktop: { fontSize: 56, lineHeight: 68, letterSpacing: "none" },
  },
  h2Inner: {
    label: "H2 Inner",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h2",
    mobile: { fontSize: 30, lineHeight: 40, letterSpacing: "none" },
    tablet: { fontSize: 38, lineHeight: 50, letterSpacing: "none" },
    desktop: { fontSize: 54, lineHeight: 68, letterSpacing: "none" },
  },
  h2Alt: {
    label: "H2 Alt",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h2",
    mobile: { fontSize: 32, lineHeight: 40, letterSpacing: "none" },
    tablet: { fontSize: 42, lineHeight: 50, letterSpacing: "none" },
    desktop: { fontSize: 120, lineHeight: 140, letterSpacing: "none" },
  },
  header3: {
    label: "Header 3",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h3",
    mobile: { fontSize: 28, lineHeight: 36, letterSpacing: "none" },
    tablet: { fontSize: 36, lineHeight: 36, letterSpacing: "none" },
    desktop: { fontSize: 42, lineHeight: 56, letterSpacing: "none" },
  },
  header4: {
    label: "Header 4",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h4",
    mobile: { fontSize: 24, lineHeight: 34, letterSpacing: "none" },
    tablet: { fontSize: 28, lineHeight: 40, letterSpacing: "none" },
    desktop: { fontSize: 32, lineHeight: 46, letterSpacing: "none" },
  },
  h4Alt: {
    label: "h4 alt",
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h4",
    mobile: { fontSize: 24, lineHeight: 34, letterSpacing: "none" },
    tablet: { fontSize: 28, lineHeight: 40, letterSpacing: "none" },
    desktop: { fontSize: 32, lineHeight: 46, letterSpacing: "none" },
  },
  header5: {
    label: "Header 5",
    fontFamily: "header",
    fontWeight: "bold",
    // The reference renders this style in caps; Header 3 and 4 alongside it are not.
    textTransform: "uppercase",
    defaultTag: "h5",
    mobile: { fontSize: 20, lineHeight: 28, letterSpacing: "none" },
    tablet: { fontSize: 22, lineHeight: 30, letterSpacing: "none" },
    desktop: { fontSize: 24, lineHeight: 34, letterSpacing: "none" },
  },
  h6: {
    label: "H6",
    // Last style in the header group — Main Header through H6 are all Figtree.
    fontFamily: "header",
    fontWeight: "bold",
    defaultTag: "h6",
    mobile: { fontSize: 16, lineHeight: 22, letterSpacing: "sm" },
    tablet: { fontSize: 18, lineHeight: 28, letterSpacing: "sm" },
    desktop: { fontSize: 20, lineHeight: 30, letterSpacing: "sm" },
  },
  postTitle: {
    label: "Post Title",
    fontFamily: "body",
    fontWeight: "bold",
    defaultTag: "h2",
    mobile: { fontSize: 24, lineHeight: 34, letterSpacing: "none" },
    tablet: { fontSize: 28, lineHeight: 40, letterSpacing: "none" },
    desktop: { fontSize: 32, lineHeight: 44, letterSpacing: "none" },
  },
  subtitle: {
    label: "Subtitle",
    fontFamily: "body",
    fontWeight: "bold",
    // Subtitle is set in caps in the reference; Subtitle Alt is the same metrics without it.
    textTransform: "uppercase",
    defaultTag: "p",
    mobile: { fontSize: 18, lineHeight: 28, letterSpacing: "md" },
    tablet: { fontSize: 22, lineHeight: 33, letterSpacing: "md" },
    desktop: { fontSize: 24, lineHeight: 36, letterSpacing: "md" },
  },
  subtitleAlt: {
    label: "Subtitle Alt",
    fontFamily: "body",
    fontWeight: "bold",
    defaultTag: "p",
    mobile: { fontSize: 18, lineHeight: 28, letterSpacing: "md" },
    tablet: { fontSize: 22, lineHeight: 33, letterSpacing: "md" },
    desktop: { fontSize: 24, lineHeight: 36, letterSpacing: "md" },
  },
  strong1: {
    label: "Strong 1",
    fontFamily: "body",
    fontWeight: "bold",
    defaultTag: "strong",
    mobile: { fontSize: 16, lineHeight: 22, letterSpacing: "sm" },
    tablet: { fontSize: 18, lineHeight: 28, letterSpacing: "sm" },
    desktop: { fontSize: 20, lineHeight: 30, letterSpacing: "sm" },
  },
  strong2: {
    label: "Strong 2",
    fontFamily: "body",
    fontWeight: "bold",
    defaultTag: "strong",
    mobile: { fontSize: 14, lineHeight: 22, letterSpacing: "sm" },
    tablet: { fontSize: 16, lineHeight: 24, letterSpacing: "sm" },
    desktop: { fontSize: 18, lineHeight: 27, letterSpacing: "sm" },
  },
  menuItem: {
    label: "Menu Item",
    fontFamily: "body",
    fontWeight: "regular",
    defaultTag: "span",
    mobile: { fontSize: 14, lineHeight: 22, letterSpacing: "sm" },
    tablet: { fontSize: 16, lineHeight: 24, letterSpacing: "sm" },
    desktop: { fontSize: 18, lineHeight: 26, letterSpacing: "sm" },
  },
  menuItemAlt: {
    label: "Menu Item Alt",
    fontFamily: "body",
    fontWeight: "regular",
    defaultTag: "span",
    mobile: { fontSize: 14, lineHeight: 22, letterSpacing: "sm" },
    tablet: { fontSize: 16, lineHeight: 24, letterSpacing: "sm" },
    desktop: { fontSize: 18, lineHeight: 26, letterSpacing: "sm" },
  },
  preHeader: {
    label: "Pre-Header",
    // The one style after H6 that stays on the header family — it sits directly above a
    // heading and is set in the same typeface as the heading it introduces.
    fontFamily: "header",
    fontWeight: "bold",
    textTransform: "uppercase",
    defaultTag: "span",
    mobile: { fontSize: 12, lineHeight: 18, letterSpacing: "xl" },
    tablet: { fontSize: 14, lineHeight: 20, letterSpacing: "xl" },
    desktop: { fontSize: 16, lineHeight: 24, letterSpacing: "xl" },
  },
  button: {
    label: "Button",
    fontFamily: "body",
    fontWeight: "bold",
    defaultTag: "span",
    // Tracking is the one thing that moves per breakpoint here: 0 -> 0.5 -> 1.25px.
    mobile: { fontSize: 16, lineHeight: 24, letterSpacing: "none" },
    tablet: { fontSize: 18, lineHeight: 28, letterSpacing: "sm" },
    desktop: { fontSize: 20, lineHeight: 30, letterSpacing: "lg" },
  },
  overline: {
    label: "Over Line",
    fontFamily: "body",
    fontWeight: "bold",
    textTransform: "uppercase",
    defaultTag: "span",
    // The only style that is identical at all three breakpoints.
    mobile: { fontSize: 14, lineHeight: 20, letterSpacing: "lg" },
    tablet: { fontSize: 14, lineHeight: 20, letterSpacing: "lg" },
    desktop: { fontSize: 14, lineHeight: 20, letterSpacing: "lg" },
  },
  innerpageBody: {
    label: "Innerpage Body",
    fontFamily: "body",
    fontWeight: "regular",
    /* Normal content text — colors/Base/Gray Main. */
    textColor: "body",
    defaultTag: "p",
    mobile: { fontSize: 16, lineHeight: 24, letterSpacing: "none" },
    tablet: { fontSize: 18, lineHeight: 28, letterSpacing: "none" },
    desktop: { fontSize: 20, lineHeight: 28, letterSpacing: "none" },
  },
  label: {
    label: "Label",
    fontFamily: "body",
    fontWeight: "regular",
    defaultTag: "span",
    mobile: { fontSize: 14, lineHeight: 18, letterSpacing: "none" },
    tablet: { fontSize: 16, lineHeight: 20, letterSpacing: "none" },
    desktop: { fontSize: 16, lineHeight: 20, letterSpacing: "none" },
  },
  body1: {
    label: "Body1",
    fontFamily: "body",
    fontWeight: "regular",
    /* Normal content text — colors/Base/Gray Main. */
    textColor: "body",
    defaultTag: "p",
    mobile: { fontSize: 16, lineHeight: 24, letterSpacing: "none" },
    tablet: { fontSize: 18, lineHeight: 28, letterSpacing: "none" },
    desktop: { fontSize: 20, lineHeight: 30, letterSpacing: "none" },
  },
  body2: {
    label: "Body2",
    fontFamily: "body",
    fontWeight: "regular",
    /* Normal content text — colors/Base/Gray Main. */
    textColor: "body",
    defaultTag: "p",
    mobile: { fontSize: 14, lineHeight: 20, letterSpacing: "none" },
    tablet: { fontSize: 16, lineHeight: 24, letterSpacing: "none" },
    desktop: { fontSize: 18, lineHeight: 28, letterSpacing: "none" },
  },
  caption: {
    label: "Caption",
    fontFamily: "body",
    fontWeight: "regular",
    defaultTag: "span",
    mobile: { fontSize: 14, lineHeight: 20, letterSpacing: "none" },
    tablet: { fontSize: 16, lineHeight: 22, letterSpacing: "none" },
    desktop: { fontSize: 16, lineHeight: 22, letterSpacing: "none" },
  },
  tooltip: {
    label: "Tooltip",
    fontFamily: "body",
    fontWeight: "regular",
    defaultTag: "span",
    mobile: { fontSize: 10, lineHeight: 15, letterSpacing: "none" },
    tablet: { fontSize: 12, lineHeight: 18, letterSpacing: "none" },
    desktop: { fontSize: 12, lineHeight: 18, letterSpacing: "none" },
  },
} as const satisfies Record<string, TypographyDefinition>;

export type TypographyVariant = keyof typeof typographyTokens;

/** Declaration order, which is the order the Figma style list uses. */
export const typographyVariantNames = Object.keys(typographyTokens) as TypographyVariant[];

/**
 * Widened accessor. Indexing `typographyTokens` directly yields that entry's literal type,
 * where `textTransform` is absent rather than optional, so reading it off a dynamic variant
 * needs the widened shape.
 */
export function getTypographyDefinition(variant: TypographyVariant): TypographyDefinition {
  return typographyTokens[variant];
}

/* ------------------------------------------------------------------ *
 * 3. Composed class strings
 * ------------------------------------------------------------------ */

const sameStep = (a: TypeStep, b: TypeStep): boolean =>
  a.fontSize === b.fontSize && a.lineHeight === b.lineHeight && a.letterSpacing === b.letterSpacing;

function stepClasses(step: TypeStep, bp: Breakpoint): string[] {
  return [
    fontSizes[bp][step.fontSize],
    lineHeights[bp][step.lineHeight],
    letterSpacings[bp][step.letterSpacing],
  ];
}

/** Composes one variant's full class string from its token references. */
function buildVariantClass(def: TypographyDefinition): string {
  const classes: string[] = [
    fontFamilies[def.fontFamily],
    fontWeights[def.fontWeight],
    ...(def.textTransform ? [textTransforms[def.textTransform]] : []),
    // Emitted first so a `className` colour still wins the tailwind-merge.
    ...(def.textColor ? [textColorClasses[def.textColor]] : []),
    ...stepClasses(def.mobile, "mobile"),
  ];

  // A breakpoint that renders identically to the one below it needs no classes of its own —
  // `overline` is unchanged across all three and so emits only its mobile step.
  if (!sameStep(def.tablet, def.mobile)) classes.push(...stepClasses(def.tablet, "tablet"));
  if (!sameStep(def.desktop, def.tablet)) classes.push(...stepClasses(def.desktop, "desktop"));

  return classes.join(" ");
}

/**
 * variant -> complete Tailwind class string. This is what <Typography> applies, and what to
 * reach for when a component can't be used (a slot that only accepts a className).
 */
export const typographyVariants = Object.fromEntries(
  typographyVariantNames.map((name) => [name, buildVariantClass(typographyTokens[name])])
) as Record<TypographyVariant, string>;

/* ------------------------------------------------------------------ *
 * 4. Property-level override tokens
 * ------------------------------------------------------------------ */

/**
 * Escape hatches for <Typography weight=… lineHeight=… letterSpacing=…>. Each emits the
 * token at all three breakpoints, otherwise a base-level `leading-[24px]` would be overruled
 * by the variant's own `md:`/`lg:` classes from 768px up and the override would look broken
 * on exactly the screens it wasn't tested on.
 */
export function lineHeightOverride(token: LineHeightToken): string {
  return `${lineHeights.mobile[token]} ${lineHeights.tablet[token]} ${lineHeights.desktop[token]}`;
}

export function letterSpacingOverride(token: LetterSpacingToken): string {
  return `${letterSpacings.mobile[token]} ${letterSpacings.tablet[token]} ${letterSpacings.desktop[token]}`;
}
