import Link from "next/link";
import { textColors, colorRefVar, type TextColorRole } from "@/lib/colors";

interface TokenRow {
  role: TextColorRole;
  /** Label as it reads in the Figma variable collection. */
  name: string;
  /** The Figma variable-collection path this role maps to. */
  figmaPath: string;
}

const rows: TokenRow[] = [
  { role: "preheader", name: "Pre Header", figmaPath: "colors/Base/CTA" },
  { role: "h2", name: "H2", figmaPath: "colors/Base/Black" },
  { role: "h3", name: "H3", figmaPath: "colors/Base/Primary" },
  { role: "h4", name: "H4", figmaPath: "colors/Base/Secondary" },
  { role: "h5", name: "H5", figmaPath: "colors/Base/CTA" },
  { role: "body", name: "Body", figmaPath: "colors/Base/Gray Main" },
  { role: "link", name: "Link", figmaPath: "colors/Base/CTA" },
];

/**
 * Where a token reference is documented in Color Accessibility. Ramp steps deep-link to
 * their own row; base-black has no ramp (#000000 is not the #030712 endpoint), so it
 * points at the section rather than a row showing a different color.
 */
function refHref(ref: string): string {
  return /^(primary|secondary|tertiary|accent|cta|gray)$/.test(ref)
    ? `/#ramp-${ref}`
    : "/#accessibility";
}

const HEAD_CLASS = "px-4 py-2 font-bold text-base-black border-b border-gray-200";

/**
 * "Text Color" Figma variable-collection token table.
 *
 * Value shows the alias each role points at — {primary-500}, not a repeated hex — because
 * that is what these tokens are. The references live in lib/colors.ts, so this table can
 * never drift from what the theme actually renders.
 */
export default function TextColorTokenTable() {
  return (
    <div className="mb-12 max-w-[760px]">
      <div className="font-body text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 mb-3">
        Text Color
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full border-collapse font-body text-[14px]">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className={HEAD_CLASS}>Name</th>
              <th className={HEAD_CLASS}>Value</th>
              <th className={HEAD_CLASS}>Variable</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const ref = textColors[row.role];
              /* --color-cta-500 today; follows the base automatically if it moves to 600. */
              const refVar = colorRefVar(ref);
              const cell = `px-4 py-2 ${i < rows.length - 1 ? "border-b border-gray-100" : ""}`;
              return (
                <tr key={row.name}>
                  <td className={`${cell} text-gray-700`}>{row.name}</td>
                  <td className={cell}>
                    <Link
                      href={refHref(ref)}
                      title={`Alias of {${refVar}} — see it in Color Accessibility`}
                      className="inline-flex items-center gap-2 text-gray-700 rounded hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {/* The variable, never a baked hex — DevTools shows var(--color-cta-500). */}
                      <span
                        className="w-4 h-4 rounded shrink-0 border border-gray-200"
                        style={{ backgroundColor: `var(${refVar})` }}
                      />
                      {row.figmaPath}
                    </Link>
                  </td>
                  <td className={`${cell} text-gray-500`}>
                    <code className="text-[12px]">{`--color-textcolor-${row.role}`}</code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="font-body text-[12px] text-gray-400 mt-3 mb-0">
        Every role is an alias, not a color of its own — hover a value to see what it points at.
        Pre Header resolves through <code>var({colorRefVar(textColors.preheader)})</code>, so
        retargeting a brand color moves every role that points at it. CTA is itself an alias of
        Primary, and the step is detected from the ramp rather than hardcoded.
      </p>
    </div>
  );
}
