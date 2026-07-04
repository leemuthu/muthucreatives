import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import BookCallButton from "@/components/BookCallButton";
import { services } from "@/lib/services";
import { getCaseStudiesForService } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Web Design & Development Services in Houston, TX",
  description:
    "Landing pages, business websites, web apps, and automations — custom-built by Muthu Creatives in Houston, TX. Fixed pricing in writing, no templates, full code ownership.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything custom. <em className="text-brass">Nothing</em> off the
            shelf.
          </>
        }
        lede="Muthu Creatives builds four things for small and mid-sized businesses: landing pages, business websites, web apps, and automations. Every project is designed and coded from scratch in Houston, TX, with a fixed price in writing before work starts."
      />

      <div className="mx-auto max-w-6xl space-y-6 px-5 pb-20 md:px-8 md:pb-28">
        {services.map((service, index) => {
          const relatedStudies = getCaseStudiesForService(service.slug);
          return (
            <Reveal key={service.slug}>
              <article className="grid gap-8 border border-line bg-surface p-7 md:grid-cols-[1fr_1fr] md:p-10">
                <div>
                  <p className="font-mono text-xs tracking-widest text-muted">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.intro[0]}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-brass transition-colors hover:text-ink"
                  >
                    Full details, pricing &amp; FAQs{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-5 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                      Typical investment
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      {service.pricing}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                      Timeline
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      {service.timeline}
                    </p>
                  </div>
                  {relatedStudies.length > 0 && (
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                        Proof
                      </h3>
                      <ul className="mt-2 space-y-1.5">
                        {relatedStudies.map((study) => (
                          <li key={study.slug}>
                            <Link
                              href={`/portfolio/${study.slug}`}
                              className="text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brass"
                            >
                              {study.name}
                            </Link>{" "}
                            <span className="text-sm text-muted">
                              — {study.stats[0].value} {study.stats[0].label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}

        <Reveal className="pt-6 text-center">
          <p className="mx-auto max-w-md text-base text-muted">
            Not sure which of the four you need? That&apos;s a normal starting
            point — it&apos;s what the discovery call is for.
          </p>
          <BookCallButton size="lg" className="mt-6" />
        </Reveal>
      </div>

      <CtaBanner />
    </>
  );
}
