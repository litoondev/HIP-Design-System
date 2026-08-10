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
  /**
   * Component family, e.g. "Text Container" or "Hero". Entries sharing a group render as
   * ONE demo card with variation tabs (V1, V2, …) instead of stacked cards — this is what
   * keeps a family with 10–20 variations browsable. Omit for standalone components.
   */
  group?: string;
  /** Short tab label inside the group card, e.g. "V1". Defaults to the name minus the group prefix. */
  tab?: string;
}

/** Registry the chip row and page TOC are built from — add every new component variant here. */
export const componentCatalog: CatalogEntry[] = [
  { name: "Text Container", category: "Professional / Corporate", anchor: "text-container-demo", group: "Text Container", tab: "V1" },
  { name: "Text Container V2", category: "Vibrant", anchor: "text-container-v2-demo", group: "Text Container", tab: "V2" },
  { name: "Text Container V3", category: "Modern", anchor: "text-container-v3-demo", group: "Text Container", tab: "V3" },
  { name: "Text Container V4", category: "Clean", anchor: "text-container-v4-demo", group: "Text Container", tab: "V4" },
  // Buttons (/buttons)
  { name: "Arrow Loop Button", category: "Modern", anchor: "arrow-loop-button-demo" },
  { name: "Panel Collapse Button", category: "Modern", anchor: "panel-collapse-button-demo" },
  { name: "Modern Pill Button", category: "Modern", anchor: "modern-pill-button-demo" },
  { name: "Minimal Outline Button", category: "Minimalist", anchor: "minimal-outline-button-demo" },
  { name: "Line Slide Button", category: "Minimalist", anchor: "line-slide-button-demo" },
  { name: "Line Swap Button", category: "Minimalist", anchor: "line-swap-button-demo" },
  { name: "Elegant Fill Button", category: "Elegant", anchor: "elegant-fill-button-demo" },
  { name: "Elegant Sweep Button", category: "Elegant", anchor: "elegant-sweep-button-demo" },
  { name: "Luxury Overhang Button", category: "Luxury", anchor: "luxury-overhang-button-demo" },
  { name: "Offset Shadow Button", category: "Fun / Playful", anchor: "offset-shadow-button-demo" },
  { name: "Playful Collapse Button", category: "Fun / Playful", anchor: "playful-collapse-button-demo" },
  { name: "Press Shadow Button", category: "Fun / Playful", anchor: "press-shadow-button-demo" },
  { name: "Text Roll Button", category: "Fun / Playful", anchor: "text-roll-button-demo" },
  { name: "Bold Fill Button", category: "Bold", anchor: "bold-fill-button-demo" },
  { name: "Bold Sweep Button", category: "Bold", anchor: "bold-sweep-button-demo" },
  { name: "Bold Slab Button", category: "Bold", anchor: "bold-slab-button-demo" },
  { name: "Clean Outline Button", category: "Clean", anchor: "clean-outline-button-demo" },
  { name: "Clean Expand Button", category: "Clean", anchor: "clean-expand-button-demo" },
  { name: "Clean Fade Button", category: "Clean", anchor: "clean-fade-button-demo" },
  { name: "Corporate Sweep Button", category: "Professional / Corporate", anchor: "corporate-sweep-button-demo" },
  { name: "Corporate Rotate Button", category: "Professional / Corporate", anchor: "corporate-rotate-button-demo" },
  { name: "Corporate Chevron Button", category: "Professional / Corporate", anchor: "corporate-chevron-button-demo" },
  { name: "Corporate Arrow Button", category: "Professional / Corporate", anchor: "corporate-arrow-button-demo" },
  { name: "Vibrant Sweep Button", category: "Vibrant", anchor: "vibrant-sweep-button-demo" },
  { name: "Vibrant Invert Button", category: "Vibrant", anchor: "vibrant-invert-button-demo" },
  { name: "Tech Loop Button", category: "Tech / Hi-tech", anchor: "tech-loop-button-demo" },
];
