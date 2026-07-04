import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="font-display text-xl text-ink">
              Muthu <span className="italic text-brass">Creatives</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Muthu Creatives is a web design studio in Houston, TX, founded by
              Lee Muthu. We build custom websites, web apps, and automations
              for small and mid-sized businesses across the country — no
              templates, no handoffs.
            </p>
            <p className="mt-4 font-mono text-xs tracking-wide text-muted">
              {site.serviceArea}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block font-mono text-xs tracking-wide text-brass hover:text-ink"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Services">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ink/80 transition-colors hover:text-brass"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted transition-colors hover:text-brass"
                >
                  All services
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Work">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Work
            </h2>
            <ul className="mt-4 space-y-2.5">
              {caseStudies.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="text-sm text-ink/80 transition-colors hover:text-brass"
                  >
                    {study.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted transition-colors hover:text-brass"
                >
                  All work
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-ink/80 transition-colors hover:text-brass"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ink/80 transition-colors hover:text-brass"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brass transition-colors hover:text-ink"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Muthu Creatives · Houston, TX
          </p>
          <div className="flex gap-5">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass"
            >
              Instagram
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass"
            >
              LinkedIn
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
