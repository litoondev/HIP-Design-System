import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionCard } from "@/components/ui/sections";
import { primarySectionEntries, sectionEntries, getSectionEntry } from "../catalog";

export function generateStaticParams() {
  return primarySectionEntries.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getSectionEntry(params.slug);
  if (!entry || entry.variantOf) return {};
  return {
    title: `${entry.num} · ${entry.name} — HIP Style Guide`,
    description: `${entry.name} section design, adapted to the HIP design system.`,
  };
}

/**
 * One nav item = one page, but a page can hold more than one rendered design: every variant
 * (e.g. 01B alongside 01, 02B alongside 02) renders stacked under its primary entry here
 * instead of living behind a separate URL, so nothing is hidden a click away.
 */
export default function SectionDetailPage({ params }: { params: { slug: string } }) {
  const entry = getSectionEntry(params.slug);
  // Variant slugs don't get their own page — they render on their primary's page instead.
  if (!entry || entry.variantOf) notFound();

  const variants = sectionEntries.filter((e) => e.variantOf === entry.slug);
  const designs = [entry, ...variants];

  const index = primarySectionEntries.findIndex((e) => e.slug === params.slug);
  const prev = primarySectionEntries[index - 1];
  const next = primarySectionEntries[index + 1];

  return (
    // A light, uniform gutter instead of DocShell's ~1040px reading column — these are live
    // design previews, not text, so they should use essentially all of the available width
    // (like the real site would) rather than being capped with a big dead zone next to them.
    <div className="px-6 [@media(max-width:900px)]:px-4">
      <Link
        href="/sections"
        className="inline-flex items-center gap-1 font-body text-[13px] font-semibold text-textcolor-link no-underline mb-6"
      >
        ← All Section Designs
      </Link>

      {designs.map((design) => (
        <SectionCard
          key={design.slug}
          id={design.slug}
          num={design.num}
          name={design.name}
          tags={design.tags}
          note={design.note}
        >
          <design.Component />
        </SectionCard>
      ))}

      <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100 font-body text-[14px]">
        {prev ? (
          <Link href={`/sections/${prev.slug}`} className="font-semibold text-textcolor-link no-underline">
            ← {prev.num} · {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/sections/${next.slug}`} className="font-semibold text-textcolor-link no-underline text-right">
            {next.num} · {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
