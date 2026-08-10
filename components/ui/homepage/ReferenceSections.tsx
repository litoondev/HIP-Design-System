import Link from "next/link";
import { Section, WfBlock, WfLabel } from "./Wireframe";

/**
 * Sections 17–20 — reference only, not rendered page sections.
 * Ported 1:1 from design-system/homepage.html. Cross-links to icons.html are rewritten
 * to the app's /icons route.
 */

/* ── 17 · Final Homepage Success Formula ──────────────────────────────── */
const FORMULA_LEFT = [
  { op: "=", bold: "Clear Brand Tagline" },
  { op: "+", bold: "3-Step Easy Start" },
  { op: "+", bold: "Real Doctors & Real Video" },
  { op: "+", bold: "Segment Relevance", note: "(Kids / Teens / Adults)" },
];

const FORMULA_RIGHT = [
  { op: "+", bold: "Clear Treatment Paths" },
  { op: "+", bold: "Google Reviews Proof" },
  { op: "+", bold: "Multi-Location Map" },
  { op: "+", bold: "Free Consult CTA Repeated", note: "(nav → steps → CTA → footer)", cta: true },
];

function FormulaItem({
  op,
  bold,
  note,
  cta,
}: {
  op: string;
  bold: string;
  note?: string;
  cta?: boolean;
}) {
  return (
    <div className="flex items-start gap-2">
      <span
        className={`w-5 h-5 rounded-full ${
          cta ? "bg-cta-500" : "bg-primary-500"
        } text-white text-[10px] font-bold font-body flex items-center justify-center flex-shrink-0 mt-0.5`}
      >
        {op}
      </span>
      <p className="font-body text-[12px] text-base-black">
        <span className="font-bold">{bold}</span>
        {note && <span className="text-gray-500"> {note}</span>}
      </p>
    </div>
  );
}

