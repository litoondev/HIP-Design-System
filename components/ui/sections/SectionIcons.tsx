/** The arrow that ends nearly every CTA and "Learn More" link in sections.html. */
export function ArrowRight({ strokeWidth = "2.5" }: { strokeWidth?: string }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
