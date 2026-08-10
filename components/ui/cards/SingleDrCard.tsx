import { Typography } from "@/components/ui/typography/Typography";

export interface SingleDrCardProps {
  name?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
}

/** Single Dr card — ported 1:1 from design-system/index.html (#cards, node 2176:192722) */
export default function SingleDrCard({
  name = "Name",
  title = "Title",
  body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  ctaLabel = "Learn More",
}: SingleDrCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 w-[1240px] max-w-full p-[60px] flex gap-[60px] items-start">
      <Typography
        as="div"
        variant="tooltip"
        className="w-[556px] h-[556px] max-w-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0"
      >
        Photo
      </Typography>
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <Typography variant="header3" as="h3" className="text-textcolor-h3 m-0 capitalize">
            {name}
          </Typography>
          <Typography variant="subtitle" as="div" className="text-cta">
            {title}
          </Typography>
        </div>
        <Typography variant="body1" className="m-0">
          {body}
        </Typography>
        {/* The button element keeps its own layout/colour; only its label is typed. */}
        <button className="inline-flex items-center justify-center gap-4 px-8 py-[15px] uppercase text-white border-none cursor-pointer bg-base-black w-fit">
          <Typography variant="button" as="span">
            {ctaLabel}
          </Typography>{" "}
          <span className="inline-block w-5 h-5">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
