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
    <section aria-labelledby="faq-heading" className="border-t border-line">
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              Common questions
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-display text-4xl leading-tight text-ink"
            >
              Asked before every project.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              If yours isn&apos;t here, the discovery call exists exactly for
              that — and it&apos;s free.
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
