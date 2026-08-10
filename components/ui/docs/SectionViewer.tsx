"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { sectionMeta, metaBySlug, type SectionMeta } from "../sections/sectionMeta";
import { DESIGN_CATEGORIES, type DesignCategory } from "./categories";
import FullPageButton from "../sections/FullPageButton";

type Tab = "preview" | "code" | "prompt";

const VOID_TAGS = /^<(br|img|input|hr|meta|link|source|path|circle|rect|line|ellipse|polyline|polygon|use|stop)\b/;

/** Minimal HTML pretty-printer for the Code tab — splits at tag boundaries and re-indents. */
function formatHtml(html: string): string {
  const tokens = html.replace(/></g, ">\n<").split("\n");
  let indent = 0;
  const out: string[] = [];
  for (const token of tokens) {
    if (/^<\//.test(token)) indent = Math.max(indent - 1, 0);
    out.push("  ".repeat(indent) + token);
    const opens =
      /^<[a-zA-Z][^>]*>$/.test(token) && // a lone opening tag…
      !/\/>$/.test(token) && // …not self-closing
      !VOID_TAGS.test(token) && // …not a void element
      !token.includes("</"); // …and it doesn't close itself inline
    if (opens) indent += 1;
  }
  return out.join("\n");
}

function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(getText()).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white font-body text-[12px] font-semibold text-gray-600 hover:text-base-black transition-colors duration-150"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

function ArrowLink({
  href,
  direction,
  label,
}: {
  href: string;
  direction: "prev" | "next";
  label: string;
}) {
  return (
    <Link
      href={href}
      title={label}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:text-base-black hover:border-gray-300 transition-colors duration-150"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        {direction === "prev" ? <path d="M19 12H5m7-7-7 7 7 7" /> : <path d="M5 12h14m-7-7 7 7-7 7" />}
      </svg>
    </Link>
  );
}

/**
 * Single section-design page: category tabs, prev/next navigation, Full Page,
 * and Preview / Code (rendered HTML) / Prompt (design prompt) views.
 * The active category filter travels in ?cat= so prev/next cycles within it.
 * The section itself arrives server-rendered as `children` — its components
 * can use fs and must not be bundled here.
 */
export default function SectionViewer({ slug, children }: { slug: string; children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<Tab>("preview");
  const [code, setCode] = useState("");
  const renderRef = useRef<HTMLDivElement>(null);

  const entry = metaBySlug(slug) ?? sectionMeta[0];

  const rawCat = searchParams.get("cat");
  const activeCategory = (DESIGN_CATEGORIES as readonly string[]).includes(rawCat ?? "")
    ? (rawCat as DesignCategory)
    : null;

  const counts = useMemo(() => {
    const map = new Map<DesignCategory, number>();
    sectionMeta.forEach((s) => map.set(s.category, (map.get(s.category) ?? 0) + 1));
    return map;
  }, []);

  // The navigation cycle: all designs, or only the active category's.
  const cycle = activeCategory
    ? sectionMeta.filter((s) => s.category === activeCategory)
    : sectionMeta;
  const index = Math.max(0, cycle.findIndex((s) => s.slug === entry.slug));
  const catQuery = activeCategory ? `?cat=${encodeURIComponent(activeCategory)}` : "";
  const hrefFor = (target: SectionMeta, cat = catQuery) => `/sections/${target.slug}${cat}`;
  const prev = cycle[(index - 1 + cycle.length) % cycle.length];
  const next = cycle[(index + 1) % cycle.length];

  /** Chip click: set (or clear) the filter; if the current design isn't in it, jump to its first design. */
  function pickCategory(category: DesignCategory | null) {
    const query = category ? `?cat=${encodeURIComponent(category)}` : "";
    const target = !category || entry.category === category
      ? entry
      : sectionMeta.find((s) => s.category === category) ?? entry;
    router.push(hrefFor(target, query));
  }

  function openTab(nextTab: Tab) {
    if (nextTab === "code" && renderRef.current) setCode(formatHtml(renderRef.current.innerHTML));
    setTab(nextTab);
  }

  const renderId = `${entry.slug}-single-render`;

  return (
    <>
      {/* Header: eyebrow, title, description — prev/next top right */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-widest text-cta">
            Creative Reference
          </p>
          <h1 className="mb-2 mt-0 font-header text-[32px] font-extrabold leading-tight text-base-black">
            {entry.name}
          </h1>
          <p className="m-0 max-w-[640px] font-body text-[14px] text-gray-500">
            Full rendered section design adapted to the HIP design system — all typography, colors,
            spacing, and icons resolve through the global DS tokens. Use it as a creative reference
            when building pages.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          <ArrowLink href={hrefFor(prev)} direction="prev" label={`Previous design — ${prev.name}`} />
          <ArrowLink href={hrefFor(next)} direction="next" label={`Next design — ${next.name}`} />
        </div>
      </div>

      {/* Category tabs + toolbar (Full Page · Preview/Code/Prompt) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap gap-2 font-body text-[13px]">
          <button
            type="button"
            onClick={() => pickCategory(null)}
            aria-pressed={!activeCategory}
            className={`px-3 py-1.5 rounded-lg border transition-colors duration-150 ease-out ${
              !activeCategory
                ? "border-base-black bg-base-black text-white font-semibold"
                : "border-gray-200 bg-white text-gray-600 hover:text-base-black"
            }`}
          >
            All
          </button>
          {DESIGN_CATEGORIES.filter((category) => counts.has(category)).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => pickCategory(category === activeCategory ? null : category)}
              aria-pressed={category === activeCategory}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors duration-150 ease-out ${
                category === activeCategory
                  ? "border-base-black bg-base-black text-white font-semibold"
                  : "border-gray-200 bg-white text-gray-600 hover:text-base-black"
              }`}
            >
              {category}
              {(counts.get(category) ?? 0) > 1 && (
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded border border-current text-[11px]">
                  {counts.get(category)}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <FullPageButton targetId={renderId} num={entry.num} name={entry.name} />
          <div className="flex rounded-lg border border-gray-200 overflow-hidden font-body text-[13px]">
            {(["preview", "code", "prompt"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => openTab(value)}
                aria-pressed={tab === value}
                className={`px-4 py-1.5 capitalize transition-colors duration-150 ease-out ${
                  tab === value
                    ? "bg-gray-100 text-base-black font-semibold"
                    : "bg-white text-gray-500 hover:text-base-black"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview stays mounted (it is the source of the Code tab's HTML); other tabs overlay it. */}
      <div className={tab === "preview" ? "" : "hidden"}>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div id={renderId} ref={renderRef}>
            {children}
          </div>
        </div>
      </div>

      {tab === "code" && (
        <div className="rounded-xl border border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <span className="font-body text-[12px] font-bold uppercase tracking-[0.8px] text-gray-500">
              Rendered HTML
            </span>
            <CopyButton getText={() => code} />
          </div>
          <pre className="m-0 max-h-[560px] overflow-auto p-4 font-mono text-[12px] leading-[1.6] text-gray-700">
            {code}
          </pre>
        </div>
      )}

      {tab === "prompt" && (
        <div className="rounded-xl border border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <span className="font-body text-[12px] font-bold uppercase tracking-[0.8px] text-gray-500">
              Design Prompt
            </span>
            <CopyButton getText={() => entry.prompt} />
          </div>
          <p className="m-0 whitespace-pre-wrap p-5 font-body text-[14px] leading-[1.8] text-gray-700">
            {entry.prompt}
          </p>
        </div>
      )}

      {/* Footer nav: number, tags, and named prev/next links */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-body text-[13px] text-gray-500">
        <span>
          {entry.num} · {entry.category} · {entry.tags.join(" · ")}
        </span>
        <span className="flex items-center gap-4">
          <Link href={hrefFor(prev)} className="font-semibold text-gray-600 hover:text-base-black">
            ← {prev.name}
          </Link>
          <Link href={hrefFor(next)} className="font-semibold text-gray-600 hover:text-base-black">
            {next.name} →
          </Link>
        </span>
      </div>
    </>
  );
}
