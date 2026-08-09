/**
 * Project color system — single source of truth.
 *
 * Change a base color here and every 50–950 shade regenerates automatically.
 * Rules:
 *  - 500 is ALWAYS the exact base color (base lock — the brand source wins).
 *  - Shades are generated in OKLCH: hue stays fixed, lightness moves toward the
 *    tint/shade extremes, chroma tapers naturally so the color family never
 *    turns muddy or gray.
 */

export const baseColors = {
  primary: "#320270", // Royal Amethyst
  secondary: "#1fc3df", // Aqua Pulse
  tertiary: "#1895a7", // Pacific Glass
  accent: "#ffcf18", // Solar Flare
  cta: "#320270", // Royal Amethyst (CTA = Primary in this project)
  gray: "#717680", // Slate Horizon
} as const;

export type BrandColor = keyof typeof baseColors;

/**
 * Non-ramp color tokens. They live here rather than inline in tailwind.config.ts so the
 * Tailwind theme and the generated CSS variables are guaranteed to name the same colors.
 */
export const baseNeutrals = {
  white: "#ffffff", // Pure White
  black: "#000000", // Pure Black
  lightgray: "#ced0d3", // Lunar Fog
  gray: "#717680", // Slate Horizon
} as const;

/** Dark bar / footer ground. */
export const navy = "#0e1f35";

/**
 * Absolute endpoints of the palette. They carry no 50–950 ramp — they are the extremes,
 * and they are ALIASES of the base neutrals rather than copies: --color-black resolves
 * through --color-base-black, so retargeting Base Black moves the endpoint with it.
 */
export const endpointAliases = {
  black: "base-black",
  white: "base-white",
} as const;

/** Endpoint values, resolved from the base neutrals they alias. */
export const endpointColors = {
  black: baseNeutrals.black,
  white: baseNeutrals.white,
} as const;

/**
 * Ink used ON a swatch — which one applies is decided by measured contrast (textOn), never
 * by hand. They exist as tokens so a label color never lands in a style attribute as a raw
 * value: DevTools shows var(--color-ink-light), not rgb(255, 255, 255).
 */
export const inkColors = {
  /** For dark grounds. */
  light: "#ffffff",
  /** For light grounds. */
  dark: "#111827",
} as const;

/**
 * Semantic text tokens. Each one is an ALIAS of a primitive token, not a color of its own —
 * the same relationship Figma shows as {primary/500}. Storing the reference instead of a
 * repeated hex means changing a brand color moves every role that points at it, and the
 * two can never fall out of step.
 *
 * Roles: preheader/h5/link = CTA (which is itself primary), h3 = Primary,
 * h4 = Secondary, h2 = Black, body = Gray Main.
 */
export const textColors = {
  preheader: "cta",
  h2: "black",
  h3: "primary",
  h4: "secondary",
  h5: "cta",
  body: "gray",
  link: "cta",
} as const;

export type TextColorRole = keyof typeof textColors;

/**
 * Ramps that are aliases of another ramp rather than their own color. CTA has always been
 * "Primary under a different name" in this project; saying so here makes it structural
 * instead of two hexes that happen to match.
 */
export const rampAliases: Partial<Record<BrandColor, BrandColor>> = {
  cta: "primary",
};

export const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export type Step = (typeof STEPS)[number];

/* ---------- color math: sRGB <-> OKLCH ---------- */

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c: number): number {
  return c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

function rgbToOklch(hex: string): { L: number; C: number; H: number } {
  const [r, g, b] = hexToRgb(hex).map(srgbToLinear);
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
  const l_ = Math.cbrt(l), m_ = Math.cbrt(m), s_ = Math.cbrt(s);
  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const bb = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  return { L, C: Math.hypot(a, bb), H: (Math.atan2(bb, a) * 180) / Math.PI };
}

function oklchToHex(L: number, C: number, H: number): string {
  // Clamp chroma into the sRGB gamut by binary search if needed.
  const toRgb = (c: number) => {
    const hr = (H * Math.PI) / 180;
    const a = c * Math.cos(hr), b = c * Math.sin(hr);
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.291485548 * b;
    const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
    return [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ];
  };
  const inGamut = (rgb: number[]) => rgb.every((v) => v >= -1e-6 && v <= 1 + 1e-6);

  let rgb = toRgb(C);
  if (!inGamut(rgb)) {
    let lo = 0, hi = C;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      if (inGamut(toRgb(mid))) lo = mid;
      else hi = mid;
    }
    rgb = toRgb(lo);
  }
  return (
    "#" +
    rgb
      .map((v) => {
        const s = Math.round(Math.min(1, Math.max(0, linearToSrgb(v))) * 255)
          .toString(16)
          .padStart(2, "0");
        return s;
      })
      .join("")
  );
}

/* ---------- ramp generation ---------- */

