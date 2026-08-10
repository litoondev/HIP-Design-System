"use client";

import { useMemo, useState } from "react";
import {
  icons,
  CAT_LABELS,
  CAT_SHORT_LABELS,
  CAT_ORDER,
  catCounts,
  totalIcons,
  type IconCategory,
  type IconEntry,
} from "./iconData";
import { Typography, typographyClass } from "@/components/ui/typography/Typography";

type Filter = IconCategory | "all";

/**
 * Icon gallery — ported from design-system/icons.html.
 * Replaces the vanilla-JS rebuild-the-DOM approach with React state: search + category filter
 * derive the visible list, and clicking a card copies its raw SVG to the clipboard.
 */
export default function IconLibrary() {
  const [cat, setCat] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return icons.filter(
      (icon) =>
        (cat === "all" || icon.category === cat) &&
        (!q || icon.name.toLowerCase().includes(q))
    );
  }, [cat, search]);

  /** Group into per-category sections only on the unfiltered "all" view, like the original. */
  const grouped = cat === "all" && !search.trim();

  async function copyIcon(icon: IconEntry) {
    try {
      await navigator.clipboard.writeText(icon.svg);
      setCopied(icon.node);
      window.setTimeout(
        () => setCopied((c) => (c === icon.node ? null : c)),
        1800
      );
    } catch {
      // Clipboard unavailable (insecure origin / denied permission) — leave the card unmarked.
    }
  }

  return (
    <section id="icons" className="doc-section">
      <Typography variant="preHeader" as="div" className="text-cta mb-2">
        Asset Library
      </Typography>
      <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
        Icon Library
      </Typography>
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <Typography variant="body1" className="mt-0 mb-0">
          {totalIcons} icons — click any to copy its SVG. Search or filter by category.
        </Typography>
        <Typography
          variant="tooltip"
          as="span"
          weight="bold"
          className="text-primary-500 bg-primary-50 border border-primary-200 rounded-full px-3 py-0.5"
        >
          {filtered.length} icon{filtered.length === 1 ? "" : "s"}
        </Typography>
      </div>

      {/* Search */}
      <div className="relative mb-5 max-w-[480px]">
        <label htmlFor="icon-search" className="sr-only">
          Search icons by name
        </label>
        <input
          id="icon-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icons by name…"
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
            {/* Single-colour UI glyph — inherits the button's token colour via currentColor. */}
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

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
          All ({totalIcons})
        </FilterChip>
        {CAT_ORDER.map((c) => (
          <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
            {CAT_SHORT_LABELS[c]} ({catCounts[c]})
          </FilterChip>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <Typography variant="caption" as="p" className="text-gray-500 text-center py-10">
          No icons match your search.
        </Typography>
      ) : grouped ? (
        CAT_ORDER.map((c) => {
          const list = filtered.filter((i) => i.category === c);
          if (!list.length) return null;
          return (
            <div key={c} id={`cat-${c}`} className="mb-10">
              <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b-[1.5px] border-gray-200">
                <Typography variant="h6" as="span" className="uppercase text-base-black">
                  {CAT_LABELS[c]}
                </Typography>
                <Typography
                  variant="tooltip"
                  as="span"
                  className="font-semibold text-gray-500 bg-gray-100 rounded-full px-2 py-0.5"
                >
                  {list.length}
                </Typography>
              </div>
              <IconGrid list={list} copied={copied} onCopy={copyIcon} />
            </div>
          );
        })
      ) : (
        <IconGrid list={filtered} copied={copied} onCopy={copyIcon} />
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

function IconGrid({
  list,
  copied,
  onCopy,
}: {
  list: IconEntry[];
  copied: string | null;
  onCopy: (icon: IconEntry) => void;
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
      {list.map((icon) => {
        const isCopied = copied === icon.node;
        return (
          <button
            key={icon.node}
            type="button"
            onClick={() => onCopy(icon)}
            title={`Copy ${icon.name} SVG`}
            className={`relative flex flex-col items-center gap-2 px-2.5 pt-4 pb-3 rounded-[10px] border-[1.5px] bg-white cursor-pointer transition-[border-color,box-shadow] ${
              isCopied
                ? "border-tertiary-500 bg-tertiary-50"
                : "border-gray-200 hover:border-primary hover:shadow-[0_2px_12px_color-mix(in_srgb,var(--color-tertiary-base)_15%,transparent)]"
            }`}
          >
            <span
              className="w-8 h-8 flex items-center justify-center shrink-0 [&_svg]:w-6 [&_svg]:h-6"
              /* Trusted, build-time icon markup from the Figma export — no user input. */
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
            <Typography variant="tooltip" as="span" className="text-textcolor-body text-center break-words">
              {icon.name}
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
