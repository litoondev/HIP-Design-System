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
import { Typography } from "@/components/ui/typography/Typography";

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
        <Typography variant="preHeader" as="p" className="text-cta mb-2">
          Structure Reference
        </Typography>
        <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
          Homepage
        </Typography>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <Typography variant="body1" className="max-w-[640px] mt-0 mb-0">
            Orthodontic practice homepage — based on HIP Master V3 Figma at 1440px.
          </Typography>
          <Typography as="div" variant="tooltip" className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-gray-200 border border-dashed border-gray-400 inline-block" />
              Core section
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-accent-100 border border-dashed border-accent-200 inline-block" />
              Optional section
            </span>
          </Typography>
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
