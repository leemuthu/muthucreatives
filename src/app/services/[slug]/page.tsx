import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CaseStudyCard from "@/components/CaseStudyCard";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import BookCallButton from "@/components/BookCallButton";
import { getService, services } from "@/lib/services";
import { getCaseStudy } from "@/lib/case-studies";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedStudies = service.caseStudySlugs
    .map(getCaseStudy)
    .filter((study) => study !== undefined);
  const otherServices = services.filter((other) => other.slug !== service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "Country", name: "United States" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHero eyebrow={`Services / ${service.name}`} title={service.tagline}>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <BookCallButton size="lg" />
          <p className="font-mono text-xs tracking-wide text-muted">
            Free 20-minute call · Fixed-price proposal in writing
          </p>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <Reveal className="max-w-2xl space-y-5">
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <section aria-labelledby="included-heading" className="mt-16">
          <Reveal>
            <h2
              id="included-heading"
              className="font-display text-3xl text-ink md:text-4xl"
            >
              What&apos;s included
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05} className="h-full">
                <div className="h-full bg-night p-6">
                  <h3 className="text-base text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="fit-heading"
          className="mt-16 grid gap-10 lg:grid-cols-2"
        >
          <Reveal>
            <h2 id="fit-heading" className="font-display text-3xl text-ink">
              Who this is for
            </h2>
            <ul className="mt-6 space-y-3">
              {service.forWho.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-0.5 text-brass">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-line bg-surface p-7">
              <h2 className="font-display text-2xl text-ink">
                Investment &amp; timeline
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink">
                {service.pricing}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.timeline}
              </p>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="service-process-heading" className="mt-16">
          <Reveal>
            <h2
              id="service-process-heading"
              className="font-display text-3xl text-ink md:text-4xl"
            >
              How a {service.shortName.toLowerCase()} project runs
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.processNotes.map((step, index) => (
              <li key={step.name}>
                <Reveal
                  delay={index * 0.06}
                  className="flex h-full flex-col gap-3 border-t border-brass/40 pt-5"
                >
                  <span className="font-mono text-xs tracking-widest text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-ink">{step.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {relatedStudies.length > 0 && (
          <section aria-labelledby="proof-heading" className="mt-16">
            <Reveal>
              <h2
                id="proof-heading"
                className="font-display text-3xl text-ink md:text-4xl"
              >
                {service.name} we&apos;ve shipped
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedStudies.map((study, index) => (
                <Reveal key={study.slug} delay={index * 0.08} className="h-full">
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="service-faq-heading" className="mt-16">
          <Reveal>
            <h2
              id="service-faq-heading"
              className="font-display text-3xl text-ink md:text-4xl"
            >
              {service.name} questions
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <FaqList items={service.faqs} />
          </Reveal>
        </section>

        <nav aria-label="Other services" className="mt-16 border-t border-line pt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Also from Muthu Creatives
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="text-sm text-ink transition-colors hover:text-brass"
                >
                  {other.name} →
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <CtaBanner
        title={`Let's talk about your ${service.shortName.toLowerCase()} project.`}
      />
    </>
  );
}
