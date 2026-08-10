interface RadiusToken {
  name: string;
  /** px value; 1000 renders fully round (pill/circle) */
  value: number;
  usage: string;
}

/* Global collection — unlike spacing, radius does not change per breakpoint;
   the same token value applies at Desktop, Tablet and Mobile. */
const radiusTokens: RadiusToken[] = [
  { name: "radius/none", value: 0, usage: "Sharp edges — tables, dividers, full-bleed media" },
  { name: "radius/2", value: 2, usage: "Hairline softening — badges, tags" },
  { name: "radius/4", value: 4, usage: "Small controls — checkboxes, chips" },
  { name: "radius/8", value: 8, usage: "Inputs, dropdowns, small cards" },
  { name: "radius/12", value: 12, usage: "Cards, popups, image thumbnails" },
  { name: "radius/16", value: 16, usage: "Large cards, modals" },
  { name: "radius/20", value: 20, usage: "Feature cards, media blocks" },
  { name: "radius/24", value: 24, usage: "Section containers, hero media" },
  { name: "radius/30", value: 30, usage: "Oversized decorative containers" },
  { name: "radius/40", value: 40, usage: "Bento tiles, extra-large surfaces" },
  { name: "radius/full", value: 1000, usage: "Pill buttons, avatars, circular icons" },
];

/** Global Radius token scale — a single (non-responsive) variable collection,
    companion to the responsive spacing collection. */
export default function GlobalRadiusTable() {
  return (
    <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
      <table className="w-full border-collapse font-body text-[14px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
              Token
            </th>
            <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
              Value
            </th>
            <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
              Preview
            </th>
            <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
              Typical usage
            </th>
          </tr>
        </thead>
        <tbody>
          {radiusTokens.map((token, i) => (
            <tr
              key={token.name}
              className={`${i < radiusTokens.length - 1 ? "border-b border-gray-100" : ""} ${
                i % 2 === 1 ? "bg-gray-50" : ""
              }`}
            >
              <td className="px-4 py-3">
                <code className="text-[12px] bg-white border border-gray-200 rounded px-1.5 py-0.5 text-base-black font-semibold">
                  {token.name}
                </code>
              </td>
              <td className="px-4 py-3 text-gray-700">
                {token.value === 1000 ? "1000px (full)" : `${token.value}px`}
              </td>
              <td className="px-4 py-3">
                <div
                  className="w-16 h-10 bg-white border-2 border-gray-400"
                  style={{ borderRadius: token.value }}
                />
              </td>
              <td className="px-4 py-3 text-gray-700">{token.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
