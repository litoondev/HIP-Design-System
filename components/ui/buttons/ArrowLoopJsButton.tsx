"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./ArrowLoopJsButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface ArrowLoopJsButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

const TIMING: KeyframeAnimationOptions = { duration: 500, easing: "ease-in-out" };

/**
 * Gibson v3 — same pill as ArrowLoopButton, but the arrow is driven by the Web Animations API so it
 * shoots forward on enter/focus and backward on leave/blur. Ported from the inline <script> in
 * design-system/buttons.html; the reduced-motion guard is preserved.
 */
export default function ArrowLoopJsButton({
  label,
  practice,
  href = "#",
  className,
}: ArrowLoopJsButtonProps) {
  const arrowRef = useRef<SVGSVGElement | null>(null);
  const animRef = useRef<Animation | null>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Cancel any in-flight animation if the button unmounts mid-flight.
    return () => animRef.current?.cancel();
  }, []);

  const shoot = useCallback((direction: "forward" | "reverse") => {
    const arrow = arrowRef.current;
    if (!arrow || reducedRef.current) return;
    animRef.current?.cancel();
    const d = direction === "forward" ? 18 : -18;
    animRef.current = arrow.animate(
      [
        { opacity: 1, transform: "translateX(0)", offset: 0 },
        { opacity: 0, transform: `translateX(${d}px)`, offset: 0.42 },
        { opacity: 0, transform: `translateX(${-d}px)`, offset: 0.43 },
        { opacity: 1, transform: "translateX(0)", offset: 1 },
      ],
      TIMING
    );
  }, []);

  const text = label ?? defaultCta(practice, 2);

  return (
    <a
      className={`${styles.gibsonBtnJs}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
      onPointerEnter={() => shoot("forward")}
      onPointerLeave={() => shoot("reverse")}
      onFocus={() => shoot("forward")}
      onBlur={() => shoot("reverse")}
    >
      <span className={styles.gibsonBtnJsIcon} aria-hidden="true">
        <svg
          ref={arrowRef}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 10H16.5M12.5 6L16.5 10L12.5 14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.gibsonBtnJsText}>{text}</span>
    </a>
  );
}
