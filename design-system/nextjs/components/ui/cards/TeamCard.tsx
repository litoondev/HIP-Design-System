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
        <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px]">
          Photo
        </div>
        <div className="p-[30px] flex flex-col gap-4">
          <h4 className="font-header font-bold text-[32px] leading-[46px] text-base-black m-0 capitalize">{name}</h4>
          <div className="font-header font-bold text-[24px] leading-9 tracking-[0.75px] text-base-black uppercase">{title}</div>
          <p className="font-body text-[20px] leading-[30px] text-textcolor-body m-0">{body}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-white w-[393px] max-w-full flex flex-col">
      <div className="w-full h-[393px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px]">
        Photo
      </div>
      <div className="p-[30px] flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4 w-full">
          <h4 className="font-header font-bold text-[32px] leading-[46px] text-base-black m-0 capitalize">{name}</h4>
          <span className="text-[12px] text-base-black tracking-[2px]">&#9652;&#9662;</span>
        </div>
        <div className="font-header font-bold text-[24px] leading-9 tracking-[0.75px] text-base-black uppercase">{title}</div>
        <p className="font-body text-[20px] leading-[30px] text-textcolor-body m-0">{body}</p>
      </div>
      <div className="absolute inset-0 h-[393px] bg-[rgba(3,7,18,0.5)] backdrop-blur-[20px] pl-5 pr-[10px] py-5 rounded-t-lg flex items-start overflow-hidden">
        <p className="font-body text-[20px] leading-[30px] text-white m-0">{hoverBody}</p>
      </div>
    </div>
  );
}
