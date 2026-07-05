import Link from "next/link";
import Image from "next/image";
import BookCallButton from "@/components/BookCallButton";
import Magnetic from "@/components/Magnetic";
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
    <section className="relative overflow-hidden border-t border-line bg-surface">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 100%, rgba(201, 168, 112, 0.1), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <BookCallButton size="lg" />
            </Magnetic>
            <Link
              href="/contact"
              className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              or send a project brief
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/about/lee-muthu.jpg"
              alt="Lee Muthu, founder of Muthu Creatives"
              width={40}
              height={40}
              className="rounded-full border border-brass/40 object-cover"
            />
            <p className="text-left font-mono text-xs tracking-wide text-muted">
              You&apos;ll talk directly with Lee — the founder,
              <br className="hidden sm:block" /> who also builds every project.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
