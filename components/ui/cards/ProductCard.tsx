import { Typography } from "@/components/ui/typography/Typography";

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
      <Typography
        as="div"
        variant="tooltip"
        className="h-[262px] bg-gray-200 flex items-center justify-center text-gray-500"
      >
        Photo
      </Typography>
      <div className="bg-primary-950 p-[30px] flex flex-col gap-10">
        <Typography variant="postTitle" as="p" className="text-white m-0 capitalize">
          {title}
        </Typography>
        <div className="flex items-center justify-between">
          <Typography
            variant="button"
            as="span"
            className="bg-secondary text-white uppercase px-3 py-[6px]"
          >
            {price}
          </Typography>
          <Typography
            variant="button"
            as="span"
            className="inline-flex items-center gap-4 text-white uppercase"
          >
            {ctaLabel} <span className="inline-block w-5 h-5">&#8594;</span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
