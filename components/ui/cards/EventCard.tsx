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
      <div className="w-[205px] h-[205px] bg-gray-200 flex items-center justify-center text-gray-500 font-body text-[12px] shrink-0">
        Photo
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-body font-bold text-[20px] leading-[30px] tracking-[0.5px] text-cta">{date}</span>
          <h3 className="font-header font-bold text-[42px] leading-[56px] text-textcolor-h3 m-0 capitalize">{title}</h3>
          <span className="font-body font-bold text-[18px] leading-[27px] tracking-[0.5px] text-primary">{byline}</span>
        </div>
        <p className="font-body text-[20px] leading-[30px] text-textcolor-body m-0">{body}</p>
      </div>
    </div>
  );
}
