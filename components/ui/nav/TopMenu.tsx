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
 */

interface SocialLink {
  /** Icon name in the global library. */
  icon: string;
  /** Accessible label / destination hint. */
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: "Facebook Round", label: "Facebook", href: "#" },
  { icon: "Instagram", label: "Instagram", href: "#" },
  { icon: "X", label: "X", href: "#" },
  { icon: "Youtube Play", label: "YouTube", href: "#" },
  { icon: "Tiktok", label: "TikTok", href: "#" },
];

interface UtilityLink {
  /** Library icon name, or `src` for an asset not yet in the library. */
  icon?: string;
  /** Remote/local SVG source — used only when the glyph is not in the icon library. */
  iconSrc?: string;
  label: string;
  href: string;
  /** Design uses tighter horizontal padding on the last two items. */
  tightIcon?: boolean;
}

const utilityLinks: UtilityLink[] = [
  { icon: "Mobile", label: "Call / Text", href: "#" },
  { icon: "Calculator", label: "Payment Calculator", href: "#" },
  // "referral" (person + share/network) is the one glyph missing from the icon library.
  // TODO: download the exact vector into the library and swap `iconSrc` for `icon`.
  // Figma asset URL (expires ~7 days from generation):
  {
    iconSrc:
      "https://www.figma.com/api/mcp/asset/3f8242b7-e4d4-4586-8dba-614c5452de77.svg",
    label: "Referral",
    href: "#",
  },
  { icon: "User", label: "Portal", href: "#", tightIcon: true },
  { icon: "Face Time", label: "Virtual Consult", href: "#", tightIcon: true },
];

/** Top Menu utility bar — mirrors Figma Top_Menu (node 15895:53286). */
export default function TopMenu() {
  return (
    <div className="w-full bg-primary-950 flex items-center justify-between px-16 py-[10px]">
      {/* Social icons */}
      <div className="flex items-center gap-[10px]">
        {socialLinks.map((social, i) => (
          <div key={social.label} className="flex items-center gap-[10px]">
            <a
              href={social.href}
              aria-label={social.label}
              className="flex items-center justify-center p-[10px] text-white"
            >
              <Icon name={social.icon} size="24px" />
            </a>
            {i < socialLinks.length - 1 && (
              <span aria-hidden="true" className="w-px h-5 bg-white/15" />
            )}
          </div>
        ))}
      </div>

      {/* Utility links */}
      <nav aria-label="Utility" className="flex items-center gap-5">
        {utilityLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-[5px] text-white no-underline"
          >
            <span
              className={`flex items-center justify-center py-[10px] ${
                link.tightIcon ? "px-[5px]" : "px-[10px]"
              }`}
            >
              {link.icon ? (
                <Icon name={link.icon} size="24px" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={link.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="block w-6 h-6"
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
