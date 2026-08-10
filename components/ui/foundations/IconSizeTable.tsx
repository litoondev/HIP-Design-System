import { Typography, typographyClass } from "@/components/ui/typography/Typography";
import { Icon } from "@/components/ui/icons";
import { iconSizes, iconSizeVar } from "@/lib/design-system/iconSizes";

/** Column heads: the design system's small-uppercase label style. */
const HEAD_CLASS = typographyClass(
  "overline",
  "text-left px-4 py-3 text-gray-500 border-b border-gray-200"
);

const CODE_CLASS = typographyClass(
  "tooltip",
  "bg-white border border-gray-200 rounded px-1.5 py-0.5 text-base-black font-semibold"
);

const INLINE_CODE_CLASS = typographyClass(
  "tooltip",
  "bg-white border border-gray-200 rounded px-1"
);

/**
 * Live preview cell — renders at `var(--icon-*)`, not at the desktop number, so the
 * column physically resizes as the window crosses 768px and 520px. That is the point of a
 * responsive size collection, and a static swatch would hide it.
 *
 * Boxed at the largest desktop value so the rows keep a stable baseline instead of the
 * table growing a step taller with every token.
 */
function Preview({ token }: { token: string }) {
  return (
    <div className="flex items-center justify-center w-[200px] h-[100px] overflow-hidden text-primary-600">
      <Icon name="User" size={`var(${iconSizeVar(token)})`} />
    </div>
  );
}

/** Icon Size token scale — a responsive collection (Desktop / Tablet / Mobile),
    companion to the non-responsive Global Radius scale below it. */
export default function IconSizeTable() {
  return (
    <>
      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
        <table className={typographyClass("caption", "w-full border-collapse")}>
          <thead>
            <tr className="bg-gray-50">
              <th className={HEAD_CLASS}>Token</th>
              <th className={HEAD_CLASS}>Desktop (1440px)</th>
              <th className={HEAD_CLASS}>Tablet (768px)</th>
              <th className={HEAD_CLASS}>Mobile (320px)</th>
              <th className={HEAD_CLASS}>Preview</th>
              <th className={HEAD_CLASS}>Typical usage</th>
            </tr>
          </thead>
          <tbody>
            {iconSizes.map((token, i) => (
              <tr
                key={token.name}
                className={`${i < iconSizes.length - 1 ? "border-b border-gray-100" : ""} ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <code className={CODE_CLASS}>{token.name}</code>
                  {token.aliasedBy && (
                    <span
                      className="ml-2 align-middle text-[11px] uppercase tracking-[0.5px] text-primary-700 bg-primary-50 border border-primary-200 rounded px-1.5 py-0.5"
                      title={`${token.aliasedBy} resolves to this token`}
                    >
                      in use
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{token.desktop}px</td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{token.tablet}px</td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{token.mobile}px</td>
                <td className="px-4 py-3">
                  <Preview token={token.name} />
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {token.usage}
                  {token.aliasedBy && (
                    <>
                      {" "}
                      <span className="text-gray-400">
                        — <code className={INLINE_CODE_CLASS}>{token.aliasedBy}</code> resolves to
                        this token
                      </span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Typography
        as="div"
        variant="caption"
        className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700"
      >
        <Typography variant="h6" as="h4" className="mt-0 text-base-black">
          How to use this scale
        </Typography>
        <p>
          Size an icon with a token, never a raw px value:{" "}
          <code className={INLINE_CODE_CLASS}>&lt;Icon name=&quot;User&quot; size=&quot;var(--icon-lg)&quot; /&gt;</code>{" "}
          in TSX, or <code className={INLINE_CODE_CLASS}>width: var(--icon-lg)</code> in CSS. The
          variables carry their own media queries, so one token gives you all three breakpoints —
          there is no responsive class to add at the call site.
        </p>
        <p>
          <b>The preview column is live.</b> Narrow the window past 768px and again past 520px and
          every icon above steps down, because each one is rendered at its variable rather than at a
          fixed number.
        </p>
        <p>
          <b>The scale accelerates.</b> Below <code className={INLINE_CODE_CLASS}>icon-xl</code> the
          steps are 2–4px and the values barely move across breakpoints — small glyphs sit inline
          with text, and text does not shrink much. From{" "}
          <code className={INLINE_CODE_CLASS}>icon-2xl</code> up the icon is a graphic competing for
          space in the layout, so each step grows and the desktop-to-mobile drop widens to as much
          as 72px.
        </p>
        <p>
          <b>Relationship to spacing.</b> Icon sizes are their own collection, not a slice of the
          spacing primitives — <code className={INLINE_CODE_CLASS}>14</code>,{" "}
          <code className={INLINE_CODE_CLASS}>128</code> and <code className={INLINE_CODE_CLASS}>200</code>{" "}
          have no spacing token at all. Use these tokens for the glyph box and spacing tokens for
          the gap around it.
        </p>
      </Typography>
    </>
  );
}
