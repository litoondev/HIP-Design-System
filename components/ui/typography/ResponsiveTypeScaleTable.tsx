import {
  fontFamilyName,
  fontWeightValues,
  getTypographyDefinition,
  letterSpacingPx,
  typographyVariantNames,
  type Breakpoint,
} from "@/lib/design-system/typography";

/**
 * "Responsive Type Scale" table for the Typography foundations page.
 *
 * Rows are derived from lib/design-system/typography.ts rather than transcribed, so the table
 * cannot drift from the classes the components actually render — it is a read-out of the
 * tokens, not a second copy of them.
 */

/** "56 / 68 / 0px" — font-size / line-height / letter-spacing, the Figma spec format. */
function formatStep(variant: (typeof typographyVariantNames)[number], bp: Breakpoint): string {
  const step = getTypographyDefinition(variant)[bp];
  return `${step.fontSize} / ${step.lineHeight} / ${letterSpacingPx[step.letterSpacing]}px`;
}

const HEAD_CLASS =
  "text-left px-4 py-3 font-header font-bold text-[12px] uppercase tracking-[0.5px] text-gray-500 border-b border-gray-200";

export default function ResponsiveTypeScaleTable() {
  return (
    <div className="mb-12">
      <div className="font-body text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 mb-3">
        Responsive Type Scale
      </div>
      <p className="font-body text-[14px] leading-[1.6] text-textcolor-body max-w-[760px] mt-0 mb-4">
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
              <th className={HEAD_CLASS}>Variant</th>
              <th className={HEAD_CLASS}>Family</th>
              <th className={HEAD_CLASS}>Weight</th>
              <th className={HEAD_CLASS}>Desktop (&ge;1024px)</th>
              <th className={HEAD_CLASS}>Tablet (768&ndash;1023px)</th>
              <th className={HEAD_CLASS}>Mobile (&lt;768px)</th>
            </tr>
          </thead>
          <tbody>
            {typographyVariantNames.map((variant, i) => (
              <tr
                key={variant}
                className={`${
                  i < typographyVariantNames.length - 1 ? "border-b border-gray-100" : ""
                } ${i % 2 === 1 ? "bg-gray-50" : ""}`}
              >
                <td className="px-4 py-2 text-base-black font-semibold">
                  {getTypographyDefinition(variant).label}
                </td>
                <td className="px-4 py-2">
                  <code className="text-[12px] text-primary">{variant}</code>
                </td>
                {/* Family and weight are constant across breakpoints, so they sit outside the
                    three step columns rather than being repeated in each one. */}
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {fontFamilyName(getTypographyDefinition(variant).fontFamily)}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {fontWeightValues[getTypographyDefinition(variant).fontWeight]}
                </td>
                <td className="px-4 py-2 text-gray-700">{formatStep(variant, "desktop")}</td>
                <td className="px-4 py-2 text-gray-700">{formatStep(variant, "tablet")}</td>
                <td className="px-4 py-2 text-gray-700">{formatStep(variant, "mobile")}</td>
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
