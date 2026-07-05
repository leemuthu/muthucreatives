import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import BookCallButton from "@/components/BookCallButton";
import Magnetic from "@/components/Magnetic";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-night">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
            Client results
          </p>
          <h2
            id="testimonials-heading"
            className="type-wide mt-4 max-w-2xl text-5xl font-black uppercase leading-[0.95] text-ink md:text-7xl"
          >
            Don’t take our word for it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.08} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Magnetic>
            <BookCallButton size="lg" label="Get answers like these" />
          </Magnetic>
          <p className="mt-4 font-mono text-xs tracking-wide text-mist">
            20 minutes. Straight talk on scope, timeline and price.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
