import { Typography } from "@/components/ui/typography/Typography";

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
      <Typography variant="header3" as="h3" className="text-white m-0 capitalize">
        {title}
      </Typography>
      <Typography variant="body1" className="text-white m-0">
        {body}
      </Typography>
      <button className="inline-flex items-center gap-4 text-white uppercase bg-transparent border-none cursor-pointer p-0">
        <Typography variant="button" as="span">
          {ctaLabel}
        </Typography>{" "}
        <span className="inline-block w-5 h-5">&#8594;</span>
      </button>
    </div>
  );
}
