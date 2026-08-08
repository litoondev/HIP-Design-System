export interface NavLink {
  label: string;
  href: string;
  group: "Foundations" | "Components";
}

/** Sidebar + search index — mirrors the anchors/links in design-system/index.html and buttons.html */
export const navLinks: NavLink[] = [
  { label: "Color Palette", href: "/#colors", group: "Foundations" },
  { label: "Typography", href: "/#typography", group: "Foundations" },
  { label: "Color Accessibility", href: "/#accessibility", group: "Foundations" },
  { label: "Responsive Spacing & Layout", href: "/#responsive-rules", group: "Foundations" },
  { label: "Buttons", href: "/buttons", group: "Components" },
  { label: "Input Field", href: "/#inputs", group: "Components" },
  { label: "Checkbox & Radio", href: "/#checkbox-radio", group: "Components" },
  { label: "Primary Nav", href: "/#primary-nav", group: "Components" },
  { label: "Mega Menu", href: "/#mega-menu", group: "Components" },
  { label: "Cards", href: "/#cards", group: "Components" },
  { label: "Location", href: "/#location", group: "Components" },
  { label: "FAQ / Accordion", href: "/#faq", group: "Components" },
  { label: "Pagination", href: "/#pagination", group: "Components" },
  { label: "Tabs", href: "/#tabs", group: "Components" },
  { label: "Choose File", href: "/#choose-file", group: "Components" },
];

export const sectionIds = navLinks
  .filter((l) => l.href.startsWith("/#"))
  .map((l) => l.href.slice(2));
