import { Typography } from "@/components/ui/typography/Typography";
import { colorRefVar } from "@/lib/colors";

/** The "DS Tokens Used" swatches from the sections.html sidebar. The section list that sat
 *  above them now lives in the app sidebar as a submenu under Section Designs.
 *
 *  Each row names a token reference rather than a hex, and paints through the variable that
 *  reference resolves to — so the swatch and the token name it advertises are provably the
 *  same color, and retargeting a base color in lib/colors.ts moves the swatch with it. */
const TOKENS = [
  { ref: "primary", label: "Primary Ocean Blue", bordered: false },
  { ref: "secondary", label: "Secondary Sky Cyan", bordered: false },
  { ref: "cta", label: "CTA Golden Sand", bordered: false },
  { ref: "base-black", label: "Base Black", bordered: false },
  { ref: "base-white", label: "White", bordered: true },
];

export default function TokenLegend() {
  return (
    <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
      <Typography variant="overline" as="p" className="mb-3 text-gray-400">
        DS Tokens Used
      </Typography>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {TOKENS.map((token) => {
          const cssVar = colorRefVar(token.ref);
          return (
            <div key={token.label} className="flex items-center gap-2">
              <span
                className={`h-3 w-3 flex-shrink-0 rounded-sm ${token.bordered ? "border border-gray-300" : ""}`}
                style={{ background: `var(${cssVar})` }}
              />
              <Typography variant="tooltip" as="span" className="text-textcolor-body">
                {token.label} <code>{cssVar}</code>
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
