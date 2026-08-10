/**
 * Text Container V3 — from Figma "Master V3" node 15878:54160.
 *
 * Design Category: Modern.
 *
 * Two Figma variants map to the align prop:
 *  - left   → Text_Container Left   (570px)
 *  - center → Text_Container Center (870px)
 *
 * All colors resolve through the global token variables — the Figma values land
 * exactly on the project palette: pre-header lines accent (#eab308), title
 * primary (#3196a9), body gray-main (#737373), pre-header text base-black.
 * Type is Figtree throughout: pre-header Medium 16/1.5 +3px uppercase · title
 * SemiBold 56/1.2 capitalize · body Regular 20/1.5 · button ExtraBold 20/1.5
 * +1.25px uppercase on a primary pill.
 */

export const TEXT_CONTAINER_V3_CATEGORY = "Modern";

import type { ReactNode } from "react";
import ModernPillButton from "../buttons/ModernPillButton";

export interface TextContainerV3Props {
  preHeader?: string;
  header: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Override the default primary pill button. */
  button?: ReactNode;
  showButton?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function TextContainerV3({
  preHeader,
  header,
  paragraph,
  buttonLabel = "Learn More",
  buttonHref = "#",
  button,
  showButton = true,
  align = "left",
  className,
}: TextContainerV3Props) {
  const centered = align === "center";
  const alignItems = centered ? "items-center" : "items-start";
  return (
    <div
      className={`flex flex-col gap-[var(--content-button-gap)] w-full ${
        centered ? `max-w-[870px] mx-auto ${alignItems} text-center` : `max-w-[570px] ${alignItems}`
      }${className ? ` ${className}` : ""}`}
    >
      <div className={`flex flex-col gap-[var(--heading-gap)] w-full ${alignItems}`}>
        <div className={`flex flex-col gap-[var(--eyebrow-gap)] w-full ${alignItems}`}>
          {preHeader && (
            <div className="flex flex-col gap-[8px] items-start">
              <span aria-hidden="true" className="w-full h-px bg-[color:var(--color-accent-base)]" />
              <p className="m-0 font-header font-medium uppercase text-[color:var(--color-base-black)] text-[length:var(--text-preheader-size)] leading-[var(--text-preheader-leading)] tracking-[var(--text-preheader-tracking)] whitespace-nowrap">
                {preHeader}
              </p>
              <span aria-hidden="true" className="w-full h-px bg-[color:var(--color-accent-base)]" />
            </div>
          )}
          <h2 className="m-0 font-header font-semibold capitalize text-[color:var(--color-primary-base)] text-[length:var(--text-h2-size)] leading-[var(--text-h2-leading)]">
            {header}
          </h2>
        </div>
        {paragraph && (
          <p className="m-0 font-header font-normal text-[color:var(--color-textcolor-body)] text-[length:var(--text-body1-size)] leading-[var(--text-body1-leading)]">
            {paragraph}
          </p>
        )}
      </div>
      {showButton && (button ?? <ModernPillButton label={buttonLabel} href={buttonHref} />)}
    </div>
  );
}
