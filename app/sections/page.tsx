import type { Metadata } from "next";
import Link from "next/link";
import { TokenLegend } from "@/components/ui/sections";
import { Typography } from "@/components/ui/typography/Typography";
import { DocShell } from "@/components/layout";
import { primarySectionEntries, sectionEntries } from "./catalog";

export const metadata: Metadata = {
  title: "Section Designs — HIP Style Guide",
  description:
    "Full rendered section designs adapted to the HIP design system, in homepage structure order. Each one now has its own page — pick a card below.",
};

/**
 * Index/gallery for the 12 section designs. Each card links to its own route
 * (/sections/[slug]) instead of every design being rendered on one long scrolling page.
 */
export default function SectionsPage() {
  return (
    <DocShell>
      <div className="mb-10">
        <Typography variant="preHeader" as="p" className="mb-1 text-cta">
          Creative Reference
        </Typography>
        <Typography variant="header4" as="h1" className="mb-2 mt-0 text-base-black">
          Section Designs
        </Typography>
        <Typography variant="caption" as="p" className="text-gray-500">
          Full rendered section designs adapted to the HIP design system, in the same order as
          the homepage structure reference. All typography, colors, and icons match DS tokens.
          Pick a section below to open it on its own page.
        </Typography>
      </div>

      <TokenLegend />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {primarySectionEntries.map((entry) => {
          const variantCount = sectionEntries.filter((e) => e.variantOf === entry.slug).length;
          return (
            <Link
              key={entry.slug}
              href={`/sections/${entry.slug}`}
              className="group block rounded-xl border border-gray-200 px-5 py-4 no-underline transition-colors duration-150 ease-out hover:border-primary hover:bg-primary-50"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-body text-[12px] font-bold text-textcolor-preheader">
                  {entry.num}
                </span>
                <span className="font-header font-bold text-[16px] text-base-black group-hover:text-primary">
                  {entry.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[11px] text-gray-500 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {/* Variants render on this same page, stacked under the primary design — this
                    just flags that there's more than one before you click in. */}
                {variantCount > 0 && (
                  <span className="font-body text-[11px] text-primary bg-primary-50 border border-primary-200 rounded px-1.5 py-0.5">
                    +{variantCount} variant{variantCount > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </DocShell>
  );
}
