"use client";

import { useMemo, useState, type ReactNode } from "react";
import { DESIGN_CATEGORIES, componentCatalog, type DesignCategory } from "./categories";

export type DemoAlign = "left" | "center";

/** Demo card with a Left/Center alignment toggle, per the docs mockup. */
export function ComponentDemo({
  name,
  anchor,
  children,
}: {
  name: string;
  anchor: string;
  children: (align: DemoAlign) => ReactNode;
}) {
  const [align, setAlign] = useState<DemoAlign>("left");
  return (
    <div id={anchor} className="scroll-mt-24 mb-10">
      <div className="flex items-center justify-between gap-4 mb-3">
        <h3 className="font-header font-bold text-[18px] text-base-black m-0">{name}</h3>
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
      </div>
      <div className="rounded-xl border border-gray-200 px-6 py-10 md:px-10 md:py-12 overflow-x-auto">
        {children(align)}
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
}: {
  /** anchor → demo renderer; anchors must match entries in componentCatalog. */
  demos: Record<string, (align: DemoAlign) => ReactNode>;
}) {
  const [activeCategory, setActiveCategory] = useState<DesignCategory | null>(null);

  const counts = useMemo(() => {
    const map = new Map<DesignCategory, number>();
    componentCatalog.forEach((entry) => map.set(entry.category, (map.get(entry.category) ?? 0) + 1));
    return map;
  }, []);

  const visible = componentCatalog.filter(
    (entry) => (!activeCategory || entry.category === activeCategory) && demos[entry.anchor]
  );

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

      {visible.map((entry) => (
        <ComponentDemo key={entry.anchor} name={entry.name} anchor={entry.anchor}>
          {demos[entry.anchor]}
        </ComponentDemo>
      ))}
    </>
  );
}
