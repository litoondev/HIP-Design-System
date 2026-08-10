import { Typography } from "@/components/ui/typography/Typography";

const utilityLinks = ["Call / Text", "Payment Calculator", "Referral", "Portal", "Virtual Consult"];
const socialLetters = ["f", "ig", "x", "yt", "tt"];
const mainLinks = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

/** Primary Nav (utility bar + main nav) — ported 1:1 from design-system/index.html (#primary-nav) */
export default function PrimaryNav() {
  return (
    <div className="w-full bg-base-white">
      <div className="bg-primary-950 flex items-center justify-between px-8 py-[10px]">
        <div className="flex items-center gap-[10px]">
          {socialLetters.map((letter, i) => (
            <span key={letter + i} className="flex items-center">
              <Typography
                as="span"
                variant="tooltip"
                className="w-6 h-6 flex items-center justify-center text-white"
              >
                {letter}
              </Typography>
              {i < socialLetters.length - 1 && <span className="w-px h-5 bg-white/15" />}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5">
          {utilityLinks.map((label) => (
            <Typography key={label} variant="overline" as="span" className="text-white">
              {label}
            </Typography>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-5">
        {/* Wordmark, not type — Figtree 800 at a fixed optical size, no variant applies. */}
        <div className="font-header font-extrabold text-[22px] text-base-black">HIP</div>
        <div className="flex items-center gap-[50px]">
          {mainLinks.map((label) => (
            <Typography
              key={label}
              variant="menuItem"
              as="span"
              className="flex items-center gap-2 text-base-black capitalize cursor-pointer"
            >
              {label} <span className="text-[10px]">&#9662;</span>
            </Typography>
          ))}
          <button className="bg-cta text-white uppercase px-6 py-[9px] border-none cursor-pointer">
            <Typography variant="overline" as="span">
              Free Consult
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
}
