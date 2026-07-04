import Link from "next/link";
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
        aria-hidden="true"
        className="flex h-44 items-end justify-between p-5"
        style={{
          background: `linear-gradient(135deg, ${study.cover.from} 0%, ${study.cover.to} 90%)`,
        }}
      >
        <span className="font-display text-5xl italic text-ink/25 transition-colors group-hover:text-brass/40">
          {study.cover.glyph}
        </span>
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
