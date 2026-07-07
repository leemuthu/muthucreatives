import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import BookCallButton from "@/components/BookCallButton";
import { services } from "@/lib/services";
import { getCaseStudiesForService } from "@/lib/case-studies";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Web Design, Development & SEO Services in Houston, TX",
  description:
    "Landing pages, business websites, web apps, automations and SEO, custom-built by Muthu Creatives in Houston. Fixed quotes in writing, no templates, you own the code.",
  ...pageSeo("/services"),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything custom.{" "}
            <span className="text-flare">Nothing off the shelf.</span>
          </>
        }
        lede="We build five things: landing pages, business websites, web apps, automations and SEO. Every one designed and coded from scratch in Houston, with a fixed quote in writing before work starts."
      />

      <div className="bg-paper text-night">
        <div className="mx-auto max-w-7xl space-y-6 px-5 py-16 md:px-10 md:py-24">
          {services.map((service) => {
            const relatedStudies = getCaseStudiesForService(service.slug);
            return (
              <Reveal key={service.slug}>
                <article className="grid gap-8 border border-hairline-paper bg-paper p-7 md:grid-cols-2 md:p-10">
                  <div>
                    <h2 className="type-wide text-3xl font-black uppercase leading-none md:text-5xl">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-stone">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-stone">
                      {service.intro[0]}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-flare transition-colors hover:text-night"
                    >
                      Full details & FAQs <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-6 border-t border-hairline-paper pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <div>
                      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-stone">
                        How it’s priced
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed">{service.investment}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-stone">
                        Timeline
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed">{service.timeline}</p>
                    </div>
                    {relatedStudies.length > 0 && (
                      <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-stone">
                          Proof
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {relatedStudies.map((study) => (
                            <li key={study.slug}>
                              <Link
                                href={`/portfolio/${study.slug}`}
                                className="text-sm underline decoration-hairline-paper underline-offset-4 transition-colors hover:text-flare"
                              >
                                {study.name}
                              </Link>{" "}
                              <span className="text-sm text-stone">
                                · {study.stats[0].value} {study.stats[0].label}
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

          <Reveal className="pt-8 text-center">
            <p className="mx-auto max-w-md text-base text-stone">
              Not sure which one you need? Normal starting point. That’s what
              the discovery call is for.
            </p>
            <BookCallButton size="lg" className="mt-6" />
          </Reveal>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
