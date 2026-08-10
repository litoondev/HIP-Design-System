import { Typography } from "@/components/ui/typography/Typography";

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
      <Typography
        as="div"
        variant="tooltip"
        className="h-[286px] bg-gray-200 flex items-center justify-center text-gray-500"
      >
        Photo
      </Typography>
      <div className="bg-primary-50 p-[30px] flex flex-col gap-10">
        {/* Card title: postTitle metrics, but it heads the card so it stays an h2. */}
        <Typography variant="postTitle" as="h2" className="text-base-black m-0 mb-3 capitalize">
          {title}
        </Typography>
        <Typography variant="body1" className="-mt-7 overflow-hidden text-ellipsis">
          {body}
        </Typography>
        <button className="inline-flex items-center gap-[10px] bg-transparent border-none cursor-pointer p-0 uppercase text-gray-900">
          <Typography variant="button" as="span">
            {ctaLabel}
          </Typography>{" "}
          <span className="inline-block w-5 h-5">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
