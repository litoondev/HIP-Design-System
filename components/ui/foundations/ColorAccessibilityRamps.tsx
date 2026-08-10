import {
  palette,
  STEPS,
  inkVarOn,
  inkColors,
  contrastRatio,
  textOn,
  colorVarName,
  baseSteps,
  endpointColors,
  type BrandColor,
} from "@/lib/colors";

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

/** Anchor id for a ramp row, so other tables can deep-link to the color they use. */
export function rampAnchorId(name: string): string {
  return `ramp-${name}`;
}

/**
 * WCAG badge for a shade: contrast of the ink actually rendered on it (dark ink or white,
 * whichever the swatch uses) against the shade itself. ≥7 → AAA, ≥4.5 → AA, below that the
 * bare ratio is shown with no level — the shade is decorative-only.
 */
function wcagBadge(hex: string): string {
  const ink = textOn(hex, inkColors.dark, inkColors.light);
  const ratio = contrastRatio(hex, ink);
  const level = ratio >= 7 ? "AAA " : ratio >= 4.5 ? "AA " : "";
  return `${level}${ratio.toFixed(2)}`;
}

/** One shade card — colored swatch with contrast badge on top, step + hex below. */
function ShadeCard({
  hex,
  token,
  title,
  label,
  isBase,
  bordered,
}: {
  hex: string;
  token: string;
  title: string;
  label: string;
  isBase?: boolean;
  bordered?: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-1 shadow-sm" title={title}>
      <div
        className={`relative h-12 rounded-lg flex items-center justify-center font-body text-[11px] font-bold ${
          bordered ? "border border-gray-200" : ""
        }`}
        style={{ backgroundColor: `var(${token})`, color: `var(${inkVarOn(hex)})` }}
      >
        {wcagBadge(hex)}
        {/* Dot marks the step that holds the supplied base color. */}
        {isBase && (
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border"
            style={{ backgroundColor: `var(${inkVarOn(hex)})`, borderColor: hex }}
          />
        )}
      </div>
      <div className="px-1.5 pt-1 pb-0.5">
        <div className="font-body text-[12px] font-bold text-base-black leading-tight">{label}</div>
        <div className="font-body text-[10px] text-gray-500 leading-tight">{hex.toUpperCase()}</div>
      </div>
    </div>
  );
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
        <div key={ramp.name} id={rampAnchorId(ramp.name)} className="mb-6 scroll-mt-24">
          <div className="font-header font-bold text-[14px] mb-2">{ramp.label}</div>
          <div className="grid grid-cols-3 sm:grid-cols-6 xl:grid-cols-11 gap-[6px]">
            {STEPS.map((step) => {
              const hex = palette[ramp.name][step];
              /* Paint through the CSS variable — it is what you reference in code, and it
                 survives a base-color change in lib/colors.ts (the hex label does not). */
              const token = colorVarName(ramp.name, step);
              /* This step holds the supplied base color; its variable links back to the base
                 token. Marked with a dot so the scale shows where the brand color sits —
                 detected, not assumed to be 500. */
              const isBase = step === baseSteps[ramp.name];
              const baseToken = colorVarName(ramp.name);
              return (
                <ShadeCard
                  key={step}
                  hex={hex}
                  token={token}
                  title={isBase ? `${token} → {${baseToken}}` : token}
                  label={String(step)}
                  isBase={isBase}
                />
              );
            })}
          </div>
        </div>
      ))}

      <div className="mb-6">
        <div className="font-header font-bold text-[14px] mb-2">Endpoints</div>
        <div className="grid grid-cols-3 sm:grid-cols-6 xl:grid-cols-11 gap-[6px]">
          {endpoints.map((endpoint) => (
            <ShadeCard
              key={endpoint.label}
              hex={endpoint.hex}
              token={endpoint.varName}
              title={endpoint.varName}
              label={endpoint.label}
              bordered={endpoint.bordered}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6 font-body text-[13px] text-gray-700 leading-[1.6]">
        <h4 className="font-header font-bold mt-0">Color accessibility — WCAG 2.1 Guidelines</h4>
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
      </div>
    </>
  );
}
