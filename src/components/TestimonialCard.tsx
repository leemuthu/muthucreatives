import type { Testimonial } from "@/lib/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between border border-line bg-surface p-6">
      <blockquote className="font-display text-xl leading-snug text-ink">
        “{testimonial.text}”
      </blockquote>
      <figcaption className="mt-6 font-mono text-xs tracking-wide text-muted">
        {testimonial.author} · {testimonial.role}
      </figcaption>
    </figure>
  );
}
