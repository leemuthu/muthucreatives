import type { Faq } from "@/lib/faqs";

type FaqListProps = {
  items: Faq[];
  surface?: "paper" | "night";
};

export default function FaqList({ items, surface = "paper" }: FaqListProps) {
  const border = surface === "paper" ? "divide-hairline-paper border-hairline-paper" : "divide-hairline border-hairline";
  const question = surface === "paper" ? "text-night" : "text-ink";
  const answer = surface === "paper" ? "text-stone" : "text-mist";

  return (
    <div className={`divide-y border-y ${border}`}>
      {items.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium ${question} [&::-webkit-details-marker]:hidden`}
          >
            {faq.question}
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-lg text-flare transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className={`mt-3 max-w-2xl text-sm leading-relaxed ${answer}`}>
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
