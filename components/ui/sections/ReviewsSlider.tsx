"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Reviews.module.css";
import SliderArrowButton from "../buttons/SliderArrowButton";

/**
 * The interactive half of the Reviews section: the scrolling card strip and the arrows that
 * drive it.
 *
 * Split out as its own client component rather than marking Reviews `"use client"`, because
 * that section renders <SectionImage>, which reads the filesystem through sectionImages.ts
 * (`import fs from "fs"`) and cannot be pulled into a client bundle. The cards and the
 * "More Reviews" button are rendered on the server and passed down as props, which keeps this
 * boundary as small as the interactivity actually requires.
 */
export default function ReviewsSlider({
  cards,
  action,
}: {
  /** The review cards — server-rendered by Reviews. */
  cards: ReactNode;
  /** The "More Reviews" button that shares the control row with the arrows. */
  action: ReactNode;
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  // Both start false so neither arrow is disabled before the first measurement lands.
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // 1px of slack: scrollLeft is fractional under browser zoom and on hi-dpi displays, so an
    // exact comparison never fires and the end arrow would never disable.
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(max <= 1 || el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    // The strip also scrolls by wheel, trackpad and touch, and the cards change width at the
    // 860px breakpoint — so the disabled state has to track the element, not just our clicks.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      observer.disconnect();
    };
  }, [measure]);

  const step = (direction: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    // One card plus one gap, measured from the DOM: the card is a percentage basis, so its
    // px width changes with the viewport and cannot be hardcoded here.
    const card = el.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <>
      {/* tabIndex makes the strip focusable so it can be scrolled with the arrow keys — an
          overflow container is not keyboard-reachable by default in every browser. */}
      <div
        id="reviews-strip"
        className={styles.hipReviewCards}
        ref={stripRef}
        tabIndex={0}
        role="group"
        aria-label="Patient reviews"
      >
        {cards}
      </div>

      <div className={styles.hipReviewsControls}>
        <div className={styles.hipSliderArrows}>
          <SliderArrowButton
            direction="prev"
            tone="ghost"
            ariaLabel="Previous reviews"
            ariaControls="reviews-strip"
            onClick={() => step(-1)}
            disabled={atStart}
          />
          <SliderArrowButton
            direction="next"
            tone="ghost"
            ariaLabel="Next reviews"
            ariaControls="reviews-strip"
            onClick={() => step(1)}
            disabled={atEnd}
          />
        </div>
        {action}
      </div>
    </>
  );
}
