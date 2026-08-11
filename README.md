# HIP Design System — Next.js Component Library

A standalone Next.js (TypeScript, App Router) port of the static Tailwind-CDN HTML design
system (`../index.html` and `../buttons.html`). It is a component-library-style app: every
foundation and component from the original HTML pages has been rebuilt as a real, typed React
component, with the five hand-authored button components ported into CSS Modules (not
Tailwind approximations).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The home page (`/`) contains all Foundations (Color Palette,
Typography, Color Accessibility, Spacing Primitives, Responsive Spacing & Layout Rules) and most Components
(Input Field, Checkbox & Radio, Primary Nav, Mega Menu, Cards, Location, FAQ, Pagination, Tabs,
Choose File) — mirroring `index.html`, which was itself a single page. `/buttons` holds the
five button components, mirroring `buttons.html`.

```bash
npm run build   # production build
npm run lint    # eslint (next/core-web-vitals)
```

> **Note on this checkout:** this project was authored in a network-restricted sandbox that
> could not reach the npm registry, so `npm install` / `npm run build` have not been run or
> verified here. Run `npm install && npm run build` in a normal environment before deploying;
> fix any dependency-version drift you encounter (package.json pins Next 14.2.5 / React 18.3 /
> Tailwind 3.4 as of authoring time).

## Component folder layout

```
components/
  layout/            Shared app shell
    TopBar.tsx          Fixed top bar: logo, SiteSearch, Foundations/Components nav links
    Sidebar.tsx         Fixed sidebar; highlights active link via usePathname + IntersectionObserver
    SiteSearch.tsx       Ctrl/Cmd+K search box, live filter, arrow-key nav, next/router navigation
    navData.ts          Shared sidebar/search link index (label, href, group)

  ui/
    buttons/            The 5 hand-authored buttons, each with a sibling .module.css carrying
                         the exact ported CSS (not Tailwind arbitrary values):
                           RequestFreeConsultButton, OlvButton, FreeConsultButton,
                           BergenButton, LearnMoreButton

    typography/         Type-scale system
                           TypeScale.tsx (TypeSample/TypeSpecRow primitives)
                           TypographySection.tsx (full type scale from the style guide)
                           TextColorTokenTable.tsx (Name/Value text-color token table)

    foundations/        ColorPalette, ColorAccessibilityRamps (Gray/Primary/Secondary/
                         Tertiary/Accent/CTA 50–950 ramps), ResponsiveSpacingTable

    cards/               ServiceCard, TeamCard (plain + `hover` variant), SingleDrCard,
                         ProductCard, EventCard, TechnologyCard, ArchiveBlogCard

    nav/                PrimaryNav, MegaMenu

    forms/              InputField (variant="round|square|circle|pill"), Checkbox, Radio,
                         ChooseFile, UploadDropzone

    misc/               LocationPin, LocationList, LocationPopup, FaqAccordion (interactive),
                         Pagination (interactive), Tabs (interactive)

app/
  layout.tsx           Root layout — loads Figtree (400/700/800) & Inter (400/700) via
                        next/font/google, renders TopBar + Sidebar shell
  page.tsx             Foundations + most Components (mirrors index.html)
  buttons/page.tsx     Buttons gallery (mirrors buttons.html)
  globals.css          Tailwind layers + global resets
```

## Known deviations from the source HTML (see also the delivery report)

- **Bergen Ortho button color discrepancy:** `index.html`'s copy of `.bergen-button` uses
  `color: var(--white)`, while `buttons.html`'s copy (the dedicated buttons gallery) uses
  `color: var(--dark)`. `BergenButton.tsx`/`.module.css` follow `buttons.html` as the source of
  truth.
- **Free Consult (Lucas Orthodontic) button font:** the source's `@font-face` for
  `"proxima-nova"` points at a Typekit-hosted URL that requires an active Typekit
  subscription/kit ID. That remote `@font-face` is intentionally not reproduced;
  `FreeConsultButton.module.css` keeps the same font stack (`"proxima-nova", Arial, sans-serif`)
  so intent is documented, and the browser falls back to Arial.
- **Scroll-spy / search JS → React:** the original vanilla-JS `IntersectionObserver` scroll-spy
  and Ctrl/Cmd+K search have been reimplemented as `Sidebar.tsx` and `SiteSearch.tsx` client
  components using `usePathname`/`useRouter` and React state instead of hash/`href` mutation.
