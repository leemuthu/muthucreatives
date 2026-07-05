import Reveal from "@/components/Reveal";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="bg-paper text-night">
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
              Fair questions
            </p>
            <h2
              id="faq-heading"
              className="type-wide mt-4 text-5xl font-black uppercase leading-[0.95] md:text-6xl"
            >
              Asked before every project.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
              Yours isn’t here? That’s literally what the free call is for.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
