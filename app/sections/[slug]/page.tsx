import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import SectionViewer from "@/components/ui/docs/SectionViewer";
import { sectionComponents } from "@/components/ui/sections/sectionRegistry";
import { sectionMeta, metaBySlug } from "@/components/ui/sections/sectionMeta";

export function generateStaticParams() {
  return sectionMeta.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = metaBySlug(params.slug);
  return {
    title: `${entry ? entry.name : "Section"} — HIP Style Guide`,
    description: entry
      ? `${entry.name} section design (${entry.category}) rendered with the HIP design system tokens, with HTML and design-prompt views.`
      : undefined,
  };
}

export default function SectionSinglePage({ params }: { params: { slug: string } }) {
  const Section = sectionComponents[params.slug];
  if (!Section || !metaBySlug(params.slug)) notFound();
  return (
    // A light, uniform gutter instead of DocShell's ~1040px reading column — these are live
    // design previews, not text, so they should use essentially all of the available width
    // (like the real site would) rather than being capped with a big dead zone next to them.
    <div className="px-6 [@media(max-width:900px)]:px-4">
      {/* Suspense boundary for useSearchParams (the ?cat= category filter) during prerender.
          The section renders here on the server (its components may use fs) and is passed
          into the client viewer as children. */}
      <Suspense>
        <SectionViewer slug={params.slug}>
          <Section />
        </SectionViewer>
      </Suspense>
    </div>
  );
}
