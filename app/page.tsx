import { ColorPalette, ColorAccessibilityRamps, ResponsiveSpacingTable } from "@/components/ui/foundations";
import { TypographySection } from "@/components/ui/typography";
import { Typography } from "@/components/ui/typography/Typography";
import { InputField, Checkbox, Radio, ChooseFile, UploadDropzone } from "@/components/ui/forms";
import { PrimaryNav, MegaMenu } from "@/components/ui/nav";
import {
  ServiceCard,
  TeamCard,
  SingleDrCard,
  ProductCard,
  EventCard,
  TechnologyCard,
  ArchiveBlogCard,
} from "@/components/ui/cards";
import { LocationPin, LocationList, LocationPopup, FaqAccordion, Pagination, Tabs } from "@/components/ui/misc";
import { TEXT_CONTAINER_CATEGORY } from "@/components/ui/sections";
import TextContainerShowcase from "@/components/ui/docs/TextContainerShowcase";

/**
 * Every section on this page opens with the same three type roles, now expressed as variants:
 * group eyebrow → preHeader · page title → header4 (as h1, one per section) · intro → body1.
 */

export default function Home() {
  return (
    <>
      {/* ===== Color Palette ===== */}
      <section id="colors" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Foundations
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Color Palette
        </Typography>
        <Typography variant="body1" className="max-w-[640px] mt-0 mb-8">
          Base brand colors used across the HIP web design system, pulled directly from the Figma source file.
        </Typography>
        <ColorPalette />
      </section>

      {/* ===== Typography ===== */}
      <section id="typography" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Foundations
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Typography
        </Typography>
        <Typography variant="body1" className="max-w-[640px] mt-0 mb-8">
          Full type scale — Figtree for headers, Inter for body copy — exactly as defined in the Figma Style Guide.
        </Typography>
        <TypographySection />
      </section>

      {/* ===== Color accessibility ramps ===== */}
      <section id="accessibility" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Foundations
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Color Accessibility — Full Ramps
        </Typography>
        <Typography variant="body1" className="max-w-[640px] mt-0 mb-8">
          50–950 ramps for every brand color, with WCAG contrast guidance.
        </Typography>
        <ColorAccessibilityRamps />
      </section>

      {/* ===== Responsive Spacing & Layout Rules ===== */}
      <section id="responsive-rules" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Foundations
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Responsive Spacing &amp; Layout Rules
        </Typography>
        <Typography variant="body1" className="max-w-[640px] mt-0 mb-4">
          Measured directly from the Home Page frames in the Figma source file (Desktop 1440px, Tablet 768px, Mobile 320px).
          This table is the <b className="text-base-black">mandatory spacing checklist</b> for any new page or section built
          in this design system — every layout must hit these gaps at every breakpoint to stay visually consistent with the
          rest of the site.
        </Typography>
        <ResponsiveSpacingTable />
      </section>

      {/* ===== Input Field ===== */}
      <section id="inputs" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Input Field
        </Typography>
        <div className="flex gap-10 flex-wrap items-end mb-8">
          <InputField variant="round" />
          <InputField variant="circle" />
          <InputField variant="square" />
          <InputField variant="pill" />
        </div>
      </section>

      {/* ===== Checkbox & Radio ===== */}
      <section id="checkbox-radio" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Checkbox &amp; Radio
        </Typography>
        <div className="flex gap-10 flex-wrap items-end mb-8">
          <div className="flex gap-8 items-center flex-wrap">
            <Checkbox label="Unchecked checkbox" checked={false} />
            <Checkbox label="Checked checkbox" checked={true} />
            <Radio label="Unselected radio" selected={false} />
            <Radio label="Selected radio" selected={true} />
          </div>
        </div>
      </section>

      {/* ===== Primary Nav ===== */}
      <section id="primary-nav" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Primary Nav
        </Typography>
        <div className="flex gap-10 flex-wrap items-end mb-8 w-full">
          <PrimaryNav />
        </div>
      </section>

      {/* ===== Mega Menu ===== */}
      <section id="mega-menu" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Mega Menu
        </Typography>
        <div className="flex gap-10 flex-wrap items-end mb-8">
          <MegaMenu />
        </div>
      </section>

      {/* ===== Cards ===== */}
      <section id="cards" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Cards
        </Typography>
        <div className="flex gap-8 flex-wrap items-start">
          <ServiceCard />
          <TeamCard />
          <TeamCard hover />
          <SingleDrCard />
          <ProductCard />
          <EventCard />
          <TechnologyCard />
          <ArchiveBlogCard />
        </div>
      </section>

      {/* ===== Location ===== */}
      <section id="location" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Location
        </Typography>
        <div className="flex gap-10 flex-wrap items-start mb-8">
          <LocationPin colorClassName="primary" />
          <LocationPin colorClassName="cta" />
          <LocationList />
          <LocationPopup />
        </div>
      </section>

      {/* ===== Text Container ===== */}
      <section id="text-container" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Text Container
        </Typography>
        <Typography variant="body1" className="max-w-[640px] mt-0 mb-2">
          The standard copy block — pre-header, header (H2 by default), paragraphs, bullet points, and
          button — with the spacing rhythm and type tokens from the Figma Text Container spec
          (see <a href="/#responsive-rules" className="text-textcolor-link">Responsive Spacing &amp; Layout</a>).
        </Typography>
        <Typography variant="caption" as="p" className="text-gray-500 mt-0 mb-8">
          Design Category: <b className="text-base-black">{TEXT_CONTAINER_CATEGORY}</b>
        </Typography>
        <TextContainerShowcase />
      </section>

      {/* ===== FAQ / Accordion ===== */}
      <section id="faq" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          FAQ / Accordion
        </Typography>
        <div className="flex gap-10 flex-wrap items-end mb-8 w-full">
          <FaqAccordion />
        </div>
      </section>

      {/* ===== Pagination ===== */}
      <section id="pagination" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Pagination
        </Typography>
        <div className="flex flex-col gap-4 mb-8 w-full">
          <Pagination variant="primary" />
          <Pagination variant="accent" />
          <Pagination variant="disabled" />
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <section id="tabs" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Tabs
        </Typography>
        <div className="flex gap-10 flex-wrap items-end mb-8 w-full">
          <Tabs />
        </div>
      </section>

      {/* ===== Choose File ===== */}
      <section id="choose-file" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <Typography variant="preHeader" as="div" className="text-cta mb-2">
          Components
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Choose File
        </Typography>
        <div className="flex gap-10 flex-wrap items-start mb-8 w-full">
          <ChooseFile />
          <UploadDropzone />
        </div>
      </section>
    </>
  );
}
