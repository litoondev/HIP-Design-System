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

const HOST_GROTESK = "'Host Grotesk', sans-serif";

export interface TextContainerV2Props {
  preHeader?: string;
  header: string;
  paragraph?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  align?: "left" | "center";
  className?: string;
}

function PreHeaderLine() {
  return <span aria-hidden="true" className="w-[60px] h-px bg-[#24aae1] shrink-0" />;
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
      className="group flex items-center gap-[18px] border-2 border-[#2d2d2d] pl-[18px] bg-white"
      style={{ fontFamily: HOST_GROTESK }}
      aria-label={label}
    >
      <span className="font-extrabold uppercase text-[#2d2d2d] text-[16px] lg:text-[20px] leading-[1.5] tracking-[1.25px] whitespace-nowrap">
        {label}
      </span>
      <span className="w-[3px] self-stretch bg-[#2d2d2d] -my-[2px]" aria-hidden="true" />
      <span className="flex items-center bg-[#2d2d2d] p-[18px] lg:p-[22px] -m-[2px] ml-0 transition-colors duration-150 ease-out group-hover:bg-[#24aae1]">
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
  onButtonClick,
  showButton = true,
  align = "left",
  className,
}: TextContainerV2Props) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-[30px] lg:gap-[40px] w-full ${
        centered ? "max-w-[870px] mx-auto items-center text-center" : "max-w-[570px] items-start"
      }${className ? ` ${className}` : ""}`}
      style={{ fontFamily: HOST_GROTESK }}
    >
      <div className={`flex flex-col gap-[16px] lg:gap-[24px] w-full ${centered ? "items-center" : "items-start"}`}>
        <div className={`flex flex-col gap-[8px] w-full ${centered ? "items-center" : "items-start"}`}>
          {preHeader && (
            <div className="flex items-center gap-[16px]">
              {centered && <PreHeaderLine />}
              <p className="m-0 font-medium uppercase text-[#24aae1] text-[12px] lg:text-[16px] leading-[1.5] tracking-[3px] whitespace-nowrap">
                {preHeader}
              </p>
              <PreHeaderLine />
            </div>
          )}
          <h2
            className="m-0 font-semibold capitalize text-[#273993] text-[32px] md:text-[42px] lg:text-[56px] leading-[1.2]"
            style={{ textShadow: "3px 3px 0px #8fe8fc" }}
          >
            {header}
          </h2>
        </div>
        {paragraph && (
          <p className="m-0 font-normal text-[#58585b] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5]">
            {paragraph}
          </p>
        )}
      </div>
      {showButton && <LearnMoreV2Button label={buttonLabel} onClick={onButtonClick} />}
    </div>
  );
}
