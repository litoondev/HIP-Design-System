export interface ArchiveBlogCardProps {
  title?: string;
  body?: string;
  ctaLabel?: string;
}

/** Archive & Blog card — ported 1:1 from design-system/index.html (#cards, node 1:2353) */
export default function ArchiveBlogCard({
  title = "Two Line Title Example",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ctaLabel = "Read More",
}: ArchiveBlogCardProps) {
  return (
    <div className="w-[393.33px] max-w-full flex flex-col">
      <div className="h-[286px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px]">
        Photo
      </div>
      <div className="bg-primary-50 p-[30px] flex flex-col gap-10">
        <h2 className="font-header font-bold text-[32px] leading-[44px] text-base-black m-0 mb-3 capitalize">{title}</h2>
        <p className="font-body text-[20px] leading-[30px] text-textcolor-body -mt-7 overflow-hidden text-ellipsis">{body}</p>
        <button className="inline-flex items-center gap-[10px] bg-transparent border-none cursor-pointer p-0 font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] uppercase text-gray-900">
          {ctaLabel} <span className="inline-block w-5 h-5">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
