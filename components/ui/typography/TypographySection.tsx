import Link from "next/link";
import { resolveColorRef, textColors, type TextColorRole } from "@/lib/colors";
import { TypeSpecRow } from "./TypeScale";
import FontFamilyTokenTable from "./FontFamilyTokenTable";
import TextColorTokenTable from "./TextColorTokenTable";
import ResponsiveTypeScaleTable from "./ResponsiveTypeScaleTable";
import { Typography } from "./Typography";
import {
  fontFamilyName,
  fontFamilyTokens,
  fontWeightValues,
  getTypographyDefinition,
  letterSpacingPx,
  typographyVariantNames,
  type TypographyVariant,
} from "@/lib/design-system/typography";

/**
 * Typography foundations page — every variant in the design system, rendered through the
 * <Typography> component itself.
 *
 * Samples are the real component, not a hand-written class list, so what this page shows is
 * exactly what a consumer gets. The spec metadata under each sample is read out of the same
 * tokens that produced the sample, so the two can't disagree.
 */

/** Sample copy per variant. The only thing this file holds that isn't derived from tokens. */
const SAMPLES: Record<TypographyVariant, string> = {
  mainHeader: "Main Header",
  header1: "Header 1",
  header2: "Header 2",
  h2Inner: "H2 Inner",
  h2Alt: "H2 Alt",
  header3: "Header 3",
  header4: "Header 4",
  h4Alt: "h4 alt",
  header5: "Header 5",
  h6: "H6",
  postTitle: "Post Title",
  subtitle: "Subtitle",
  subtitleAlt: "Subtitle Alt",
  strong1: "Strong 1",
  strong2: "Strong 2",
  menuItem: "Menu Item",
  menuItemAlt: "Menu Item Alt",
  preHeader: "Pre-Header",
  button: "Button",
  overline: "Over Line",
  innerpageBody: "Innerpage Body",
  label: "Label",
  body1:
    "This is Body 1 copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec.",
  body2:
    "This is Body 2 copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec.",
  caption:
    "This is Caption copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec.",
  tooltip: "This is Tooltip copy.",
};

/**
 * Colors Figma pins to a few heading styles. They are applied here as `className` rather than
 * baked into the variants, which is what keeps type and color independently reusable.
 */
const SAMPLE_COLOR: Partial<Record<TypographyVariant, { className: string; role: TextColorRole }>> =
  {
    header3: { className: "text-textcolor-h3", role: "h3" },
    header4: { className: "text-textcolor-h4", role: "h4" },
    header5: { className: "text-textcolor-h5", role: "h5" },
  };

/** The hex a role currently resolves to, read from the palette rather than transcribed —
 *  the spec row can't advertise a color the utility class no longer paints. */
function sampleHex(role: TextColorRole): string {
  return resolveColorRef(textColors[role]).toUpperCase();
}

/** "100 / 56 / 40px" — desktop / tablet / mobile, the order the spec rows have always used. */
function triple(desktop: number, tablet: number, mobile: number): string {
  return `${desktop} / ${tablet} / ${mobile}px`;
}

function VariantSample({ variant }: { variant: TypographyVariant }) {
  const def = getTypographyDefinition(variant);
  const color = SAMPLE_COLOR[variant];
  const ls = {
    desktop: letterSpacingPx[def.desktop.letterSpacing],
    tablet: letterSpacingPx[def.tablet.letterSpacing],
    mobile: letterSpacingPx[def.mobile.letterSpacing],
  };

  return (
    <div className="mb-[22px]">
      <div className="flex items-baseline gap-3 flex-wrap">
        {/* The sample is the component — no type classes are written by hand on this page. */}
        <Typography variant={variant} className={color?.className}>
          {SAMPLES[variant]}
        </Typography>

        {variant === "button" && (
          <Link
            href="/buttons"
            className="font-body text-[12px] font-semibold text-primary no-underline hover:underline whitespace-nowrap"
          >
            View in Buttons →
          </Link>
        )}
      </div>

      <div className="flex gap-4 flex-wrap items-baseline">
        <TypeSpecRow
          fontFamily={fontFamilyName(def.fontFamily)}
          fontWeight={fontWeightValues[def.fontWeight]}
          fontSize={triple(def.desktop.fontSize, def.tablet.fontSize, def.mobile.fontSize)}
          lineHeight={triple(def.desktop.lineHeight, def.tablet.lineHeight, def.mobile.lineHeight)}
          letterSpacing={
            ls.desktop === ls.tablet && ls.tablet === ls.mobile
              ? `${ls.desktop}px`
              : triple(ls.desktop, ls.tablet, ls.mobile)
          }
          color={color && sampleHex(color.role)}
        />
        <code className="font-body text-[11px] text-gray-400 mt-1">
          variant=&quot;{variant}&quot;
          {def.textTransform === "uppercase" ? " · uppercase" : ""}
        </code>
      </div>
    </div>
  );
}

export default function TypographySection() {
  return (
    <>
      <FontFamilyTokenTable />
      <TextColorTokenTable />
      <ResponsiveTypeScaleTable />

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 mb-8">
        <p className="font-body text-[13px] leading-[1.6] text-textcolor-body m-0">
          Every sample below is rendered by{" "}
          <code className="text-[12px] bg-white border border-gray-200 px-1 py-0.5 rounded">
            &lt;Typography variant=&quot;…&quot;&gt;
          </code>
          . The variant carries font family, weight, size, line-height, letter-spacing and casing
          at all three breakpoints, so consuming code never restates type values. Use{" "}
          <code className="text-[12px] bg-white border border-gray-200 px-1 py-0.5 rounded">as</code>{" "}
          to keep the document outline correct independently of the visual level, and{" "}
          <code className="text-[12px] bg-white border border-gray-200 px-1 py-0.5 rounded">
            className
          </code>{" "}
          for color.
        </p>
      </div>

      {typographyVariantNames.map((variant) => (
        <VariantSample key={variant} variant={variant} />
      ))}

      <p className="font-body text-[12px] text-gray-400 mt-8 mb-0">
        Font families: {fontFamilyTokens.header.className} ({fontFamilyTokens.header.family}) for
        Main Header through H6, plus Pre-Header; {fontFamilyTokens.body.className} (
        {fontFamilyTokens.body.family}) for the remaining body and UI styles — both loaded via
        next/font/google in app/layout.tsx.
      </p>
    </>
  );
}
