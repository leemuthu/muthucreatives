const items = [
  "Landing pages",
  "Business sites",
  "Web apps",
  "Automations",
];

function TrackItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li
          key={item}
          className="type-wide flex shrink-0 items-baseline gap-8 pr-8 text-6xl font-black uppercase leading-none md:text-8xl"
        >
          <span className="text-outline-ink">{item}</span>
          <span aria-hidden="true" className="text-3xl text-flare md:text-5xl">
            *
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ResultsMarquee() {
  return (
    <aside
      aria-label="What we build"
      className="overflow-hidden border-y border-hairline bg-night py-8 md:py-10"
    >
      <div className="marquee-track flex w-max">
        <TrackItems />
        <TrackItems hidden />
      </div>
    </aside>
  );
}
