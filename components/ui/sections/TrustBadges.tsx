import type { TrustBadgeGlyphName } from "../icons/trustBadgeGlyphs";
import TrustBadgeIcon from "./TrustBadgeIcons";

/**
 * Highlights — Trust Badges Grid (Figma "Highlights" frame).
 *
 * Layout: 1 col mobile · 2 col tablet (≥768px) · 4 col desktop (≥1024px), on the DS
 * container ladder 280 / 688 / 1240px — i.e. the viewport minus the DS container padding
 * (20 / 40 / 100px) at each breakpoint.
 *
 * Type tokens:  title → H6 (Figtree bold) · sub → Body2 (Inter regular) — both via the
 *               global --text-* variables.
 * Spacing:      global --section-padding-y / --container-padding-x / --grid-gap.
 * Color:        title textcolor-h2 · sub textcolor-body · card base-white · icons primary-500.
 *               Section ground and card border resolve through the accent (Golden Amber)
 *               ramp — accent-50 / accent-200 — the DS stand-in for the frame's cream/stone pair.
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
      className={`bg-[color:var(--color-accent-50)] px-[var(--container-padding-x)] py-[var(--section-padding-y)]${
        className ? ` ${className}` : ""
      }`}
    >
      <ul className="mx-auto grid w-full max-w-[280px] list-none grid-cols-1 gap-[var(--grid-gap)] p-0 md:max-w-[688px] md:grid-cols-2 lg:max-w-[1240px] lg:grid-cols-4">
        {badges.map(({ title, sub, icon }) => (
          <li
            key={title}
            className="flex min-h-[81px] flex-row items-center border border-[color:var(--color-accent-200)] bg-base-white pb-[14px] pl-2 pr-[10px] pt-[14px] text-left md:min-h-[201px] md:flex-col md:justify-start md:px-5 md:pb-10 md:pt-[30px] md:text-center lg:min-h-[244px] lg:py-10"
          >
            <div className="flex h-[53px] w-[65px] shrink-0 items-center justify-center pb-[10px] pl-2 pr-[14px] pt-[10px] md:h-20 md:w-20 md:p-4">
              <TrustBadgeIcon
                name={icon}
                className="block h-[33px] w-[33px] text-primary md:h-12 md:w-12"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-0.5 md:w-full md:gap-0">
              <p className="m-0 font-header font-bold text-textcolor-h2 text-[length:var(--text-h6-size)] leading-[var(--text-h6-leading)] tracking-[var(--text-h6-tracking)]">
                {title}
              </p>
              <p className="m-0 font-body text-textcolor-body text-[length:var(--text-body2-size)] leading-[var(--text-body2-leading)]">
                {sub}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
