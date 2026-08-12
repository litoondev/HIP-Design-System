/**
 * Text Container V6 — from Figma "HIP Master V3" node 12989:55561.
 *
 * Design Category: Elegant.
 *
 * Two Figma variants map to the align prop:
 *  - left   → hairline rule after title line 1 only
 *  - center → hairline rules on both sides of title line 1
 *
 * No pre-header. Everything resolves through the global tokens: title is the
 * global header font, uppercase, on the global H2 scale — line 1 in base-black
 * with a 130px gray-300 hairline, line 2 in gray-600 (the design's moss gray).
 * Body is the global body font, Light, on textcolor-body. Button is
 * ElegantShadowButton (primary pill, hard gray-200 drop shadow).
 */

export const TEXT_CONTAINER_V6_CATEGORY = "Elegant";

import type { ReactNode } from "react";
import ElegantShadowButton from "../buttons/ElegantShadowButton";

function TitleRule() {
  return (
    <span
      aria-hidden="true"
      className="w-[80px] lg:w-[130px] h-px bg-[color:var(--color-gray-300)] shrink-0"
    />
  );
}

export interface TextContainerV6Props {
  /** Title line 1 — base-black, flanked by the hairline rule(s). */
  header: string;
  /** Title line 2 — gray-600 (moss gray in the design). */
  headerLine2?: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Override the default primary shadow pill button. */
  button?: ReactNode;
  showButton?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function TextContainerV6({
  header,
  headerLine2,
  paragraph,
  buttonLabel = "Learn More",
  buttonHref = "#",
  button,
  showButton = true,
  align = "left",
  className,
}: TextContainerV6Props) {
  const centered = align === "center";
  const alignItems = centered ? "items-center" : "items-start";
  return (
    <div
      className={`flex flex-col gap-[var(--content-button-gap)] w-full max-w-[972px] ${
        centered ? `mx-auto ${alignItems} text-center` : alignItems
      }${className ? ` ${className}` : ""}`}
    >
      <div className={`flex flex-col gap-[var(--heading-gap)] w-full ${alignItems}`}>
        <h2
          className={`m-0 flex flex-col font-header font-normal uppercase text-[length:var(--text-h2-size)] leading-[var(--text-h2-leading)] ${alignItems}`}
        >
          <span className="flex items-center gap-[16px] text-[color:var(--color-base-black)]">
            {centered && <TitleRule />}
            <span>{header}</span>
            <TitleRule />
          </span>
          {headerLine2 && (
            <span className="text-[color:var(--color-gray-600)]">{headerLine2}</span>
          )}
        </h2>
        {paragraph && (
          <p className="m-0 font-body font-light text-[color:var(--color-textcolor-body)] text-[length:var(--text-body1-size)] leading-[var(--text-body1-leading)]">
            {paragraph}
          </p>
        )}
      </div>
      {showButton && (button ?? <ElegantShadowButton label={buttonLabel} href={buttonHref} />)}
    </div>
  );
}
