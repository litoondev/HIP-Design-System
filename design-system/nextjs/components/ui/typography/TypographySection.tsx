import { TypeSample } from "./TypeScale";
import TextColorTokenTable from "./TextColorTokenTable";

/**
 * Full type scale for the "Typography" foundations page — every style ported verbatim from
 * design-system/index.html (#typography section): sizes, line-heights, letter-spacing, weights
 * and colors are unchanged.
 */
export default function TypographySection() {
  return (
    <>
      <TextColorTokenTable />

      <TypeSample
        sampleClassName="font-header font-bold text-[40px] leading-[40px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="40px"
        lineHeight="40px"
        letterSpacing="0px"
      >
        MAIN HEADER
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[36px] leading-[44px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="36px"
        lineHeight="44px"
        letterSpacing="0px"
      >
        Header 1
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[32px] leading-[40px] text-textcolor-h2"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="32px"
        lineHeight="40px"
        letterSpacing="0px"
      >
        Header 2
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[30px] leading-[40px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="30px"
        lineHeight="40px"
        letterSpacing="0px"
      >
        H2 Inner
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[32px] leading-[40px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="32px"
        lineHeight="40px"
        letterSpacing="0px"
      >
        H2 Alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[28px] leading-[36px] text-textcolor-h3"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="28px"
        lineHeight="36px"
        letterSpacing="0px"
        color="#3196A9"
      >
        Header 3
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[24px] leading-[34px] text-textcolor-h4"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="24px"
        lineHeight="34px"
        letterSpacing="0px"
        color="#06B6D4"
      >
        Header 4
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[24px] leading-[34px] text-textcolor-h4"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="24px"
        lineHeight="34px"
        letterSpacing="0px"
      >
        h4 alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[20px] leading-[28px] uppercase text-textcolor-h5"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="20px"
        lineHeight="28px"
        letterSpacing="0px"
        color="#F97316"
      >
        HEADER 5
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[16px] leading-[22px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="16px"
        lineHeight="22px"
        letterSpacing="0.5px"
      >
        H6
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[32px] leading-[44px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="32px"
        lineHeight="44px"
        letterSpacing="0px"
      >
        Post Title
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[18px] leading-[28px] tracking-[0.75px] uppercase text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="18px"
        lineHeight="28px"
        letterSpacing="0.75px"
      >
        SUBTITLE
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[18px] leading-[28px] tracking-[0.75px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="18px"
        lineHeight="28px"
        letterSpacing="0.75px"
      >
        Subtitle Alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[20px] leading-[30px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="20px"
        lineHeight="30px"
        letterSpacing="0.5px"
      >
        Strong 1
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[14px] leading-[22px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="14px"
        lineHeight="22px"
        letterSpacing="0.5px"
      >
        Strong 2
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[22px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="14px"
        lineHeight="22px"
        letterSpacing="0.5px"
      >
        Menu Item
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[22px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="14px"
        lineHeight="22px"
        letterSpacing="0.5px"
      >
        Menu Item Alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[12px] leading-[18px] tracking-[3px] uppercase text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="12px"
        lineHeight="18px"
        letterSpacing="3px"
      >
        Pre-Header
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[16px] leading-[24px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="16px"
        lineHeight="24px"
        letterSpacing="0px"
        extra={
          <a
            href="/buttons"
            className="font-body text-[12px] font-semibold text-primary no-underline hover:underline whitespace-nowrap"
          >
            View in Buttons →
          </a>
        }
      >
        Button
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[14px] leading-[20px] tracking-[1.25px] uppercase text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="14px"
        lineHeight="20px"
        letterSpacing="1.25px"
      >
        Over Line
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[16px] leading-[24px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="16px"
        lineHeight="24px"
        letterSpacing="0px"
      >
        Innerpage Body
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[18px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="14px"
        lineHeight="18px"
        letterSpacing="0px"
      >
        Label
      </TypeSample>

      <div className="mb-[18px]">
        <p className="font-body text-[16px] leading-[24px] text-textcolor-body">
          This is Body 1 copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis
          rhoncus urna neque viverra justo nec.
        </p>
        <div className="flex gap-4 flex-wrap font-body text-[11px] text-gray-500 mt-1">
          <span>font-family: <b className="text-gray-700 font-semibold">Inter</b></span>
          <span>font-weight: <b className="text-gray-700 font-semibold">400</b></span>
          <span>font-size: <b className="text-gray-700 font-semibold">16px</b></span>
          <span>line-height: <b className="text-gray-700 font-semibold">24px</b></span>
          <span>letter-spacing: <b className="text-gray-700 font-semibold">0px</b></span>
        </div>
      </div>

      <div className="mb-[18px]">
        <p className="font-body text-[18px] leading-[28px] text-textcolor-body">
          This is Body 2 copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis
          rhoncus urna neque viverra justo nec.
        </p>
        <div className="flex gap-4 flex-wrap font-body text-[11px] text-gray-500 mt-1">
          <span>font-family: <b className="text-gray-700 font-semibold">Inter</b></span>
          <span>font-weight: <b className="text-gray-700 font-semibold">400</b></span>
          <span>font-size: <b className="text-gray-700 font-semibold">18px</b></span>
          <span>line-height: <b className="text-gray-700 font-semibold">28px</b></span>
          <span>letter-spacing: <b className="text-gray-700 font-semibold">0px</b></span>
        </div>
      </div>

      <div className="mb-[18px]">
        <p className="font-body text-[14px] leading-[20px] text-textcolor-body">
          This is Caption copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis
          rhoncus urna neque viverra justo nec.
        </p>
        <div className="flex gap-4 flex-wrap font-body text-[11px] text-gray-500 mt-1">
          <span>font-family: <b className="text-gray-700 font-semibold">Inter</b></span>
          <span>font-weight: <b className="text-gray-700 font-semibold">400</b></span>
          <span>font-size: <b className="text-gray-700 font-semibold">14px</b></span>
          <span>line-height: <b className="text-gray-700 font-semibold">20px</b></span>
          <span>letter-spacing: <b className="text-gray-700 font-semibold">0px</b></span>
        </div>
      </div>

      <div className="mb-[18px]">
        <p className="font-body text-[10px] leading-[15px] text-textcolor-body">This is Tooltip copy.</p>
        <div className="flex gap-4 flex-wrap font-body text-[11px] text-gray-500 mt-1">
          <span>font-family: <b className="text-gray-700 font-semibold">Inter</b></span>
          <span>font-weight: <b className="text-gray-700 font-semibold">400</b></span>
          <span>font-size: <b className="text-gray-700 font-semibold">10px</b></span>
          <span>line-height: <b className="text-gray-700 font-semibold">15px</b></span>
          <span>letter-spacing: <b className="text-gray-700 font-semibold">0px</b></span>
        </div>
      </div>
    </>
  );
}
