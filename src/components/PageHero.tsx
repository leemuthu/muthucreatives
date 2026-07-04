import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
      <p className="font-mono text-xs uppercase tracking-widest text-brass">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-ink md:text-6xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      )}
      {children}
    </header>
  );
}
