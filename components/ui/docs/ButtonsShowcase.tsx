"use client";

import type { ReactNode } from "react";
import { ComponentShowcase, type DemoAlign } from "./ComponentShowcase";
import {
  ArrowLoopButton,
  PanelCollapseButton,
  CharcoalOutlineButton,
  LineSlideButton,
  LineSwapButton,
  BronzeFillButton,
  TanSweepButton,
  GoldOverhangButton,
  OffsetShadowButton,
  PinkIconCollapseButton,
  PressShadowButton,
  TextRollButton,
  AmberFillButton,
  BlackSweepButton,
  TealSlabButton,
  GreenOutlineButton,
  GreenPillExpandButton,
  SoftBlueFadeButton,
  BlueSweepButton,
  BlueSweepRotateButton,
  NavyChevronButton,
  TealArrowButton,
  CyanSweepButton,
  MagentaInvertButton,
  ArrowLoopJsButton,
} from "../buttons";

/** Buttons don't take an align prop, so alignment is applied by the demo wrapper. */
function row(align: DemoAlign, children: ReactNode) {
  return <div className={`flex ${align === "center" ? "justify-center" : "justify-start"}`}>{children}</div>;
}

/** All 25 button demos wired into the category-chip showcase shell. */
export default function ButtonsShowcase() {
  return (
    <ComponentShowcase
      demos={{
        "arrow-loop-button-demo": (align) => row(align, <ArrowLoopButton />),
        "panel-collapse-button-demo": (align) => row(align, <PanelCollapseButton />),
        "charcoal-outline-button-demo": (align) => row(align, <CharcoalOutlineButton />),
        "line-slide-button-demo": (align) => row(align, <LineSlideButton />),
        "line-swap-button-demo": (align) => row(align, <LineSwapButton />),
        "bronze-fill-button-demo": (align) => row(align, <BronzeFillButton />),
        "tan-sweep-button-demo": (align) => row(align, <TanSweepButton />),
        "gold-overhang-button-demo": (align) => row(align, <GoldOverhangButton />),
        "offset-shadow-button-demo": (align) =>
          row(
            align,
            // Extra padding gives the 10px offset shadow room to show
            <div className="pt-1 pr-[14px] pb-[14px] pl-1">
              <OffsetShadowButton />
            </div>
          ),
        "pink-icon-collapse-button-demo": (align) => row(align, <PinkIconCollapseButton />),
        "press-shadow-button-demo": (align) => row(align, <PressShadowButton />),
        "text-roll-button-demo": (align) => row(align, <TextRollButton />),
        "amber-fill-button-demo": (align) => row(align, <AmberFillButton />),
        "black-sweep-button-demo": (align) => row(align, <BlackSweepButton />),
        "teal-slab-button-demo": (align) => row(align, <TealSlabButton />),
        "green-outline-button-demo": (align) => row(align, <GreenOutlineButton />),
        "green-pill-expand-button-demo": (align) => row(align, <GreenPillExpandButton />),
        "soft-blue-fade-button-demo": (align) => row(align, <SoftBlueFadeButton />),
        "blue-sweep-button-demo": (align) => row(align, <BlueSweepButton />),
        "blue-sweep-rotate-button-demo": (align) => row(align, <BlueSweepRotateButton />),
        "navy-chevron-button-demo": (align) => row(align, <NavyChevronButton />),
        "teal-arrow-button-demo": (align) => row(align, <TealArrowButton />),
        "cyan-sweep-button-demo": (align) => row(align, <CyanSweepButton />),
        "magenta-invert-button-demo": (align) => row(align, <MagentaInvertButton />),
        "arrow-loop-js-button-demo": (align) => row(align, <ArrowLoopJsButton />),
      }}
    />
  );
}
