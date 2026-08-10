/** The fixed 12-item Design Category taxonomy. Every component belongs to exactly one. */
export const DESIGN_CATEGORIES = [
  "Modern",
  "Minimalist",
  "Elegant",
  "Luxury",
  "Fun / Playful",
  "Bold",
  "Clean",
  "Professional / Corporate",
  "Vibrant",
  "Tech / Hi-tech",
  "Vintage",
  "Bento grid",
] as const;

export type DesignCategory = (typeof DESIGN_CATEGORIES)[number];

export interface CatalogEntry {
  /** Display name and "On this page" label. */
  name: string;
  category: DesignCategory;
  /** Anchor id of the demo on the page. */
  anchor: string;
}

/** Registry the chip row and page TOC are built from — add every new component variant here. */
export const componentCatalog: CatalogEntry[] = [
  { name: "Text Container", category: "Professional / Corporate", anchor: "text-container-demo" },
  { name: "Text Container V2", category: "Vibrant", anchor: "text-container-v2-demo" },
  // Buttons (/buttons)
  { name: "Arrow Loop Button", category: "Modern", anchor: "arrow-loop-button-demo" },
  { name: "Panel Collapse Button", category: "Modern", anchor: "panel-collapse-button-demo" },
  { name: "Charcoal Outline Button", category: "Minimalist", anchor: "charcoal-outline-button-demo" },
  { name: "Line Slide Button", category: "Minimalist", anchor: "line-slide-button-demo" },
  { name: "Line Swap Button", category: "Minimalist", anchor: "line-swap-button-demo" },
  { name: "Bronze Fill Button", category: "Elegant", anchor: "bronze-fill-button-demo" },
  { name: "Tan Sweep Button", category: "Elegant", anchor: "tan-sweep-button-demo" },
  { name: "Gold Overhang Button", category: "Luxury", anchor: "gold-overhang-button-demo" },
  { name: "Offset Shadow Button", category: "Fun / Playful", anchor: "offset-shadow-button-demo" },
  { name: "Pink Icon Collapse Button", category: "Fun / Playful", anchor: "pink-icon-collapse-button-demo" },
  { name: "Press Shadow Button", category: "Fun / Playful", anchor: "press-shadow-button-demo" },
  { name: "Text Roll Button", category: "Fun / Playful", anchor: "text-roll-button-demo" },
  { name: "Amber Fill Button", category: "Bold", anchor: "amber-fill-button-demo" },
  { name: "Black Sweep Button", category: "Bold", anchor: "black-sweep-button-demo" },
  { name: "Teal Slab Button", category: "Bold", anchor: "teal-slab-button-demo" },
  { name: "Green Outline Button", category: "Clean", anchor: "green-outline-button-demo" },
  { name: "Green Pill Expand Button", category: "Clean", anchor: "green-pill-expand-button-demo" },
  { name: "Soft Blue Fade Button", category: "Clean", anchor: "soft-blue-fade-button-demo" },
  { name: "Blue Sweep Button", category: "Professional / Corporate", anchor: "blue-sweep-button-demo" },
  { name: "Blue Sweep Rotate Button", category: "Professional / Corporate", anchor: "blue-sweep-rotate-button-demo" },
  { name: "Navy Chevron Button", category: "Professional / Corporate", anchor: "navy-chevron-button-demo" },
  { name: "Teal Arrow Button", category: "Professional / Corporate", anchor: "teal-arrow-button-demo" },
  { name: "Cyan Sweep Button", category: "Vibrant", anchor: "cyan-sweep-button-demo" },
  { name: "Magenta Invert Button", category: "Vibrant", anchor: "magenta-invert-button-demo" },
  { name: "Arrow Loop JS Button", category: "Tech / Hi-tech", anchor: "arrow-loop-js-button-demo" },
];
