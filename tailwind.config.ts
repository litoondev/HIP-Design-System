import type { Config } from "tailwindcss";
import { palette, baseColors } from "./lib/colors";

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
        base: {
          white: "#ffffff", // Pure White
          black: "#000000", // Pure Black
          lightgray: "#ced0d3", // Lunar Fog
          gray: "#717680", // Slate Horizon
        },
        /* Dark bar / footer ground. Declared as a token in homepage.html's Tailwind config,
           where the markup applied it as an inline hex; promoted to a real utility here. */
        navy: "#0e1f35",
        /* Semantic text tokens follow the brand roles: preheader/h5/link = CTA,
           h3 = Primary, h4 = Secondary, h2 = Black, body = Gray Main. */
        textcolor: {
          preheader: "#320270",
          h2: "#000000",
          h3: "#320270",
          h4: "#1fc3df",
          h5: "#320270",
          body: "#717680",
          link: "#320270",
        },
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
