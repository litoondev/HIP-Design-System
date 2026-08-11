"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { sectionMeta, metaBySlug, type SectionMeta } from "../sections/sectionMeta";
import type { DesignCategory } from "./categories";
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

const familyKey = (s: SectionMeta) => s.group ?? s.slug;

/**
 * One variant in the family stack. Carries its OWN toolbar — Full Page plus
 * Preview / Code / Prompt tabs scoped to just this variant — and is labeled with
 * the parent family name (V1 · Hero Banner · <category>), never the variant's
 * internal name.
 */
function VariantCard({
  meta,
  parentName,
  fallbackTab,
  children,
}: {
  meta: SectionMeta;
  parentName: string;
  fallbackTab: string;
  children: ReactNode;
}) {
  const [tab, setTab] = useState<Tab>("preview");
  const [code, setCode] = useState("");
  const renderRef = useRef<HTMLDivElement>(null);

  const label = meta.tab ?? fallbackTab;
  const renderId = `${meta.slug}-variant-render`;

  function openTab(next: Tab) {
    if (next === "code" && renderRef.current) setCode(formatHtml(renderRef.current.innerHTML));
    setTab(next);
  }

  return (
    <div>
      {/* Per-variant strip: V-label · parent name · category — Full Page + tabs right */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="m-0 font-body text-[14px] text-base-black">
          <span className="font-semibold">
            {label} · {parentName}
          </span>
          <span className="text-gray-500"> · {meta.category}</span>
        </p>
        <div className="flex items-center gap-3">
          <FullPageButton
            targetId={renderId}
            num={meta.num}
            name={`${parentName} ${label}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-1.5 font-body text-[13px] text-gray-500 transition-colors duration-150 ease-out hover:text-base-black"
          />
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

      {/* Preview stays mounted (Code reads its HTML); other tabs overlay it. */}
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
              Rendered HTML — {label}
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
              Design Prompt — {label}
            </span>
            <CopyButton getText={() => meta.prompt} />
          </div>
          <p className="m-0 whitespace-pre-wrap p-5 font-body text-[14px] leading-[1.8] text-gray-700">
            {meta.prompt}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Single design-family page. The page is about ONE family only (e.g. Hero Banner):
 * the category chips are built from this family's variants — "All" (default) stacks
 * every variant below, each with its own Full Page / Preview / Code / Prompt toolbar;
 * picking a category shows just the variants in it. Other sections never appear here;
 * prev/next steps to the neighbouring family.
 * `children` are the server-rendered variants, one per family member in meta order.
 */
export default function SectionViewer({ slug, children }: { slug: string; children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<DesignCategory | null>(null);

  const entry = metaBySlug(slug) ?? sectionMeta[0];
  const family = sectionMeta.filter((s) => familyKey(s) === familyKey(entry));
  const variants = Children.toArray(children);

  // This family's categories, with variant counts — the chip row shows nothing else.
  const familyCategories = family.reduce((map, s) => {
    map.set(s.category, (map.get(s.category) ?? 0) + 1);
    return map;
  }, new Map<DesignCategory, number>());

  // Prev/next cycles families (one stop each), never variants.
  const cycle = sectionMeta.filter(
    (s, i) => sectionMeta.findIndex((other) => familyKey(other) === familyKey(s)) === i
  );
  const index = Math.max(0, cycle.findIndex((s) => familyKey(s) === familyKey(entry)));
  const prev = cycle[(index - 1 + cycle.length) % cycle.length];
  const next = cycle[(index + 1) % cycle.length];

  const title = entry.group ?? entry.name;

  return (
    <>
      {/* Header: eyebrow, title, description — prev/next top right */}
      <div className="mb-6 flex items-start justify-between gap-6">
        <div>
          <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-widest text-cta">
            Creative Reference
          </p>
          <h1 className="mb-2 mt-0 font-header text-[32px] font-extrabold leading-tight text-base-black">
            {title}
          </h1>
          <p className="m-0 max-w-[640px] font-body text-[14px] text-gray-500">
            Full rendered section design adapted to the HIP design system — all typography, colors,
            spacing, and icons resolve through the global DS tokens. Use it as a creative reference
            when building pages.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          <ArrowLink href={`/sections/${prev.slug}`} direction="prev" label={`Previous design — ${prev.group ?? prev.name}`} />
          <ArrowLink href={`/sections/${next.slug}`} direction="next" label={`Next design — ${next.group ?? next.name}`} />
        </div>
      </div>

      {/* Category chips — this family's variants only; All (default) shows every variation */}
      <div className="mb-8 flex flex-wrap gap-2 font-body text-[13px]">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={!activeCategory}
          className={`px-3 py-1.5 rounded-lg border transition-colors duration-150 ease-out ${
            !activeCategory
              ? "border-base-black bg-base-black text-white font-semibold"
              : "border-gray-200 bg-white text-gray-600 hover:text-base-black"
          }`}
        >
          All
        </button>
        {Array.from(familyCategories.keys()).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category === activeCategory ? null : category)}
            aria-pressed={category === activeCategory}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors duration-150 ease-out ${
              category === activeCategory
                ? "border-base-black bg-base-black text-white font-semibold"
                : "border-gray-200 bg-white text-gray-600 hover:text-base-black"
            }`}
          >
            {category}
            {(familyCategories.get(category) ?? 0) > 1 && (
              <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded border border-current text-[11px]">
                {familyCategories.get(category)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* The variant stack — every variant stays mounted; the filter hides non-matching ones. */}
      <div className="flex flex-col gap-12">
        {family.map((variant, i) => (
          <div
            key={variant.slug}
            hidden={!!activeCategory && variant.category !== activeCategory}
          >
            <VariantCard meta={variant} parentName={title} fallbackTab={`V${i + 1}`}>
              {variants[i]}
            </VariantCard>
          </div>
        ))}
      </div>

      {/* Footer nav: number, categories, and named prev/next links */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 font-body text-[13px] text-gray-500">
        <span>
          {entry.num} · {Array.from(familyCategories.keys()).join(" · ")}
        </span>
        <span className="flex items-center gap-4">
          <Link href={`/sections/${prev.slug}`} className="font-semibold text-gray-600 hover:text-base-black">
            ← {prev.group ?? prev.name}
          </Link>
          <Link href={`/sections/${next.slug}`} className="font-semibold text-gray-600 hover:text-base-black">
            {next.group ?? next.name} →
          </Link>
        </span>
      </div>
    </>
  );
}
