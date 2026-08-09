"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from "./navData";

/**
 * Site search — reimplements the vanilla-JS search from design-system/index.html & buttons.html
 * as a React client component: Ctrl/Cmd+K focuses the input, typing live-filters nav links,
 * ArrowUp/ArrowDown move the highlighted result, Enter or mousedown selects and navigates
 * (via next/router push instead of window.location/hash), Escape clears, and clicking outside
 * closes the results dropdown.
 */
export default function SiteSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent));
  }, []);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return navLinks.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function handleGlobalKeydown(e: KeyboardEvent) {
      const isMod = e.ctrlKey || e.metaKey;
      if (isMod && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }
    document.addEventListener("keydown", handleGlobalKeydown);
    return () => document.removeEventListener("keydown", handleGlobalKeydown);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function select(href: string) {
    router.push(href);
    setShowResults(false);
    setQuery("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setQuery("");
      setShowResults(false);
      inputRef.current?.blur();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = matches[activeIndex] || matches[0];
      if (target) select(target.href);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!matches.length) return;
      e.preventDefault();
      setActiveIndex((idx) => {
        const next = e.key === "ArrowDown" ? idx + 1 : idx - 1;
        if (next < 0) return matches.length - 1;
        if (next >= matches.length) return 0;
        return next;
      });
    }
  }

  const open = showResults && query.trim().length > 0;

  return (
    <div ref={wrapperRef} className="topbar-search relative flex-1 max-w-[320px] mr-auto ml-8 [@media(max-width:900px)]:hidden">
      <input
        ref={inputRef}
        id="site-search"
        type="text"
        placeholder="Search…"
        autoComplete="off"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
        onKeyDown={handleKeyDown}
        className="w-full pl-[14px] pr-14 py-2 bg-gray-50 border border-gray-200 rounded-lg font-body text-[13px] text-base-black placeholder-gray-500 outline-none transition-colors focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary-100"
      />
      <kbd className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-[6px] py-[2px] font-body text-[11px] font-semibold text-gray-400 bg-white border border-gray-200 rounded pointer-events-none select-none">
        <span>{isMac ? "⌘" : "Ctrl"}</span>K
      </kbd>
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] max-h-[360px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-[110] py-1">
          {matches.length === 0 ? (
            <div className="px-4 py-3 font-body text-[13px] text-gray-400">No results for &quot;{query}&quot;</div>
          ) : (
            matches.map((item, i) => (
              <a
                key={item.href + item.label}
                href={item.href}
                data-search-result
                onMouseDown={(e) => {
                  e.preventDefault();
                  select(item.href);
                }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`search-result-item flex items-center justify-between gap-3 px-4 py-2 font-body text-[13px] text-base-black no-underline hover:bg-primary-50 hover:text-primary ${
                  i === activeIndex ? "bg-primary-50 text-primary" : ""
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[11px] text-gray-400 uppercase tracking-[0.5px]">{item.group}</span>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
