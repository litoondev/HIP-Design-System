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
              <span className="w-6 h-6 flex items-center justify-center text-white text-[12px]">{letter}</span>
              {i < socialLetters.length - 1 && <span className="w-px h-5 bg-white/15" />}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5">
          {utilityLinks.map((label) => (
            <span
              key={label}
              className="font-body font-bold text-[14px] leading-[20px] tracking-[1.25px] text-white uppercase"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-5">
        <div className="font-header font-extrabold text-[22px] text-base-black">HIP</div>
        <div className="flex items-center gap-[50px]">
          {mainLinks.map((label) => (
            <span
              key={label}
              className="flex items-center gap-2 font-body text-[18px] leading-[26px] tracking-[0.5px] text-base-black capitalize cursor-pointer"
            >
              {label} <span className="text-[10px]">&#9662;</span>
            </span>
          ))}
          <button className="bg-cta text-white font-body font-bold text-[14px] leading-[20px] tracking-[1.25px] uppercase px-6 py-[9px] border-none cursor-pointer">
            Free Consult
          </button>
        </div>
      </div>
    </div>
  );
}
