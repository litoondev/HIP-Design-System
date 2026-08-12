/**
 * Text Container V5 — from Figma "HIP Master V3" node 12986:56815.
 *
 * Design Category: Bold.
 *
 * Two Figma variants map to the align prop:
 *  - left   → line before the pre-header only
 *  - center → lines on both sides of the pre-header
 *
 * Color roles resolve through the global tokens (the Figma file's fuchsia CTA
 * ramp maps to the project cta ramp, its grape-purple primary to the project
 * primary): pre-header and title line 1 in cta-700 with 50px rule(s), title
 * line 2 white on a primary highlight bar (rounded 4, 10x3 padding), body on
 * textcolor-body. Type is the global scale (font-header / --text-* vars).
 * Button is BoldTabButton (squared cta block with a white arrow tab).
 */

export const TEXT_CONTAINER_V5_CATEGORY = "Bold";

import type { ReactNode } from "react";
import BoldTabButton from "../buttons/BoldTabButton";

function PreHeaderRule() {
  return <span aria-hidden="true" className="w-[50px] h-[2px] bg-[color:var(--color-cta-700)] shrink-0" />;
}

export interface TextContainerV5Props {
  preHeader?: string;
  /** Title line 1 — rendered in cta-700 above the highlight bar. */
  header: string;
  /** Title line 2 — white on the primary highlight bar. */
  headerHighlight?: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Override the default squared cta tab button. */
  button?: ReactNode;
  showButton?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function TextContainerV5({
  preHeader,
  header,
  headerHighlight,
  paragraph,
  buttonLabel,
  buttonHref = "#",
  button,
  showButton = true,
  align = "left",
  className,
}: TextContainerV5Props) {
  const centered = align === "center";
  const alignItems = centered ? "items-center" : "items-start";
  return (
    <div
      className={`flex flex-col gap-[var(--content-button-gap)] w-full ${
        centered ? `max-w-[870px] mx-auto ${alignItems} text-center` : `max-w-[584px] ${alignItems}`
      }${className ? ` ${className}` : ""}`}
    >
      <div className={`flex flex-col gap-[var(--heading-gap)] w-full ${alignItems}`}>
        <div className={`flex flex-col gap-[var(--eyebrow-gap)] w-full ${alignItems}`}>
          {preHeader && (
            <div className="flex items-center gap-[12px]">
              <PreHeaderRule />
              <p className="m-0 font-header font-bold uppercase text-[color:var(--color-cta-700)] text-[length:var(--text-preheader-size)] leading-[var(--text-preheader-leading)] tracking-[var(--text-preheader-tracking)] whitespace-nowrap">
                {preHeader}
              </p>
              {centered && <PreHeaderRule />}
            </div>
          )}
          <h2
            className={`m-0 flex flex-col font-header font-bold capitalize text-[length:var(--text-h2-size)] leading-[var(--text-h2-leading)] ${alignItems}`}
          >
            <span className="text-[color:var(--color-cta-700)]">{header}</span>
            {headerHighlight && (
              <span className="inline-flex w-max max-w-full rounded-[4px] bg-[color:var(--color-primary-base)] px-[10px] py-[3px] text-[color:var(--color-base-white)]">
                {headerHighlight}
              </span>
            )}
          </h2>
        </div>
        {paragraph && (
          <p className="m-0 font-body font-normal text-[color:var(--color-textcolor-body)] text-[length:var(--text-body1-size)] leading-[var(--text-body1-leading)]">
            {paragraph}
          </p>
        )}
      </div>
      {showButton && (button ?? <BoldTabButton label={buttonLabel} href={buttonHref} />)}
    </div>
  );
}
