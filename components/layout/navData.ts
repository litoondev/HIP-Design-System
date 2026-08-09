export type NavGroup = "Foundations" | "Components" | "Pages" | "Assets";

export interface NavChild {
  label: string;
  /** may carry a hash, e.g. /sections#hero */
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  group: NavGroup;
  /** rendered as an indented submenu while the parent route is open */
  children?: NavChild[];
}

/** Order the sidebar renders its groups in. */
export const navGroups: NavGroup[] = ["Foundations", "Components", "Pages", "Assets"];

/** Sidebar + search index — mirrors the anchors/links in design-system/index.html, buttons.html and icons.html */
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
  { label: "Homepage", href: "/homepage", group: "Pages" },
  {
    label: "Section Designs",
    href: "/sections",
    group: "Pages",
    // Ordered to match the homepage structure reference, not sections.html's own numbering.
    // 01B shares the 01 anchor, exactly as the source sidebar does.
    children: [
      { label: "01 · Hero Banner", href: "/sections#hero" },
      { label: "02 · Highlights Grid", href: "/sections#highlights" },
      { label: "03 · Step Section", href: "/sections#steps" },
      { label: "04 · Our Practice", href: "/sections#practice" },
      { label: "05 · Our Doctors", href: "/sections#doctors" },
      { label: "06 · Who We Help", href: "/sections#who-we-help" },
      { label: "07 · How We Help", href: "/sections#how-we-help" },
      { label: "08 · Instagram Section", href: "/sections#instagram" },
      { label: "09 · CTA Section", href: "/sections#cta" },
      { label: "10 · Reviews", href: "/sections#reviews" },
      { label: "11 · Location Section", href: "/sections#locations" },
      { label: "12 · Footer Section", href: "/sections#footer" },
    ],
  },
  { label: "Icons", href: "/icons", group: "Assets" },
];

/** Splits "/sections#hero" into ["/sections", "hero"]; a bare "/#colors" yields ["/", "colors"]. */
export function splitHref(href: string): [path: string, hash: string | undefined] {
  const [path, hash] = href.split("#");
  return [path || "/", hash || undefined];
}

/** Which anchor ids the sidebar should scroll-spy on, per route. */
export const anchorIdsByPath: Record<string, string[]> = (() => {
  const map: Record<string, string[]> = {};
  const add = (href: string) => {
    const [path, hash] = splitHref(href);
    if (!hash) return;
    (map[path] ||= []).push(hash);
  };
  navLinks.forEach((link) => {
    add(link.href);
    link.children?.forEach((child) => add(child.href));
  });
  return map;
})();

export const sectionIds = anchorIdsByPath["/"] ?? [];
