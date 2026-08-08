export interface ProductCardProps {
  title?: string;
  price?: string;
  ctaLabel?: string;
}

/** Product card — ported 1:1 from design-system/index.html (#cards, node 7980:51373) */
export default function ProductCard({
  title = "Title Example",
  price = "$20.00",
  ctaLabel = "View Product",
}: ProductCardProps) {
  return (
    <div className="w-[393.33px] max-w-full flex flex-col">
      <div className="h-[262px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px]">
        Photo
      </div>
      <div className="bg-primary-950 p-[30px] flex flex-col gap-10">
        <p className="font-header font-bold text-[32px] leading-[44px] text-white m-0 capitalize">{title}</p>
        <div className="flex items-center justify-between">
          <span className="bg-secondary text-white font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] uppercase px-3 py-[6px]">
            {price}
          </span>
          <span className="inline-flex items-center gap-4 text-white font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] uppercase">
            {ctaLabel} <span className="inline-block w-5 h-5">&#8594;</span>
          </span>
        </div>
      </div>
    </div>
  );
}
