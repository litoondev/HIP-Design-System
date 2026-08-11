import type { ReactNode } from "react";
import BoldFillButton from "../buttons/BoldFillButton";

/**
 * Text Container — the standard copy block (Figma node 12951:55012).
 *
 * Design Category: Professional / Corporate.
 *
 * Type tokens:  Pre Header → PreHeader · Header → H2 (site default) ·
 * Paragraph → Body 1 · Bullet Point → Strong 1 · Button → Button.
 *
 * Internal rhythm and type sizes resolve through the global tokens in
 * globals.css (--eyebrow-gap, --heading-gap, --paragraph-gap,
 * --content-button-gap, --button-gap, --text-*), so the responsive ladder has
 * one source of truth. Width 688/688/280.
 */

export const TEXT_CONTAINER_CATEGORY = "Professional / Corporate";

export interface TextContainerProps {
  preHeader?: string;
  header: string;
  /** H2 is the site standard; step up/down only when the section's hierarchy calls for it. */
  headerAs?: "h1" | "h2" | "h3";
  paragraphs?: string[];
  bullets?: string[];
  /** Rendered after the bullets/paragraphs. Defaults to the Request Free Consult button;
   *  pass null to omit the button row entirely (e.g. section headings). */
  buttons?: ReactNode | null;
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
        <p className="font-header font-bold uppercase text-cta text-[length:var(--text-preheader-size)] leading-[var(--text-preheader-leading)] tracking-[var(--text-preheader-tracking)] m-0 mb-[var(--eyebrow-gap)]">
          {preHeader}
        </p>
      )}

      <HeaderTag className="font-header font-bold text-base-black text-[length:var(--text-h2-size)] leading-[var(--text-h2-leading)] m-0 mb-[var(--heading-gap)]">
        {header}
      </HeaderTag>

      {paragraphs.map((text, i) => (
        <p
          key={i}
          className={`font-body text-textcolor-body text-[length:var(--text-body1-size)] leading-[var(--text-body1-leading)] m-0 ${
            i < paragraphs.length - 1 || bullets.length > 0
              ? "mb-[var(--paragraph-gap)]"
              : ""
          }`}
        >
          {text}
        </p>
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
              <span className="font-body font-bold text-textcolor-body text-[length:var(--text-h6-size)] leading-[var(--text-h6-leading)] tracking-[var(--text-h6-tracking)]">
                {text}
              </span>
            </li>
          ))}
        </ul>
      )}

      {buttons !== null && (
        <div
          className={`flex flex-wrap items-center gap-[var(--button-gap)] mt-[var(--content-button-gap)]${
            centered ? " justify-center" : ""
          }`}
        >
          {buttons ?? <BoldFillButton />}
        </div>
      )}
    </div>
  );
}
