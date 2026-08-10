import { baseColors, baseNeutrals, colorVarName, inkVarOn } from "@/lib/colors";
import { Typography } from "@/components/ui/typography/Typography";

interface Swatch {
  name: string;
  /** Marketing name from the Figma Style Guide. */
  title: string;
  hex: string;
  /** Token this swatch paints with — `--color-primary-base` for a category, `--color-base-*`
   *  for a neutral. Neutrals carry no ramp, so they have no -base form. */
  varName: string;
}

/**
 * Values and token names are derived from lib/colors.ts rather than transcribed, so
 * retargeting a brand color there updates this block instead of leaving it quietly showing
 * the old value. `hex` is used only for the contrast calculation and the hover title —
 * nothing paints from it.
 */
const swatches: Swatch[] = [
  { name: "Primary", title: "Royal Amethyst", hex: baseColors.primary, varName: colorVarName("primary") },
  { name: "Secondary", title: "Aqua Pulse", hex: baseColors.secondary, varName: colorVarName("secondary") },
  { name: "Tertiary", title: "Pacific Glass", hex: baseColors.tertiary, varName: colorVarName("tertiary") },
  { name: "Accent", title: "Solar Flare", hex: baseColors.accent, varName: colorVarName("accent") },
  { name: "CTA", title: "Royal Amethyst", hex: baseColors.cta, varName: colorVarName("cta") },
  { name: "Base White", title: "Pure White", hex: baseNeutrals.white, varName: "--color-base-white" },
  { name: "Base Light Gray", title: "Lunar Fog", hex: baseNeutrals.lightgray, varName: "--color-base-lightgray" },
  { name: "Base Gray", title: "Slate Horizon", hex: baseNeutrals.gray, varName: "--color-base-gray" },
  { name: "Base Black", title: "Pure Black", hex: baseNeutrals.black, varName: "--color-base-black" },
];

/** Base brand color palette — ported 1:1 from design-system/index.html (#colors section) */
export default function ColorPalette() {
  return (
    <div className="flex flex-col gap-0">
      {swatches.map((s, i) => (
        <Typography
          as="div"
          variant="tooltip"
          key={`${s.name}-${i}`}
          title={s.hex}
          /* Both ground and ink are token references — DevTools reads
             var(--color-primary-base), never a hex or rgb(). Which ink applies is decided
             by measured contrast, not chosen by hand. */
          style={{ backgroundColor: `var(${s.varName})`, color: `var(${inkVarOn(s.hex)})` }}
          className={`h-[78px] flex flex-col items-center justify-center text-center border ${
            i === 0 ? "" : "border-t-0"
          } border-gray-200`}
        >
          <span className="font-bold">{s.name}</span>
          <span>{s.title}</span>
        </Typography>
      ))}
    </div>
  );
}
