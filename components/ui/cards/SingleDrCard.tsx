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
      <div className="w-[556px] h-[556px] max-w-full bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px] shrink-0">
        Photo
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h3 className="font-header font-bold text-[42px] leading-[56px] text-textcolor-h3 m-0 capitalize">{name}</h3>
          <div className="font-header font-bold text-[24px] leading-9 tracking-[0.75px] text-cta uppercase">{title}</div>
        </div>
        <p className="font-body text-[20px] leading-[30px] text-textcolor-body m-0">{body}</p>
        <button className="inline-flex items-center justify-center gap-4 px-8 py-[15px] font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] uppercase text-white border-none cursor-pointer bg-base-black w-fit">
          {ctaLabel} <span className="inline-block w-5 h-5">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
