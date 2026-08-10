import {
  ArrowRight,
  Section,
  WfBlock,
  WfHeading,
  WfLabel,
  WfPlaceholder,
  ZigZagRow,
} from "./Wireframe";
import { Typography, typographyClass } from "@/components/ui/typography/Typography";

/**
 * Sections 09–16 — continuation of the rendered homepage structure.
 * Ported 1:1 from design-system/homepage.html.
 */

/* ── 09 · Who We Help ─────────────────────────────────────────────────── */
const SEGMENTS = [
  { name: "Kids", photo: "Child patient photo" },
  { name: "Teens", photo: "Teen patient photo" },
  { name: "Adults", photo: "Adult patient photo" },
];

export function WhoWeHelp() {
  return (
    <Section
      id="who-we-help"
      number="09"
      title="Who We Help"
      meta="Light bg · Centered heading + alternating zig-zag rows · Kids / Teens / Adults"
      caption="Photography clearly matches the segment. Each segment links to its own audience landing page."
    >
      <div className="bg-primary-50 p-6 flex flex-col gap-4">
        <WfHeading
          preheader="WHO WE HELP"
          title="Orthodontics Is For Everyone"
          intro="Short paragraph."
          borderClassName="border-primary-100"
        />
        {SEGMENTS.map((seg, i) => (
          <ZigZagRow
            key={seg.name}
            reversed={i % 2 === 1}
            text={
              <WfBlock className="border-primary-300 p-3 flex flex-col gap-1.5">
                <Typography variant="caption" as="p" className="font-bold text-base-black">{seg.name}</Typography>
                <Typography variant="tooltip" as="p" className="text-gray-500">
                  Benefit-led copy — what this age group worries about, answered.
                </Typography>
                <Typography variant="tooltip" as="span" className="font-bold text-primary-500 flex items-center gap-1">
                  Learn More <ArrowRight />
                </Typography>
              </WfBlock>
            }
            image={
              <WfPlaceholder
                label={seg.photo}
                className="border-primary-300 bg-primary-100 h-24"
                labelClassName="text-primary-400"
              />
            }
          />
        ))}
      </div>
    </Section>
  );
}

/* ── 10 · How We Help (Treatments) ────────────────────────────────────── */
const TREATMENTS = [
  "Metal & Ceramic Braces",
  "Invisalign / Clear Aligners",
  "Damon System Braces",
  "Retainers & Whitening",
];

