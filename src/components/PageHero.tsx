import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <header className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
        {eyebrow}
      </p>
      <h1 className="type-wide mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] text-ink md:text-7xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">{lede}</p>
      )}
      {children}
    </header>
  );
}
