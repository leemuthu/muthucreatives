import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { getCaseStudy } from "@/lib/case-studies";

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="bg-paper text-night">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
                What we build
              </p>
              <h2
                id="services-heading"
                className="type-wide mt-4 max-w-2xl text-5xl font-black uppercase leading-[0.95] md:text-7xl"
              >
                Five things, done right.
              </h2>
            </div>
            <Link
              href="/services"
              className="font-mono text-xs uppercase tracking-widest text-stone transition-colors hover:text-flare"
            >
              All services →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14">
          {services.map((service) => {
            const proof = getCaseStudy(service.caseStudySlugs[0]);
            return (
              <Reveal key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block overflow-hidden border-t border-hairline-paper py-8 transition-colors last:border-b hover:bg-night md:py-10"
                >
                  <div className="relative z-10 grid items-center gap-4 px-1 md:grid-cols-[1fr_auto] md:gap-10 md:px-4">
                    <div>
                      <h3 className="type-wide text-3xl font-black uppercase leading-none transition-colors group-hover:text-ink md:text-5xl">
                        {service.name}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone transition-colors group-hover:text-mist md:text-base">
                        {service.teaser}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 md:flex-col md:items-end md:gap-2">
                      <p className="font-mono text-xs tracking-wide text-stone transition-colors group-hover:text-mist">
                        {service.timelineShort}
                      </p>
                      <span
                        aria-hidden="true"
                        className="text-2xl text-flare transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                  {proof && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-56 top-1/2 z-0 hidden w-64 -translate-y-1/2 rotate-2 opacity-0 transition-all duration-500 group-hover:-rotate-1 group-hover:opacity-100 lg:block"
                    >
                      <Image
                        src={proof.image}
                        alt=""
                        width={512}
                        height={320}
                        className="border border-ink/20 object-cover"
                      />
                    </div>
                  )}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
