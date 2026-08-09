interface TokenRow {
  name: string;
  swatchClassName: string;
  value: string;
}

const rows: TokenRow[] = [
  { name: "Pre Header", swatchClassName: "bg-cta", value: "colors/Base/CTA" },
  { name: "H2", swatchClassName: "bg-base-black", value: "colors/Base/Black" },
  { name: "H3", swatchClassName: "bg-primary", value: "colors/Base/Primary" },
  { name: "H4", swatchClassName: "bg-secondary", value: "colors/Base/Secondary" },
  { name: "H5", swatchClassName: "bg-cta", value: "colors/Base/CTA" },
  { name: "Body", swatchClassName: "bg-base-gray", value: "colors/Base/Gray Main" },
  { name: "Link", swatchClassName: "bg-cta", value: "colors/Base/CTA" },
];

/** "Text Color" Figma variable-collection token table (Name / Value columns) */
export default function TextColorTokenTable() {
  return (
    <div className="mb-12 max-w-[640px]">
      <div className="font-body text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 mb-3">
        Text Color
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full border-collapse font-body text-[14px]">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-4 py-2 font-bold text-base-black border-b border-gray-200">Name</th>
              <th className="px-4 py-2 font-bold text-base-black border-b border-gray-200">Value</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.name}>
                <td
                  className={`px-4 py-2 text-gray-700 ${
                    i < rows.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {row.name}
                </td>
                <td className={`px-4 py-2 ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <span className="inline-flex items-center gap-2">
                    <span className={`w-4 h-4 rounded shrink-0 ${row.swatchClassName}`}></span>
                    {row.value}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
