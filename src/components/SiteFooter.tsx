"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";
import { useBookingModal } from "@/components/BookingModal";

export default function SiteFooter() {
  const { openModal } = useBookingModal();
  return (
    <footer className="overflow-hidden border-t border-hairline bg-night">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="type-wide text-sm font-black uppercase text-ink">
              Muthu<span className="text-flare">*</span>Creatives
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              A web design agency in Houston, TX, founded by Lee Muthu, who
              leads every engagement personally. We build custom websites,
              web apps and automations for small and mid-sized businesses
              across the country. Everything from scratch, nothing from a
              template.
            </p>
            <p className="mt-4 font-mono text-xs tracking-wide text-mist">
              {site.serviceArea}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block font-mono text-xs tracking-wide text-flare hover:text-ink"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Services">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-mist">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ink/80 transition-colors hover:text-flare"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-mist transition-colors hover:text-flare"
                >
                  All services
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Work">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-mist">
              Work
            </h2>
            <ul className="mt-4 space-y-2.5">
              {caseStudies.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="text-sm text-ink/80 transition-colors hover:text-flare"
                  >
                    {study.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-mist transition-colors hover:text-flare"
                >
                  All work
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-mist">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-ink/80 transition-colors hover:text-flare"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ink/80 transition-colors hover:text-flare"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openModal}
                  className="text-sm text-flare transition-colors hover:text-ink"
                >
                  Book a call ↗
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-6 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Muthu Creatives · Houston, TX</p>
          <div className="flex gap-5 font-mono uppercase tracking-widest">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-flare"
            >
              IG
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-flare"
            >
              LI
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-flare"
            >
              FB
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="type-wide -mb-6 select-none whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none text-outline-ink md:-mb-10"
      >
        Muthu Creatives
      </p>
    </footer>
  );
}
