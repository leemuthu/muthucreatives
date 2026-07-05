import type { Testimonial } from "@/lib/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="relative flex h-full flex-col justify-between overflow-hidden border border-line bg-surface p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-7 right-2 font-display text-[7rem] italic leading-none text-brass/10"
      >
        ”
      </span>
      <blockquote className="relative font-display text-xl leading-snug text-ink">
        “{testimonial.text}”
      </blockquote>
      <figcaption className="mt-6 font-mono text-xs tracking-wide text-muted">
        {testimonial.author} · {testimonial.role}
      </figcaption>
    </figure>
  );
}
