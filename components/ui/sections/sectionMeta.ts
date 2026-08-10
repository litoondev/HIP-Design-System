import type { DesignCategory } from "../docs/categories";

/**
 * Client-safe metadata for every rendered section design (homepage structure order).
 * Kept free of component imports — some sections read files at render time (fs),
 * so the components themselves live in sectionRegistry.tsx and stay server-side.
 */
export interface SectionMeta {
  /** URL slug — matches the anchor ids used on the /sections list page. */
  slug: string;
  num: string;
  name: string;
  category: DesignCategory;
  tags: string[];
  /** A copy-paste design prompt that would reproduce this section in the HIP design system. */
  prompt: string;
}

/* Shared prompt preamble so every per-section prompt stands alone. */
const DS =
  "Use the HIP design system: colors only from the global tokens (primary Harbor Teal #3196a9 with its 50–950 ramp, secondary Cyan Pulse, tertiary Periwinkle Dusk, accent Golden Amber, CTA Ember Orange #f97316, navy #0e1f35, base black #030712); fonts Figtree (headers) and Inter (body); responsive section padding 120/60/40, container padding 100/40/20, grid gap 40/30/20; type scale Pre-Header 16/14/12 +3px tracking, H2 56/42/32, Body1 20/18/16.";

export const sectionMeta: SectionMeta[] = [
  {
    slug: "hero",
    num: "01",
    name: "Hero Banner",
    category: "Professional / Corporate",
    tags: ["Full-bleed · Dark overlay · 2-button"],
    prompt: `Design a full-viewport hero banner for an orthodontic practice website. ${DS} Structure: a 44px utility bar (social dots in cta-500, uppercase 11px utility links: Call/Text, Payment Calculator, Referral, Portal, Virtual Consult), a 76px main nav (HIP logo with orange period, uppercase Figtree 700 15px links, cta-500 pill "Free Consult" button), then a left-aligned hero block: cta-500 uppercase eyebrow, Figtree 600 clamp(44–80px) H1 with one word highlighted in cta-500, and two pill buttons (primary cta-500, secondary white with cta text). Background: navy→primary-800/900 gradient with a dark base-black overlay at 70%.`,
  },
  {
    slug: "hero2",
    num: "01B",
    name: "Hero Banner — Pill Nav",
    category: "Modern",
    tags: ["Pill Nav · Full-bleed · Centered text"],
    prompt: `Design an alternative full-bleed hero with a floating pill navigation. ${DS} Topbar in navy; the main nav is a white pill (border-radius 100px 0 0 100px, soft shadow) offset from the left edge. Hero content is centered: Figtree 800 clamp(52–80px) headline over a navy→primary-600/700/800 gradient. Buttons pair a circular icon container with uppercase text; CTA in cta-500, secondary in primary-500.`,
  },
  {
    slug: "highlights",
    num: "02",
    name: "Highlights — Trust Badges Grid",
    category: "Clean",
    tags: ["Gray bg · 4-col × 2 rows · Icon + text"],
    prompt: `Design a trust-badges highlights strip. ${DS} Section on gray-100; 8 cards in a 4-column desktop grid (2-col tablet, 1–2 col mobile). Each card: white bg, gray-200 border, icon in a primary-50 circle recolored primary-500, Figtree 800 14px title, Inter 400 12px gray-500 subline. Badges: Locally Owned, Board-Certified, Locations, Invisalign tier, Flexible Times, Transfers, Interest-Free, Advanced Tech.`,
  },
  {
    slug: "highlights2",
    num: "02B",
    name: "Highlights — Trust Badges (Figma)",
    category: "Clean",
    tags: ["Cream bg · 4-col × 2 rows · Icon + text"],
    prompt: `Design the Figma "Highlights" trust-badge grid. ${DS} Section ground accent-50 with cards on base-white and a 1px accent-200 border, square corners, no shadow. Titles H6 (Figtree 700, 20/18/16 +0.5px) in textcolor-h2; sublines Body2 (Inter 400, 18/16/14) in textcolor-body; icons primary-500 at 48px (33px mobile). Container ladder 1240/688/280 on the DS section padding and grid gap.`,
  },
  {
    slug: "steps",
    num: "03",
    name: "Step Section — Simple & Affordable",
    category: "Bold",
    tags: ["Dark bg · 2-col + 3 numbered cards"],
    prompt: `Design a dark 3-step process section. ${DS} Section on base-black. Left column: cta-500 uppercase eyebrow, white H2 (global H2 scale), Body1 copy at 65% white, outline pill CTA. Right: image placeholder on a navy→cta-500 gradient. Below, three cards on 4% white with oversized Figtree 800 72px step numerals in cta-500 at 18% opacity, white 17px titles, Inter 13px body at 55% white.`,
  },
  {
    slug: "practice",
    num: "04",
    name: "Our Practice — Video",
    category: "Professional / Corporate",
    tags: ["Light teal bg · 2-col · Rotating play badge"],
    prompt: `Design a practice-intro video section. ${DS} Section on primary-50, two columns: a 4/3 video placeholder on a primary-900→700 gradient with a rotating circular text ring (SVG textPath, cta-500 at 70%) around a cta-500 play button with a 35% orange glow; text column with preheader eyebrow, H2 in textcolor-h2, Body1 copy, and an outlined cta-500 pill button.`,
  },
  {
    slug: "doctors",
    num: "05",
    name: "Our Doctors",
    category: "Clean",
    tags: ["White bg · Centered heading · Zig-zag rows"],
    prompt: `Design a meet-the-doctors section. ${DS} White section, centered heading block (eyebrow, H2, Body1 intro max 520px). Zig-zag rows alternate photo and bio: photo placeholders on primary gradients, credential pill (primary-50 bg / primary-200 border / primary-500 text), Figtree 800 26px name in textcolor-h3, Inter 14px/1.7 bio, cta-500 profile link. Keep bios to two sentences.`,
  },
  {
    slug: "who-we-help",
    num: "06",
    name: "Who We Help — Kids / Teens / Adults",
    category: "Fun / Playful",
    tags: ["Light teal bg · Centered heading · Zig-zag rows"],
    prompt: `Design an audience-segments section for Kids, Teens and Adults. ${DS} Section on primary-50 with centered heading block. Three zig-zag rows, each with an image placeholder (white→primary-300 / white→cta-300 / white→tertiary-300 gradients), an age pill (white bg, primary-200 border, primary-500 text), Figtree 800 24px title in textcolor-h3, Inter 14px body, and a cta-500 link to that audience's landing page. Rows divided by primary-100 borders.`,
  },
  {
    slug: "how-we-help",
    num: "07",
    name: "How We Help — Treatments",
    category: "Clean",
    tags: ["White bg · Centered heading · Zig-zag rows"],
    prompt: `Design a treatments overview section. ${DS} White section, centered heading block. Zig-zag rows per treatment: image placeholder on primary/cta/tertiary tint gradients, treatment tag pill (primary-50 bg, primary-200 border, primary-500 text), Figtree 800 22px title in textcolor-h3, Inter 14px body, cta-500 arrow link. One image per treatment, matched to the treatment.`,
  },
  {
    slug: "instagram",
    num: "08",
    name: "Instagram Section",
    category: "Vibrant",
    tags: ["White bg · Horizontal scroll · Square tiles"],
    prompt: `Design an Instagram feed strip. ${DS} White section; header row with eyebrow + H2 left and the account (avatar ring in Instagram's own brand gradient — the one permitted non-DS color) plus a primary-500 Follow button with a 30% teal shadow (deliberately NOT orange so it never competes with the main CTA). Below: 1:1 tiles on brand-tint gradients, 4–5 visible, horizontal scroll with scroll-snap.`,
  },
  {
    slug: "cta",
    num: "09",
    name: "CTA Section — Get Started",
    category: "Vibrant",
    tags: ["Orange-tinted bg · Image left · 1 CTA only"],
    prompt: `Design a conversion CTA section. ${DS} Section on a cta-50→cta-100 gradient, two columns: image placeholder left (cta-200→400 gradient), text right with eyebrow, H2, Body1 copy (max 400px) and a single cta-500 pill button (Figtree 800 uppercase, 35% orange shadow). Exactly one CTA — no competing links.`,
  },
  {
    slug: "reviews",
    num: "10",
    name: "5-Star Care — Reviews",
    category: "Bold",
    tags: ["Dark bg · 2-col top · Card slider bottom"],
    prompt: `Design a testimonials section. ${DS} Section on base-black. Top: cta-500 eyebrow, white H2, Body1 at 60% white beside an image placeholder on a navy→cta-500 gradient. Bottom: review cards on 5% white with 10% white borders — real-color Google G, cta-500 stars, Inter 13px italic review text at 75% white, uppercase reviewer name at 45% white; slider arrows with 20% white borders and a primary-500 "More Reviews" link.`,
  },
  {
    slug: "locations",
    num: "11",
    name: "Location Section",
    category: "Professional / Corporate",
    tags: ["White bg · 2-col intro · List + map"],
    prompt: `Design a locations section. ${DS} White section. Intro row: image placeholder (navy→cta-500 gradient) beside eyebrow + H2 + Body1. Below: location panels (gray-50 bg, gray-200 border, 10px uppercase labels, Inter 13px addresses, Figtree 800 17px cta-500 phone links — clickable in production) next to a stylized map (primary-50→100 gradient, primary-200 border) with cta-500 teardrop pins.`,
  },
  {
    slug: "footer",
    num: "12",
    name: "Footer Section",
    category: "Professional / Corporate",
    tags: ["Navy bg · Logo + CTA · 3 columns · Bottom bar"],
    prompt: `Design a site footer. ${DS} Ground navy. Top row: HIP logo (white, orange period) and a repeated cta-500 pill CTA — the last-chance conversion stays orange. Three link columns with primary-400 uppercase 10px labels and 13px links at 60% white (white on hover). Bottom bar: 11px legal text at 45% white with the required HIPAA links (Privacy Policy, Accessibility Statement, Notice of Privacy Practices). Include the fixed accessibility widget and chat bubble.`,
  },
];

export function metaBySlug(slug: string): SectionMeta | undefined {
  return sectionMeta.find((entry) => entry.slug === slug);
}
