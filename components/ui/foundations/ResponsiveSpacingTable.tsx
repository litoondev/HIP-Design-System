import { Typography, typographyClass } from "@/components/ui/typography/Typography";

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

/* Text Container — which text-style token each copy-block element uses.
   The header defaults to H2 (most sections); it may step up/down when the
   section's hierarchy calls for it. */
const textContainerType: { element: string; token: string; note?: string }[] = [
  { element: "Pre Header", token: "PreHeader" },
  { element: "Header", token: "H2", note: "default — may change per section, but H2 is the site standard" },
  { element: "Paragraph", token: "Body 1" },
  { element: "Bullet Point", token: "Strong 1" },
  { element: "Button", token: "Button" },
];

/* Text Container — internal rhythm of the standard copy block (pre-header,
   header, paragraphs, bullets, button), from the Figma "Text Container" spec. */
const textContainerRows: Row[] = [
  {
    rule: "Pre Header gap",
    ruleNote: "(pre-header → header)",
    desktop: "8px",
    tablet: "6px",
    mobile: "4px",
  },
  {
    rule: "Header gap",
    ruleNote: "(header → first paragraph)",
    desktop: "24px",
    tablet: "20px",
    mobile: "16px",
  },
  {
    rule: "Paragraph gap",
    ruleNote: "(paragraph → paragraph)",
    desktop: "30px",
    tablet: "20px",
    mobile: "16px",
  },
  {
    rule: "Bullet Point gap",
    ruleNote: "(between bullets)",
    desktop: "20px",
    tablet: "20px",
    mobile: "16px",
  },
  {
    rule: "Button gap",
    ruleNote: "(content → button)",
    desktop: "40px",
    tablet: "30px",
    mobile: "24px",
  },
  {
    rule: "Button-to-button gap",
    desktop: "30px",
    tablet: "20px",
    mobile: "20px",
  },
  {
    rule: "Container width",
    desktop: "688px",
    tablet: "688px",
    mobile: "280px",
  },
];

/** Column heads: the design system's small-uppercase label style. */
const HEAD_CLASS = typographyClass(
  "overline",
  "text-left px-4 py-3 text-gray-500 border-b border-gray-200"
);

function SpacingTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
      <table className={typographyClass("caption", "w-full border-collapse")}>
        <thead>
          <tr className="bg-gray-50">
            <th className={HEAD_CLASS}>
              Spacing rule
            </th>
            <th className={HEAD_CLASS}>
              Desktop (1440px)
            </th>
            <th className={HEAD_CLASS}>
              Tablet (768px)
            </th>
            <th className={HEAD_CLASS}>
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
  );
}

/** Responsive Spacing & Layout Rules table — ported 1:1 from design-system/index.html (#responsive-rules) */
export default function ResponsiveSpacingTable() {
  return (
    <>
      <SpacingTable rows={rows} />

      <Typography variant="h6" as="h3" className="text-base-black mt-10 mb-1">
        Text Container
      </Typography>
      <Typography variant="caption" as="p" className="text-textcolor-body mt-0 mb-4 max-w-[640px]">
        Internal rhythm of the standard copy block — pre-header, header, paragraphs, bullet points,
        and button — measured from the Figma <b className="text-base-black">Text Container</b> spec.
        Every text column in a section follows these gaps and widths.
      </Typography>
      <SpacingTable rows={textContainerRows} />

      <Typography variant="h6" as="h4" className="text-base-black mt-8 mb-1">
        Text Container — type styles
      </Typography>
      <Typography variant="caption" as="p" className="text-textcolor-body mt-0 mb-4 max-w-[640px]">
        Each element of the copy block maps to a semantic text style from the type scale — never an
        arbitrary size.
      </Typography>
      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
        <table className={typographyClass("caption", "w-full border-collapse")}>
          {/* second table — same head/body treatment as SpacingTable above */}
          <thead>
            <tr className="bg-gray-50">
              <th className={HEAD_CLASS}>
                Element
              </th>
              <th className={HEAD_CLASS}>
                Text style token
              </th>
            </tr>
          </thead>
          <tbody>
            {textContainerType.map((row, i) => (
              <tr
                key={row.element}
                className={`${i < textContainerType.length - 1 ? "border-b border-gray-100" : ""} ${
                  i % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <td className="px-4 py-3 text-base-black font-semibold">{row.element}</td>
                <td className="px-4 py-3 text-gray-700">
                  {row.token}
                  {row.note && <span className="text-gray-400"> — {row.note}</span>}
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
          How these were measured
        </Typography>
        <p>
          Values were pulled from the three real Home Page frames in the Figma file —{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>Home Page 1440px</code>,{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>Home - 768px</code>, and{" "}
          <code className={typographyClass("tooltip", "bg-white border border-gray-200 rounded px-1")}>Home - 320px</code> —
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
      </Typography>
    </>
  );
}
