"use client";

import { useMemo, useState } from "react";
import {
  logos,
  LOGO_CAT_LABELS,
  LOGO_CAT_ORDER,
  logoCatCounts,
  totalLogos,
  type LogoCategory,
  type LogoEntry,
  type LogoVariant,
} from "./logoData";
import { Typography, typographyClass } from "@/components/ui/typography/Typography";

type Filter = LogoCategory | "all";

const VARIANT_LABELS: Record<LogoVariant, string> = {
  default: "Default",
  black: "Black",
  white: "White",
};
const VARIANT_ORDER: LogoVariant[] = ["default", "black", "white"];

/**
 * Recognition / Affiliation logo gallery — mirrors the icon library (see IconLibrary.tsx)
 * but renders file-based SVGs from public/logos. Clicking a card fetches the file and
 * copies its raw SVG markup; the variant toggle switches every card between the
 * Default / Black / White exports from the Figma logo file.
 */
export default function LogoLibrary() {
  const [cat, setCat] = useState<Filter>("all");
  const [variant, setVariant] = useState<LogoVariant>("default");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return logos.filter(
      (logo) =>
        (cat === "all" || logo.category === cat) &&
        (!q || logo.name.toLowerCase().includes(q))
    );
  }, [cat, search]);

  const grouped = cat === "all" && !search.trim();

  async function copyLogo(logo: LogoEntry) {
    const file = logo.files[variant] ?? logo.files.default;
    if (!file) return;
    try {
      // Logos live as files in public/logos (unlike the inline icon data), so fetch
      // the markup first — the card then copies real SVG just like the icon library.
      const svg = await (await fetch(file)).text();
      await navigator.clipboard.writeText(svg);
      setCopied(logo.slug);
      window.setTimeout(() => setCopied((c) => (c === logo.slug ? null : c)), 1800);
    } catch {
      // Clipboard unavailable (insecure origin / denied permission) — leave the card unmarked.
    }
  }

  return (
    <section id="logos" className="doc-section">
      <Typography variant="preHeader" as="div" className="text-cta mb-2">
        Asset Library
      </Typography>
      <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
        Recognition &amp; Affiliation Logos
      </Typography>
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <Typography variant="body1" className="mt-0 mb-0">
          {totalLogos} logos — click any to copy its SVG. Search or filter by
          category, and switch between colour variants.
        </Typography>
        <Typography
          variant="tooltip"
          as="span"
          weight="bold"
          className="text-primary-500 bg-primary-50 border border-primary-200 rounded-full px-3 py-0.5"
        >
          {filtered.length} logo{filtered.length === 1 ? "" : "s"}
        </Typography>
      </div>

      {/* Search */}
      <div className="relative mb-5 max-w-[480px]">
        <label htmlFor="logo-search" className="sr-only">
          Search logos by name
        </label>
        <input
          id="logo-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search logos by name…"
          className={typographyClass(
            "label",
            "w-full h-11 pl-11 pr-10 border-2 border-gray-200 rounded-xl bg-white outline-none focus:border-primary transition-colors"
          )}
        />
        <svg
          aria-hidden="true"
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
              className="text-gray-700"
            >
              <path
                d="M2 2L8 8M8 2L2 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Variant toggle */}
      <div className="flex items-center gap-2 mb-4">
        <Typography variant="tooltip" as="span" weight="bold" className="text-gray-500 uppercase">
          Variant
        </Typography>
        {VARIANT_ORDER.map((v) => (
          <FilterChip key={v} active={variant === v} onClick={() => setVariant(v)}>
            {VARIANT_LABELS[v]}
          </FilterChip>
        ))}
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
          All ({totalLogos})
        </FilterChip>
        {LOGO_CAT_ORDER.map((c) => (
          <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
            {LOGO_CAT_LABELS[c]} ({logoCatCounts[c]})
          </FilterChip>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <Typography variant="caption" as="p" className="text-gray-500 text-center py-10">
          No logos match your search.
        </Typography>
      ) : grouped ? (
        LOGO_CAT_ORDER.map((c) => {
          const list = filtered.filter((l) => l.category === c);
          if (!list.length) return null;
          return (
            <div key={c} id={`logo-cat-${c}`} className="mb-10">
              <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b-[1.5px] border-gray-200">
                <Typography variant="h6" as="span" className="uppercase text-base-black">
                  {LOGO_CAT_LABELS[c]}
                </Typography>
                <Typography
                  variant="tooltip"
                  as="span"
                  className="font-semibold text-gray-500 bg-gray-100 rounded-full px-2 py-0.5"
                >
                  {list.length}
                </Typography>
              </div>
              <LogoGrid list={list} variant={variant} copied={copied} onCopy={copyLogo} />
            </div>
          );
        })
      ) : (
        <LogoGrid list={filtered} variant={variant} copied={copied} onCopy={copyLogo} />
      )}
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={typographyClass(
        "tooltip",
        `px-3 py-[5px] rounded-full border-[1.5px] font-semibold whitespace-nowrap transition-colors ${
          active
            ? "border-primary bg-primary-50 text-primary"
            : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
        }`
      )}
    >
      {children}
    </button>
  );
}

function LogoGrid({
  list,
  variant,
  copied,
  onCopy,
}: {
  list: LogoEntry[];
  variant: LogoVariant;
  copied: string | null;
  onCopy: (logo: LogoEntry) => void;
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
      {list.map((logo) => {
        const isCopied = copied === logo.slug;
        const file = logo.files[variant] ?? logo.files.default;
        return (
          <button
            key={logo.slug}
            type="button"
            onClick={() => onCopy(logo)}
            title={`Copy ${logo.name} SVG`}
            className={`relative flex flex-col items-center gap-2 px-2.5 pt-4 pb-3 rounded-[10px] border-[1.5px] cursor-pointer transition-[border-color,box-shadow] ${
              isCopied
                ? "border-tertiary-500"
                : "border-gray-200 hover:border-primary hover:shadow-[0_2px_12px_color-mix(in_srgb,var(--color-tertiary-base)_15%,transparent)]"
            } ${variant === "white" ? "bg-gray-900" : "bg-white"}`}
          >
            <span className="w-full h-16 flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={file}
                alt={logo.name}
                loading="lazy"
                className="max-w-full max-h-16 object-contain"
              />
            </span>
            <Typography
              variant="tooltip"
              as="span"
              className={`text-center break-words ${
                variant === "white" ? "text-white" : "text-textcolor-body"
              }`}
            >
              {logo.name}
            </Typography>
            <span
              aria-hidden={!isCopied}
              className={typographyClass(
                "tooltip",
                `absolute -bottom-2 left-1/2 -translate-x-1/2 bg-tertiary-500 text-white font-bold px-[7px] py-0.5 rounded pointer-events-none whitespace-nowrap transition-opacity ${
                  isCopied ? "opacity-100" : "opacity-0"
                }`
              )}
            >
              Copied!
            </span>
          </button>
        );
      })}
    </div>
  );
}
