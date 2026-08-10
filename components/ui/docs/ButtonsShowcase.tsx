"use client";

import type { ReactNode } from "react";
import { ComponentShowcase, type DemoAlign } from "./ComponentShowcase";
import {
  ArrowLoopButton,
  PanelCollapseButton,
  ModernPillButton,
  MinimalOutlineButton,
  LineSlideButton,
  LineSwapButton,
  ElegantFillButton,
  ElegantSweepButton,
  LuxuryOverhangButton,
  OffsetShadowButton,
  PlayfulCollapseButton,
  PressShadowButton,
  TextRollButton,
  BoldFillButton,
  BoldSweepButton,
  BoldSlabButton,
  CleanOutlineButton,
  CleanExpandButton,
  CleanFadeButton,
  CorporateSweepButton,
  CorporateRotateButton,
  CorporateChevronButton,
  CorporateArrowButton,
  VibrantSweepButton,
  VibrantInvertButton,
  TechLoopButton,
} from "../buttons";

/** Buttons don't take an align prop, so alignment is applied by the demo wrapper. */
function row(align: DemoAlign, children: ReactNode) {
  return <div className={`flex ${align === "center" ? "justify-center" : "justify-start"}`}>{children}</div>;
}

/** All 26 button demos wired into the category-chip showcase shell. */
export default function ButtonsShowcase() {
  return (
    <ComponentShowcase
      alignToggle={false}
      demos={{
        "arrow-loop-button-demo": (align) => row(align, <ArrowLoopButton />),
        "panel-collapse-button-demo": (align) => row(align, <PanelCollapseButton />),
        "modern-pill-button-demo": (align) => row(align, <ModernPillButton label="Learn More" />),
        "minimal-outline-button-demo": (align) => row(align, <MinimalOutlineButton />),
        "line-slide-button-demo": (align) => row(align, <LineSlideButton />),
        "line-swap-button-demo": (align) => row(align, <LineSwapButton />),
        "elegant-fill-button-demo": (align) => row(align, <ElegantFillButton />),
        "elegant-sweep-button-demo": (align) => row(align, <ElegantSweepButton />),
        "luxury-overhang-button-demo": (align) => row(align, <LuxuryOverhangButton />),
        "offset-shadow-button-demo": (align) =>
          row(
            align,
            // Extra padding gives the 10px offset shadow room to show
            <div className="pt-1 pr-[14px] pb-[14px] pl-1">
              <OffsetShadowButton />
            </div>
          ),
        "playful-collapse-button-demo": (align) => row(align, <PlayfulCollapseButton />),
        "press-shadow-button-demo": (align) => row(align, <PressShadowButton />),
        "text-roll-button-demo": (align) => row(align, <TextRollButton />),
        "bold-fill-button-demo": (align) => row(align, <BoldFillButton />),
        "bold-sweep-button-demo": (align) => row(align, <BoldSweepButton />),
        "bold-slab-button-demo": (align) => row(align, <BoldSlabButton />),
        "clean-outline-button-demo": (align) => row(align, <CleanOutlineButton />),
        "clean-expand-button-demo": (align) => row(align, <CleanExpandButton />),
        "clean-fade-button-demo": (align) => row(align, <CleanFadeButton />),
        "corporate-sweep-button-demo": (align) => row(align, <CorporateSweepButton />),
        "corporate-rotate-button-demo": (align) => row(align, <CorporateRotateButton />),
        "corporate-chevron-button-demo": (align) => row(align, <CorporateChevronButton />),
        "corporate-arrow-button-demo": (align) => row(align, <CorporateArrowButton />),
        "vibrant-sweep-button-demo": (align) => row(align, <VibrantSweepButton />),
        "vibrant-invert-button-demo": (align) => row(align, <VibrantInvertButton />),
        "tech-loop-button-demo": (align) => row(align, <TechLoopButton />),
      }}
    />
  );
}
