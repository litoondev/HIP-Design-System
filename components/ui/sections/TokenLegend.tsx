import { baseColors, baseNeutrals, navy } from "@/lib/colors";

/** The "DS Tokens Used" swatches from the sections.html sidebar. The section list that sat
 *  above them now lives in the app sidebar as a submenu under Section Designs.
 *  Swatches are read from lib/colors.ts — the same source that generates the --color-*
 *  variables and the Tailwind theme — so this legend can never show a stale palette. */
const TOKENS = [
  { swatch: baseColors.primary, label: `Primary Harbor Teal --color-primary-base`, bordered: false },
  { swatch: baseColors.secondary, label: `Secondary Cyan Pulse --color-secondary-base`, bordered: false },
  { swatch: baseColors.accent, label: `Accent Golden Amber --color-accent-base`, bordered: false },
  { swatch: baseColors.cta, label: `CTA Ember Orange --color-cta-base`, bordered: false },
  { swatch: navy, label: `Navy --color-navy`, bordered: false },
  { swatch: baseNeutrals.black, label: `Base Black --color-base-black`, bordered: false },
  { swatch: baseNeutrals.white, label: `White --color-base-white`, bordered: true },
];

export default function TokenLegend() {
  return (
    <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
      <p className="mb-3 font-body text-[10px] font-bold uppercase tracking-[1px] text-gray-400">
        DS Tokens Used
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {TOKENS.map((token) => (
          <div key={token.label} className="flex items-center gap-2">
            <span
              className={`h-3 w-3 flex-shrink-0 rounded-sm ${token.bordered ? "border border-gray-300" : ""}`}
              style={{ background: token.swatch }}
            />
            <span className="font-body text-[11px] text-gray-600">{token.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
