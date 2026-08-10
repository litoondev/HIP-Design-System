"use client";

import styles from "./SectionCard.module.css";

interface FullPageButtonProps {
  /** id of the .secRender element whose markup should be cloned into the popup */
  targetId: string;
  num: string;
  name: string;
}

/**
 * Port of openFullPage() from design-system/sections.html.
 *
 * The original collected every inline <style> from <head> and wrote them into a new window.
 * Next ships app CSS as <link rel="stylesheet"> instead, so we carry links *and* styles across.
 * Two extra details the plain-HTML version didn't need:
 *   - link.href is read as the resolved absolute URL, because the popup starts on about:blank
 *     and would otherwise resolve relative paths against the wrong base.
 *   - <html>'s className is copied over: next/font defines --font-figtree / --font-inter on
 *     that class, so without it the popup falls back to system sans-serif.
 */
export default function FullPageButton({ targetId, num, name }: FullPageButtonProps) {
  function openFullPage() {
    const render = document.getElementById(targetId);
    if (!render) return;

    /* `body > style` matters as much as the head rules: app/layout.tsx publishes the whole
       --color-* set from colorVarsCss() in a body-level <style>, and the section CSS copied
       below resolves its colors through those variables. Take only the head rules and the
       popup renders the right shapes with no color at all. */
    const headCss = Array.from(
      document.querySelectorAll<HTMLElement>(
        'head style, head link[rel="stylesheet"], body > style'
      )
    )
      .map((node) =>
        node instanceof HTMLLinkElement
          ? `<link rel="stylesheet" href="${node.href}">`
          : node.outerHTML
      )
      .join("\n");

    const doc = `<!DOCTYPE html>
<html lang="en" class="${document.documentElement.className}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HIP — ${num} ${name}</title>
<base href="${window.location.origin}/">
<style>* { box-sizing: border-box; margin: 0; padding: 0; } body { margin: 0; background: var(--color-white); }</style>
${headCss}
</head>
<body>${render.innerHTML}</body>
</html>`;

    const win = window.open("", "_blank");
    if (!win) return;
    win.document.open();
    win.document.write(doc);
    win.document.close();
  }

  return (
    <button
      type="button"
      className={styles.secFullpageBtn}
      onClick={openFullPage}
      title="Open full-page preview"
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
      </svg>
      Full Page
    </button>
  );
}
