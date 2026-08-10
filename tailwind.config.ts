import type { Config } from "tailwindcss";
import { baseNeutrals, navy, textColorVarRefs, STEPS, type BrandColor } from "./lib/colors";

/**
 * A theme color backed by a CSS variable that still honours Tailwind's `/alpha` modifier.
 *
 * A bare `"var(--x)"` string looks right but silently breaks `bg-white/15`: Tailwind v3 can
 * only inject `--tw-bg-opacity` into a color it can parse into channels, so for a var() it
 * emits no rule at all and the translucency disappears. Returning color-mix for the alpha
 * case keeps the exact same rendered color while leaving the variable as the source.
 *
 * For the plain utility Tailwind passes the `var(--tw-bg-opacity)` placeholder rather than
 * undefined, which is not a number — that case has to fall back to the bare variable too, or
 * every `bg-white` compiles to `color-mix(… NaN% …)` and renders nothing.
 *
 * Tailwind resolves a per-color function at runtime, but its `Config` type only admits plain
 * strings, so the cast is confined here rather than spread across call sites.
 */
const varColor = (name: string): string =>
  (({ opacityValue }: { opacityValue?: string }) => {
    const alpha = Number(opacityValue);
    return opacityValue === undefined || Number.isNaN(alpha)
      ? `var(${name})`
      : `color-mix(in srgb, var(${name}) ${alpha * 100}%, transparent)`;
  }) as unknown as string;

/**
 * A ramp's 50–950 steps, each backed by the CSS variable colorVarsCss() already publishes
 * for it (--color-{name}-{step}) — plus DEFAULT pointing at the base token. Without this,
 * bg-gray-50 / text-gray-400 / border-primary-200 compiled straight to a copied hex, the one
 * gap left after white/black/textcolor were wired through varColor(): the sidebar's grays
 * (colors/Base/Gray Main) would show a baked-in value in DevTools instead of
 * var(--color-gray-400), even though the variable already existed.
 */
const varRamp = (name: BrandColor): Record<(typeof STEPS)[number] | "DEFAULT", string> => {
  const ramp = Object.fromEntries(
    STEPS.map((step) => [step, varColor(`--color-${name}-${step}`)])
  ) as Record<(typeof STEPS)[number], string>;
  return { ...ramp, DEFAULT: varColor(`--color-${name}-base`) };
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // The typography tokens in lib/design-system/typography.ts are written as literal class
    // strings ("md:text-[48px]"). Without this glob the JIT never sees them and the type
    // scale compiles to nothing.
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-figtree)", "Figtree", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        /* `white` / `black` were the one gap in the chain: every other utility resolved to a
           project token, but bg-white/text-black fell through to Tailwind's built-in #fff/#000.
           They now point at the --color-white / --color-black aliases that lib/colors.ts already
           publishes, so retargeting Base White moves them too. Same rendered value, real
           provenance — and no new variable, these two already existed. */
        white: varColor("--color-white"),
        black: varColor("--color-black"),
        /* base / navy / textcolor now come from lib/colors.ts, the same source that
           generates the --color-* CSS variables, so the two can never name different
           colors. Values are unchanged. */
        base: { ...baseNeutrals },
        navy,
        /* Typography roles compile to var(--color-textcolor-*) rather than a copied hex, so
           the utility class itself stays connected to the Foundation palette. Retargeting a
           base color in lib/colors.ts moves every text-textcolor-* usage with it.
           Trade-off: no opacity modifier (text-textcolor-body/50) — none is used. */
        textcolor: { ...textColorVarRefs },
        /* 50–950 ramps auto-generated from lib/colors.ts baseColors.
           Change a base color there and every shade regenerates; 500 is
           always the exact base. */
        primary: varRamp("primary"),
        secondary: varRamp("secondary"),
        tertiary: varRamp("tertiary"),
        accent: varRamp("accent"),
        cta: varRamp("cta"),
        gray: varRamp("gray"),
      },
      borderRadius: {
        "20": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
