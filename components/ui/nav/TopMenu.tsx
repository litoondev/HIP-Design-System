import Icon from "@/components/ui/icons/Icon";
import { Typography } from "@/components/ui/typography/Typography";

/**
 * Top Menu — utility bar ported 1:1 from Figma "Top_Menu" (Master V3, node 15895:53286).
 *
 * A dark (colors/primary/950) full-width strip: social icons on the left, separated by
 * hairline dividers (colors/white-alpha/15), and icon + "Over Line" label utility links on
 * the right. This is the finished iconography for the placeholder utility bar that
 * `PrimaryNav` renders as bare letters/text.
 *
 * Icons come from the global icon library (`components/ui/icons`, itself ported from this
 * same Master V3 file) so they inherit `currentColor` (white here) and stay tokenized.
 *
 * Sizing and spacing route through the `--menu-*` tokens in app/globals.css, which alias
 * icon-lg (24 / 24 / 20) and spacing/10 — the same tokens the three Hero utility bars
 * consume. Nothing in this file states a px value, so the bar cannot drift from them.
 */

interface SocialLink {
  /** Icon name in the global library. */
  icon: string;
  /** Accessible label / destination hint. */
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: "facebook-circle", label: "Facebook", href: "#" },
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "x-twitter", label: "X", href: "#" },
  { icon: "youtube", label: "YouTube", href: "#" },
  { icon: "tiktok", label: "TikTok", href: "#" },
];

interface UtilityLink {
  /** Library icon name, or `src` for an asset not yet in the library. */
  icon?: string;
  /** Remote/local SVG source — used only when the glyph is not in the icon library. */
  iconSrc?: string;
  label: string;
  href: string;
}

const utilityLinks: UtilityLink[] = [
  { icon: "smartphone", label: "Call / Text", href: "#" },
  { icon: "calculator", label: "Payment Calculator", href: "#" },
  // "referral" (person + share/network) is the one glyph missing from the icon library.
  // TODO: download the exact vector into the library and swap `iconSrc` for `icon`.
  // Figma asset URL (expires ~7 days from generation):
  {
    iconSrc:
      "https://www.figma.com/api/mcp/asset/3f8242b7-e4d4-4586-8dba-614c5452de77.svg",
    label: "Referral",
    href: "#",
  },
  { icon: "user-fill", label: "Portal", href: "#" },
  { icon: "video", label: "Virtual Consult", href: "#" },
];

/** Top Menu utility bar — mirrors Figma Top_Menu (node 15895:53286). */
export default function TopMenu() {
  return (
    <div className="w-full bg-primary-950 flex items-center justify-between px-16 py-[var(--menu-bar-padding-y)]">
      {/* Social icons */}
      <div className="flex items-center gap-[var(--menu-social-gap)]">
        {socialLinks.map((social, i) => (
          <div key={social.label} className="flex items-center gap-[var(--menu-social-gap)]">
            <a
              href={social.href}
              aria-label={social.label}
              className="flex items-center justify-center p-[var(--menu-social-padding)] text-white"
            >
              <Icon name={social.icon} size="var(--menu-icon-size)" />
            </a>
            {i < socialLinks.length - 1 && (
              <span
                aria-hidden="true"
                className="w-px h-[var(--menu-divider-height)] bg-white/15"
              />
            )}
          </div>
        ))}
      </div>

      {/* Utility links */}
      <nav aria-label="Utility" className="flex items-center gap-[var(--menu-item-gap)]">
        {utilityLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-[var(--menu-item-text-gap)] text-white no-underline"
          >
            <span className="flex items-center justify-center px-[var(--menu-item-icon-pad-x)] py-[var(--menu-item-icon-pad-y)]">
              {link.icon ? (
                <Icon name={link.icon} size="var(--menu-icon-size)" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={link.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="block"
                  style={{
                    width: "var(--menu-icon-size)",
                    height: "var(--menu-icon-size)",
                  }}
                />
              )}
            </span>
            <Typography variant="overline" as="span">
              {link.label}
            </Typography>
          </a>
        ))}
      </nav>
    </div>
  );
}
