import { Typography } from "@/components/ui/typography/Typography";

export interface TeamCardProps {
  name?: string;
  title?: string;
  body?: string;
  hover?: boolean;
  hoverBody?: string;
}

/** Team card (plain and hover variants) — ported 1:1 from design-system/index.html (#cards, node 7298:49010) */
export default function TeamCard({
  name = "Name",
  title = "Title",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  hover = false,
  hoverBody = "Lorem ipsum dolor sit amet, conseur adipiscing elit. Maecenas conguefer amet egestas rhoncus eu integer eget. amet egestas.Lorem ipsum dolor sit amet, conseur adipiscing elit. Maecenas conguefer amet egestas rhoncus eu integer eget. amet egestas.",
}: TeamCardProps) {
  if (!hover) {
    return (
      <div className="bg-white w-[393px] max-w-full flex flex-col">
        <Typography
          as="div"
          variant="tooltip"
          className="w-full h-[300px] bg-gray-200 flex items-center justify-center text-gray-500"
        >
          Photo
        </Typography>
        <div className="p-[30px] flex flex-col gap-4">
          <Typography variant="header4" as="h4" className="text-base-black m-0 capitalize">
            {name}
          </Typography>
          <Typography variant="subtitle" as="div" className="text-base-black">
            {title}
          </Typography>
          <Typography variant="body1" className="m-0">
            {body}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-white w-[393px] max-w-full flex flex-col">
      <Typography
        as="div"
        variant="tooltip"
        className="w-full h-[393px] bg-gray-200 flex items-center justify-center text-gray-500"
      >
        Photo
      </Typography>
      <div className="p-[30px] flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 w-full">
          <Typography variant="header4" as="h4" className="text-base-black m-0 capitalize">
            {name}
          </Typography>
          {/* Decorative sort caret, not type — stays a raw glyph at its own optical size. */}
          <span className="text-[12px] text-base-black tracking-[2px]">&#9652;&#9662;</span>
        </div>
        <Typography variant="subtitle" as="div" className="text-base-black">
          {title}
        </Typography>
        <Typography variant="body1" className="m-0">
          {body}
        </Typography>
      </div>
      <div className="absolute inset-0 h-[393px] bg-black/50 backdrop-blur-[20px] pl-5 pr-[10px] py-5 rounded-t-lg flex items-start overflow-hidden">
        <Typography variant="body1" className="text-white m-0">
          {hoverBody}
        </Typography>
      </div>
    </div>
  );
}
