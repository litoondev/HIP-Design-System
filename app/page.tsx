import { ColorPalette, ColorAccessibilityRamps, ResponsiveSpacingTable } from "@/components/ui/foundations";
import { TypographySection } from "@/components/ui/typography";
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
import { TextContainer, TEXT_CONTAINER_CATEGORY } from "@/components/ui/sections";

export default function Home() {
  return (
    <>
      {/* ===== Color Palette ===== */}
      <section id="colors" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Foundations</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Color Palette</h1>
        <p className="font-body text-[16px] leading-[1.6] text-gray-600 max-w-[640px] mt-0 mb-8">
          Base brand colors used across the HIP web design system, pulled directly from the Figma source file.
        </p>
        <ColorPalette />
      </section>

      {/* ===== Typography ===== */}
      <section id="typography" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Foundations</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Typography</h1>
        <p className="font-body text-[16px] leading-[1.6] text-gray-600 max-w-[640px] mt-0 mb-8">
          Full type scale — Figtree for headers, Inter for body copy — exactly as defined in the Figma Style Guide.
        </p>
        <TypographySection />
      </section>

      {/* ===== Color accessibility ramps ===== */}
      <section id="accessibility" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Foundations</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Color Accessibility — Full Ramps</h1>
        <p className="font-body text-[16px] leading-[1.6] text-gray-600 max-w-[640px] mt-0 mb-8">
          50–950 ramps for every brand color, with WCAG contrast guidance.
        </p>
        <ColorAccessibilityRamps />
      </section>

      {/* ===== Responsive Spacing & Layout Rules ===== */}
      <section id="responsive-rules" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Foundations</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Responsive Spacing &amp; Layout Rules</h1>
        <p className="font-body text-[16px] leading-[1.6] text-gray-600 max-w-[640px] mt-0 mb-4">
          Measured directly from the Home Page frames in the Figma source file (Desktop 1440px, Tablet 768px, Mobile 320px).
          This table is the <b className="text-base-black">mandatory spacing checklist</b> for any new page or section built
          in this design system — every layout must hit these gaps at every breakpoint to stay visually consistent with the
          rest of the site.
        </p>
        <ResponsiveSpacingTable />
      </section>

      {/* ===== Input Field ===== */}
      <section id="inputs" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Input Field</h1>
        <div className="flex gap-10 flex-wrap items-end mb-8">
          <InputField variant="round" />
          <InputField variant="circle" />
          <InputField variant="square" />
          <InputField variant="pill" />
        </div>
      </section>

      {/* ===== Checkbox & Radio ===== */}
      <section id="checkbox-radio" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Checkbox &amp; Radio</h1>
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
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Primary Nav</h1>
        <div className="flex gap-10 flex-wrap items-end mb-8 w-full">
          <PrimaryNav />
        </div>
      </section>

      {/* ===== Mega Menu ===== */}
      <section id="mega-menu" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Mega Menu</h1>
        <div className="flex gap-10 flex-wrap items-end mb-8">
          <MegaMenu />
        </div>
      </section>

      {/* ===== Cards ===== */}
      <section id="cards" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Cards</h1>
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
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Location</h1>
        <div className="flex gap-10 flex-wrap items-start mb-8">
          <LocationPin colorClassName="primary" />
          <LocationPin colorClassName="cta" />
          <LocationList />
          <LocationPopup />
        </div>
      </section>

      {/* ===== Text Container ===== */}
      <section id="text-container" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Text Container</h1>
        <p className="font-body text-[16px] leading-[1.6] text-gray-600 max-w-[640px] mt-0 mb-2">
          The standard copy block — pre-header, header (H2 by default), paragraphs, bullet points, and
          button — with the spacing rhythm and type tokens from the Figma Text Container spec
          (see <a href="/#responsive-rules" className="text-textcolor-link">Responsive Spacing &amp; Layout</a>).
        </p>
        <p className="font-body text-[13px] text-gray-500 mt-0 mb-8">
          Design Category: <b className="text-base-black">{TEXT_CONTAINER_CATEGORY}</b>
        </p>
        <TextContainer
          preHeader="Simple & Affordable"
          header="Upgrade Your Smile"
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum.",
          ]}
          bullets={[
            "Highlight Bullet Point",
            "Highlight Bullet Point",
            "Highlight Bullet Point",
            "Highlight Bullet Point",
            "Highlight Bullet Point",
          ]}
        />
      </section>

      {/* ===== FAQ / Accordion ===== */}
      <section id="faq" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">FAQ / Accordion</h1>
        <div className="flex gap-10 flex-wrap items-end mb-8 w-full">
          <FaqAccordion />
        </div>
      </section>

      {/* ===== Pagination ===== */}
      <section id="pagination" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Pagination</h1>
        <div className="flex flex-col gap-4 mb-8 w-full">
          <Pagination variant="primary" />
          <Pagination variant="accent" />
          <Pagination variant="disabled" />
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <section id="tabs" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Tabs</h1>
        <div className="flex gap-10 flex-wrap items-end mb-8 w-full">
          <Tabs />
        </div>
      </section>

      {/* ===== Choose File ===== */}
      <section id="choose-file" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
        <h1 className="font-header font-extrabold text-[26px] leading-[1.2] md:text-[30px] lg:text-[34px] text-base-black mt-0 mb-3">Choose File</h1>
        <div className="flex gap-10 flex-wrap items-start mb-8 w-full">
          <ChooseFile />
          <UploadDropzone />
        </div>
      </section>
    </>
  );
}
