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
import Magnetic from "@/components/Magnetic";
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
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Magnetic>
            <BookCallButton size="lg" />
          </Magnetic>
          <p className="font-mono text-xs tracking-wide text-mist">
            Free 20-minute call · Fixed price in writing
          </p>
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <Reveal className="max-w-2xl space-y-5">
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-mist">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>

      <section aria-labelledby="included-heading" className="bg-paper text-night">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2
              id="included-heading"
              className="type-wide text-4xl font-black uppercase leading-none md:text-5xl"
            >
              What’s included
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px border border-hairline-paper bg-hairline-paper sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05} className="h-full">
                <div className="h-full bg-paper p-6">
                  <h3 className="text-base font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="type-wide text-3xl font-black uppercase leading-none">
                Who this is for
              </h2>
              <ul className="mt-6 space-y-3">
                {service.forWho.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                    <span aria-hidden="true" className="mt-0.5 font-bold text-flare">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-2 border-night bg-sand p-7">
                <h2 className="type-wide text-2xl font-black uppercase">
                  Pricing & timeline
                </h2>
                <p className="mt-4 text-sm leading-relaxed">{service.investment}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {service.timeline}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="service-process-heading" className="bg-night">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2
              id="service-process-heading"
              className="type-wide text-4xl font-black uppercase leading-none text-ink md:text-5xl"
            >
              How a {service.shortName.toLowerCase()} project runs
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.processNotes.map((step, index) => (
              <li key={step.name}>
                <Reveal delay={index * 0.06} className="flex h-full flex-col">
                  <span
                    aria-hidden="true"
                    className="type-narrow text-7xl font-black leading-none text-ink/15"
                  >
                    {index + 1}
                  </span>
                  <h3 className="type-wide mt-3 border-t-2 border-flare pt-3 text-lg font-black uppercase text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          {relatedStudies.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <h2 className="type-wide text-4xl font-black uppercase leading-none text-ink md:text-5xl">
                  Shipped and live
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {relatedStudies.map((study, index) => (
                  <Reveal key={study.slug} delay={index * 0.08} className="h-full">
                    <CaseStudyCard study={study} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <h2 className="type-wide text-3xl font-black uppercase leading-none text-ink">
                {service.name} questions
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <FaqList items={service.faqs} surface="night" />
            </Reveal>
          </div>

          <nav aria-label="Other services" className="mt-16 border-t border-hairline pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-mist">
              Also from Muthu Creatives
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {otherServices.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="type-wide text-lg font-black uppercase text-ink transition-colors hover:text-flare"
                  >
                    {other.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <CtaBanner
        title={`Let's talk about your ${service.shortName.toLowerCase()} project.`}
      />
    </>
  );
}
