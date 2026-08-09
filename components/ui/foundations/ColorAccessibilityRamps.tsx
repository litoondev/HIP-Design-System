interface Ramp {
  label: string;
  prefix: string; // tailwind class prefix, e.g. "bg-primary"
  darkTextSteps: number[]; // steps (50,100,...) that use dark (#111827) text instead of white
}

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const ramps: Ramp[] = [
  { label: "Gray", prefix: "bg-gray", darkTextSteps: [50, 100, 200, 300] },
  { label: "Primary", prefix: "bg-primary", darkTextSteps: [50, 100, 200, 300] },
  { label: "Secondary", prefix: "bg-secondary", darkTextSteps: [50, 100, 200, 300, 400] },
  { label: "Tertiary", prefix: "bg-tertiary", darkTextSteps: [50, 100, 200, 300] },
  { label: "Accent", prefix: "bg-accent", darkTextSteps: [50, 100, 200, 300, 400, 500] },
  { label: "CTA", prefix: "bg-cta", darkTextSteps: [50, 100, 200, 300, 400] },
];

/** 50–950 accessibility ramps for every brand color — ported 1:1 from design-system/index.html (#accessibility) */
export default function ColorAccessibilityRamps() {
  return (
    <>
      {ramps.map((ramp) => (
        <div
          key={ramp.label}
          className="grid grid-cols-[220px_repeat(11,1fr)] gap-[6px] items-center mb-[6px]"
        >
          <div className="font-header font-bold text-[14px]">{ramp.label}</div>
          {STEPS.map((step) => (
            <div
              key={step}
              className={`h-14 rounded flex flex-col items-center justify-center font-body text-[10px] font-bold ${
                ramp.darkTextSteps.includes(step) ? "text-[#111827]" : "text-white"
              } ${ramp.prefix}-${step}`}
            >
              <span>{step}</span>
            </div>
          ))}
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