export function SuccessFormula() {
  return (
    <Section
      id="success-formula"
      number="17"
      title="Final Homepage Success Formula"
      meta="Reference only — not a page section"
      tone="primary"
      caption="Use this as a checklist before any homepage review. Every item must be present and working."
    >
      <div className="bg-primary-50 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            {FORMULA_LEFT.map((f) => (
              <FormulaItem key={f.bold} {...f} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {FORMULA_RIGHT.map((f) => (
              <FormulaItem key={f.bold} {...f} />
            ))}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary-200 flex items-center gap-3">
          <span className="font-header font-extrabold text-2xl text-primary-600">=</span>
          <p className="font-header font-extrabold text-[15px] text-primary-800">
            High-Converting Orthodontic Homepage
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ── 18 · Final Designer Reminder ─────────────────────────────────────── */
const REMINDER_TAGS: { label: string; tone: "primary" | "cta" }[] = [
  { label: "Warm", tone: "primary" },
  { label: "Professional", tone: "primary" },
  { label: "Premium", tone: "primary" },
  { label: "Real Smiles", tone: "cta" },
  { label: "Free Consult at every depth", tone: "cta" },
];

export function DesignerReminder() {
  return (
    <Section
      id="designer-reminder"
      number="18"
      title="Final Designer Reminder"
      meta="Reference only — design north star"
      tone="primary"
      className="mb-10"
    >
      <div className="bg-white p-8 flex items-start gap-5">
        <div className="flex-shrink-0 w-1 self-stretch bg-primary-400 rounded-full" />
        <div>
          <p className="font-header font-extrabold text-[17px] text-base-black leading-relaxed mb-3">
            &ldquo;This practice is <span className="text-primary-600">trusted</span>,{" "}
            <span className="text-cta-500">affordable</span>,{" "}
            <span className="text-primary-600">close to me</span>, and starting is easy — the first
            consult is free.&rdquo;
          </p>
          <p className="font-body text-[12px] text-gray-500 leading-relaxed">
            That is what every visitor — usually a parent or an adult considering aligners — must
            feel at every scroll depth. The design must stay{" "}
            <strong>warm, professional, and premium</strong>: clinical credibility softened by real
            smiles. Every section must offer a path to the free consultation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {REMINDER_TAGS.map((t) => (
              <span
                key={t.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-[11px] font-bold ${
                  t.tone === "primary"
                    ? "bg-primary-50 border border-primary-200 text-primary-700"
                    : "bg-cta-50 border border-cta-200 text-cta-700"
                }`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── 19 · Image Sourcing Instructions ─────────────────────────────────── */
const DRIVE_URL =
  "https://drive.google.com/drive/folders/1mwrOevbApaDS0ZOqNYyYGTO3TmAONq3y";

const FOLDER_MAP: [string, string][] = [
  ["Hero Banner", "Hero Section"],
  ["Step Section", "Step Section"],
  ["Our Practice (video thumbnail)", "What Sets Us Apart Section"],
  ["Our Doctors", "Docter Section"],
  ["Who We Help (Kids / Teens / Adults)", "Services or Who we help section"],
  ["How We Help (Treatments)", "How we help Section"],
  ["Instagram Slider", "Instagram Section"],
  ["CTA Section", "CTA Section"],
  ["5-Star Care (Reviews)", "Testimonial Section"],
  ["Locations", "Location Section"],
];

const COUNT_RULES: [string, string][] = [
  [
    "Our Doctors",
    "1 doctor → 1 image  |  2 doctors → 2 images  |  4 doctors → 4 images. One photo per doctor from the Docter Section folder.",
  ],
  [
    "How We Help (Treatments)",
    "1 per treatment slot (up to 4). Each image must match that specific treatment.",
  ],
  [
    "Who We Help",
    "3 images — one per segment. Kids photo = child patient, Teens = teenager, Adults = adult patient.",
  ],
  [
    "Other sections",
    "Hero, Step, Our Practice, CTA — 1 image each. Instagram — 4–6. Reviews — 1. Locations — 1 hero + 1 per location pop-up.",
  ],
];

export function ImageSourcing() {
  return (
    <Section
      id="image-sourcing"
      number="19"
      title="Image Sourcing Instructions"
      meta="Reference only — production workflow"
      tone="secondary"
      caption="Every section pulls ONLY from its own matching Drive folder. Never mix folders."
    >
      <div className="bg-white p-6 flex flex-col gap-5">
        <div className="bg-secondary-50 border border-secondary-200 rounded-lg px-4 py-3">
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-secondary-700 mb-1">
            Master Rule
          </p>
          <p className="font-body text-[12px] text-base-black">
            All images MUST come from the client image drive. Never use stock photos, AI-generated
            images, or images from outside this drive.
          </p>
          <a
            href={DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] font-bold text-secondary-600 mt-1 inline-block break-all"
          >
            drive.google.com/drive/folders/1mwrOevbApaDS0ZOqNYyYGTO3TmAONq3y →
          </a>
        </div>

        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Section → Drive Folder Mapping
          </p>
          <div className="border border-gray-200 rounded-lg overflow-x-auto">
            <table className="w-full font-body text-[11px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-2 font-bold text-gray-600">Homepage Section</th>
                  <th className="text-left px-3 py-2 font-bold text-gray-600">Drive Folder Name</th>
                </tr>
              </thead>
              <tbody>
                {FOLDER_MAP.map(([section, folder]) => (
                  <tr key={section} className="border-b border-gray-100">
                    <td className="px-3 py-2 text-gray-700">{section}</td>
                    <td className="px-3 py-2 font-mono text-secondary-700 bg-secondary-50">
                      {folder}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-3 py-2 text-gray-400 italic">
                    Highlights, Brand Logos, News &amp; Media, Footer
                  </td>
                  <td className="px-3 py-2 text-gray-400 italic">
                    Icons/logos only — no photos needed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Image Count Rule
          </p>
          <div className="grid grid-cols-2 gap-3">
            {COUNT_RULES.map(([title, body]) => (
              <WfBlock key={title} className="border-gray-300 p-3 flex flex-col gap-1">
                <p className="font-body text-[11px] font-bold text-gray-700">{title}</p>
                <p className="font-body text-[10px] text-gray-500">{body}</p>
              </WfBlock>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 flex flex-col gap-1.5">
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1">
            Selection Rules
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Match image to item — a doctor row must use <em>that doctor&rsquo;s</em> photo; never
            substitute.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Never reuse the same image across two sections.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Choose highest-resolution version when duplicates exist.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Prefer crops that fit the section: hero = wide landscape, doctors = portrait-friendly,
            Instagram = square-croppable.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • If a section&rsquo;s folder is empty or missing — keep the design placeholder and{" "}
            <span className="font-bold text-cta-600">flag it</span>. Do not substitute from another
            folder.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Keep a record: filename → section, for client review.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ── 20 · Icon Usage Instructions ─────────────────────────────────────── */
const ICON_USAGE: [string, string, boolean?][] = [
  [
    "Top Utility Bar",
    "Social icons (FB, IG, X, YouTube, TikTok), phone, calculator, referral, portal, video",
  ],
  ["Main Navigation", "Dropdown chevrons, arrow in CTA button"],
  [
    "Highlights Grid †",
    "1 per card — location pin, map, smile, dollar, clock, award badge, person, home pin",
    true,
  ],
  ["Step Section", "Arrow icons in buttons"],
  ["Our Practice", "Play button badge (rotating text ring)"],
  ["Buttons (site-wide)", "Arrow-right icon"],
  ["Reviews", 'Google "G" logo, star icons, slider arrows (left/right)'],
  ["Locations", "Map pins, phone, clock (hours), close (×) on pop-up, zoom +/−"],
  ["Footer", "Social icons, location pins, phone"],
  ["Floating Widgets", "Accessibility icon, chat bubble"],
];

const MISSING_WORKFLOW: [string, string, boolean?][] = [
  [
    "Ask the user",
    '"I need [icon name] — for [section/card]. Please add it to the icon library or approve an alternative."',
  ],
  [
    "Insert placeholder",
    "Neutral square/circle in the icon slot, labeled with the intended icon name. Visually obvious but layout-neutral.",
  ],
  [
    "Log it",
    'Keep a "Missing Icons" list: icon name → section → status (requested / received / updated).',
  ],
  [
    "Replace",
    "Replace the placeholder as soon as the icon is delivered. Remove from the missing-icons log.",
    true,
  ],
];

export function IconUsage() {
  return (
    <Section
      id="icon-usage"
      number="20"
      title="Icon Usage Instructions"
      meta="Reference only — production workflow"
      tone="secondary"
      className="mb-10"
      caption={
        <>
          All 150 icons must come from{" "}
          <Link href="/icons" className="font-bold text-secondary-600">
            the system icon library
          </Link>{" "}
          first (7 categories: Social, Communication, User, Navigation, Location, UI, DS-Specific).
          Check the icon library before reaching for any external set.
        </>
      }
    >
      <div className="bg-white p-6 flex flex-col gap-5">
        <div className="bg-secondary-50 border border-secondary-200 rounded-lg px-4 py-3">
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-secondary-700 mb-1">
            Master Rule — Priority Order
          </p>
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded bg-primary-500 text-white text-[10px] font-bold font-body flex items-center justify-center flex-shrink-0">
                1
              </span>
              <p className="font-body text-[12px] text-base-black">
                <strong>System icon library (150 icons)</strong> — always check{" "}
                <Link href="/icons" className="text-primary-600 font-bold">
                  the icon library
                </Link>{" "}
                FIRST.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded bg-accent-500 text-white text-[10px] font-bold font-body flex items-center justify-center flex-shrink-0">
                2
              </span>
              <p className="font-body text-[12px] text-base-black">
                <strong>Icon not in library?</strong> Ask the user: &ldquo;I need [icon name] for
                [section].&rdquo;
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded bg-gray-400 text-white text-[10px] font-bold font-body flex items-center justify-center flex-shrink-0">
                3
              </span>
              <p className="font-body text-[12px] text-base-black">
                <strong>No answer yet?</strong> Place a labeled placeholder and flag it.
              </p>
            </div>
          </div>
          <p className="font-body text-[10px] text-secondary-600 mt-2">
            Never pull from Font Awesome, Flaticon, Google Images, etc. Never improvise a custom icon
            when a library icon exists. Never mix icon styles.
          </p>
        </div>

        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Where Icons Are Used
          </p>
          <div className="border border-gray-200 rounded-lg overflow-x-auto">
            <table className="w-full font-body text-[11px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-3 py-2 font-bold text-gray-600">Section</th>
                  <th className="text-left px-3 py-2 font-bold text-gray-600">Icons Needed</th>
                </tr>
              </thead>
              <tbody>
                {ICON_USAGE.map(([section, icons, optional], i) => (
                  <tr
                    key={section}
                    className={i < ICON_USAGE.length - 1 ? "border-b border-gray-100" : undefined}
                  >
                    <td
                      className={`px-3 py-2 ${
                        optional ? "text-yellow-800 font-semibold" : "text-gray-700"
                      }`}
                    >
                      {section}
                    </td>
                    <td className="px-3 py-2 text-gray-600">{icons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Missing Icon Workflow
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {MISSING_WORKFLOW.map(([title, body, done], i) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex flex-col gap-1"
              >
                <span
                  className={`w-5 h-5 rounded-full ${
                    done ? "bg-primary-600" : "bg-gray-700"
                  } text-white text-[10px] font-bold font-body flex items-center justify-center mb-1`}
                >
                  {i + 1}
                </span>
                <p className="font-body text-[11px] font-bold text-gray-700">{title}</p>
                <p className="font-body text-[10px] text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 flex flex-col gap-1.5">
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1">
            Design Notes
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Highlights grid icons: teal accent color inside soft tinted squares — apply same
            treatment to any new icon added later.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Keep icon sizes consistent per context — utility bar = small, trust-card = large.
          </p>
          <p className="font-body text-[11px] text-gray-600">
            • Placeholders must be obvious in internal reviews (never ship unnoticed) but neutral
            enough not to break the layout.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ── Mobile structure summary ─────────────────────────────────────────── */
const MOBILE_ORDER: { label: string; tone?: "primary" | "optional" }[] = [
  { label: "Top Contact Bar (Call / Text)" },
  { label: "Logo + Hamburger Menu" },
  { label: "Hero (image + tagline + CTA)" },
  { label: "Sticky Bottom Bar: Call / Text | Free Consult", tone: "primary" },
  { label: "Highlights (stacked cards) — if included", tone: "optional" },
  { label: "Step Section (1-2-3 stacked)" },
  { label: "Our Practice Video" },
  { label: "Brand Logos (2-col grid) — if included", tone: "optional" },
  { label: "Our Doctors (photo above text)" },
  { label: "Who We Help (stacked)" },
  { label: "Treatments (stacked)" },
  { label: "News & Media logos — if included", tone: "optional" },
  { label: "Instagram Slider (swipe)" },
  { label: "CTA Section" },
  { label: "Reviews (single-card slider)" },
  { label: "Locations (list above map)" },
  { label: "Footer" },
];

const MOBILE_RULES = [
  "One-column layout everywhere",
  "Zig-zag rows stack: image first, text second",
  "Hero tagline to one short line",
  "Sticky Call / Text + Free Consult bar at all times",
  "Large tap targets for phone, address, hours",
  "Map: tap-to-open (avoid heavy embedded map on load)",
];

export function MobileSummary() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-16">
      <WfLabel className="text-gray-500 mb-4 block">Mobile structure — summary</WfLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="font-body text-xs font-bold text-gray-700 mb-2">Section order</p>
          <div className="flex flex-col gap-1">
            {MOBILE_ORDER.map((m) => (
              <p
                key={m.label}
                className={`font-body text-[11px] ${
                  m.tone === "primary"
                    ? "text-primary-500 font-bold"
                    : m.tone === "optional"
                      ? "text-yellow-700"
                      : "text-gray-600"
                }`}
              >
                {m.label}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-body text-xs font-bold text-gray-700 mb-2">Mobile rules</p>
          <div className="flex flex-col gap-1.5">
            {MOBILE_RULES.map((r) => (
              <p key={r} className="font-body text-[11px] text-gray-600">
                {r}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
