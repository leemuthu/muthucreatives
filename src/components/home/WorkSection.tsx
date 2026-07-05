import Link from "next/link";
import Image from "next/image";
import BookCallButton from "@/components/BookCallButton";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { caseStudies } from "@/lib/case-studies";

export default function WorkSection() {
  const featured = caseStudies.filter((study) => study.featured);
  const rest = caseStudies.filter((study) => !study.featured);

  return (
    <section aria-labelledby="work-heading" className="bg-night">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
                Proof
              </p>
              <h2
                id="work-heading"
                className="type-wide mt-4 max-w-2xl text-5xl font-black uppercase leading-[0.95] text-ink md:text-7xl"
              >
                The work does the talking.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-flare"
            >
              All six projects →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14">
          {featured.map((study, index) => (
            <div
              key={study.slug}
              className="md:sticky"
              style={{ top: `${5.5 + index * 2}rem` }}
            >
              <article
                className="mb-8 grid overflow-hidden border border-hairline bg-coal md:grid-cols-[5fr_6fr]"
                style={{ borderTopColor: study.accent, borderTopWidth: 3 }}
              >
                <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-mist">
                      {study.industry}
                    </p>
                    <h3 className="type-wide mt-3 text-4xl font-black uppercase leading-none text-ink md:text-5xl">
                      {study.name}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-mist md:text-base">
                      {study.summary}
                    </p>
                  </div>
                  <div>
                    <dl className="grid grid-cols-3 gap-4 border-t border-hairline pt-5">
                      {study.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <dt className="order-2 mt-1 text-xs leading-snug text-mist">
                            {stat.label}
                          </dt>
                          <dd
                            className="order-1 font-mono text-xl font-bold md:text-2xl"
                            style={{ color: study.accent }}
                          >
                            <StatCounter value={stat.value} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:text-flare"
                    >
                      Read the case study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="group relative block min-h-64 overflow-hidden border-t border-hairline md:border-l md:border-t-0"
                >
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </Link>
              </article>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col justify-between gap-6 border border-hairline bg-coal p-7 md:flex-row md:items-center md:p-9">
            <div>
              <p className="text-base text-ink">
                Plus {rest.map((study) => study.name).join(", ")}.
              </p>
              <p className="mt-1 text-sm text-mist">
                Every project ships with a number attached, not just a screenshot.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="/portfolio"
                className="font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-flare"
              >
                See all →
              </Link>
              <BookCallButton />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
