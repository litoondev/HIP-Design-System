/** The "DS Tokens Used" swatches from the sections.html sidebar. The section list that sat
 *  above them now lives in the app sidebar as a submenu under Section Designs. */
const TOKENS = [
  { swatch: "#f97316", label: "CTA Orange #f97316", bordered: false },
  { swatch: "#3196a9", label: "Primary Teal #3196a9", bordered: false },
  { swatch: "#030712", label: "Base Black #030712", bordered: false },
  { swatch: "#ffffff", label: "White #ffffff", bordered: true },
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
