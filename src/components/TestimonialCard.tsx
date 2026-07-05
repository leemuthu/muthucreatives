import type { Testimonial } from "@/lib/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between bg-night p-7 md:p-9">
      <blockquote className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
        “{testimonial.text}”
      </blockquote>
      <figcaption className="mt-8 font-mono text-xs uppercase tracking-widest text-mist">
        {testimonial.author} · {testimonial.role}
      </figcaption>
    </figure>
  );
}
