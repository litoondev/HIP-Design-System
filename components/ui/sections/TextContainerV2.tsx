/* eslint-disable @next/next/no-img-element */

/**
 * Text Container V2 — from Figma "Master V3" node 15857:53746.
 *
 * Design Category: Vibrant.
 *
 * Two Figma variants map to the align prop:
 *  - left   → Text Container/Desk/Off/V14 (570px, pre-header line on the right)
 *  - center → Text Container/Desk/On/V13  (870px, lines on both sides)
 *
 * Exact supplied values (preserved per the design spec, not HIP tokens):
 * Host Grotesk · pre-header Medium 16/1.5 +3px #24AAE1 · title SemiBold 56/1.2
 * capitalize #273993 with 3px/3px #8FE8FC hard shadow · body Regular 20/1.5
 * #58585B · button ExtraBold 20/1.5 +1.25px uppercase #2D2D2D.
 */

export const TEXT_CONTAINER_V2_CATEGORY = "Vibrant";

import type { ReactNode } from "react";
import VibrantSweepButton from "../buttons/VibrantSweepButton";

const HOST_GROTESK = "'Host Grotesk', sans-serif";

export interface TextContainerV2Props {
  preHeader?: string;
  header: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Override the default Cyan Sweep button (e.g. with LearnMoreV2Button). */
  button?: ReactNode;
  showButton?: boolean;
  align?: "left" | "center";
  className?: string;
}

function PreHeaderLine() {
  return <span aria-hidden="true" className="w-[60px] h-px bg-[color:var(--color-secondary-base)] shrink-0" />;
}

export function LearnMoreV2Button({
  label = "Learn More",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-[18px] border-2 border-[color:var(--color-base-black)] pl-[18px] bg-white"
      style={{ fontFamily: HOST_GROTESK }}
      aria-label={label}
    >
      <span className="font-extrabold uppercase text-[color:var(--color-base-black)] text-[16px] lg:text-[20px] leading-[1.5] tracking-[1.25px] whitespace-nowrap">
        {label}
      </span>
      <span className="w-[3px] self-stretch bg-[color:var(--color-base-black)] -my-[2px]" aria-hidden="true" />
      <span className="flex items-center bg-[color:var(--color-base-black)] p-[18px] lg:p-[22px] -m-[2px] ml-0 transition-colors duration-150 ease-out group-hover:bg-[color:var(--color-secondary-base)]">
        <img src="/icons/learn-more-arrow.svg" alt="" className="w-[18px] h-[18px]" />
      </span>
    </button>
  );
}

export default function TextContainerV2({
  preHeader,
  header,
  paragraph,
  buttonLabel = "Learn More",
  buttonHref = "#",
  button,
  showButton = true,
  align = "left",
  className,
}: TextContainerV2Props) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-[var(--content-button-gap)] w-full ${
        centered ? "max-w-[870px] mx-auto items-center text-center" : "max-w-[570px] items-start"
      }${className ? ` ${className}` : ""}`}
      style={{ fontFamily: HOST_GROTESK }}
    >
      <div className={`flex flex-col gap-[var(--heading-gap)] w-full ${centered ? "items-center" : "items-start"}`}>
        <div className={`flex flex-col gap-[var(--eyebrow-gap)] w-full ${centered ? "items-center" : "items-start"}`}>
          {preHeader && (
            <div className="flex items-center gap-[16px]">
              {centered && <PreHeaderLine />}
              <p className="m-0 font-medium uppercase text-[color:var(--color-secondary-base)] text-[length:var(--text-preheader-size)] leading-[var(--text-preheader-leading)] tracking-[var(--text-preheader-tracking)] whitespace-nowrap">
                {preHeader}
              </p>
              <PreHeaderLine />
            </div>
          )}
          <h2
            className="m-0 font-semibold capitalize text-[color:var(--color-primary-base)] text-[length:var(--text-h2-size)] leading-[var(--text-h2-leading)]"
            style={{ textShadow: "3px 3px 0px var(--color-secondary-200)" }}
          >
            {header}
          </h2>
        </div>
        {paragraph && (
          <p className="m-0 font-normal text-[color:var(--color-textcolor-body)] text-[length:var(--text-body1-size)] leading-[var(--text-body1-leading)]">
            {paragraph}
          </p>
        )}
      </div>
      {showButton && (button ?? <VibrantSweepButton label={buttonLabel} href={buttonHref} />)}
    </div>
  );
}
