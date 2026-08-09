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
      <div className="w-[240px] h-[240px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px] shrink-0">
        Photo
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="font-header font-bold text-[24px] leading-9 tracking-[0.75px] text-base-black uppercase">{heading}</div>
        <p className="font-body text-[20px] leading-[30px] text-textcolor-body m-0">{body}</p>
      </div>
    </div>
  );
}
