import {
  SectionOrder,
  TopUtilityBar,
  MainNavigation,
  HeroBanner,
  Highlights,
  StepSection,
  OurPractice,
  BrandLogos,
  OurDoctors,
  WhoWeHelp,
  Treatments,
  NewsMedia,
  InstagramSlider,
  CtaSection,
  Reviews,
  Locations,
  Footer,
  SuccessFormula,
  DesignerReminder,
  ImageSourcing,
  IconUsage,
  MobileSummary,
} from "@/components/ui/homepage";

export const metadata = {
  title: "Homepage — HIP Style Guide",
  description:
    "Orthodontic practice homepage structure reference — 20 sections, wireframed, with image and icon sourcing rules.",
};

/** Homepage structure reference — ported 1:1 from design-system/homepage.html. */
export default function HomepageStructurePage() {
  return (
    <div>
      <div className="mb-8">
        <p className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">
          Structure Reference
        </p>
        <h1 className="font-header font-extrabold text-[34px] leading-[1.2] text-base-black mt-0 mb-3">
          Homepage
        </h1>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <p className="font-body text-[16px] leading-[1.6] text-gray-600 max-w-[640px] mt-0 mb-0">
            Orthodontic practice homepage — based on HIP Master V3 Figma at 1440px.
          </p>
          <div className="flex items-center gap-4 text-xs font-body">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-gray-200 border border-dashed border-gray-400 inline-block" />
              Core section
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-yellow-100 border border-dashed border-yellow-400 inline-block" />
              Optional section
            </span>
          </div>
        </div>
      </div>

      <SectionOrder />

      <TopUtilityBar />
      <MainNavigation />
      <HeroBanner />
      <Highlights />
      <StepSection />
      <OurPractice />
      <BrandLogos />
      <OurDoctors />
      <WhoWeHelp />
      <Treatments />
      <NewsMedia />
      <InstagramSlider />
      <CtaSection />
      <Reviews />
      <Locations />
      <Footer />

      <SuccessFormula />
      <DesignerReminder />
      <ImageSourcing />
      <IconUsage />

      <MobileSummary />
    </div>
  );
}
