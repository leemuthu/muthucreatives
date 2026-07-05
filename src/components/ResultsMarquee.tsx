const results = [
  "Landing pages live in 48 hours",
  "3 hrs/day saved with one automation",
  "Lighthouse 100 SEO scores",
  "No templates — ever",
  "Fixed-price proposals in writing",
  "Houston, TX · clients nationwide",
];

function TrackItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {results.map((result) => (
        <li
          key={result}
          className="flex shrink-0 items-center gap-6 pr-6 font-mono text-xs uppercase tracking-widest text-muted"
        >
          {result}
          <span aria-hidden="true" className="text-brass">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ResultsMarquee() {
  return (
    <aside
      aria-label="Results at a glance"
      className="overflow-hidden border-y border-line bg-surface py-4"
    >
      <div className="marquee-track flex w-max">
        <TrackItems />
        <TrackItems hidden />
      </div>
    </aside>
  );
}
