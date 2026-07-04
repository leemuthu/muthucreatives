import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import BookCallButton from "@/components/BookCallButton";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-line bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            Client results
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            What working with us actually looks like.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.08} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <BookCallButton size="lg" label="Book a call — it's free" />
          <p className="mt-4 font-mono text-xs tracking-wide text-muted">
            20 minutes. Straight answers on scope, timeline, and price.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
