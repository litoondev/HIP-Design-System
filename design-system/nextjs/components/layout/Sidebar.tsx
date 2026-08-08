"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, sectionIds } from "./navData";

/**
 * Fixed sidebar — replaces the old vanilla-JS scroll-spy with usePathname for route-level active
 * state (e.g. /buttons) and a lightweight IntersectionObserver for in-page anchor active state
 * (e.g. #colors, #typography...) while on the home page.
 */
export default function Sidebar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash(null);
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/buttons") return pathname === "/buttons";
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHash === href.slice(1);
    }
    return false;
  }

  const groups = ["Foundations", "Components"] as const;

  return (
    <nav className="sidebar fixed top-16 bottom-0 left-0 w-60 overflow-y-auto px-4 pt-7 pb-10 border-r border-gray-200 bg-white [@media(max-width:900px)]:hidden">
      {groups.map((group) => (
        <div key={group} className="mb-7">
          <div className="font-body text-[11px] font-bold tracking-[0.5px] uppercase text-gray-400 px-3 mb-2">
            {group}
          </div>
          {navLinks
            .filter((l) => l.group === group)
            .map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`side-link block px-3 py-[7px] my-[1px] border-l-2 rounded-r-md font-body text-[14px] no-underline ${
                    active
                      ? "border-primary text-primary font-semibold bg-primary-50"
                      : "border-transparent text-gray-600 hover:text-base-black hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
        </div>
      ))}
    </nav>
  );
}
