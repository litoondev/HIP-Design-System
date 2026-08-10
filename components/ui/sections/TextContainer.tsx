import type { ReactNode } from "react";
import RequestFreeConsultButton from "../buttons/RequestFreeConsultButton";
import { Typography } from "@/components/ui/typography/Typography";

/**
 * Text Container — the standard copy block (Figma node 12951:55012).
 *
 * Design Category: Professional / Corporate.
 *
 * Type tokens:  Pre Header → PreHeader · Header → H2 (site default) ·
 * Paragraph → Body 1 · Bullet Point → Strong 1 · Button → Button.
 *
 * Internal rhythm (Desktop / Tablet / Mobile):
 * pre-header→header 8/6/4 · header→paragraph 24/20/16 · paragraph→paragraph
 * 30/20/16 · bullet→bullet 20/20/16 · content→button 40/30/24 ·
 * button→button 30/20/20 · width 688/688/280.
 */

export const TEXT_CONTAINER_CATEGORY = "Professional / Corporate";

export interface TextContainerProps {
  preHeader?: string;
  header: string;
  /** H2 is the site standard; step up/down only when the section's hierarchy calls for it. */
  headerAs?: "h1" | "h2" | "h3";
  paragraphs?: string[];
  bullets?: string[];
  /** Rendered after the bullets/paragraphs. Defaults to the Request Free Consult button. */
  buttons?: ReactNode;
  /** Left (default) or center alignment of the whole copy block. */
  align?: "left" | "center";
  className?: string;
}

function BulletGlyph() {
  return (
    <svg
      className="w-5 h-5 shrink-0 text-base-black"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2.75" y="2.75" width="14.5" height="14.5" rx="2" />
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function TextContainer({
  preHeader,
  header,
  headerAs: HeaderTag = "h2",
  paragraphs = [],
  bullets = [],
  buttons,
  align = "left",
  className,
}: TextContainerProps) {
  const centered = align === "center";
  return (
    <div
      className={`w-full max-w-[280px] md:max-w-[688px]${centered ? " mx-auto text-center" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {preHeader && (
        <Typography
          variant="preHeader"
          as="p"
          className="text-cta m-0 mb-1 md:mb-1.5 lg:mb-2"
        >
          {preHeader}
        </Typography>
      )}

      {/* Header 2 is the site standard; `headerAs` moves the outline without moving the look. */}
      <Typography
        variant="header2"
        as={HeaderTag}
        className="text-base-black m-0 mb-4 md:mb-5 lg:mb-6"
      >
        {header}
      </Typography>

      {paragraphs.map((text, i) => (
        <Typography
          key={i}
          variant="body1"
          className={`m-0 ${
            i < paragraphs.length - 1 || bullets.length > 0
              ? "mb-4 md:mb-5 lg:mb-[30px]"
              : ""
          }`}
        >
          {text}
        </Typography>
      ))}

      {bullets.length > 0 && (
        <ul className="list-none m-0 p-0">
          {bullets.map((text, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 border-b border-gray-200 pb-4 md:pb-5 lg:pb-5 ${
                i > 0 ? "pt-4 md:pt-5 lg:pt-5" : ""
              } last:border-b-0 last:pb-0${centered ? " justify-center" : ""}`}
            >
              <BulletGlyph />
              <Typography variant="strong1" as="span" className="text-textcolor-body">
                {text}
              </Typography>
            </li>
          ))}
        </ul>
      )}

      <div
        className={`flex flex-wrap items-center gap-5 md:gap-5 lg:gap-[30px] mt-6 md:mt-[30px] lg:mt-10${
          centered ? " justify-center" : ""
        }`}
      >
        {buttons ?? <RequestFreeConsultButton />}
      </div>
    </div>
  );
}
