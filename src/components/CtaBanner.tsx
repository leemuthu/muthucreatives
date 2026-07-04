import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import Reveal from "@/components/Reveal";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
};

export default function CtaBanner({
  title = "Let's talk about your project.",
  subtitle = "A free 20-minute call. You'll leave with straight answers about scope, timeline, and price — whether or not we work together.",
}: CtaBannerProps) {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookCallButton size="lg" />
            <Link
              href="/contact"
              className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              or send a project brief
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs tracking-wide text-muted">
            Free intro call · Fixed-price proposal in writing · Houston, TX
          </p>
        </Reveal>
      </div>
    </section>
  );
}
