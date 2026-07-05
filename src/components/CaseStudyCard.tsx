import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const headlineStat = study.stats[0];

  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group flex h-full flex-col border border-line bg-surface transition-colors hover:border-brass/50"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${study.cover.from} 0%, ${study.cover.to} 90%)`,
        }}
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
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-line p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {study.industry}
        </p>
        <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-brass">
          {study.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{study.summary}</p>
        <p className="mt-auto pt-3 text-sm text-ink">
          <span className="font-mono text-brass">{headlineStat.value}</span>{" "}
          <span className="text-muted">{headlineStat.label}</span>
        </p>
      </div>
    </Link>
  );
}
