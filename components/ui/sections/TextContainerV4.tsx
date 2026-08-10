/**
 * Text Container V4 — from Figma "Master V3" node 15879:53261.
 *
 * Design Category: Clean.
 *
 * Two Figma variants map to the align prop:
 *  - left   → Text_Container Left   (570px)
 *  - center → Text_Container Center (870px)
 *
 * All colors resolve through the global token variables: pre-header badge is a
 * cta-50 pill with cta text (#f97316 on #fff7ed), title is base-black Figtree
 * Bold 56/68 with the highlight word in primary (#3196a9), body is Inter
 * (font-body) Regular 20/1.5 on textcolor-body. Button is the shared
 * ModernPillButton (BTN_Mst).
 */

export const TEXT_CONTAINER_V4_CATEGORY = "Clean";

import type { ReactNode } from "react";
import ModernPillButton from "../buttons/ModernPillButton";

export interface TextContainerV4Props {
  preHeader?: string;
  header: string;
  /** Trailing title word(s) rendered in the primary color (Figma's teal "Here"). */
  headerHighlight?: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Override the default primary pill button. */
  button?: ReactNode;
  showButton?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function TextContainerV4({
  preHeader,
  header,
  headerHighlight,
  paragraph,
  buttonLabel = "Learn More",
  buttonHref = "#",
  button,
  showButton = true,
  align = "left",
  className,
}: TextContainerV4Props) {
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
            <span className="inline-flex rounded-[var(--radius-full)] bg-[color:var(--color-cta-50)] px-[20px] py-[8px]">
              <span className="font-header font-bold uppercase text-[color:var(--color-cta-base)] text-[length:var(--text-preheader-size)] leading-[var(--text-preheader-leading)] tracking-[var(--text-preheader-tracking)] whitespace-nowrap">
                {preHeader}
              </span>
            </span>
          )}
          <h2 className="m-0 font-header font-bold capitalize text-[color:var(--color-base-black)] text-[length:var(--text-h2-size)] leading-[var(--text-h2-leading)]">
            {header}
            {headerHighlight && (
              <>
                {" "}
                <span className="text-[color:var(--color-primary-base)]">{headerHighlight}</span>
              </>
            )}
          </h2>
        </div>
        {paragraph && (
          <p className="m-0 font-body font-normal text-[color:var(--color-textcolor-body)] text-[length:var(--text-body1-size)] leading-[var(--text-body1-leading)]">
            {paragraph}
          </p>
        )}
      </div>
      {showButton && (button ?? <ModernPillButton label={buttonLabel} href={buttonHref} />)}
    </div>
  );
}
