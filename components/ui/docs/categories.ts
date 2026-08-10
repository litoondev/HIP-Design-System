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
  { name: "Text Container — Statement", category: "Clean", anchor: "text-container-statement-demo" },
];
