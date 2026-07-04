import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/case-studies";

export default function WorkSection() {
  const featured = caseStudies.filter((study) => study.featured);

  return (
    <section aria-labelledby="work-heading" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            Selected work
          </p>
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2
              id="work-heading"
              className="max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl"
            >
              Every project ships with a result attached.
            </h2>
            <Link
              href="/portfolio"
              className="text-sm text-muted transition-colors hover:text-brass"
            >
              All six projects →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08} className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-6 border border-line bg-night p-7 md:flex-row md:items-center md:p-9">
            <p className="max-w-md font-display text-2xl leading-snug text-ink">
              Want numbers like these next to{" "}
              <em className="text-brass">your</em> name?
            </p>
            <BookCallButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
