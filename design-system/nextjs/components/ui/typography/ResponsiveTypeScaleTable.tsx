/**
 * "Responsive Type Scale" table — ported from design-system/index.html (#typography).
 * Each row is [style, desktop, tablet, mobile] as "font-size / line-height / letter-spacing",
 * transcribed from the Figma "Global Fonts" node 7383:49362 Typography (Desk)/(Tab)/(Mobi) columns.
 */
const ROWS: [style: string, desktop: string, tablet: string, mobile: string][] = [
  ["Main Header", "100 / 100 / 0px", "56 / 68 / 0px", "40 / 40 / 0px"],
  ["Header 1", "72 / 72 / 0px", "48 / 56 / 0px", "36 / 44 / 0px"],
  ["Header 2", "56 / 68 / 0px", "42 / 50 / 0px", "32 / 40 / 0px"],
  ["H2 Inner", "54 / 68 / 0px", "38 / 50 / 0px", "30 / 40 / 0px"],
  ["H2 Alt", "120 / 140 / 0px", "42 / 50 / 0px", "32 / 40 / 0px"],
  ["Header 3", "42 / 56 / 0px", "36 / 36 / 0px", "28 / 36 / 0px"],
  ["Header 4", "32 / 46 / 0px", "28 / 40 / 0px", "24 / 34 / 0px"],
  ["h4 alt", "32 / 46 / 0px", "28 / 40 / 0px", "24 / 34 / 0px"],
  ["Header 5", "24 / 34 / 0px", "22 / 30 / 0px", "20 / 28 / 0px"],
  ["H6", "20 / 30 / 0.5px", "18 / 28 / 0.5px", "16 / 22 / 0.5px"],
  ["Post Title", "32 / 44 / 0px", "28 / 40 / 0px", "24 / 34 / 0px"],
  ["Subtitle", "24 / 36 / 0.75px", "22 / 33 / 0.75px", "18 / 28 / 0.75px"],
  ["Subtitle Alt", "24 / 36 / 0.75px", "22 / 33 / 0.75px", "18 / 28 / 0.75px"],
  ["Strong 1", "20 / 30 / 0.5px", "18 / 28 / 0.5px", "16 / 22 / 0.5px"],
  ["Strong 2", "18 / 27 / 0.5px", "16 / 24 / 0.5px", "14 / 22 / 0.5px"],
  ["Menu Item", "18 / 26 / 0.5px", "16 / 24 / 0.5px", "14 / 22 / 0.5px"],
  ["Menu Item Alt", "18 / 26 / 0.5px", "16 / 24 / 0.5px", "14 / 22 / 0.5px"],
  ["Pre-Header", "16 / 24 / 3px", "14 / 20 / 3px", "12 / 18 / 3px"],
  ["Button", "20 / 30 / 1.25px", "18 / 28 / 0.5px", "16 / 24 / 0px"],
  ["Over Line", "14 / 20 / 1.25px", "14 / 20 / 1.25px", "14 / 20 / 1.25px"],
  ["Innerpage Body", "20 / 28 / 0px", "18 / 28 / 0px", "16 / 24 / 0px"],
  ["Label", "16 / 20 / 0px", "16 / 20 / 0px", "14 / 18 / 0px"],
  ["Body1", "20 / 30 / 0px", "18 / 28 / 0px", "16 / 24 / 0px"],
  ["Body2", "18 / 28 / 0px", "16 / 24 / 0px", "14 / 20 / 0px"],
  ["Caption", "16 / 22 / 0px", "16 / 22 / 0px", "14 / 20 / 0px"],
  ["Tooltip", "12 / 18 / 0px", "12 / 18 / 0px", "10 / 15 / 0px"],
];

const HEAD_CLASS =
  "text-left px-4 py-3 font-header font-bold text-[12px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200";

export default function ResponsiveTypeScaleTable() {
  return (
    <div className="mb-12">
      <div className="font-body text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 mb-3">
        Responsive Type Scale
      </div>
      <p className="font-body text-[14px] leading-[1.6] text-gray-600 max-w-[760px] mt-0 mb-4">
        Every type style in the Figma Style Guide is defined at three explicit breakpoints — Desktop,
        Tablet, and Mobile each have their own font-size/line-height/letter-spacing values (not a
        single scaled-down number). Resize this browser window to see the live samples below shrink
        at the same 1024px / 768px breakpoints as this table.
      </p>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse font-body text-[13px]">
          <thead>
            <tr className="bg-gray-50">
              <th className={HEAD_CLASS}>Style</th>
              <th className={HEAD_CLASS}>Desktop (&ge;1024px)</th>
              <th className={HEAD_CLASS}>Tablet (768&ndash;1023px)</th>
              <th className={HEAD_CLASS}>Mobile (&lt;768px)</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([style, desktop, tablet, mobile], i) => (
              <tr
                key={style}
                className={`${i < ROWS.length - 1 ? "border-b border-gray-100" : ""} ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <td className="px-4 py-2 text-base-black font-semibold">{style}</td>
                <td className="px-4 py-2 text-gray-700">{desktop}</td>
                <td className="px-4 py-2 text-gray-700">{tablet}</td>
                <td className="px-4 py-2 text-gray-700">{mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="font-body text-[12px] text-gray-400 mt-3 mb-0">
        Format: font-size / line-height / letter-spacing. Live samples below render at these exact
        values via <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">lg:</code> (desktop,
        &ge;1024px) and <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">md:</code>{" "}
        (tablet, 768&ndash;1023px) Tailwind breakpoints, falling back to the mobile value below
        768px — try resizing the window.
      </p>
    </div>
  );
}
