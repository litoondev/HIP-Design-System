import { Fragment } from "react";
import styles from "./HeroBanner.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";
import CorporateArrowButton from "../buttons/CorporateArrowButton";

/* Utility-bar link type comes from the Overline typography token — the same "overline"
   variant the Typography Foundation page documents (Inter 700, 14/20/1.25px, uppercase, at
   every breakpoint) — instead of a one-off font-size/weight/letter-spacing baked into this
   component's CSS Module. Any future Hero Banner reaches for the same variant name and stays
   in step automatically if Overline's definition ever changes. */
const utilityLinkClass = typographyClass("overline", styles.hipUtilityLink);

/* Main-nav links use the FULL Menu Item typography variant — family, weight, and the
   responsive size/leading/tracking ladder — not just its font family. Previously this pulled
   only the family and restated size/weight/tracking in the module, which meant a change to
   Menu Item moved the font but left this nav's metrics behind. Only layout, color and case
   live in the module now. Matches HeroSlider, which already used the whole token. */
const navLinkClass = typographyClass("menuItem", styles.hipNavLink);

/* The hero headline is the Main Header token (Figtree 700, 40/40 → 56/68 → 100/100). It used
   to be a `clamp(44px,5.5vw,80px)` of its own invention, which no other hero or Foundation
   page shared — so the biggest type on the site was the one piece that ignored the type scale.
   Only color, margin and casing stay in the module. */
const heroH1Class = typographyClass("mainHeader", styles.hipHeroH1);

/* Social + utility icons resolve through the centralized icon library
   (components/ui/icons) — the same glyphs Figma's Top_Menu uses — instead of inline SVG
   paths. They inherit `currentColor` (base white here) and size from --menu-icon-size,
   which aliases the icon-lg token (24 / 24 / 20). */
const SOCIAL_ICONS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
  { name: "x-twitter", label: "X" },
  { name: "youtube", label: "YouTube" },
  { name: "tiktok", label: "TikTok" },
];

const UTILITY_LINKS = [
  { name: "smartphone", label: "Call / Text" },
  { name: "calculator", label: "Payment Calculator" },
  // NOTE: Figma's "referral" glyph (a person + share/network) has no equivalent in the icon
  // library yet, and the sandbox can't reach figma.com to import the exact vector. Interim:
  // the closest existing glyph. TODO: add a real "Referral" icon to components/ui/icons and
  // swap the name here.
  { name: "user-circle", label: "Referral" },
  { name: "user-fill", label: "Portal" },
  { name: "video", label: "Virtual Consult" },
];

const NAV_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

/** 01 · Hero Banner — full-bleed, dark overlay, utility bar + main nav + 2 buttons. */
export default function HeroBanner() {
  // The .hipHeroBg gradient stays as the fallback; a real photo overrides it when one exists.
  const bg = sectionImage("hero");

  return (
    <div className={styles.hipHero}>
      <div
        className={styles.hipHeroBg}
        style={
          bg
            ? {
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      />
      <div className={styles.hipHeroShade} />

      {/* Utility bar — icons come from the centralized icon library (components/ui/icons),
          sized/spaced by the Figma "Utilities/Menu/*" tokens in globals.css. */}
      <div className={styles.hipUtilityBar}>
        <div className={styles.hipSocials}>
          {SOCIAL_ICONS.map((social, i) => (
            <Fragment key={social.label}>
              <a className={styles.hipSocialIcon} href="#" aria-label={social.label}>
                <Icon name={social.name} size="var(--menu-icon-size)" />
              </a>
              {i < SOCIAL_ICONS.length - 1 && (
                <span aria-hidden="true" className={styles.hipSocDiv} />
              )}
            </Fragment>
          ))}
        </div>

        <div className={styles.hipUtilityLinks}>
          {UTILITY_LINKS.map((link) => (
            <a key={link.label} className={utilityLinkClass} href="#">
              <span className={styles.hipUtilityLinkIcon}>
                <Icon name={link.name} size="var(--menu-icon-size)" />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className={styles.hipMainNav}>
        {/* The HIP wordmark from the icon library. Icon normalises its fill to currentColor,
            so the logo takes the nav's ink (white here) instead of carrying a baked color. */}
        <a className={styles.hipLogo} href="#" aria-label="HIP — home">
          <Icon name="hip-logo" size="var(--icon-3xl)" />
        </a>
        <nav className={styles.hipNavLinks}>
          {NAV_LINKS.map((label) => (
            <a key={label} className={navLinkClass} href="#">
              {label}
              <span className={styles.hipNavCaret}>
                <Icon name="chevron-down-bold" size="var(--icon-sm)" />
              </span>
            </a>
          ))}
        </nav>
        <a className={styles.hipNavCta} href="#">
          Free Consult
        </a>
      </div>

      {/* Hero content */}
      <div className={styles.hipHeroContent}>
        <p className={styles.hipHeroEyebrow}>Orthodontic Excellence</p>
        <h1 className={heroH1Class}>
          Live Life <em>Smiling</em>
        </h1>
        {/* Global Corporate Arrow buttons (the section's category), retargeted for the
            photo ground: conversion CTA on the cta ramp, secondary on white. */}
        <div className={styles.hipHeroActions}>
          <CorporateArrowButton label="Free Consult" className={styles.hipHeroBtnCta} />
          <CorporateArrowButton label="What Sets Us Apart" className={styles.hipHeroBtnAlt} />
        </div>
      </div>
    </div>
  );
}
