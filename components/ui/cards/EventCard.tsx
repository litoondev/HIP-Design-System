import { Typography } from "@/components/ui/typography/Typography";

export interface EventCardProps {
  date?: string;
  title?: string;
  byline?: string;
  body?: string;
}

/** Event card — ported 1:1 from design-system/index.html (#cards, node 7983:52179) */
export default function EventCard({
  date = "April 28, 2025",
  title = "Title Here",
  byline = "By: Name here",
  body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
}: EventCardProps) {
  return (
    <div className="bg-white border border-gray-200 w-[1240px] max-w-full p-[60px] flex gap-[60px] items-start">
      <Typography
        as="div"
        variant="tooltip"
        className="w-[205px] h-[205px] bg-gray-200 flex items-center justify-center text-gray-500 shrink-0"
      >
        Photo
      </Typography>
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography variant="strong1" as="span" className="text-cta">
            {date}
          </Typography>
          <Typography variant="header3" as="h3" className="text-textcolor-h3 m-0 capitalize">
            {title}
          </Typography>
          <Typography variant="strong2" as="span" className="text-primary">
            {byline}
          </Typography>
        </div>
        <Typography variant="body1" className="m-0">
          {body}
        </Typography>
      </div>
    </div>
  );
}
