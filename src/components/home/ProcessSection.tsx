import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      id="process"
      className="bg-paper text-night"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-flare">
            How it works
          </p>
          <h2
            id="process-heading"
            className="type-wide mt-4 max-w-2xl text-5xl font-black uppercase leading-[0.95] md:text-7xl"
          >
            Four steps. Zero surprises.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
            We ask the right questions up front and put everything in writing.
            You always know what’s happening and what it costs.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.name}>
              <Reveal delay={index * 0.08} className="flex h-full flex-col">
                <span
                  aria-hidden="true"
                  className="type-narrow text-8xl font-black leading-none text-night/15"
                >
                  {index + 1}
                </span>
                <h3 className="type-wide mt-4 border-t-2 border-night pt-4 text-xl font-black uppercase">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
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
