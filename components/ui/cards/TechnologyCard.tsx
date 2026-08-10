import { Typography } from "@/components/ui/typography/Typography";

export interface TechnologyCardProps {
  heading?: string;
  body?: string;
}

/** Technology card — ported 1:1 from design-system/index.html (#cards, node 1:2245) */
export default function TechnologyCard({
  heading = "Heading",
  body = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
}: TechnologyCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 w-[600px] max-w-full p-10 flex gap-[30px] items-center">
      <Typography
        as="div"
        variant="tooltip"
        className="w-[240px] h-[240px] bg-gray-200 flex items-center justify-center text-gray-500 shrink-0"
      >
        Photo
      </Typography>
      <div className="flex-1 flex flex-col gap-6">
        <Typography variant="subtitle" as="div" className="text-base-black">
          {heading}
        </Typography>
        <Typography variant="body1" className="m-0">
          {body}
        </Typography>
      </div>
    </div>
  );
}
