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
  subtitle = "A free 20-minute call. You'll leave knowing what it takes, what it costs and how long it runs, whether or not we work together.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-night">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 100%, rgba(241, 78, 20, 0.1), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="type-wide text-4xl font-black uppercase leading-[0.95] text-ink md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <BookCallButton size="lg" />
            </Magnetic>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-widest text-mist underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
            >
              or send a project brief
            </Link>
          </div>
          <div className="mt-9 flex items-center justify-center gap-3">
            <Image
              src="/about/lee-muthu.jpg"
              alt="Lee Muthu, founder of Muthu Creatives"
              width={40}
              height={40}
              className="rounded-full border border-flare/60 object-cover"
            />
            <p className="text-left font-mono text-xs tracking-wide text-mist">
              You’ll talk to Lee, the founder. Your contact from start to finish.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
