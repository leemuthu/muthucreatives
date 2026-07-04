import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="border-t border-line" id="process">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            How it works
          </p>
          <h2
            id="process-heading"
            className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            Four steps. No surprises.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            We ask the right questions up front, put everything in writing, and
            keep you looking at real work — not status reports.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.name}>
              <Reveal
                delay={index * 0.08}
                className="flex h-full flex-col gap-3 border-t border-brass/40 pt-5"
              >
                <span className="font-mono text-xs tracking-widest text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-ink">{step.name}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
