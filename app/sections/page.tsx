import type { Metadata } from "next";
import Link from "next/link";
import {
  SectionCard,
  TokenLegend,
  HeroBanner,
  HeroPillNav,
  HighlightsGrid,
  TrustBadges,
  StepSection,
  OurPractice,
  OurDoctors,
  WhoWeHelp,
  HowWeHelp,
  InstagramSection,
  CtaSection,
  Reviews,
  LocationSection,
  FooterSection,
} from "@/components/ui/sections";

export const metadata: Metadata = {
  title: "Section Designs — HIP Style Guide",
  description:
    "Full rendered section designs adapted to the HIP design system, in homepage structure order, with the DS tokens each one uses.",
};

/** Shared by the notes — the source links these back to the icon library. */
function IconLibraryLink() {
  return (
    <Link href="/icons" className="font-semibold text-cta">
      icon library
    </Link>
  );
}

/** Flags a design that has no sections.html source. */
function NewDesign() {
  return (
    <>
      <strong>New design</strong> — built to the{" "}
      <Link href="/homepage" className="font-semibold text-cta">
        homepage structure reference
      </Link>
      , no sections.html source.{" "}
    </>
  );
}

/**
 * Sections 01–07 ported from design-system/sections.html; 05, 06, 08, 11 and 12 designed here.
 * Ordered and numbered to match the homepage structure reference rather than the source file.
 */