/**
 * Nominal OKLCH lightness of each step on a 50–950 scale. This is what makes the base step
 * detectable: a supplied base color belongs at whichever step its own lightness sits
 * closest to, rather than being forced into a step chosen in advance.
 */
const STEP_LIGHTNESS: Record<Step, number> = {
  50: 0.97,
  100: 0.93,
  200: 0.86,
  300: 0.78,
  400: 0.7,
  500: 0.62,
  600: 0.55,
  700: 0.47,
  800: 0.4,
  900: 0.33,
  950: 0.24,
};

/**
 * Which generated step best represents this base color — the one whose nominal lightness is
 * nearest. A near-black brand color lands at 900, a pastel at 200; nothing assumes 500.
 */
export function detectBaseStep(baseHex: string): Step {
  const { L } = rgbToOklch(baseHex);
  return STEPS.reduce((best, step) =>
    Math.abs(STEP_LIGHTNESS[step] - L) < Math.abs(STEP_LIGHTNESS[best] - L) ? step : best
  );
}

/**
 * Optional per-color override. Set a step here to pin a base color to it and skip
 * detection — useful when a brand insists its color is "the 500" regardless of lightness.
 * Leave empty to let every ramp be detected.
 */
export const baseStepOverrides: Partial<Record<BrandColor, Step>> = {};

/** The step each ramp's base color occupies — detected unless explicitly pinned. */
export const baseSteps: Record<BrandColor, Step> = Object.fromEntries(
  (Object.keys(baseColors) as BrandColor[]).map((name) => [
    name,
    baseStepOverrides[name] ?? detectBaseStep(baseColors[name]),
  ])
) as Record<BrandColor, Step>;

/**
 * Build the 50–950 scale around wherever the base color belongs. Steps lighter than the
 * base interpolate toward a near-white tint, darker ones toward a deep shade; hue is held
 * and chroma tapers so the family never turns muddy. The base step itself is the supplied
 * color, untouched.
 */
export function generateRamp(baseHex: string, baseStep: Step = detectBaseStep(baseHex)) {
  const base = rgbToOklch(baseHex);
  const light = { L: 0.99, C: base.C * 0.15 }; // 50 endpoint direction
  const dark = { L: 0.17, C: base.C * 0.5 }; // 950 endpoint direction

  const lightSpan = STEP_LIGHTNESS[50] - STEP_LIGHTNESS[baseStep];
  const darkSpan = STEP_LIGHTNESS[baseStep] - STEP_LIGHTNESS[950];

  const ramp = {} as Record<Step, string>;
  for (const step of STEPS) {
    if (step === baseStep) {
      ramp[step] = baseHex; // base lock — never altered
      continue;
    }

    const lighter = step < baseStep;
    const span = lighter ? lightSpan : darkSpan;
    const end = lighter ? light : dark;
    /* Fraction of the way from the base to the relevant endpoint, taken from the nominal
       scale so the steps keep their conventional spacing. Guard the degenerate case where
       the base sits on 50 or 950 and one side has no room. */
    const t =
      span <= 0
        ? 0
        : Math.abs(STEP_LIGHTNESS[step] - STEP_LIGHTNESS[baseStep]) / span;

    ramp[step] = oklchToHex(
      base.L + (end.L - base.L) * t,
      base.C + (end.C - base.C) * t,
      base.H
    );
  }
  return ramp;
}

/** All brand ramps, generated from baseColors around their detected base step. */
export const palette: Record<BrandColor, Record<Step, string>> = Object.fromEntries(
  (Object.keys(baseColors) as BrandColor[]).map((name) => [
    name,
    generateRamp(baseColors[name], baseSteps[name]),
  ])
) as Record<BrandColor, Record<Step, string>>;

/* ---------- token references (Figma-style aliases) ---------- */

/**
 * The ramp step that actually holds a ramp's base color — found by scanning the ramp, not
 * assumed. It is 500 today because generateRamp locks the base there, but a reference to
 * a ramp resolves through this, so moving the base to another step (600, say) updates
 * every alias and every label automatically.
 */
export function baseStepOf(name: BrandColor): Step {
  const step = baseSteps[name];
  if (palette[name][step] !== baseColors[name]) {
    throw new Error(`Ramp "${name}" step ${step} does not hold its base color`);
  }
  return step;
}

const RAMP_NAMES = /^(primary|secondary|tertiary|accent|cta|gray)$/;

/**
 * Resolve a token reference to its hex. Accepts a bare ramp name ("cta" → whichever step
 * holds its base), an explicit step ("primary-600"), a base neutral ("base-black"), an
 * endpoint ("black"), or "navy". Throws on an unknown reference so a typo fails the build
 * rather than rendering blank.
 */
