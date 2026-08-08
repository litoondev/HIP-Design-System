export interface ServiceCardProps {
  title?: string;
  body?: string;
  ctaLabel?: string;
}

/** Service card — ported 1:1 from design-system/index.html (#cards) */
export default function ServiceCard({
  title = "Service",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo euismod facilisis vitae. Sed vel bibendum venenatis et pellentesque phasellus morbi sed. Urna, facilisis scelerisque non in ultricies. Scelerisque nulla purus commodo et ante eget mus.",
  ctaLabel = "Learn More",
}: ServiceCardProps) {
  return (
    <div className="bg-primary-950 text-white w-[600px] max-w-full p-10 flex flex-col gap-6">
      <h3 className="font-header font-bold text-[42px] leading-[56px] text-white m-0 capitalize">{title}</h3>
      <p className="font-body text-[20px] leading-[30px] text-white m-0">{body}</p>
      <button className="inline-flex items-center gap-4 font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] text-white uppercase bg-transparent border-none cursor-pointer p-0">
        {ctaLabel} <span className="inline-block w-5 h-5">&#8594;</span>
      </button>
    </div>
  );
}
