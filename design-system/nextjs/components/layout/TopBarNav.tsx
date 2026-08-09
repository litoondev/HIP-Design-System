"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Same six links, in the same order, as the header in design-system/index.html. */
const LINKS = [
  { label: "Foundations", href: "/#colors" },
  { label: "Components", href: "/#inputs" },
  { label: "Buttons", href: "/buttons" },
  { label: "Homepage", href: "/homepage" },
  { label: "Icons", href: "/icons" },
  { label: "Sections", href: "/sections" },
];

export default function TopBarNav() {
  const pathname = usePathname();

  /**
   * index.html hard-codes Foundations teal because it is the page you are on. Generalised here:
   * a link is current when it owns the route. Foundations and Components both point at "/", so
   * the first match wins — which reproduces the source, where only Foundations is highlighted.
   */
  const currentIndex = LINKS.findIndex((link) => (link.href.split("#")[0] || "/") === pathname);

  return (
    <nav className="flex gap-6 ml-auto">
      {LINKS.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={i === currentIndex ? "page" : undefined}
          className={`font-body text-[14px] font-semibold no-underline hover:text-primary ${
            i === currentIndex ? "text-primary" : "text-gray-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