export function resolveColorRef(ref: string): string {
  if (RAMP_NAMES.test(ref)) {
    const name = ref as BrandColor;
    return palette[name][baseStepOf(name)];
  }

  const step = ref.match(/^(primary|secondary|tertiary|accent|cta|gray)-(\d+)$/);
  if (step) return palette[step[1] as BrandColor][Number(step[2]) as Step];

  const neutral = ref.match(/^base-(white|black|lightgray|gray)$/);
  if (neutral) return baseNeutrals[neutral[1] as keyof typeof baseNeutrals];

  if (ref === "black" || ref === "white") return endpointColors[ref];
  if (ref === "navy") return navy;

  throw new Error(`Unknown color token reference: ${ref}`);
}

/**
 * The CSS variable a token reference points at. A bare ramp name expands to the step that
 * holds its base — "cta" → --color-cta-500 today, --color-cta-600 if the base moves there.
 */
export function colorRefVar(ref: string): string {
  if (RAMP_NAMES.test(ref)) {
    const name = ref as BrandColor;
    return `--color-${name}-${baseStepOf(name)}`;
  }
  return `--color-${ref}`;
}

/**
 * Typography roles as CSS variable references — this is what Tailwind's theme is built
 * from, so `text-textcolor-body` compiles to `color: var(--color-textcolor-body)` rather
 * than a copied hex. The whole chain stays live all the way down to the utility class:
 * Base Color → base token → ramp step → typography role → utility.
 */
export const textColorVarRefs = Object.fromEntries(
  (Object.keys(textColors) as TextColorRole[]).map((role) => [
    role,
    `var(--color-textcolor-${role})`,
  ])
) as Record<TextColorRole, string>;

/* ---------- CSS custom properties ---------- */

/**
 * The CSS variable that carries a color token, e.g. `--color-primary-100`.
 * Omit the step for the category's base token — `--color-primary-base`, which points at
 * whichever step currently holds the base color.
 */
export function colorVarName(color: BrandColor, step?: Step): string {
  return step === undefined ? `--color-${color}-base` : `--color-${color}-${step}`;
}

/** The ink variable to use on a given ground, chosen by measured contrast. */
export function inkVarOn(bgHex: string): string {
  return textOn(bgHex, inkColors.dark, inkColors.light) === inkColors.dark
    ? "--color-ink-dark"
    : "--color-ink-light";
}

/**
 * The `:root` block that publishes every color token as a CSS variable, generated from
 * the same palette Tailwind is built from — so `--color-primary-100` and the Tailwind
 * `primary-100` token can never disagree. Injected once in app/layout.tsx.
 *
 * Values are plain hex, so a variable drops straight into any CSS declaration:
 *   color: var(--color-primary-500);
 */
export function colorVarsCss(): string {
  const lines: string[] = [];

  for (const name of Object.keys(baseColors) as BrandColor[]) {
    /* An aliased ramp points at its target instead of repeating the values — but only
       while the two genuinely match, so retargeting a base color can never make the
       alias silently lie. */
    const target = rampAliases[name];
    const isAlias = target !== undefined && baseColors[target] === baseColors[name];

    /* The base token carries the actual color; the whole scale is generated from it. */
    lines.push(
      `  ${colorVarName(name)}: ${
        isAlias ? `var(${colorVarName(target!)})` : baseColors[name]
      };`
    );

    const baseStep = baseSteps[name];
    for (const step of STEPS) {
      /* The generated step that IS the base color links back to the base token rather than
         duplicating its hex — change the base and this step follows automatically. */
      const value =
        step === baseStep
          ? `var(${colorVarName(name)})`
          : isAlias
            ? `var(${colorVarName(target!, step)})`
            : palette[name][step];
      lines.push(`  ${colorVarName(name, step)}: ${value};`);
    }
  }

  for (const [key, hex] of Object.entries(baseNeutrals)) {
    lines.push(`  --color-base-${key}: ${hex};`);
  }

  lines.push(`  --color-navy: ${navy};`);

  for (const [key, hex] of Object.entries(inkColors)) {
    lines.push(`  --color-ink-${key}: ${hex};`);
  }

  for (const [key, ref] of Object.entries(endpointAliases)) {
    lines.push(`  --color-${key}: var(--color-${ref});`);
  }

  for (const [role, ref] of Object.entries(textColors)) {
    lines.push(`  --color-textcolor-${role}: var(${colorRefVar(ref)});`);
  }

  return `:root {\n${lines.join("\n")}\n}`;
}

/* ---------- contrast helpers ---------- */

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(srgbToLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(hexA: string, hexB: string): number {
  const la = relativeLuminance(hexA), lb = relativeLuminance(hexB);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/** Pick the label color (dark ink vs white) with the better contrast on a swatch. */
export function textOn(bgHex: string, dark = "#111827", light = "#ffffff"): string {
  return contrastRatio(bgHex, dark) >= contrastRatio(bgHex, light) ? dark : light;
}
