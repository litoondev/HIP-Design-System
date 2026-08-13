"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./InstagramSection.module.css";
import SliderArrowButton from "../buttons/SliderArrowButton";

/**
 * The interactive half of the Instagram Section: the scrolling post strip and the arrows
 * that drive it.
 *
 * Split out as its own client component rather than marking InstagramSection `"use client"`,
 * because the tiles are <SectionImage>, which reads the filesystem through sectionImages.ts
 * (`import fs from "fs"`). That module cannot be pulled into a client bundle. Passing the
 * already-rendered tiles down as a prop keeps them server-rendered while this wrapper owns
 * the scroll state — the standard App Router way to put a client boundary around server
 * markup.
 *
 * The arrows sit in the footer beside "Follow Us", which is why `follow` comes in as a prop
 * too: the strip and the buttons that control it have to live inside the same boundary.
 */
export default function InstagramSlider({
  tiles,
  follow,
}: {
  /** The post tiles — server-rendered by InstagramSection. */
  tiles: ReactNode;
  /** The "Follow Us" block that shares the footer row with the arrows. */
  follow: ReactNode;
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  // Both start false so the buttons are never disabled before the first measurement.
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // 1px of slack: scrollLeft is fractional under browser zoom and on hi-dpi displays, so
    // an exact === comparison never fires and the end arrow would stay enabled forever.
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(max <= 1 || el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    // The strip is also scrollable by wheel, trackpad and touch, and its tiles change width
    // at 860px/520px — so the enabled/disabled state has to follow the element, not just clicks.
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
    // One tile plus one gap, read from the DOM rather than hardcoded: the tile is 310px at
    // desktop and 225px below 860px, and the gap is --paragraph-gap (30/20/16).
    const tile = el.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const distance = tile ? tile.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({
      left: direction * distance,
      // Honours the same preference globals.css already respects for scroll-behavior.
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <>
      {/* tabIndex makes the strip focusable so it can also be scrolled with the arrow keys —
          an overflow container is not keyboard-reachable by default in every browser. */}
      <div
        id="instagram-strip"
        className={styles.hipIgStrip}
        ref={stripRef}
        tabIndex={0}
        role="group"
        aria-label="Instagram posts"
      >
        {tiles}
      </div>

      <div className={styles.hipIgFooter}>
        {follow}

        <div className={styles.hipIgArrows}>
          <SliderArrowButton
            direction="prev"
            tone="outline"
            ariaLabel="Previous posts"
            ariaControls="instagram-strip"
            onClick={() => step(-1)}
            disabled={atStart}
          />
          <SliderArrowButton
            direction="next"
            tone="outline"
            ariaLabel="Next posts"
            ariaControls="instagram-strip"
            onClick={() => step(1)}
            disabled={atEnd}
          />
        </div>
      </div>
    </>
  );
}
