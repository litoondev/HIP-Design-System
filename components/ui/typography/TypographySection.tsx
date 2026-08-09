import Link from "next/link";
import { TypeSample } from "./TypeScale";
import TextColorTokenTable from "./TextColorTokenTable";
import ResponsiveTypeScaleTable from "./ResponsiveTypeScaleTable";

/**
 * Full type scale for the "Typography" foundations page — every style ported verbatim from
 * design-system/index.html (#typography section). Each sample carries the source's three
 * breakpoint values: base = mobile (<768px), md: = tablet, lg: = desktop.
 */
export default function TypographySection() {
  return (
    <>
      <TextColorTokenTable />
      <ResponsiveTypeScaleTable />

      <TypeSample
        sampleClassName="font-header font-bold text-[40px] leading-[40px] md:text-[56px] md:leading-[68px] lg:text-[100px] lg:leading-[100px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="100 / 56 / 40px"
        lineHeight="100 / 68 / 40px"
        letterSpacing="0px"
      >
        MAIN HEADER
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[72px] lg:leading-[72px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="72 / 48 / 36px"
        lineHeight="72 / 56 / 44px"
        letterSpacing="0px"
      >
        Header 1
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[32px] leading-[40px] md:text-[42px] md:leading-[50px] lg:text-[56px] lg:leading-[68px] text-textcolor-h2"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="56 / 42 / 32px"
        lineHeight="68 / 50 / 40px"
        letterSpacing="0px"
      >
        Header 2
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[30px] leading-[40px] md:text-[38px] md:leading-[50px] lg:text-[54px] lg:leading-[68px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="54 / 38 / 30px"
        lineHeight="68 / 50 / 40px"
        letterSpacing="0px"
      >
        H2 Inner
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[32px] leading-[40px] md:text-[42px] md:leading-[50px] lg:text-[120px] lg:leading-[140px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="120 / 42 / 32px"
        lineHeight="140 / 50 / 40px"
        letterSpacing="0px"
      >
        H2 Alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[56px] text-textcolor-h3"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="42 / 36 / 28px"
        lineHeight="56 / 36 / 36px"
        letterSpacing="0px"
        color="#3196A9"
      >
        Header 3
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[24px] leading-[34px] md:text-[28px] md:leading-[40px] lg:text-[32px] lg:leading-[46px] text-textcolor-h4"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="32 / 28 / 24px"
        lineHeight="46 / 40 / 34px"
        letterSpacing="0px"
        color="#06B6D4"
      >
        Header 4
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[24px] leading-[34px] md:text-[28px] md:leading-[40px] lg:text-[32px] lg:leading-[46px] text-textcolor-h4"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="32 / 28 / 24px"
        lineHeight="46 / 40 / 34px"
        letterSpacing="0px"
      >
        h4 alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-header font-bold text-[20px] leading-[28px] md:text-[22px] md:leading-[30px] lg:text-[24px] lg:leading-[34px] uppercase text-textcolor-h5"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="24 / 22 / 20px"
        lineHeight="34 / 30 / 28px"
        letterSpacing="0px"
        color="#F97316"
      >
        HEADER 5
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[16px] leading-[22px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="20 / 18 / 16px"
        lineHeight="30 / 28 / 22px"
        letterSpacing="0.5px"
      >
        H6
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[24px] leading-[34px] md:text-[28px] md:leading-[40px] lg:text-[32px] lg:leading-[44px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="32 / 28 / 24px"
        lineHeight="44 / 40 / 34px"
        letterSpacing="0px"
      >
        Post Title
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[18px] leading-[28px] md:text-[22px] md:leading-[33px] lg:text-[24px] lg:leading-[36px] tracking-[0.75px] uppercase text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="24 / 22 / 18px"
        lineHeight="36 / 33 / 28px"
        letterSpacing="0.75px"
      >
        SUBTITLE
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[18px] leading-[28px] md:text-[22px] md:leading-[33px] lg:text-[24px] lg:leading-[36px] tracking-[0.75px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="24 / 22 / 18px"
        lineHeight="36 / 33 / 28px"
        letterSpacing="0.75px"
      >
        Subtitle Alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[16px] leading-[22px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="20 / 18 / 16px"
        lineHeight="30 / 28 / 22px"
        letterSpacing="0.5px"
      >
        Strong 1
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[27px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="18 / 16 / 14px"
        lineHeight="27 / 24 / 22px"
        letterSpacing="0.5px"
      >
        Strong 2
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[26px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="18 / 16 / 14px"
        lineHeight="26 / 24 / 22px"
        letterSpacing="0.5px"
      >
        Menu Item
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[26px] tracking-[0.5px] text-base-black"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="18 / 16 / 14px"
        lineHeight="26 / 24 / 22px"
        letterSpacing="0.5px"
      >
        Menu Item Alt
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[12px] leading-[18px] md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] tracking-[3px] uppercase text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="16 / 14 / 12px"
        lineHeight="24 / 20 / 18px"
        letterSpacing="3px"
      >
        Pre-Header
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] md:tracking-[0.5px] lg:text-[20px] lg:leading-[30px] lg:tracking-[1.25px] text-base-black"
        fontFamily="Figtree"
        fontWeight={700}
        fontSize="20 / 18 / 16px"
        lineHeight="30 / 28 / 24px"
        letterSpacing="1.25 / 0.5 / 0px"
      extra={
        <Link
          href="/buttons"
          className="font-body text-[12px] font-semibold text-primary no-underline hover:underline whitespace-nowrap"
        >
          View in Buttons →
        </Link>
      }
      >
        Button
      </TypeSample>

      <TypeSample
        sampleClassName="font-body font-bold text-[14px] leading-[20px] tracking-[1.25px] uppercase text-base-black"
        fontFamily="Inter"
        fontWeight={700}
        fontSize="14px (all breakpoints)"
        lineHeight="20px"
        letterSpacing="1.25px"
      >
        Over Line
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[28px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="20 / 18 / 16px"
        lineHeight="28px"
        letterSpacing="0px"
      >
        Innerpage Body
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] lg:text-[16px] lg:leading-[20px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="16 / 16 / 14px"
        lineHeight="20 / 20 / 18px"
        letterSpacing="0px"
      >
        Label
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="20 / 18 / 16px"
        lineHeight="30 / 28 / 24px"
        letterSpacing="0px"
      >
        This is Body 1 copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec.
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="18 / 16 / 14px"
        lineHeight="28 / 24 / 20px"
        letterSpacing="0px"
      >
        This is Body 2 copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec.
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[14px] leading-[20px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="16 / 16 / 14px"
        lineHeight="22 / 22 / 20px"
        letterSpacing="0px"
      >
        This is Caption copy. This is a link. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec.
      </TypeSample>

      <TypeSample
        sampleClassName="font-body text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] lg:text-[12px] lg:leading-[18px] text-textcolor-body"
        fontFamily="Inter"
        fontWeight={400}
        fontSize="12 / 12 / 10px"
        lineHeight="18 / 18 / 15px"
        letterSpacing="0px"
      >
        This is Tooltip copy.
      </TypeSample>
    </>
  );
}
