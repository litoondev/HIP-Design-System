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
  ElegantShadowButton,
  LuxuryOverhangButton,
  OffsetShadowButton,
  PlayfulCollapseButton,
  PressShadowButton,
  TextRollButton,
  BoldFillButton,
  BoldSweepButton,
  BoldSlabButton,
  BoldTabButton,
  SquareArrowButton,
  SliderArrowButton,
  PillArrowButton,
  LineArrowButton,
  CleanOutlineButton,
  CleanExpandButton,
  CleanFadeButton,
  CorporateSweepButton,
  CorporateRotateButton,
  CorporateChevronButton,
  CorporateArrowButton,
  NavBarButton,
  NavBarPillButton,
  NavBarOutlineButton,
  NavBarPillOutlineButton,
  VibrantSweepButton,
  VibrantInvertButton,
  TechLoopButton,
} from "../buttons";

/** Buttons don't take an align prop, so alignment is applied by the demo wrapper. */
function row(align: DemoAlign, children: ReactNode) {
  return <div className={`flex ${align === "center" ? "justify-center" : "justify-start"}`}>{children}</div>;
}

/** All 31 button demos wired into the category-chip showcase shell. */
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
        "elegant-shadow-button-demo": (align) =>
          row(
            align,
            // Bottom padding gives the 4px hard shadow room to show
            <div className="pb-[8px]">
              <ElegantShadowButton label="Learn More" />
            </div>
          ),
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
        "bold-tab-button-demo": (align) => row(align, <BoldTabButton practice="multi-specialty" />),
        "square-arrow-button-demo": (align) =>
          row(
            align,
            // All four tone pairings from the Template 3 comp on one row.
            <div className="flex flex-wrap items-center gap-4">
              <SquareArrowButton tone="cta" label="Request Free Consult" />
              <SquareArrowButton tone="secondary" label="Learn More" />
              <SquareArrowButton tone="primary" label="Explore Braces" />
              <SquareArrowButton tone="neutral" label="What Sets Us Apart" />
            </div>
          ),
        "pill-arrow-button-demo": (align) =>
          row(
            align,
            // Footer V5 pill tones on the DS ramps.
            <div className="flex flex-wrap items-center gap-4">
              <PillArrowButton tone="primary" label="Request Free Consult" />
              <PillArrowButton tone="cta" label="Request Free Consult" />
              <PillArrowButton tone="white" label="Request Free Consult" />
            </div>
          ),
        "slider-arrow-button-demo": (align) =>
          row(
            align,
            // Prev/next pairs in the three ramp tones used by the review rails.
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex gap-2">
                <SliderArrowButton direction="prev" tone="primary" />
                <SliderArrowButton direction="next" tone="primary" />
              </div>
              <div className="flex gap-2">
                <SliderArrowButton direction="prev" tone="secondary" />
                <SliderArrowButton direction="next" tone="secondary" />
              </div>
              <div className="flex gap-2">
                <SliderArrowButton direction="prev" tone="cta" />
                <SliderArrowButton direction="next" tone="cta" />
              </div>
              <div className="flex gap-2">
                <SliderArrowButton direction="prev" tone="outline" />
                <SliderArrowButton direction="next" tone="outline" />
              </div>
              <span className="inline-flex gap-2 bg-[var(--color-base-black)] p-3">
                <SliderArrowButton direction="prev" tone="ghost" />
                <SliderArrowButton direction="next" tone="ghost" />
              </span>
            </div>
          ),
        "line-arrow-button-demo": (align) =>
          row(
            align,
            // Template 06 tones: teal / primary outline, filled variant.
            <div className="flex flex-wrap items-center gap-4">
              <LineArrowButton tone="cta" label="Request Free Consult" />
              <LineArrowButton tone="primary" label="Discover Us" />
              <LineArrowButton tone="primary" filled label="Meet the Doctor" />
            </div>
          ),
        "clean-outline-button-demo": (align) => row(align, <CleanOutlineButton />),
        "clean-expand-button-demo": (align) => row(align, <CleanExpandButton />),
        "clean-fade-button-demo": (align) => row(align, <CleanFadeButton />),
        "corporate-sweep-button-demo": (align) => row(align, <CorporateSweepButton />),
        "corporate-rotate-button-demo": (align) => row(align, <CorporateRotateButton />),
        "corporate-chevron-button-demo": (align) => row(align, <CorporateChevronButton />),
        "corporate-arrow-button-demo": (align) => row(align, <CorporateArrowButton />),
        "nav-bar-button-demo": (align) => row(align, <NavBarButton />),
        "nav-bar-pill-button-demo": (align) => row(align, <NavBarPillButton />),
        "nav-bar-outline-button-demo": (align) => row(align, <NavBarOutlineButton />),
        "nav-bar-pill-outline-button-demo": (align) => row(align, <NavBarPillOutlineButton />),
        "vibrant-sweep-button-demo": (align) => row(align, <VibrantSweepButton />),
        "vibrant-invert-button-demo": (align) => row(align, <VibrantInvertButton />),
        "tech-loop-button-demo": (align) => row(align, <TechLoopButton />),
      }}
    />
  );
}
