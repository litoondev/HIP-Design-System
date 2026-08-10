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
