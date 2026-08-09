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
 * Per-step mix factor toward the light or dark endpoint.
 * Light endpoint: near-white with a whisper of the hue (tint stays in family).
 * Dark endpoint: deep shade that keeps enough chroma to still read as the hue.
 */
const LIGHT_T: Partial<Record<Step, number>> = { 400: 0.26, 300: 0.5, 200: 0.7, 100: 0.88, 50: 0.97 };
const DARK_T: Partial<Record<Step, number>> = { 600: 0.19, 700: 0.38, 800: 0.55, 900: 0.7, 950: 0.85 };

export function generateRamp(baseHex: string): Record<Step, string> {
  const base = rgbToOklch(baseHex);
  const light = { L: 0.99, C: base.C * 0.15 }; // 50 endpoint direction
  const dark = { L: 0.17, C: base.C * 0.5 }; // 950 endpoint direction

  const ramp = {} as Record<Step, string>;
  for (const step of STEPS) {
    if (step === 500) {
      ramp[step] = baseHex; // base lock — never altered
    } else if (step < 500) {
      const t = LIGHT_T[step]!;
      ramp[step] = oklchToHex(base.L + (light.L - base.L) * t, base.C + (light.C - base.C) * t, base.H);
    } else {
      const t = DARK_T[step]!;
      ramp[step] = oklchToHex(base.L + (dark.L - base.L) * t, base.C + (dark.C - base.C) * t, base.H);
    }
  }
  return ramp;
}

/** All brand ramps, generated from baseColors. */
export const palette: Record<BrandColor, Record<Step, string>> = Object.fromEntries(
  (Object.keys(baseColors) as BrandColor[]).map((name) => [name, generateRamp(baseColors[name])])
) as Record<BrandColor, Record<Step, string>>;

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
