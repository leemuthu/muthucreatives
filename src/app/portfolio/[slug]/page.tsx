import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import BookCallButton from "@/components/BookCallButton";
import StatCounter from "@/components/StatCounter";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

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
    ...pageSeo(`/portfolio/${study.slug}`),
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
    name: `${study.name}, ${study.industry}`,
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/portfolio` },
      {
        "@type": "ListItem",
        position: 3,
        name: study.name,
        item: `${site.url}/portfolio/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <JsonLd data={breadcrumbSchema} />

      <header className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: study.accent }}>
                Case study · {study.industry}
              </p>
              <h1 className="type-wide mt-5 break-words text-6xl font-black uppercase leading-[0.92] text-ink md:text-8xl">
                {study.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                {study.summary}
              </p>
              <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col border-t-2 pt-4" style={{ borderColor: study.accent }}>
                    <dt className="order-2 mt-1 text-sm text-mist">{stat.label}</dt>
                    <dd className="order-1 font-mono text-2xl font-bold" style={{ color: study.accent }}>
                      <StatCounter value={stat.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <Reveal>
              <figure className="overflow-hidden border border-hairline bg-coal shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-3 border-b border-hairline bg-night px-4 py-3">
                  <div aria-hidden="true" className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                    <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                    <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                  </div>
                  {study.demoUrl ? (
                    <a
                      href={study.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 truncate rounded-sm border border-hairline bg-coal px-3 py-1 text-center font-mono text-xs text-mist transition-colors hover:text-flare"
                    >
                      View live demo ↗
                    </a>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-12 pt-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <section aria-labelledby="challenge-heading">
              <Reveal>
                <h2
                  id="challenge-heading"
                  className="type-wide text-3xl font-black uppercase leading-none text-ink md:text-4xl"
                >
                  The challenge
                </h2>
                <div className="mt-5 max-w-2xl space-y-4">
                  {study.challenge.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-mist">
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
                  className="type-wide text-3xl font-black uppercase leading-none text-ink md:text-4xl"
                >
                  What we did
                </h2>
              </Reveal>
              <div className="mt-7 space-y-7">
                {study.approach.map((step, index) => (
                  <Reveal key={step.name} delay={index * 0.05}>
                    <div className="border-l-2 pl-6" style={{ borderColor: study.accent }}>
                      <h3 className="text-lg font-bold text-ink">{step.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
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
                  className="type-wide text-3xl font-black uppercase leading-none text-ink md:text-4xl"
                >
                  The outcome
                </h2>
                <div className="mt-5 max-w-2xl space-y-4">
                  {study.outcome.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-mist">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              {study.quote && (
                <Reveal className="mt-8">
                  <figure className="bg-paper p-8 text-night">
                    <blockquote className="font-serif text-2xl italic leading-snug md:text-3xl">
                      “{study.quote.text}”
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-stone">
                      {study.quote.author} · {study.quote.role}
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </section>
          </div>

          <aside className="h-fit space-y-8 border border-hairline bg-coal p-7 lg:sticky lg:top-28">
            {service && (
              <div>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-mist">
                  Service
                </h2>
                <Link
                  href={`/services/${service.slug}`}
                  className="type-wide mt-2 inline-block text-lg font-black uppercase text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-flare"
                >
                  {service.name}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {service.teaser}
                </p>
              </div>
            )}
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-mist">
                Built with
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-hairline px-3 py-1 font-mono text-xs text-mist"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-hairline pt-6">
              <p className="text-sm leading-relaxed text-mist">
                Facing something similar in your business?
              </p>
              <BookCallButton className="mt-4 w-full" />
            </div>
          </aside>
        </div>

        <nav
          aria-label="Next case study"
          className="mt-16 flex items-center justify-between border-t border-hairline pt-8"
        >
          <Link
            href="/portfolio"
            className="font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-flare"
          >
            ← All work
          </Link>
          <Link
            href={`/portfolio/${nextStudy.slug}`}
            className="type-wide text-lg font-black uppercase text-ink transition-colors hover:text-flare"
          >
            Next: {nextStudy.name} →
          </Link>
        </nav>
      </article>

      <CtaBanner title={`Want a result like ${study.name}'s?`} />
    </>
  );
}
