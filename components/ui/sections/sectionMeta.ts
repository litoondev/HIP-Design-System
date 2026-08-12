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
  /**
   * Design family, e.g. "Hero Banner". Members of one family share a single sidebar entry
   * and render as V1/V2… variation tabs on each other's pages; prev/next steps between
   * families, not variants. Omit for standalone sections.
   */
  group?: string;
  /** Short variation-tab label within the family, e.g. "V1". */
  tab?: string;
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
    group: "Hero Banner",
    tab: "V1",
    prompt: `Design a full-viewport hero banner for an orthodontic practice website. ${DS} Structure: a 44px utility bar (social dots in cta-500, uppercase 11px utility links: Call/Text, Payment Calculator, Referral, Portal, Virtual Consult), a 76px main nav (HIP logo with orange period, uppercase Figtree 700 15px links, cta-500 pill "Free Consult" button), then a left-aligned hero block: cta-500 uppercase eyebrow, Figtree 600 clamp(44–80px) H1 with one word highlighted in cta-500, and two pill buttons (primary cta-500, secondary white with cta text). Background: navy→primary-800/900 gradient with a dark base-black overlay at 70%.`,
  },
  {
    slug: "hero2",
    num: "01B",
    name: "Hero Banner — Pill Nav",
    category: "Modern",
    tags: ["Pill Nav · Full-bleed · Centered text"],
    group: "Hero Banner",
    tab: "V2",
    prompt: `Design an alternative full-bleed hero with a floating pill navigation. ${DS} Topbar in navy; the main nav is a white pill (border-radius 100px 0 0 100px, soft shadow) offset from the left edge. Hero content is centered: Figtree 800 clamp(52–80px) headline over a navy→primary-600/700/800 gradient. Buttons pair a circular icon container with uppercase text; CTA in cta-500, secondary in primary-500.`,
  },
  {
    slug: "hero3",
    num: "01C",
    name: "Hero Banner — Slider",
    category: "Elegant",
    tags: ["Cyan topbar · Inset photo · Serif headline"],
    group: "Hero Banner",
    tab: "V3",
    prompt: `Design a slider-style hero (Figma Master V3 node 12978:55076). ${DS} Structure: a secondary (cyan) utility bar with black ink — social icons left (Facebook, Instagram, YouTube), uppercase overline utility links right (Call/Text, Payment Calculator, Refer a Patient, Español); a white square-cornered main nav (logo, capitalized Menu-Item links with chevrons, square accent "Free Consultation" button — no pill radius). Hero: the photo sits inset inside the 64px page gutter, dark 50% multiply overlay, content bottom-left. Headline in Georgia serif clamp(44–100px), line one white, line two split secondary + accent ("Let Our Family / Treat Your Family"). CTA is the v2 button: cta-700 bar with an uppercase label that slides up on hover, plus a cta-500 icon block holding a diagonal arrow that straightens on hover.`,
  },
  {
    slug: "highlights",
    num: "02",
    name: "Highlights — Trust Badges Grid",
    category: "Clean",
    tags: ["Gray bg · 4-col × 2 rows · Icon + text"],
    group: "Highlights",
    tab: "V1",
    prompt: `Design a trust-badges highlights strip. ${DS} Section on gray-100 with a centered heading using the standard Text Container (eyebrow + H2, no button); 8 cards in a 4-column desktop grid on the DS grid gap (2-col tablet, 1–2 col mobile). Each card: white bg, gray-200 border, icon in a primary-50 rounded square, H6 title (Figtree 700, 20/18/16) in textcolor-h2, Body2 subline (Inter, 18/16/14) in textcolor-body. Badges: Locally Owned, Board-Certified, Locations, Invisalign tier, Flexible Times, Transfers, Interest-Free, Advanced Tech.`,
  },
  {
    slug: "highlights2",
    num: "02B",
    name: "Highlights — Trust Badges (Figma)",
    category: "Clean",
    tags: ["Cream bg · 4-col × 2 rows · Icon + text"],
    group: "Highlights",
    tab: "V2",
    prompt: `Design the Figma "Highlights" trust-badge grid. ${DS} Section ground accent-50 with cards on base-white and a 1px accent-200 border, square corners, no shadow. Titles H6 (Figtree 700, 20/18/16 +0.5px) in textcolor-h2; sublines Body2 (Inter 400, 18/16/14) in textcolor-body; icons primary-500 at 48px (33px mobile). Container ladder 1240/688/280 on the DS section padding and grid gap.`,
  },
  {
    slug: "steps",
    num: "03",
    name: "Step Section — Simple & Affordable",
    category: "Bold",
    tags: ["Dark bg · 2-col + 3 numbered cards"],
    group: "Step Section",
    tab: "V1",
    prompt: `Design a dark 3-step process section. ${DS} Section on base-black. Left column: the standard Text Container recolored for the dark ground — cta-500 uppercase eyebrow, white H2 (global H2 scale), Body1 copy at 65% white — ending in the global Bold Fill button (accent Golden Amber). Right: 3:2 image placeholder on a navy→cta-500 gradient. Below, three cards on 4% white with oversized Figtree 800 72px step numerals in cta-500 at 18% opacity, H6 white titles, Body2 copy at 55% white.`,
  },
  {
    slug: "steps2",
    num: "03B",
    name: "Step Section — Light Arches",
    category: "Minimalist",
    tags: ["White + primary-100 band · Arch cards · 2 CTAs"],
    group: "Step Section",
    tab: "V2",
    prompt: `Design a light 3-step process section (Figma reference node 12983:54203). ${DS} White ground with a primary-100 band across the lower third, behind the cards. Top row: the standard Text Container left (eyebrow + H2, no button) and, on the right, a copy-only Text Container (Body1 paragraph) ending in two global Minimal Outline buttons retargeted to the cta fill ("Free Ortho Consult") and secondary fill ("Dental Appointment") with base-black labels. Below: three arch-top photo cards (radius-full arch, radius-md base, 4px white frame, middle card taller and raised, side cards bottom-aligned) on the DS grid gap, each followed by a clickable white radius-md label card with a centered two-line Strong 1 label (Inter 700, 20/30 +0.5px) linking to its step's page.`,
  },
  {
    slug: "steps3",
    num: "03C",
    name: "Step Section — Leaf Cards",
    category: "Elegant",
    tags: ["Accent band · 150px corner panel · Leaf cards"],
    group: "Step Section",
    tab: "V3",
    prompt: `Design an elegant 3-step process section (Figma reference node 12985:55117). ${DS} An accent-colored side band with a white content panel over it, rounded 150px at the top-left. Top row: the standard Text Container left (eyebrow + H2, no button) and, right, a copy-only Text Container (Body1 paragraph) ending in the global Elegant Fill button labeled "Complimentary Consult". Below: three leaf cards (150px top-left/bottom-right, radius-md on the other corners, padding and gaps on the DS grid gap) with grounds stepping through tertiary-700 / tertiary-900 / accent-700; each holds a leaf-shaped photo, an outlined serif numeral (transparent fill, 2px white stroke, system serif), and a white Button-scale two-line label. White text must pass contrast on every card ground.`,
  },
  {
    slug: "steps4",
    num: "03D",
    name: "Step Section — Overlap Cards",
    category: "Fun / Playful",
    tags: ["White bg · Photo overlap · 3 colored cards"],
    group: "Step Section",
    tab: "V4",
    prompt: `Design a playful 3-step process section (Figma Master V3 node 12986:56347). ${DS} White ground. Split header aligned to the baseline: left, an eyebrow led by a 50px rule plus a two-line H2 whose first line sits in the cta hue and whose second line is white text on a primary-base box (3×10px padding, 4px radius); right, a copy-only standard Text Container (Body1 paragraph, no button). Below: one large photo rounded 40px (ratio 1240:659), with three rounded-40 step cards overlapping its bottom edge by ~243px on the DS grid gap — grounds tertiary-700 / secondary-700 / primary-700. Each card holds a 138px light (gray-50) numeral tile rounded 20px crossed behind by a 10px gray-50 divider band, the numeral (72/86 bold) repeating the card's hue, and a white uppercase Button-scale two-line label. Centered below, two global Press Shadow buttons: "Free Ortho Consult" and "Dental Appointment". Cards stack 3-across → 3-across tightened → single column down the breakpoints.`,
  },
  {
    slug: "practice",
    num: "04",
    name: "Our Practice — Video",
    category: "Professional / Corporate",
    tags: ["Light teal bg · 2-col · Rotating play badge"],
    prompt: `Design a practice-intro video section. ${DS} Section on primary-50, two columns: a 4/3 video placeholder on a primary-900→700 gradient with a rotating circular text ring (SVG textPath, cta-500 at 70%) around a cta-500 play button with a 35% orange glow; and the standard Text Container (eyebrow, H2, Body1 copy) ending in the global Corporate Arrow button (tertiary).`,
  },
  {
    slug: "doctors",
    num: "05",
    name: "Our Doctors",
    category: "Clean",
    tags: ["White bg · Centered heading · Zig-zag rows"],
    prompt: `Design a meet-the-doctors section. ${DS} White section, centered heading block using the standard Text Container (eyebrow, H2, Body1 intro, no button). Zig-zag rows on the DS grid gap alternate photo and bio: photo placeholders on primary gradients, credential pill (primary-50 bg / primary-200 border / cta text), H3 name (Figtree 800, 42/36/28) in textcolor-h3, Body2 bio (Inter, 18/16/14) in textcolor-body, and the global Clean Outline button labeled "Meet Dr. <last name>". Keep bios to two sentences.`,
  },
  {
    slug: "who-we-help",
    num: "06",
    name: "Who We Help — Kids / Teens / Adults",
    category: "Fun / Playful",
    tags: ["Light teal bg · Centered heading · Zig-zag rows"],
    prompt: `Design an audience-segments section for Kids, Teens and Adults. ${DS} Section on primary-50 with a centered heading block using the standard Text Container (eyebrow, H2, Body1 intro, no button). Three zig-zag rows on the DS grid gap, each with a 3:2 image placeholder (white→primary-300 / white→cta-300 / white→tertiary-300 gradients), an age pill (white bg, primary-200 border, cta text), H3 title (Figtree 800, 42/36/28) in textcolor-h3, Body2 copy (Inter, 18/16/14) in textcolor-body, and the global Press Shadow button (Fun / Playful) linking to that audience's landing page. Rows divided by primary-100 borders.`,
  },
  {
    slug: "how-we-help",
    num: "07",
    name: "How We Help — Treatments",
    category: "Clean",
    tags: ["White bg · Centered heading · Zig-zag rows"],
    prompt: `Design a treatments overview section. ${DS} White section, centered heading block using the standard Text Container (eyebrow, H2, Body1 intro, no button). Zig-zag rows per treatment on the DS grid gap: 3:2 image placeholder on primary/cta/tertiary tint gradients, treatment tag pill (primary-50 bg, primary-200 border, cta text), H3 title (Figtree 800, 42/36/28) in textcolor-h3, Body2 copy (Inter, 18/16/14) in textcolor-body, and the global Clean Outline button labeled "Explore <treatment>". One image per treatment, matched to the treatment.`,
  },
  {
    slug: "instagram",
    num: "08",
    name: "Instagram Section",
    category: "Vibrant",
    tags: ["White bg · Horizontal scroll · Square tiles"],
    prompt: `Design an Instagram feed strip. ${DS} Section on accent-50 with the standard Text Container: "We're Social" eyebrow, "Connect With Us" H2, and the @username in H4 Alt (Figtree 700, 32/28/24, lowercase) in textcolor-body. Below: 310×414 post tiles (gray-100 on gray-200 borders) in a scroll-snap slider on the 30/20/16 gap ladder. Footer row: Subtitle "FOLLOW US" with Facebook/Instagram/X/TikTok icons in primary separated by gray-200 lines, and square slider arrows with a 2px primary border (fill primary on hover). Deliberately no orange CTA so it never competes with the main conversion CTA.`,
  },
  {
    slug: "cta",
    num: "09",
    name: "CTA Section — Get Started",
    category: "Vibrant",
    tags: ["Orange-tinted bg · Image left · 1 CTA only"],
    prompt: `Design a conversion CTA section. ${DS} Section on a cta-50→cta-100 gradient, two columns: 3:2 image placeholder left (cta-200→400 gradient), and the standard Text Container right (eyebrow, H2, Body1 copy) ending in the global Vibrant Sweep button retargeted to the CTA ramp — the page's one conversion CTA stays Ember Orange with a 35% orange shadow. Exactly one CTA — no competing links.`,
  },
  {
    slug: "reviews",
    num: "10",
    name: "5-Star Care — Reviews",
    category: "Bold",
    tags: ["Dark bg · 2-col top · Card slider bottom"],
    prompt: `Design a testimonials section. ${DS} Section on base-black. Top: the standard Text Container recolored for the dark ground (cta-500 eyebrow, white H2, Body1 at 60% white) beside a 3:2 image placeholder on a navy→cta-500 gradient. Bottom: review cards on 5% white with 10% white borders on the DS grid gap — Google G, cta-500 stars, Body2 italic review text at 75% white, uppercase reviewer name at 45% white; slider arrows with 20% white borders and the global Bold Fill button labeled "More Reviews".`,
  },
  {
    slug: "locations",
    num: "11",
    name: "Location Section",
    category: "Professional / Corporate",
    tags: ["White bg · 2-col intro · List + map"],
    prompt: `Design a locations section. ${DS} White section. Intro row: 3:2 image placeholder (navy→cta-500 gradient) beside the standard Text Container (eyebrow, H2, Body1). Below: location panels on the DS gap tokens (gray-50 bg, gray-200 border, Subtitle headings (Figtree 700, 24/22/18 +0.75px), Body2 addresses, H6 cta-500 phone links — clickable in production) ending in the global Corporate Arrow button "View All Locations", next to a stylized map (primary-50→100 gradient, primary-200 border) with cta-500 teardrop pins.`,
  },
  {
    slug: "footer",
    num: "12",
    name: "Footer Section",
    category: "Professional / Corporate",
    tags: ["Navy bg · Logo + CTA · 3 columns · Bottom bar"],
    prompt: `Design a site footer. ${DS} Ground navy. Top row: HIP logo (white, orange period) and the global Corporate Arrow button retargeted to the CTA ramp — the last-chance conversion stays Ember Orange. Three link columns on the DS grid gap with primary-400 uppercase 10px labels and 13px links at 60% white (white on hover). Bottom bar: 11px legal text at 45% white with the required HIPAA links (Privacy Policy, Accessibility Statement, Notice of Privacy Practices). Include the fixed accessibility widget and chat bubble.`,
  },
];

export function metaBySlug(slug: string): SectionMeta | undefined {
  return sectionMeta.find((entry) => entry.slug === slug);
}