export default function SectionsPage() {
  return (
    // A light, uniform gutter instead of DocShell's ~1040px reading column — the cards below
    // hold live design previews, not text, so they render at essentially the full available
    // width (like the real site would) rather than being capped with a dead zone beside them.
    <div className="px-6 [@media(max-width:900px)]:px-4">
      <div className="mb-10">
        <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-widest text-cta">
          Creative Reference
        </p>
        <h1 className="mb-2 mt-0 font-header text-[32px] font-extrabold leading-tight text-base-black">
          Section Designs
        </h1>
        <p className="font-body text-[14px] text-gray-500">
          Full rendered section designs adapted to the HIP design system, in the same order as the
          homepage structure reference. All typography, colors, and icons match DS tokens. Use these
          as creative references when building pages.
        </p>
      </div>

      <TokenLegend />

      <SectionCard
        id="hero"
        num="01"
        name="Hero Banner"
        tags={["Full-bleed · Dark overlay · 2-button"]}
        note={
          <>
            <strong>DS tokens:</strong> Utility bar icons from <IconLibraryLink />. CTA pill:{" "}
            <code>var(--color-cta-500)</code>. Nav text: Figtree 700 15px / 1.5 / 0.4px. Hero H1:
            Figtree 600, clamp(44px–80px), line-height 1.1. Social dots: primary-500.
            Gradient overlay: <code>var(--color-navy)</code> at 70%. Hero image: pull from Google Drive →{" "}
            <strong>Hero Section</strong> folder.
          </>
        }
      >
        <HeroBanner />
      </SectionCard>

      <SectionCard
        id="hero2"
        num="01B"
        name="HERO BANNER"
        tags={["Pill Nav · Full-bleed · Centered text"]}
        note={
          <>
            <strong>DS tokens:</strong> Topbar: navy <code>#0e1f35</code>. Pill mainbar: white,{" "}
            <code>border-radius:100px 0 0 100px</code>, shadow, padding-left offset. Hero:
            full-bleed, <code>position:absolute top:40px</code> under nav. White strip right edge
            (Ward signature). Buttons: circular icon container + text. CTA:{" "}
            <code>var(--color-cta-500)</code>, secondary: <code>var(--color-primary-500)</code>.
            Fonts: Figtree 800.
          </>
        }
      >
        <HeroPillNav />
      </SectionCard>

      <SectionCard
        id="highlights"
        num="02"
        name="Highlights — Trust Badges Grid"
        tags={["Optional", "Gray bg · 4-col × 2 rows · Icon + text"]}
        note={
          <>
            <strong>DS tokens:</strong> Section bg: gray-100. Heading block: shared Text Container
            (centered, no button). Card bg: white / border gray-200. Icon bg: primary-50. Title:
            H6 (Figtree 700, 20/18/16) / textcolor-h2. Sub: Body2 (Inter, 18/16/14) /
            textcolor-body. Desktop 4-col on the DS grid gap. Icons from{" "}
            <IconLibraryLink /> — check first.
          </>
        }
      >
        <HighlightsGrid />
      </SectionCard>

      <SectionCard
        id="highlights2"
        num="02B"
        name="Highlights — Trust Badges Grid"
        tags={["Cream bg · 4-col × 2 rows · Icon + text"]}
        note={
          <>
            <strong>DS tokens:</strong> Built from the Figma <strong>Highlights</strong> frame.
            Container ladder 280 / 688 / 1240px — viewport minus the DS container padding (20 / 40 /
            100px). Section padding: 40 / 60 / 120px. Grid gap: 20 / 30 / 40px. Title:{" "}
            <strong>H6</strong> (Figtree 700, 16/18/20px, 0.5px tracking) / textcolor-h2. Sub:{" "}
            <strong>Body2</strong> (Inter 400, 14/16/18px) / textcolor-body. Card: base-white on a
            1px accent-200 border, square corners, no shadow. Icons: recolored to
            primary-500, 33px mobile / 48px tablet + desktop — check the <IconLibraryLink /> before
            adding more. Section ground accent-50 — the frame&apos;s cream/stone pair now resolves
            through the accent (Golden Amber) ramp.
          </>
        }
      >
        <TrustBadges />
      </SectionCard>

      <SectionCard
        id="steps"
        num="03"
        name="Step Section — Simple & Affordable"
        tags={["Dark bg · 2-col + 3 numbered cards"]}
        note={
          <>
            <strong>DS tokens:</strong> Section bg: base-black. Copy block: shared Text Container
            recolored for the dark ground (H2 white, body 65% white). CTA: Bold Fill button
            (accent). Step numeral: Figtree 800 72px / cta-500 at 18% opacity. Card bg: white 4%,
            title H6, body Body2. Image: 3:2, Google Drive →{" "}
            <strong>Step Section</strong> folder.
          </>
        }
      >
        <StepSection />
      </SectionCard>

      <SectionCard
        id="practice"
        num="04"
        name="Our Practice — Video"
        tags={["Light teal bg · 2-col · Rotating play badge"]}
        note={
          <>
            <strong>DS tokens:</strong> Section bg: primary-50. Copy block: shared Text Container.
            CTA: Corporate Arrow button (tertiary). Play ring: SVG textPath, cta-500 at 70%. Play
            button: cta-500 with orange glow. Video image: Google Drive →{" "}
            <strong>What Sets Us Apart Section</strong> folder.
          </>
        }
      >
        <OurPractice />
      </SectionCard>

      <SectionCard
        id="doctors"
        num="05"
        name="Our Doctors"
        tags={["White bg · Centered heading · Zig-zag rows"]}
        note={
          <>
            <NewDesign />
            <strong>DS tokens:</strong> Section bg: white. Heading block: shared Text Container
            (centered, no button). Credential pill: primary-50 bg / primary-200 border / cta text.
            Name: H3 (Figtree 800, 42/36/28). Bio: Body2 (Inter, 18/16/14) / textcolor-body.
            CTA: Clean Outline button, &ldquo;Meet Dr. &lt;last name&gt;&rdquo;. Photos: Google Drive →{" "}
            <strong>Doctor Section</strong> folder — professional but warm, doctors smiling and
            in-office. Keep bios to two sentences; full bios live on profile pages.
          </>
        }
      >
        <OurDoctors />
      </SectionCard>

      <SectionCard
        id="who-we-help"
        num="06"
        name="Who We Help — Kids / Teens / Adults"
        tags={["Light teal bg · Centered heading · Zig-zag rows"]}
        note={
          <>
            <NewDesign />
            <strong>DS tokens:</strong> Section bg: primary-50. Heading block: shared Text
            Container (centered, no button). Age pill: white bg / primary-200 border / cta text.
            Title: H3 (Figtree 800, 42/36/28). Body: Body2 (Inter, 18/16/14). Images: 3:2. CTA:
            Press Shadow button (Fun / Playful). Row divider: primary-100.
            Photography must clearly match the segment — a teen photo under &ldquo;Kids&rdquo; reads
            as a mistake. Each segment links to its own audience landing page. Images: Google Drive
            → <strong>Services or Who We Help Section</strong> folder.
          </>
        }
      >
        <WhoWeHelp />
      </SectionCard>

      <SectionCard
        id="how-we-help"
        num="07"
        name="How We Help — Treatments"
        tags={["White bg · Centered heading · Zig-zag rows"]}
        note={
          <>
            <strong>DS tokens:</strong> Heading block: shared Text Container (centered, no button).
            Treatment tag pill: primary-50 bg / primary-200 border / cta text. Title: H3 (Figtree
            800, 42/36/28). Body: Body2 (Inter, 18/16/14). Images: 3:2. CTA: Clean Outline button,
            &ldquo;Explore &lt;treatment&gt;&rdquo;.
            Images: Google Drive → <strong>How we help Section</strong> folder (1 image per
            treatment, match image to treatment).
          </>
        }
      >
        <HowWeHelp />
      </SectionCard>

      <SectionCard
        id="instagram"
        num="08"
        name="Instagram Section"
        tags={["White bg · Horizontal scroll · Square tiles"]}
        note={
          <>
            <NewDesign />
            <strong>DS tokens:</strong> Section bg: white. Follow button: primary-500 with 30% teal
            shadow — the one CTA on the page that is deliberately <em>not</em> orange, so it never
            competes with Request Free Consult. Avatar ring uses Instagram&apos;s own brand gradient,
            the single non-DS colour here. Tiles: 1:1, 4–5 visible on desktop, scroll-snap. Post
            themes: smile reveals, team culture, care tips, events, before/after. Images: Google
            Drive → <strong>Instagram Section</strong> folder.
          </>
        }
      >
        <InstagramSection />
      </SectionCard>

      <SectionCard
        id="cta"
        num="09"
        name="CTA Section — Get Started"
        tags={["Orange-tinted bg · Image left · 1 CTA only"]}
        note={
          <>
            <strong>DS tokens:</strong> Section bg: cta-50 → cta-100 gradient. Copy block: shared
            Text Container. CTA: Vibrant Sweep button retargeted to the cta ramp (orange) / shadow
            cta-500 at 35%. Image: 3:2. One CTA only — no competing links. Image:
            Google Drive → <strong>CTA Section</strong> folder.
          </>
        }
      >
        <CtaSection />
      </SectionCard>

      <SectionCard
        id="reviews"
        num="10"
        name="5-Star Care — Reviews"
        tags={["Dark bg · 2-col top · Card slider bottom"]}
        note={
          <>
            <strong>DS tokens:</strong> Section bg: base-black. Copy block: shared Text Container
            recolored for the dark ground. Review card bg: white 5% / border white 10%, quote
            Body2. Stars: fill cta-500. Reviewer name: Inter 700 / white 45% / uppercase. Slider
            arrows: white 20% border. CTA: Bold Fill button, &ldquo;More Reviews&rdquo;. Image:
            3:2, Google Drive → <strong>Testimonial Section</strong> folder.
          </>
        }
      >
        <Reviews />
      </SectionCard>

      <SectionCard
        id="locations"
        num="11"
        name="Location Section"
        tags={["White bg · 2-col intro · List + map"]}
        note={
          <>
            <NewDesign />
            <strong>DS tokens:</strong> Section bg: white. Copy block: shared Text Container.
            Phone: H6 (Figtree 800) / cta-500 — phone numbers and addresses must be clickable
            links in production. Panels: gray-50 bg / gray-200 border, headings Subtitle (Figtree
            700, 24/22/18), items Body2, gaps on the DS tokens. CTA: Corporate Arrow button, &ldquo;View All Locations&rdquo;. Image: 3:2.
            Map: primary-50 → primary-100, primary-200 border, cta-500 pins. Real build needs pin pop-up cards (photo, address, &ldquo;Visit This
            Location&rdquo;) and per-weekday hours. Image: Google Drive →{" "}
            <strong>Location Section</strong> folder.
          </>
        }
      >
        <LocationSection />
      </SectionCard>

      <SectionCard
        id="footer"
        num="12"
        name="Footer Section"
        tags={["Navy bg · Logo + CTA · 3 columns · Bottom bar"]}
        note={
          <>
            <NewDesign />
            <strong>DS tokens:</strong> Section bg: navy <code>#0e1f35</code>. Column labels:
            primary-400. Links: white 60%, white on hover. Repeat CTA: Corporate Arrow button
            retargeted to the cta ramp — last-chance conversion, so it stays orange. Gaps on the
            DS grid/heading tokens. HIPAA compliance links are required: Privacy Policy,
            Accessibility Statement, Notice of Privacy Practices. The two round widgets are the
            accessibility tool (bottom-left) and chat bubble (bottom-right); they are fixed to the
            viewport in production, shown inline here.
          </>
        }
      >
        <FooterSection />
      </SectionCard>
    </div>
  );
}
