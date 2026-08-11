import { Typography, typographyClass } from "@/components/ui/typography/Typography";
import {
  spacingByTier,
  spacingPrimitives,
  spacingTiers,
  spacingVarName,
  type SpacingTier,
  type SpacingToken,
} from "@/lib/design-system/spacing";

/** Column heads: the design system's small-uppercase label style. */
const HEAD_CLASS = typographyClass(
  "overline",
  "text-left px-4 py-3 text-gray-500 border-b border-gray-200"
);

const CODE_CLASS = typographyClass(
  "tooltip",
  "bg-white border border-gray-200 rounded px-1.5 py-0.5 text-base-black font-semibold"
);

/**
 * Widest bar the preview column draws. Anything past this is clamped and faded at the
 * right edge — without it a single 1920px row would stretch the table off-screen and
 * flatten every small token in the same column to a hairline.
 */
const PREVIEW_MAX = 280;

function Preview({ px }: { px: number }) {
  const clamped = px > PREVIEW_MAX;
  return (
    <div className="flex items-center gap-2 min-w-[300px]">
      <div
        className="h-4 bg-cta-500 rounded-sm"
        style={{
          width: Math.min(px, PREVIEW_MAX),
          /* Zero still needs to read as a token, not a missing row. */
          ...(px === 0 ? { width: 2, backgroundColor: "transparent", borderLeft: "2px dashed var(--color-gray-400)" } : {}),
          ...(clamped ? { maskImage: "linear-gradient(to right, black 70%, transparent)" } : {}),
        }}
      />
      {clamped && <span className="text-gray-400">→</span>}
    </div>
  );
}

function TierTable({ tier }: { tier: SpacingTier }) {
  const tokens: SpacingToken[] = spacingByTier(tier);
  const meta = spacingTiers[tier];

  return (
    <>
      <Typography variant="h6" as="h3" className="text-base-black mt-10 mb-1">
        {meta.label} <span className="text-gray-400">· {meta.range}</span>
      </Typography>
      <Typography variant="caption" as="p" className="text-textcolor-body mt-0 mb-4 max-w-[640px]">
        {meta.usage}
      </Typography>

      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
        <table className={typographyClass("caption", "w-full border-collapse")}>
          <thead>
            <tr className="bg-gray-50">
              <th className={HEAD_CLASS}>Token</th>
              <th className={HEAD_CLASS}>px</th>
              <th className={HEAD_CLASS}>CSS variable</th>
              <th className={HEAD_CLASS}>Scale</th>
              <th className={HEAD_CLASS}>Used in this system</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, i) => (
              <tr
                key={token.name}
                className={`${i < tokens.length - 1 ? "border-b border-gray-100" : ""} ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <code className={CODE_CLASS}>{token.name}</code>
                  {token.offScale && (
                    <span
                      className="ml-2 align-middle text-[11px] uppercase tracking-[0.5px] text-tertiary-700 bg-tertiary-50 border border-tertiary-200 rounded px-1.5 py-0.5"
                      title="Breaks the rhythm of the scale — see the review note below"
                    >
                      off-scale
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{token.px}px</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                  <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
                    var({spacingVarName(token.px)})
                  </code>
                </td>
                <td className="px-4 py-3">
                  <Preview px={token.px} />
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {token.usedFor ?? <span className="text-gray-300">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const TIER_ORDER: SpacingTier[] = ["micro", "component", "layout", "block", "container"];

/** Spacing Primitives — the flat, mode-agnostic value scale from the Figma
    `primitives` collection, companion to the responsive spacing rules below it. */
export default function SpacingPrimitivesTable() {
  const offScale = spacingPrimitives.filter((token) => token.offScale);

  return (
    <>
      {TIER_ORDER.map((tier) => (
        <TierTable key={tier} tier={tier} />
      ))}

      <Typography
        as="div"
        variant="caption"
        className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-700"
      >
        <Typography variant="h6" as="h4" className="mt-0 text-base-black">
          How to use this scale
        </Typography>
        <p>
          These are <b>primitives</b>: raw values with no meaning attached. Reach for a
          semantic token first — the{" "}
          <a href="/#responsive-rules" className="text-textcolor-link">
            Responsive Spacing &amp; Layout Rules
          </a>{" "}
          below define which value applies at Desktop, Tablet and Mobile for every common
          spacing decision, and those rules alias values from this scale. Drop down to a
          primitive only when no semantic rule covers the case.
        </p>
        <p>
          Every primitive is published as a CSS variable, so a value can be consumed without
          being re-typed:{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            padding: var(--spacing-24)
          </code>{" "}
          in CSS, or{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            p-[var(--spacing-24)]
          </code>{" "}
          as a Tailwind utility. The variables are generated from{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            lib/design-system/spacing.ts
          </code>
          , the same module this table renders from.
        </p>
        <p>
          <b>Why the scale is fine at the bottom and coarse at the top.</b> Every integer
          exists from 0–10 because micro-adjustments need precision; from there it steps in
          evens to 40, then in layout-sized jumps. The largest values (768, 1024, 1440, 1920)
          are container and breakpoint widths, not gaps — don&apos;t use them as padding.
        </p>
        <p>
          <b>Off-scale values under review.</b>{" "}
          {offScale.map((token, i) => (
            <span key={token.name}>
              {i > 0 && ", "}
              <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
                {token.name}
              </code>
            </span>
          ))}{" "}
          break the otherwise clean rhythm and read as one-offs that crept into the
          collection. Two of them are load-bearing today —{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            spacing/688
          </code>{" "}
          is the Text Container width at Desktop and Tablet, and{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            spacing/285
          </code>{" "}
          sits one step off the 280 used at Mobile. Prefer the neighbouring on-scale token in
          new work until the collection is cleaned up.
        </p>
        <p>
          <b>Scopes.</b> Every token in the Figma collection carries an empty{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            scopes
          </code>{" "}
          array, so none of them surface as suggestions in Figma&apos;s gap, padding or width
          pickers. That is fine while primitives are consumed only by aliasing into the
          semantic layer; if designers are meant to pick them directly, they need scoping to{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            GAP
          </code>{" "}
          and{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>
            WIDTH_HEIGHT
          </code>
          .
        </p>
      </Typography>
    </>
  );
}
