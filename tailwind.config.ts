import type { Config } from "tailwindcss";
import { palette, baseColors, baseNeutrals, navy, textColorVarRefs } from "./lib/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-figtree)", "Figtree", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
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
        primary: { ...palette.primary, DEFAULT: baseColors.primary },
        secondary: { ...palette.secondary, DEFAULT: baseColors.secondary },
        tertiary: { ...palette.tertiary, DEFAULT: baseColors.tertiary },
        accent: { ...palette.accent, DEFAULT: baseColors.accent },
        cta: { ...palette.cta, DEFAULT: baseColors.cta },
        gray: { ...palette.gray },
      },
      borderRadius: {
        "20": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
