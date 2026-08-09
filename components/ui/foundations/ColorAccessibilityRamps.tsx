import { palette, STEPS, textOn, type BrandColor } from "@/lib/colors";

const ramps: { label: string; name: BrandColor }[] = [
  { label: "Gray", name: "gray" },
  { label: "Primary", name: "primary" },
  { label: "Secondary", name: "secondary" },
  { label: "Tertiary", name: "tertiary" },
  { label: "Accent", name: "accent" },
  { label: "CTA", name: "cta" },
];

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
        <div
          key={ramp.name}
          className="grid grid-cols-[220px_repeat(11,1fr)] gap-[6px] items-center mb-[6px]"
        >
          <div className="font-header font-bold text-[14px]">{ramp.label}</div>
          {STEPS.map((step) => {
            const hex = palette[ramp.name][step];
            return (
              <div
                key={step}
                title={hex}
                className="h-14 rounded flex flex-col items-center justify-center font-body text-[10px] font-bold"
                style={{ backgroundColor: hex, color: textOn(hex) }}
              >
                <span>{step}</span>
              </div>
            );
          })}
        </div>
      ))}

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
