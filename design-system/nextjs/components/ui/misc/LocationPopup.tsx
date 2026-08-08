export interface LocationPopupProps {
  name?: string;
  address?: string;
  ctaLabel?: string;
  onClose?: () => void;
}

/** Location pop-up card — ported 1:1 from design-system/index.html (#location, node 8268:59165) */
export default function LocationPopup({
  name = "Location Name Here",
  address = "Address1 here",
  ctaLabel = "Visit this Location",
  onClose,
}: LocationPopupProps) {
  return (
    <div className="w-[430px] max-w-full bg-white border-2 border-primary rounded-20 shadow-[0_4px_4px_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[14px] right-[14px] w-11 h-11 rounded-full bg-white flex items-center justify-center text-[20px] text-base-black border-none cursor-pointer"
        >
          &times;
        </button>
        <div className="h-[250px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px]">Photo</div>
        <div className="bg-primary text-white text-center py-[10px] px-[10px] font-body text-[20px] leading-[30px]">{name}</div>
      </div>
      <div className="flex flex-col items-center gap-5 px-5 py-[30px]">
        <div className="flex items-center gap-[10px] font-body text-[20px] leading-[30px] text-base-black">
          <span className="text-cta text-[10px]">&#9679;</span> {address}
        </div>
        <button className="inline-flex items-center justify-center gap-4 px-8 py-[15px] font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] uppercase text-white border-none cursor-pointer bg-base-black">
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
