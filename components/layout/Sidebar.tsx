"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, navGroups, anchorIdsByPath, splitHref } from "./navData";
import { Typography, typographyClass } from "@/components/ui/typography/Typography";

/**
 * Fixed sidebar — replaces the old vanilla-JS scroll-spy with usePathname for route-level active
 * state (e.g. /buttons) and a lightweight IntersectionObserver for in-page anchor active state.
 * The observer runs on any route that owns anchors: "#colors, #typography…" on the home page,
 * "#hero, #steps…" on /sections.
 */
export default function Sidebar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    const ids = anchorIdsByPath[pathname];
    if (!ids?.length) {
      setActiveHash(null);
      return;
    }

    const sections = ids
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
    const [path, hash] = splitHref(href);
    if (hash) return pathname === path && activeHash === `#${hash}`;
    return pathname === path;
  }

  return (
    <nav className="sidebar fixed top-16 bottom-0 left-0 w-60 overflow-y-auto px-4 pt-7 pb-10 border-r border-gray-200 bg-white [@media(max-width:900px)]:hidden">
      {navGroups.map((group) => (
        <div key={group} className="mb-7">
          <Typography variant="overline" as="div" className="text-gray-400 px-3 mb-2">
            {group}
          </Typography>
          {navLinks
            .filter((l) => l.group === group)
            .map((link) => {
              const active = isActive(link.href);
              // A submenu only unfolds once you're on its page (or a sub-page under it, e.g.
              // /sections/hero), so the sidebar stays short elsewhere.
              const showChildren =
                Boolean(link.children?.length) &&
                (pathname === link.href || pathname.startsWith(`${link.href}/`));

              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    /* <Link> renders its own <a>, so the variant arrives as a class. */
                    className={typographyClass(
                      "label",
                      `side-link block px-3 py-[7px] my-[1px] border-l-2 rounded-r-md no-underline ${
                        active
                          ? "border-primary text-primary font-semibold bg-primary-50"
                          : "border-transparent text-textcolor-body hover:text-base-black hover:bg-gray-50"
                      }`
                    )}
                  >
                    {link.label}
                  </Link>

                  {showChildren && (
                    <div className="ml-3 mb-1 border-l border-gray-200 pl-1">
                      {link.children!.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={typographyClass(
                              "label",
                              `block px-3 py-[5px] my-[1px] rounded-md no-underline ${
                                childActive
                                  ? "text-primary font-semibold bg-primary-50"
                                  : "text-textcolor-body hover:text-base-black hover:bg-gray-50"
                              }`
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </nav>
  );
}
