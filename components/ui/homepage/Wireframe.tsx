import type { ReactNode } from "react";
import styles from "./wireframe.module.css";
import { Typography } from "@/components/ui/typography/Typography";

/**
 * Shared wireframe primitives for the Homepage structure reference.
 * Ported from design-system/homepage.html — the repeated section chrome is factored out here
 * so each section below reads as content rather than wrapper markup.
 *
 * These wireframes are scale models: the text inside a frame stands in for the real section's
 * type rather than being that type. It still comes from the design system — the small copy maps
 * to `tooltip`, captions to `caption`, wireframe headings to `overline` + `h6` — so nothing here
 * restates a font size, and the diagrams keep their reduced proportions.
 */

/** Tone drives the numbered badge, title colour, frame border and caption bar. */
export type SectionTone = "core" | "optional" | "primary" | "secondary";

const TONES: Record<
  SectionTone,
  { num: string; title: string; frame: string; caption: string; captionText: string }
> = {
  core: {
    num: "bg-gray-800 text-white",
    title: "text-gray-700",
    frame: "border-gray-200",
    caption: "bg-gray-50 border-gray-200",
    captionText: "text-gray-500",
  },
  optional: {
    num: "bg-accent-200 text-accent-800",
    title: "text-accent-700",
    frame: "border-accent-100",
    caption: "bg-accent-50 border-accent-100",
    captionText: "text-accent-700",
  },
  primary: {
    num: "bg-primary-600 text-white",
    title: "text-primary-700",
    frame: "border-primary-200",
    caption: "bg-primary-100/50 border-primary-200",
    captionText: "text-primary-700",
  },
  secondary: {
    num: "bg-secondary-600 text-white",
    title: "text-secondary-700",
    frame: "border-secondary-200",
    caption: "bg-secondary-50 border-secondary-200",
    captionText: "text-secondary-700",
  },
};

/** Uppercase micro-label used throughout the wireframes. */
export function WfLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`${styles.wfLabel}${className ? ` ${className}` : ""}`}>{children}</span>;
}

/** Dashed placeholder box. Border colour comes from the caller's text colour (currentColor). */
export function WfBlock({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <div className={`${styles.wfBlock}${className ? ` ${className}` : ""}`}>{children}</div>;
}

/** Dashed placeholder that centres a WfLabel — the most common wireframe shape. */
export function WfPlaceholder({
  label,
  className,
  labelClassName,
}: {
  label: ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <WfBlock className={`flex items-center justify-center ${className ?? ""}`}>
      <WfLabel className={labelClassName}>{label}</WfLabel>
    </WfBlock>
  );
}

/** Numbered heading row above each wireframe frame. */
export function SectionHeader({
  number,
  title,
  meta,
  optional = false,
  tone = "core",
}: {
  number: string;
  title: string;
  meta?: string;
  optional?: boolean;
  tone?: SectionTone;
}) {
  const t = TONES[tone];
  return (
    <div className="flex items-center gap-3 mb-3 flex-wrap">
      <Typography
        variant="tooltip"
        as="span"
        weight="bold"
        className={`w-7 h-7 rounded-full ${t.num} flex items-center justify-center flex-shrink-0`}
      >
        {number}
      </Typography>
      <span className={`${styles.sectionBadge} ${t.title}`}>{title}</span>
      {optional && <span className={styles.optionalTag}>Optional</span>}
      {meta && <WfLabel className="text-gray-400">{meta}</WfLabel>}
    </div>
  );
}

/**
 * A full numbered section: heading row + bordered frame + optional caption bar.
 * `caption` omitted renders no bottom bar (matches section 18 in the source).
 */
export function Section({
  id,
  number,
  title,
  meta,
  optional,
  tone = "core",
  caption,
  className,
  children,
}: {
  id: string;
  number: string;
  title: string;
  meta?: string;
  optional?: boolean;
  tone?: SectionTone;
  caption?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <section id={id} className={`mb-6 ${className ?? ""}`}>
      <SectionHeader
        number={number}
        title={title}
        meta={meta}
        optional={optional}
        tone={tone}
      />
      <div className={`rounded-xl overflow-hidden border ${t.frame} shadow-sm`}>
        {children}
        {caption && (
          <div className={`${t.caption} border-t px-6 py-2`}>
            <Typography variant="tooltip" as="span" className={t.captionText}>
              {caption}
            </Typography>
          </div>
        )}
      </div>
    </section>
  );
}

/** The "Mobile: …" strip used under the top bar and navigation wireframes. */
export function MobileNote({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50 border-t border-gray-200 px-6 py-2 flex items-center gap-2">
      <svg
        className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
        />
      </svg>
      <Typography variant="tooltip" as="span" className="text-gray-500">
        {children}
      </Typography>
    </div>
  );
}

/** Small chevron-right arrow used inside wireframe buttons and links. */
export function ArrowRight({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/** Chevron-down used by the nav wireframe's dropdown items. */
export function ChevronDown({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/**
 * Zig-zag row shared by Our Doctors, Who We Help and Treatments: a text block and an
 * image placeholder that swap sides. `reversed` puts the image first.
 */
export function ZigZagRow({
  reversed = false,
  text,
  image,
  className,
}: {
  reversed?: boolean;
  text: ReactNode;
  image: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-3 items-center ${className ?? ""}`}>
      {reversed ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}

/** Centred section heading used inside several wireframes (preheader + H + intro). */
export function WfHeading({
  preheader,
  title,
  intro,
  className,
  borderClassName = "border-gray-100",
}: {
  preheader: string;
  title: string;
  intro?: string;
  className?: string;
  borderClassName?: string;
}) {
  return (
    <div className={`text-center pb-2 border-b ${borderClassName} ${className ?? ""}`}>
      <Typography variant="overline" as="p" className="text-cta-500">
        {preheader}
      </Typography>
      {/* Wireframe stand-in for a section heading — h6 metrics, the frame's own 800 weight. */}
      <Typography variant="h6" as="p" className="font-extrabold text-base-black mt-1">
        {title}
      </Typography>
      {intro && (
        <Typography variant="tooltip" as="p" className="text-gray-500 mt-1">
          {intro}
        </Typography>
      )}
    </div>
  );
}
