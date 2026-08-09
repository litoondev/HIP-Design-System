interface Row {
  rule: string;
  ruleNote?: string;
  desktop: string;
  desktopNote?: string;
  tablet: string;
  tabletNote?: string;
  mobile: string;
  mobileNote?: string;
}

const rows: Row[] = [
  {
    rule: "Section-to-section gap",
    desktop: "240px",
    desktopNote: "(120+120 padding)",
    tablet: "120px",
    tabletNote: "(60+60 padding)",
    mobile: "80px",
    mobileNote: "(40+40 padding)",
  },
  {
    rule: "Container left/right padding",
    desktop: "100px",
    tablet: "40px",
    mobile: "20px",
  },
  {
    rule: "Section top/bottom padding",
    desktop: "120px",
    tablet: "60px",
    mobile: "40px",
  },
  {
    rule: "Heading → paragraph gap",
    desktop: "24px",
    tablet: "20px",
    mobile: "16px",
  },
  {
    rule: "Heading → heading gap",
    ruleNote: "(eyebrow → H2)",
    desktop: "8px",
    tablet: "6px",
    mobile: "4px",
  },
  {
    rule: "Inner grid/card gap",
    desktop: "40px",
    desktopNote: "(row & col)",
    tablet: "30px",
    tabletNote: "(row & col)",
    mobile: "20px",
    mobileNote: "(stacked, row only)",
  },
  {
    rule: "Paragraph-to-paragraph spacing",
    desktop: "16px",
    tablet: "16px",
    mobile: "16px",
  },
];

/** Responsive Spacing & Layout Rules table — ported 1:1 from design-system/index.html (#responsive-rules) */
export default function ResponsiveSpacingTable() {
  return (
    <>
      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
        <table className="w-full border-collapse font-body text-[14px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
                Spacing rule
              </th>
              <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
                Desktop (1440px)
              </th>
              <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
                Tablet (768px)
              </th>
              <th className="text-left px-4 py-3 font-header font-bold text-[13px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200">
                Mobile (320px)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.rule}
                className={`${i < rows.length - 1 ? "border-b border-gray-100" : ""} ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <td className="px-4 py-3 text-base-black font-semibold">
                  {row.rule}
                  {row.ruleNote && <span className="text-gray-400 font-normal"> {row.ruleNote}</span>}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {row.desktop} {row.desktopNote && <span className="text-gray-400">{row.desktopNote}</span>}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {row.tablet} {row.tabletNote && <span className="text-gray-400">{row.tabletNote}</span>}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {row.mobile} {row.mobileNote && <span className="text-gray-400">{row.mobileNote}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6 font-body text-[13px] text-gray-700 leading-[1.6]">
        <h4 className="font-header font-bold mt-0 text-base-black">How these were measured</h4>
        <p>
          Values were pulled from the three real Home Page frames in the Figma file —{" "}
          <code className="text-[12px] bg-white border border-gray-200 rounded px-1">Home Page 1440px</code>,{" "}
          <code className="text-[12px] bg-white border border-gray-200 rounded px-1">Home - 768px</code>, and{" "}
          <code className="text-[12px] bg-white border border-gray-200 rounded px-1">Home - 320px</code> —
          cross-checked across the Highlights grid, CTA, Our 5-Star Care, Locations, and Footer
          sections, which all share the same padding rhythm at each breakpoint.
        </p>
        <p>
          <b>Section-to-section gap</b> is not an explicit margin — sections stack directly (0px
          between them) and the visual gap is produced by the bottom padding of the section above
          plus the top padding of the section below. Use the section top/bottom padding row when
          spacing out a new section, and it will automatically produce the correct combined gap.
        </p>
        <p>
          <b>Paragraph-to-paragraph spacing</b> comes from the Body1 text style&apos;s built-in
          paragraph-spacing token (16px) and does not change across breakpoints.
        </p>
      </div>
    </>
  );
}
