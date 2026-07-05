import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const headlineStat = study.stats[0];

  return (
    <div
      className="group flex h-full flex-col border border-hairline bg-coal transition-colors hover:border-flare/60"
      style={{ borderTopColor: study.accent, borderTopWidth: 3 }}
    >
      <Link
        href={`/portfolio/${study.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <div className="absolute inset-0 h-[135%] transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[26%]">
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 border-t border-hairline p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-mist">
          {study.industry}
        </p>
        <Link href={`/portfolio/${study.slug}`}>
          <h3 className="type-wide break-words text-2xl font-black uppercase leading-none text-ink transition-colors group-hover:text-flare">
            {study.name}
          </h3>
        </Link>
        <p className="text-sm leading-relaxed text-mist">{study.summary}</p>
        <p className="text-sm">
          <span className="font-mono font-bold" style={{ color: study.accent }}>
            {headlineStat.value}
          </span>{" "}
          <span className="text-mist">{headlineStat.label}</span>
        </p>
        <div className="mt-auto flex items-center gap-5 pt-3">
          <Link
            href={`/portfolio/${study.slug}`}
            className="font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:text-flare"
          >
            Case study →
          </Link>
          {study.demoUrl && (
            <a
              href={study.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-flare"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
