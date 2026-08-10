import {
  palette,
  STEPS,
  inkVarOn,
  colorVarName,
  baseSteps,
  endpointColors,
  type BrandColor,
} from "@/lib/colors";
import { Typography } from "@/components/ui/typography/Typography";

const ramps: { label: string; name: BrandColor }[] = [
  { label: "Gray", name: "gray" },
  { label: "Primary", name: "primary" },
  { label: "Secondary", name: "secondary" },
  { label: "Tertiary", name: "tertiary" },
  { label: "Accent", name: "accent" },
  { label: "CTA", name: "cta" },
];

/* The two extremes. They get a single full-width bar rather than 11 steps because there is
   no ramp to show — a generated ramp from either endpoint would just restate the Gray row. */
const endpoints: { label: string; hex: string; varName: string; bordered: boolean }[] = [
  { label: "Black", hex: endpointColors.black, varName: "--color-black", bordered: false },
  { label: "White", hex: endpointColors.white, varName: "--color-white", bordered: true },
];

/* scroll-mt clears the fixed 64px TopBar when a row is jumped to via #ramp-<name> —
   the Text Color table links straight to the ramp a token resolves to. */
const ROW_CLASS =
  "grid grid-cols-[220px_repeat(11,1fr)] gap-[6px] items-center mb-[6px] scroll-mt-24";

/** Anchor id for a ramp row, so other tables can deep-link to the color they use. */
export function rampAnchorId(name: string): string {
  return `ramp-${name}`;
}

/**
 * 50–950 accessibility ramps for every brand color.
 * Swatches render straight from the generated palette in lib/colors.ts, so
 * changing a base color there updates this page automatically. Label color
 * (dark ink vs white) is chosen by actual contrast per shade.
 */
export default function ColorAccessibilityRamps() {
  return (
    <>
      {ramps.map((ramp) => (
        <div key={ramp.name} id={rampAnchorId(ramp.name)} className={ROW_CLASS}>
          <Typography variant="h6" as="div">
            {ramp.label}
          </Typography>
          {STEPS.map((step) => {
            const hex = palette[ramp.name][step];
            /* Show the CSS variable rather than the hex — it is what you reference in code,
               and it survives a base-color change in lib/colors.ts (the hex does not).
               The variable is published on :root by app/layout.tsx. */
            const token = colorVarName(ramp.name, step);
            /* This step holds the supplied base color, and its variable links back to the
               base token instead of duplicating the hex. Marked so the scale shows where
               the brand color actually sits — which is detected, not assumed to be 500. */
            const isBase = step === baseSteps[ramp.name];
            const baseToken = colorVarName(ramp.name);
            return (
              <Typography
                as="div"
                variant="tooltip"
                key={step}
                title={isBase ? `${token} → {${baseToken}}` : token}
                className={`h-14 rounded flex flex-col items-center justify-center font-bold ${
                  isBase ? "ring-2 ring-offset-2 ring-base-black" : ""
                }`}
                /* Paint through the variable, not the hex — the swatch and the label it
                   advertises are then provably the same thing. */
                style={{ backgroundColor: `var(${token})`, color: `var(${inkVarOn(hex)})` }}
              >
                <span>{isBase ? `${step} · Base` : step}</span>
              </Typography>
            );
          })}
        </div>
      ))}

      {endpoints.map((endpoint) => (
        <div key={endpoint.label} className={ROW_CLASS}>
          <Typography variant="h6" as="div">
            {endpoint.label}
          </Typography>
          <Typography
            as="div"
            variant="tooltip"
            title={endpoint.hex.toUpperCase()}
            className={`col-span-11 h-14 rounded flex items-center justify-center font-bold ${
              endpoint.bordered ? "border border-gray-200" : ""
            }`}
            style={{
              backgroundColor: `var(${endpoint.varName})`,
              color: `var(${inkVarOn(endpoint.hex)})`,
            }}
          >
            <span>{endpoint.varName}</span>
          </Typography>
        </div>
      ))}

      <Typography
        as="div"
        variant="caption"
        className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700"
      >
        <Typography variant="h6" as="h4" className="mt-0">
          Color accessibility — WCAG 2.1 Guidelines
        </Typography>
        <p>
          Prioritize accessibility in UI color choices. Many ignore standards, making products
          hard for visually impaired users. Google penalizes low-contrast text, so ensure designs
          work for all, including older adults and color blind users. Focus on legibility with
          adequate contrast. See WCAG 2.1 for guidelines.
        </p>
        <p>
          <b>How much contrast do you need?</b>
          <br />
          Use a 4.5:1 contrast ratio (WCAG AA) for essential UI elements like text and buttons to
          accommodate users with 20/40 vision loss.
        </p>
      </Typography>
    </>
  );
}
