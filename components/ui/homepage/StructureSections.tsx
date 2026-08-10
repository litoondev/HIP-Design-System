import {
  ArrowRight,
  ChevronDown,
  MobileNote,
  Section,
  WfBlock,
  WfHeading,
  WfLabel,
  WfPlaceholder,
  ZigZagRow,
} from "./Wireframe";
import { Typography, typographyClass } from "@/components/ui/typography/Typography";

/**
 * Sections 01–16 — the rendered homepage structure.
 * Ported 1:1 from design-system/homepage.html, same order and copy.
 */

/* ── 01 · Top Utility Bar ─────────────────────────────────────────────── */
export function TopUtilityBar() {
  const social = ["FB", "IG", "X", "YT", "TT"];
  const utility = ["Payment Calculator", "Referral", "Portal", "Virtual Consult"];
  return (
    <Section
      id="top-bar"
      number="01"
      title="Top Utility Bar"
      meta="Dark navy · 40px tall · Sticky"
    >
      <div className="bg-navy px-6 py-3 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <WfLabel className="text-gray-400 mr-1">Social:</WfLabel>
          {social.map((s) => (
            <WfBlock
              key={s}
              className={typographyClass("tooltip", "border-gray-500 text-gray-400 px-2 py-0.5")}
            >
              {s}
            </WfBlock>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <WfLabel className="text-gray-400 mr-1">Utility:</WfLabel>
          <WfBlock className={typographyClass("tooltip", "border-cta-400 text-cta-400 px-2 py-0.5 font-bold")}>
            Call / Text
          </WfBlock>
          {utility.map((u) => (
            <WfBlock
              key={u}
              className={typographyClass("tooltip", "border-gray-500 text-gray-400 px-2 py-0.5")}
            >
              {u}
            </WfBlock>
          ))}
        </div>
      </div>
      <MobileNote>
        Mobile: collapse to <strong>Call / Text</strong> only
      </MobileNote>
    </Section>
  );
}

/* ── 02 · Main Navigation ─────────────────────────────────────────────── */
export function MainNavigation() {
  const items = ["Our Practice", "Services", "Patient Resources", "Contact Us"];
  return (
    <Section
      id="navigation"
      number="02"
      title="Main Navigation"
      meta="White bg · 80px tall · Sticky below top bar"
    >
      <div className="bg-white px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
        <WfBlock className={typographyClass("caption", "border-primary-400 text-primary-500 px-5 py-2 font-header font-extrabold")}>
          LOGO
        </WfBlock>
        <div className="flex items-center gap-1 flex-wrap">
          {items.map((item) => (
            <span
              key={item}
              className={typographyClass("caption", "text-gray-700 px-3 py-2 flex items-center gap-1")}
            >
              {item} <ChevronDown />
            </span>
          ))}
        </div>
        <Typography variant="caption" as="div" className="bg-cta-500 text-white font-bold px-6 py-3 rounded-full">
          Free Consult
        </Typography>
      </div>
      <MobileNote>
        Mobile: <strong>Logo + Hamburger</strong> · Sticky bottom bar:{" "}
        <strong>Call / Text | Free Consult</strong>
      </MobileNote>
    </Section>
  );
}

/* ── 03 · Hero Banner ─────────────────────────────────────────────────── */
export function HeroBanner() {
  return (
    <Section
      id="hero"
      number="03"
      title="Hero Banner"
      meta="Full-width · ~600–700px tall · Image bg"
      caption="Minimal: image + tagline + 1 CTA. No paragraph. Warm authentic photography — real patients, not stock."
    >
      <div className="relative bg-gray-300 h-72 flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <WfLabel className="text-gray-500">
            Full-width hero image — real patient smiles / team photo
          </WfLabel>
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center gap-5">
          <WfBlock className="border-white/60 text-white px-8 py-3">
            <Typography variant="header5" as="p" className="font-extrabold">
              &ldquo;Smiles That Change Lives&rdquo;
            </Typography>
            <WfLabel className="text-white/70 mt-1 block">
              Practice tagline — oversized · bold · high-contrast
            </WfLabel>
          </WfBlock>
          <Typography variant="caption" as="div" className="bg-cta-500 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2">
            Request Free Consult
            <ArrowRight className="w-4 h-4" />
          </Typography>
        </div>
      </div>
    </Section>
  );
}

/* ── 04 · Highlights (optional) ───────────────────────────────────────── */
const HIGHLIGHTS = [
  ["Local", "Owned & Operated"],
  ["13 Locations", "For Your Convenience"],
  ["For Life", "Treatment + Whitening"],
  ["0% Financing", "From $99/Month"],
  ["Flexible Hours", "Evenings & Weekends"],
  ["20,000+ People", "Helped Since 1978"],
  ["Same-Day", "Consults & Braces"],
  ["24-Hour", "Emergency Line"],
];

export function Highlights() {
  return (
    <Section
      id="highlights"
      number="04"
      title="Highlights — Trust Badges Grid"
      meta="After Hero · White cards on light-gray bg"
      optional
      tone="optional"
      caption="Desktop: 4 per row × 2 rows · Tablet: 2 per row · Mobile: 1–2 per row · Teal icons in soft tinted squares."
    >
      <div className="bg-gray-100 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {HIGHLIGHTS.map(([title, sub]) => (
            <div
              key={title}
              className="bg-white rounded-lg p-3 flex items-start gap-2 border border-gray-200"
            >
              <div className="w-8 h-8 rounded bg-primary-100 flex-shrink-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded bg-primary-400" />
              </div>
              <div>
                <Typography variant="tooltip" as="p" className="font-bold text-base-black">
                  {title}
                </Typography>
                <Typography variant="tooltip" as="p" className="text-gray-500 mt-0.5">{sub}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 05 · Step Section ────────────────────────────────────────────────── */
const STEPS = [
  ["1", "Request Free Consult", "Short description of step one."],
  ["2", "Select Low Monthly Payment", "Short description of step two."],
  ["3", "Sit Back, Relax & Get Started", "Short description of step three."],
];

export function StepSection() {
  return (
    <Section
      id="steps"
      number="05"
      title="Step Section — Simple & Affordable"
      meta="White bg · 2-col top + 3-step row"
      caption="PreHeader in orange · Oversized bold numerals · Dark/black button here to contrast nav's orange CTA."
    >
      <div className="bg-white p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <WfBlock className="border-gray-300 p-4 flex flex-col gap-2">
            <Typography variant="tooltip" as="p" className="font-bold uppercase text-cta-500">
              SIMPLE &amp; AFFORDABLE
            </Typography>
            <Typography variant="body2" as="p" className="font-extrabold text-base-black">Upgrade Your Smile</Typography>
            <Typography variant="tooltip" as="p" className="text-gray-500">
              Short intro about how easy and affordable treatment is. Two to three sentences max.
            </Typography>
            <Typography variant="tooltip" as="div" className="bg-base-black text-white font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 self-start mt-1">
              Request Free Consult
              <ArrowRight />
            </Typography>
          </WfBlock>
          <WfPlaceholder
            label="Section image"
            className="border-gray-300 bg-gray-100 h-40"
            labelClassName="text-gray-400"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {STEPS.map(([n, title, desc]) => (
            <WfBlock key={n} className="border-gray-300 p-4 flex flex-col gap-1">
              <Typography variant="header4" as="p" className="font-extrabold text-primary-200">{n}</Typography>
              <Typography variant="caption" as="p" className="font-bold text-base-black">{title}</Typography>
              <Typography variant="tooltip" as="p" className="text-gray-500">{desc}</Typography>
            </WfBlock>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 06 · Our Practice (video) ────────────────────────────────────────── */
export function OurPractice() {
  return (
    <Section
      id="our-practice"
      number="06"
      title="Our Practice — Video"
      meta="Light bg · 2-col · Video left · Text right"
      caption="Circular rotating-text play badge is the signature element. Button links to About / Our Practice page."
    >
      <div className="bg-primary-50 p-6">
        <div className="grid grid-cols-2 gap-4 items-center">
          <WfBlock className="border-primary-300 bg-primary-100 h-48 flex flex-col items-center justify-center gap-3 relative">
            <div className="w-16 h-16 rounded-full border-2 border-cta-500 flex items-center justify-center bg-white/80">
              <svg className="w-7 h-7 text-cta-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <WfLabel className="text-primary-500">Rotating text badge around play button</WfLabel>
            <WfLabel className="text-primary-400">Video thumbnail</WfLabel>
          </WfBlock>
          <div className="flex flex-col gap-2">
            <Typography variant="tooltip" as="p" className="font-bold uppercase text-cta-500">
              OUR PRACTICE
            </Typography>
            <Typography variant="h6" as="p" className="font-extrabold text-base-black">What Sets Us Apart</Typography>
            <Typography variant="tooltip" as="p" className="text-gray-500">
              2–3 sentences on culture, technology, and patient experience. Keep it short — the
              video does the selling.
            </Typography>
            <Typography variant="tooltip" as="div" className="border-2 border-primary-500 text-primary-500 font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 self-start mt-1">
              Learn More
              <ArrowRight />
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── 07 · Brand / Credential Logos (optional) ─────────────────────────── */
const LOGO_ROWS = [
  ["ABO", "ADA", "Damon Smile", "AAO"],
  ["Spark", "iTero", "Invisalign", "Top Rated Ortho"],
];

export function BrandLogos() {
  return (
    <Section
      id="brand-logos"
      number="07"
      title="Brand / Credential Logos"
      meta="After Our Practice · 2 rows × 4 logos"
      optional
      tone="optional"
      caption="Grayscale / muted treatment · Mix credentials (ABO/ADA/AAO) with tech brands (Invisalign/iTero/Spark/Damon)."
    >
      <div className="bg-white p-6">
        <div className="flex flex-col gap-3">
          {LOGO_ROWS.map((row, i) => (
            <div key={i} className="grid grid-cols-4 gap-3">
              {row.map((logo) => (
                <WfPlaceholder
                  key={logo}
                  label={logo}
                  className="border-gray-300 bg-gray-50 h-12"
                  labelClassName="text-gray-400"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 08 · Our Doctors ─────────────────────────────────────────────────── */
function DoctorText() {
  return (
    <WfBlock className="border-gray-300 p-3 flex flex-col gap-1.5">
      <Typography variant="caption" as="p" className="font-bold text-base-black">Dr. [Name]</Typography>
      <Typography variant="tooltip" as="p" className="text-gray-500">
        Short bio — 2–3 lines. Full bio lives on doctor profile page.
      </Typography>
      <Typography variant="tooltip" as="span" className="font-bold text-primary-500 flex items-center gap-1">
        Learn More <ArrowRight />
      </Typography>
    </WfBlock>
  );
}

export function OurDoctors() {
  const photo = (
    <WfPlaceholder
      label="Doctor photo"
      className="border-gray-300 bg-gray-100 h-28"
      labelClassName="text-gray-400"
    />
  );
  return (
    <Section
      id="doctors"
      number="08"
      title="Our Doctors"
      meta="White bg · Centered heading + alternating zig-zag rows"
      caption="Professional but warm photos — doctors smiling, in-office. Keep bios short; full bios live on profile pages."
    >
      <div className="bg-white p-6 flex flex-col gap-4">
        <WfHeading
          preheader="OUR ORTHODONTISTS"
          title="We Love Serving Smiles"
          intro="Intro paragraph — 1–2 lines"
        />
        <ZigZagRow text={<DoctorText />} image={photo} />
        <ZigZagRow reversed text={<DoctorText />} image={photo} />
        <WfLabel className="text-gray-400 text-center block">
          ↕ Pattern repeats for each doctor (4 in master design). Alternate image side every row.
        </WfLabel>
      </div>
    </Section>
  );
}