export function Treatments() {
  return (
    <Section
      id="treatments"
      number="10"
      title="How We Help — Treatments"
      meta="White bg · Centered heading + 4 alternating zig-zag rows"
      caption="Same zig-zag rhythm as Doctors and Who We Help. Each row links to a dedicated treatment page."
    >
      <div className="bg-white p-6 flex flex-col gap-4">
        <WfHeading
          preheader="HOW WE HELP"
          title="Explore Our Treatments"
          intro="Short paragraph."
        />
        <div className="flex flex-col gap-3">
          {TREATMENTS.map((name, i) => (
            <ZigZagRow
              key={name}
              reversed={i % 2 === 1}
              text={
                <WfBlock className="border-gray-300 p-3 flex flex-col gap-1">
                  <Typography variant="caption" as="p" className="font-bold">{name}</Typography>
                  <Typography variant="tooltip" as="p" className="text-gray-500">2–3 lines max.</Typography>
                  <Typography variant="tooltip" as="span" className="font-bold text-primary-500">
                    Learn More →
                  </Typography>
                </WfBlock>
              }
              image={
                <WfPlaceholder
                  label="Treatment image"
                  className="border-gray-300 bg-gray-100 h-20"
                  labelClassName="text-gray-400"
                />
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 11 · News & Media (optional) ─────────────────────────────────────── */
export function NewsMedia() {
  return (
    <Section
      id="news-media"
      number="11"
      title="News &amp; Media — We've Been Featured In…"
      meta="After Treatments · Real press only"
      optional
      tone="optional"
      caption="Only real press features — skip entirely if fewer than 3 genuine features. Muted single-color logos, one row."
    >
      <div className="bg-white p-6">
        <div className="text-center mb-4">
          <Typography variant="tooltip" as="p" className="font-bold uppercase text-cta-500">
            NEWS &amp; MEDIA
          </Typography>
          <Typography variant="h6" as="p" className="font-extrabold text-base-black mt-1">
            We&rsquo;ve Been Featured In…
          </Typography>
          <Typography variant="tooltip" as="p" className="text-gray-500 mt-1">Short paragraph — 1–2 lines.</Typography>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          {Array.from({ length: 5 }, (_, i) => (
            <WfPlaceholder
              key={i}
              label="Press logo"
              className="border-gray-300 bg-gray-50 px-6 h-10"
              labelClassName="text-gray-400"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 12 · Instagram Slider ────────────────────────────────────────────── */
export function InstagramSlider() {
  return (
    <Section
      id="instagram"
      number="12"
      title="Instagram Slider"
      meta="Horizontal scroll · 4–5 posts visible · Square tiles"
      caption="Smile reveals · Team culture · Care tips · Events · Before/after. Square posts — 4–5 visible on desktop."
    >
      <div className="bg-white p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              </svg>
            </div>
            <Typography variant="tooltip" as="span" className="font-bold text-gray-700">@practicehandle</Typography>
          </div>
          <Typography variant="tooltip" as="div" className="border border-gray-300 text-textcolor-body px-3 py-1 rounded-full">
            Follow
          </Typography>
        </div>
        <div className="flex gap-2 overflow-hidden">
          {Array.from({ length: 5 }, (_, i) => (
            <WfPlaceholder
              key={i}
              label="Post"
              className="border-gray-300 bg-gray-100 w-32 h-32 flex-shrink-0"
              labelClassName="text-gray-400 text-center"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 13 · CTA Section ─────────────────────────────────────────────────── */
export function CtaSection() {
  return (
    <Section
      id="cta-section"
      number="13"
      title="CTA Section — Get Started"
      meta="Orange-tinted bg · 2-col · Image left · Text right"
      caption='Soft orange background visually signals "action time." One CTA only — no competing links.'
    >
      <div className="bg-accent-50 p-6">
        <div className="grid grid-cols-2 gap-4 items-center">
          <WfPlaceholder
            label="Section image"
            className="border-cta-300 bg-accent-100 h-40"
            labelClassName="text-cta-400"
          />
          <div className="flex flex-col gap-2">
            <Typography variant="tooltip" as="p" className="font-bold uppercase text-cta-500">
              REQUEST APPOINTMENT
            </Typography>
            <Typography variant="h6" as="p" className="font-extrabold text-base-black">
              Get Started On Your New Smile Today
            </Typography>
            <Typography variant="tooltip" as="p" className="text-textcolor-body">
              Short paragraph. Outcome-focused headline — &ldquo;new smile&rdquo;, not
              service-focused.
            </Typography>
            <Typography variant="caption" as="div" className="bg-cta-500 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 self-start mt-1">
              Request Free Consult
              <ArrowRight className="w-4 h-4" />
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── 14 · 5-Star Reviews ──────────────────────────────────────────────── */
function ReviewCard({ name }: { name: string }) {
  return (
    <WfBlock className="border-gray-300 bg-gray-50 p-3 flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center">
          <Typography variant="tooltip" as="span" className="font-bold text-white">G</Typography>
        </div>
        <Typography variant="tooltip" as="span" className="text-cta-500">★★★★★</Typography>
      </div>
      <Typography variant="tooltip" as="p" className="text-textcolor-body italic">
        &ldquo;Review excerpt — truncated to 2–3 lines…&rdquo;
      </Typography>
      <div className="flex items-center justify-between">
        <Typography variant="tooltip" as="span" className="font-bold text-gray-500">{name}</Typography>
        <Typography variant="tooltip" as="span" className="text-primary-500 font-bold">Read More</Typography>
      </div>
    </WfBlock>
  );
}

export function Reviews() {
  return (
    <Section
      id="reviews"
      number="14"
      title="5-Star Care — Reviews"
      meta="White bg · 2-col top · Review cards bottom · Slider"
      caption='Google "G" logo on each card. Soft tinted card bg. Short quotes with Read More expansion. Slider rotates many reviews.'
    >
      <div className="bg-white p-6 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 items-center pb-4 border-b border-gray-100">
          <div className="flex flex-col gap-1.5">
            <Typography variant="tooltip" as="p" className="font-bold uppercase text-cta-500">
              OUR REVIEWS
            </Typography>
            <Typography variant="h6" as="p" className="font-extrabold text-base-black">
              Experience 5-Star Care
            </Typography>
            <Typography variant="tooltip" as="p" className="text-gray-500">
              Paragraph — 2–3 lines on patient satisfaction.
            </Typography>
          </div>
          <WfPlaceholder
            label="Section image"
            className="border-gray-300 bg-gray-100 h-28"
            labelClassName="text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <ReviewCard name="JOHN S." />
            <ReviewCard name="SARAH M." />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <WfBlock className={typographyClass("tooltip", "border-gray-300 w-7 h-7 flex items-center justify-center text-gray-500")}>
                ‹
              </WfBlock>
              <WfBlock className={typographyClass("tooltip", "border-gray-300 w-7 h-7 flex items-center justify-center text-gray-500")}>
                ›
              </WfBlock>
            </div>
            <Typography variant="tooltip" as="div" className="border border-primary-400 text-primary-500 font-bold px-3 py-1 rounded-full">
              More Reviews →
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── 15 · Locations ───────────────────────────────────────────────────── */
export function Locations() {
  return (
    <Section
      id="locations"
      number="15"
      title="Locations"
      meta="White bg · 2-col top + 2-col bottom (list + map)"
      caption='Map pins + pop-up card (photo, address, "Visit This Location" button). Phone + addresses clickable. Hours per weekday.'
    >
      <div className="bg-white p-6 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 items-center pb-4 border-b border-gray-100">
          <WfPlaceholder
            label="Office exterior / interior photo"
            className="border-gray-300 bg-gray-100 h-28"
            labelClassName="text-gray-400"
          />
          <div className="flex flex-col gap-1.5">
            <Typography variant="tooltip" as="p" className="font-bold uppercase text-cta-500">
              OUR LOCATIONS
            </Typography>
            <Typography variant="h6" as="p" className="font-extrabold text-base-black">Come Visit Us</Typography>
            <Typography variant="tooltip" as="p" className="text-gray-500">Short paragraph.</Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <WfBlock className="border-gray-300 p-3">
              <WfLabel className="text-gray-500 mb-1 block">LOCATIONS</WfLabel>
              <Typography variant="tooltip" as="p" className="text-textcolor-body">
                Location Name · 123 Main St, City, ST 00000
              </Typography>
              <Typography variant="tooltip" as="p" className="text-textcolor-body">
                Location Name · 456 Oak Ave, City, ST 00000
              </Typography>
              <Typography variant="tooltip" as="p" className="text-primary-500 mt-1">+ 11 more locations →</Typography>
            </WfBlock>
            <WfBlock className="border-gray-300 p-3">
              <WfLabel className="text-gray-500 mb-1 block">CONTACT US</WfLabel>
              <Typography variant="tooltip" as="p" className="text-textcolor-body">(XXX) XXX-XXXX · Call / Text</Typography>
            </WfBlock>
            <WfBlock className="border-gray-300 p-3">
              <WfLabel className="text-gray-500 mb-1 block">CONTACT HOURS</WfLabel>
              <Typography variant="tooltip" as="p" className="text-textcolor-body">Mon–Fri 8am–6pm</Typography>
              <Typography variant="tooltip" as="p" className="text-textcolor-body">Sat 9am–3pm</Typography>
            </WfBlock>
          </div>
          <WfBlock className="border-gray-300 bg-gray-100 h-48 flex flex-col items-center justify-center gap-2">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <WfLabel className="text-gray-400 text-center">
              Interactive map
              <br />
              Location pins + pop-up cards
            </WfLabel>
          </WfBlock>
        </div>
      </div>
    </Section>
  );
}

/* ── 16 · Footer ──────────────────────────────────────────────────────── */
const FOOTER_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];
const FOOTER_LEGAL = [
  "© 2026 Practice Name",
  "Sitemap",
  "Privacy Policy",
  "Accessibility Statement",
  "Notice of Privacy Practices",
];

export function Footer() {
  return (
    <Section
      id="footer"
      number="16"
      title="Footer"
      meta="Dark navy bg · Logo + CTA · 3 columns · Bottom bar"
      className="mb-10"
      caption="Repeat Free Consult CTA — last-chance conversion. HIPAA compliance links required. Floating: accessibility tool (bottom-left) + chat bubble (bottom-right)."
    >
      <div className="bg-navy p-6 flex flex-col gap-5">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-4 flex-wrap">
          <WfBlock className={typographyClass("caption", "border-primary-400 text-primary-300 px-4 py-2 font-header font-extrabold")}>
            LOGO
          </WfBlock>
          <Typography variant="caption" as="div" className="bg-cta-500 text-white font-bold px-5 py-2.5 rounded-full">
            Request Free Consult
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <WfLabel className="text-primary-300 mb-2 block">QUICK LINKS</WfLabel>
            <div className="flex flex-col gap-1.5">
              {FOOTER_LINKS.map((l) => (
                <Typography key={l} variant="tooltip" as="p" className="text-white/60">
                  {l}
                </Typography>
              ))}
            </div>
          </div>
          <div>
            <WfLabel className="text-primary-300 mb-2 block">CONTACT US</WfLabel>
            <div className="flex flex-col gap-1.5">
              <Typography variant="tooltip" as="p" className="text-white/60">City, ST (per location)</Typography>
              <Typography variant="tooltip" as="p" className="text-cta-400 font-bold">
                (XXX) XXX-XXXX · Call / Text
              </Typography>
            </div>
          </div>
          <div>
            <WfLabel className="text-primary-300 mb-2 block">FOLLOW US</WfLabel>
            <div className="flex gap-2 mt-1">
              {["FB", "IG", "X", "YT", "TT"].map((s) => (
                <div
                  key={s}
                  className="w-7 h-7 rounded bg-white/10 flex items-center justify-center"
                >
                  <WfLabel className="text-white/50">{s}</WfLabel>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {FOOTER_LEGAL.map((l) => (
              <Typography key={l} variant="tooltip" as="p" className="text-white/40">
                {l}
              </Typography>
            ))}
          </div>
          <Typography variant="tooltip" as="p" className="text-white/30 mt-1">
            Orthodontic Marketing &amp; Web Design by [Agency]
          </Typography>
        </div>
      </div>
    </Section>
  );
}
