"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  DESIGN_CATEGORIES,
  componentCatalog,
  type CatalogEntry,
  type DesignCategory,
} from "./categories";

export type DemoAlign = "left" | "center";

/** Demo card with a Left/Center alignment toggle, per the docs mockup. */
export function ComponentDemo({
  name,
  anchor,
  alignToggle = true,
  children,
}: {
  name: string;
  anchor: string;
  /** Hide the Left/Center toggle for components where alignment is meaningless (e.g. buttons). */
  alignToggle?: boolean;
  children: (align: DemoAlign) => ReactNode;
}) {
  const [align, setAlign] = useState<DemoAlign>("left");
  return (
    <div id={anchor} className="scroll-mt-24 mb-10">
      <div className="flex items-center justify-between gap-4 mb-3">
        <h3 className="font-header font-bold text-[18px] text-base-black m-0">{name}</h3>
        {alignToggle && (
          <div className="flex rounded-lg border border-gray-200 overflow-hidden font-body text-[13px]">
            {(["left", "center"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAlign(value)}
                aria-pressed={align === value}
                className={`px-4 py-1.5 capitalize transition-colors duration-150 ease-out ${
                  align === value
                    ? "bg-gray-100 text-base-black font-semibold"
                    : "bg-white text-gray-500 hover:text-base-black"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="rounded-xl border border-gray-200 px-6 py-10 md:px-10 md:py-12 overflow-x-auto">
        {children(align)}
      </div>
    </div>
  );
}

/** Tab label inside a group card: explicit `tab`, else the name minus the group prefix, else "V1". */
function tabLabel(entry: CatalogEntry): string {
  if (entry.tab) return entry.tab;
  const rest = entry.name.replace(entry.group ?? "", "").trim();
  return rest || "V1";
}

/**
 * One card for a whole component family (e.g. Hero with 10–20 variations): a scrollable
 * V1…Vn tab row switches the rendered variation instead of stacking every card. Deep links
 * still work — the card carries every variation's anchor id, and landing on one selects it.
 */
export function GroupedDemo({
  group,
  entries,
  demos,
  alignToggle = true,
}: {
  group: string;
  entries: CatalogEntry[];
  demos: Record<string, (align: DemoAlign) => ReactNode>;
  alignToggle?: boolean;
}) {
  const [align, setAlign] = useState<DemoAlign>("left");
  const [activeAnchor, setActiveAnchor] = useState(entries[0].anchor);

  // When the category filter changes the tab set, keep the selection valid.
  const active = entries.find((entry) => entry.anchor === activeAnchor) ?? entries[0];

  // Deep link: if the page loads (or the hash changes) pointing at one of our variations, open its tab.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && entries.some((entry) => entry.anchor === hash)) setActiveAnchor(hash);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [entries]);

  return (
    <div id={active.anchor} className="scroll-mt-24 mb-10">
      {/* Invisible anchor targets so every variation's TOC link scrolls to this card. */}
      {entries
        .filter((entry) => entry.anchor !== active.anchor)
        .map((entry) => (
          <span key={entry.anchor} id={entry.anchor} className="block scroll-mt-24" aria-hidden="true" />
        ))}

      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 className="font-header font-bold text-[18px] text-base-black m-0">
          {group}
          <span className="ml-2 align-middle inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 rounded border border-gray-300 font-body font-semibold text-[11px] text-gray-500">
            {entries.length}
          </span>
        </h3>
        {alignToggle && (
          <div className="flex rounded-lg border border-gray-200 overflow-hidden font-body text-[13px]">
            {(["left", "center"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAlign(value)}
                aria-pressed={align === value}
                className={`px-4 py-1.5 capitalize transition-colors duration-150 ease-out ${
                  align === value
                    ? "bg-gray-100 text-base-black font-semibold"
                    : "bg-white text-gray-500 hover:text-base-black"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Variation tabs — horizontally scrollable so 10–20 tabs stay usable. */}
      <div
        role="tablist"
        aria-label={`${group} variations`}
        className="flex gap-1 mb-3 overflow-x-auto font-body text-[13px] border-b border-gray-200"
      >
        {entries.map((entry) => {
          const selected = entry.anchor === active.anchor;
          return (
            <button
              key={entry.anchor}
              type="button"
              role="tab"
              aria-selected={selected}
              title={entry.name}
              onClick={() => setActiveAnchor(entry.anchor)}
              className={`shrink-0 px-4 py-2 -mb-px border-b-2 transition-colors duration-150 ease-out ${
                selected
                  ? "border-base-black text-base-black font-semibold"
                  : "border-transparent text-gray-500 hover:text-base-black"
              }`}
            >
              {tabLabel(entry)}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" aria-label={active.name}>
        <p className="font-body text-[12px] text-gray-400 m-0 mb-2">
          {active.name} · {active.category}
        </p>
        <div className="rounded-xl border border-gray-200 px-6 py-10 md:px-10 md:py-12 overflow-x-auto">
          {demos[active.anchor](align)}
        </div>
      </div>
    </div>
  );
}

/**
 * Category chip row + demo list, built from the component catalog so it scales
 * to 10–20+ components: chips show per-category counts and filter the list.
 */
export function ComponentShowcase({
  demos,
  alignToggle = true,
}: {
  /** anchor → demo renderer; anchors must match entries in componentCatalog. */
  demos: Record<string, (align: DemoAlign) => ReactNode>;
  /** Hide the per-demo Left/Center toggle (e.g. on the buttons page). */
  alignToggle?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<DesignCategory | null>(null);

  // Only entries this page actually renders — counts and chips reflect the page, not the whole catalog.
  const pageEntries = useMemo(
    () => componentCatalog.filter((entry) => demos[entry.anchor]),
    [demos]
  );

  const counts = useMemo(() => {
    const map = new Map<DesignCategory, number>();
    pageEntries.forEach((entry) => map.set(entry.category, (map.get(entry.category) ?? 0) + 1));
    return map;
  }, [pageEntries]);

  const visible = pageEntries.filter(
    (entry) => !activeCategory || entry.category === activeCategory
  );

  /* Cluster the visible list: entries sharing a `group` collapse into one tabbed card
     (a family with 10–20 variations stays one card); everything else renders as before.
     A group reduced to a single variation by the category filter renders as a plain card. */
  const clusters = useMemo(() => {
    const seen = new Map<string, CatalogEntry[]>();
    const out: Array<{ key: string; group?: string; entries: CatalogEntry[] }> = [];
    for (const entry of visible) {
      if (!entry.group) {
        out.push({ key: entry.anchor, entries: [entry] });
        continue;
      }
      const existing = seen.get(entry.group);
      if (existing) {
        existing.push(entry);
      } else {
        const bucket = [entry];
        seen.set(entry.group, bucket);
        out.push({ key: `group:${entry.group}`, group: entry.group, entries: bucket });
      }
    }
    return out;
  }, [visible]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 font-body text-[13px]">
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
        {DESIGN_CATEGORIES.filter((category) => counts.has(category)).map((category) => (
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
            {(counts.get(category) ?? 0) > 1 && (
              <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded border border-current text-[11px]">
                {counts.get(category)}
              </span>
            )}
          </button>
        ))}
      </div>

      {clusters.map(({ key, group, entries }) =>
        group && entries.length > 1 ? (
          <GroupedDemo key={key} group={group} entries={entries} demos={demos} alignToggle={alignToggle} />
        ) : (
          <ComponentDemo
            key={key}
            name={entries[0].name}
            anchor={entries[0].anchor}
            alignToggle={alignToggle}
          >
            {demos[entries[0].anchor]}
          </ComponentDemo>
        )
      )}
    </>
  );
}
