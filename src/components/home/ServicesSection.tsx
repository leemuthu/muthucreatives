import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            What we build
          </p>
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2
              id="services-heading"
              className="max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl"
            >
              Four things, done properly.
            </h2>
            <Link
              href="/services"
              className="text-sm text-muted transition-colors hover:text-brass"
            >
              All services →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col gap-4 bg-night p-7 transition-colors hover:bg-surface md:p-9"
              >
                <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-brass">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.teaser}
                </p>
                <p className="mt-auto pt-2 text-sm text-brass/70 transition-colors group-hover:text-brass">
                  Explore {service.shortName.toLowerCase()} →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
