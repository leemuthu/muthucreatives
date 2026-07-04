import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import BookCallButton from "@/components/BookCallButton";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: {
      canonical: `/portfolio/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const service = getService(study.serviceSlug);
  const studyIndex = caseStudies.findIndex((entry) => entry.slug === study.slug);
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${study.name} — ${study.industry}`,
    description: study.summary,
    url: `${site.url}/portfolio/${study.slug}`,
    author: { "@id": `${site.url}/#business` },
    ...(study.quote && {
      review: {
        "@type": "Review",
        reviewBody: study.quote.text,
        author: { "@type": "Person", name: study.quote.author },
      },
    }),
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />

      <header
        className="border-b border-line"
        style={{
          background: `linear-gradient(160deg, ${study.cover.from} 0%, ${study.cover.to} 65%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            Case study · {study.industry}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {study.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {study.summary}
          </p>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {study.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col border-t border-brass/40 pt-4">
                <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
                <dd className="order-1 font-mono text-2xl text-brass">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-12 pt-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <section aria-labelledby="challenge-heading">
              <Reveal>
                <h2
                  id="challenge-heading"
                  className="font-display text-3xl text-ink md:text-4xl"
                >
                  The challenge
                </h2>
                <div className="mt-5 max-w-2xl space-y-4">
                  {study.challenge.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </section>

            <section aria-labelledby="approach-heading" className="mt-14">
              <Reveal>
                <h2
                  id="approach-heading"
                  className="font-display text-3xl text-ink md:text-4xl"
                >
                  What we did
                </h2>
              </Reveal>
              <div className="mt-6 space-y-6">
                {study.approach.map((step, index) => (
                  <Reveal key={step.name} delay={index * 0.05}>
                    <div className="border-l border-brass/40 pl-6">
                      <h3 className="text-lg text-ink">{step.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                        {step.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            <section aria-labelledby="outcome-heading" className="mt-14">
              <Reveal>
                <h2
                  id="outcome-heading"
                  className="font-display text-3xl text-ink md:text-4xl"
                >
                  The outcome
                </h2>
                <div className="mt-5 max-w-2xl space-y-4">
                  {study.outcome.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              {study.quote && (
                <Reveal className="mt-8">
                  <figure className="border border-brass/30 bg-surface p-7">
                    <blockquote className="font-display text-2xl leading-snug text-ink">
                      “{study.quote.text}”
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-xs tracking-wide text-muted">
                      {study.quote.author} · {study.quote.role}
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </section>
          </div>

          <aside className="h-fit space-y-8 border border-line bg-surface p-7 lg:sticky lg:top-28">
            {service && (
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                  Service
                </h2>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-2 inline-block text-base text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brass"
                >
                  {service.name}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.teaser}
                </p>
              </div>
            )}
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
                Built with
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-line pt-6">
              <p className="text-sm leading-relaxed text-muted">
                Facing something similar in your business?
              </p>
              <BookCallButton className="mt-4 w-full" />
            </div>
          </aside>
        </div>

        <nav
          aria-label="Next case study"
          className="mt-16 flex items-center justify-between border-t border-line pt-8"
        >
          <Link
            href="/portfolio"
            className="text-sm text-muted transition-colors hover:text-brass"
          >
            ← All work
          </Link>
          <Link
            href={`/portfolio/${nextStudy.slug}`}
            className="text-sm text-ink transition-colors hover:text-brass"
          >
            Next: {nextStudy.name} →
          </Link>
        </nav>
      </article>

      <CtaBanner title={`Want a result like ${study.name}'s?`} />
    </>
  );
}
