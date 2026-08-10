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
import { Typography } from "@/components/ui/typography/Typography";

export const metadata: Metadata = {
  title: "Section Designs — HIP Style Guide",
  description:
    "Full rendered section designs adapted to the HIP design system, in homepage structure order, with the DS tokens each one uses.",
};

/** Shared by the notes — the source links these back to the icon library. */
function IconLibraryLink() {
  return (
    <Link href="/icons" className="font-semibold text-textcolor-link">
      icon library
    </Link>
  );
}

/** Flags a design that has no sections.html source. */
function NewDesign() {
  return (
    <>
      <strong>New design</strong> — built to the{" "}
      <Link href="/homepage" className="font-semibold text-textcolor-link">
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
    <>
      <div className="mb-10">
        <Typography variant="preHeader" as="p" className="mb-1 text-cta">
          Creative Reference
        </Typography>
        <Typography variant="header4" as="h1" className="mb-2 mt-0 text-base-black">
          Section Designs
        </Typography>
        <Typography variant="caption" as="p" className="text-gray-500">
          Full rendered section designs adapted to the HIP design system, in the same order as the
          homepage structure reference. All typography, colors, and icons match DS tokens. Use these
          as creative references when building pages.
        </Typography>
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
            <strong>DS tokens:</strong> Section bg: gray-100 #f5f5f5. Card bg: white / border
            gray-200. Icon bg: primary-50. Icon color: primary-500 (teal). Title: Figtree 800 14px.
            Sub: Inter 400 12px / gray-500. Desktop 4-col, tablet 2-col, mobile 1–2 col. Icons from{" "}
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
            1px stone <code>#d2c3af</code> border, square corners, no shadow. Icons: recolored to
            primary-500, 33px mobile / 48px tablet + desktop — check the <IconLibraryLink /> before
            adding more. Section ground <code>#f7f4f0</code> and the stone border are the frame&apos;s
            own pair and have no DS equivalent yet.
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
            <strong>DS tokens:</strong> Section bg: base-black #000000. Eyebrow: Inter 700 11px /
            2px tracking / uppercase / cta-500. H2: Figtree 800, clamp(28–48px). Step numeral:
            Figtree 800 72px / cta-500 at 18% opacity. Card bg: white 4%. Image: Google Drive →{" "}
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
            <strong>DS tokens:</strong> Section bg: primary-50. Play ring: SVG textPath,
            cta-500 at 70%. Play button: cta-500 with 35% orange glow. Button border: primary-500.
            H2: Figtree 800, clamp(26–40px). Video image: Google Drive →{" "}
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
            <strong>DS tokens:</strong> Section bg: white. Eyebrow: cta-500. Credential pill:
            primary-50 bg / primary-200 border / primary-500 text. Name: Figtree 800 26px. Bio:
            Inter 14px / 1.7 / gray-600. Link: primary-500. Photos: Google Drive →{" "}
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
            <strong>DS tokens:</strong> Section bg: primary-50. Age pill: white bg /
            primary-200 border / primary-500 text. H3: Figtree 800 24px. Row divider: primary-100.
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
            <strong>DS tokens:</strong> Eyebrow: cta-500. Treatment tag pill: primary-50 bg /
            primary-200 border / primary-500 text. H3: Figtree 800 22px. Arrow link: primary-500.
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
            <strong>DS tokens:</strong> Section bg: cta-50 → cta-100 gradient. CTA button: cta-500 /
            Figtree 800 / shadow cta-500 at 35%. One CTA only — no competing links. Image:
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
            <strong>DS tokens:</strong> Section bg: base-black #000000. Review card bg: white 5% /
            border white 10%. Google G: real Google colors (SVG). Stars: fill cta-500. Reviewer
            name: Inter 700 / white 45% / uppercase. Slider arrows: white 20% border. More Reviews
            link: primary-500. Image: Google Drive → <strong>Testimonial Section</strong> folder.
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
            <strong>DS tokens:</strong> Section bg: white. Eyebrow: cta-500. Phone: Figtree 800 17px
            / cta-500 — phone numbers and addresses must be clickable links in production. Panels:
            gray-50 bg / gray-200 border. Map: primary-50 → primary-100, primary-200 border, cta-500
            pins. Real build needs pin pop-up cards (photo, address, &ldquo;Visit This
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
            primary-400. Links: white 60%, white on hover. Repeat CTA: cta-500 pill — last-chance
            conversion, so it stays orange. HIPAA compliance links are required: Privacy Policy,
            Accessibility Statement, Notice of Privacy Practices. The two round widgets are the
            accessibility tool (bottom-left) and chat bubble (bottom-right); they are fixed to the
            viewport in production, shown inline here.
          </>
        }
      >
        <FooterSection />
      </SectionCard>
    </>
  );
}
