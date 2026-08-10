import type { TrustBadgeGlyphName } from "../icons/trustBadgeGlyphs";
import TrustBadgeIcon from "./TrustBadgeIcons";
import { Typography } from "@/components/ui/typography/Typography";

/**
 * Highlights — Trust Badges Grid (Figma "Highlights" frame).
 *
 * Layout: 1 col mobile · 2 col tablet (≥768px) · 4 col desktop (≥1024px), on the DS
 * container ladder 280 / 688 / 1240px — i.e. the viewport minus the DS container padding
 * (20 / 40 / 100px) at each breakpoint.
 *
 * Type tokens:  title → H6 (Figtree bold) · sub → Body2 (Inter regular).
 * Spacing:      DS section padding 40/60/120 and DS inner grid gap 20/30/40.
 * Color:        title textcolor-h2 · sub textcolor-body · card base-white · icons primary-500.
 *               Section ground and card border are the frame's own cream/stone pair, which
 *               has no DS equivalent.
 */

export interface TrustBadge {
  /** Bold headline of the badge, e.g. "6 Locations". */
  title: string;
  /** Supporting line under the title. */
  sub: string;
  /** Glyph name from the icon library — see icons/trustBadgeGlyphs.ts. */
  icon: TrustBadgeGlyphName;
}

/** The eight badges from the Figma frame, in source order. */
export const TRUST_BADGES: TrustBadge[] = [
  { title: "Locally Owned", sub: "Since 2005", icon: "locally-owned" },
  { title: "2 Board-Certified", sub: "Orthodontic Specialists", icon: "board-certified" },
  { title: "6 Locations", sub: "For Your Convenience", icon: "multi-location" },
  { title: "Top 1% Invisalign", sub: "Blue Diamond Tier Provider", icon: "invisalign-blue-diamond" },
  { title: "Flexible Times", sub: "For Your Busy Schedule", icon: "flexible-hours" },
  { title: "Transfers Accepted", sub: "For Military & Others Relocating", icon: "transfers-accepted" },
  { title: "Interest-Free", sub: "Financing & More", icon: "interest-free" },
  { title: "Advanced Tech", sub: "For Your Comfort", icon: "advanced-tech" },
];

export interface TrustBadgesProps {
  badges?: TrustBadge[];
  /** Accessible name for the section — it has no visible heading of its own. */
  ariaLabel?: string;
  className?: string;
}

export default function TrustBadges({
  badges = TRUST_BADGES,
  ariaLabel = "Practice highlights",
  className,
}: TrustBadgesProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`bg-gray-100 px-5 py-10 md:px-10 md:py-[60px] lg:px-[100px] lg:py-[120px]${
        className ? ` ${className}` : ""
      }`}
    >
      <ul className="mx-auto grid w-full max-w-[280px] list-none grid-cols-1 gap-5 p-0 md:max-w-[688px] md:grid-cols-2 md:gap-[30px] lg:max-w-[1240px] lg:grid-cols-4 lg:gap-10">
        {badges.map(({ title, sub, icon }) => (
          <li
            key={title}
            className="flex min-h-[81px] flex-row items-center border border-gray-300 bg-base-white pb-[14px] pl-2 pr-[10px] pt-[14px] text-left md:min-h-[201px] md:flex-col md:justify-start md:px-5 md:pb-10 md:pt-[30px] md:text-center lg:min-h-[244px] lg:py-10"
          >
            <div className="flex h-[53px] w-[65px] shrink-0 items-center justify-center pb-[10px] pl-2 pr-[14px] pt-[10px] md:h-20 md:w-20 md:p-4">
              <TrustBadgeIcon
                name={icon}
                className="block h-[33px] w-[33px] text-primary md:h-12 md:w-12"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-0.5 md:w-full md:gap-0">
              {/* Badges sit in a list with no visible section heading, so the title stays a <p>
                  rather than injecting an h6 into the document outline. */}
              <Typography variant="h6" as="p" className="m-0 text-textcolor-h2">
                {title}
              </Typography>
              <Typography variant="body2" className="m-0">
                {sub}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
