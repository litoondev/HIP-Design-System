import {
  fontFamilyTokens,
  getTypographyDefinition,
  typographyVariantNames,
  type FontFamilyToken,
} from "@/lib/design-system/typography";

/**
 * "Font Family" Figma variable-collection token table.
 *
 * The collection holds exactly two variables — `header` and `body` — and every type style
 * references one of them rather than naming a typeface. Rows are read straight out of
 * `fontFamilyTokens`, and the "Used by" list is derived by walking the variants, so this table
 * is a read-out of the system rather than a second transcription of it: if a variant is
 * pointed at the wrong family, it shows up here instead of hiding in a class string.
 */

const HEAD_CLASS = "px-4 py-2 font-bold text-base-black border-b border-gray-200";

/** Variant labels that reference a given family token, in Figma style-list order. */
function stylesUsing(token: FontFamilyToken): string[] {
  return typographyVariantNames
    .filter((variant) => getTypographyDefinition(variant).fontFamily === token)
    .map((variant) => getTypographyDefinition(variant).label);
}

const rows = (Object.keys(fontFamilyTokens) as FontFamilyToken[]).map((token) => ({
  token,
  ...fontFamilyTokens[token],
  styles: stylesUsing(token),
}));

export default function FontFamilyTokenTable() {
  return (
    <div className="mb-12 max-w-[760px]">
      <div className="font-body text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 mb-3">
        Font Family
      </div>
      <p className="font-body text-[14px] leading-[1.6] text-textcolor-body max-w-[760px] mt-0 mb-4">
        Two variables, one per typeface. Styles reference the variable, never the typeface — so{" "}
        <code className="text-[12px] bg-gray-100 px-1 py-0.5 rounded">
          &lt;Typography variant=&quot;header1&quot;&gt;
        </code>{" "}
        resolves to Figtree without any component writing a font-family of its own.
      </p>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full border-collapse font-body text-[14px]">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className={HEAD_CLASS}>Name</th>
              <th className={HEAD_CLASS}>Value</th>
              <th className={HEAD_CLASS}>Utility</th>
              <th className={HEAD_CLASS}>Variable</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const cell = `px-4 py-2 align-top ${
                i < rows.length - 1 ? "border-b border-gray-100" : ""
              }`;
              return (
                <tr key={row.token}>
                  <td className={`${cell} text-gray-700`}>
                    <code className="text-[13px] text-primary">{row.token}</code>
                  </td>
                  {/* The value cell is set in the family it names, so the row is its own specimen. */}
                  <td className={`${cell} ${row.className} text-base-black`}>
                    {row.family}
                    <span className="block text-[13px] text-gray-400">Aa Bb Cc 0123</span>
                  </td>
                  <td className={`${cell} text-gray-500`}>
                    <code className="text-[12px]">{row.className}</code>
                  </td>
                  <td className={`${cell} text-gray-500`}>
                    <code className="text-[12px]">{row.cssVar}</code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {rows.map((row) => (
          <div key={row.token} className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <div className="font-body text-[12px] font-bold uppercase tracking-[0.5px] text-gray-500 mb-1">
              {row.token} · {row.family} · {row.styles.length} styles
            </div>
            <p className="font-body text-[12px] leading-[1.6] text-textcolor-body m-0">
              {row.styles.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <p className="font-body text-[12px] text-gray-400 mt-3 mb-0">
        Both families are loaded once, by <code>next/font/google</code> in{" "}
        <code>app/layout.tsx</code>, which is what publishes{" "}
        <code>{fontFamilyTokens.header.cssVar}</code> and <code>{fontFamilyTokens.body.cssVar}</code>{" "}
        for the Tailwind stacks to point at. No second <code>@import</code>, and no component sets
        a font-family directly.
      </p>
    </div>
  );
}
