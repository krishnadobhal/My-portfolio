import { Counter } from "@/components/ui/counter";

const STATS = [
  { value: "50K", label: "Daily events resolved" },
  { value: "95+", label: "Rollover indices de-scanned" },
  { value: "40%", label: "Lower cost per verified lead" },
  { value: "75MB", label: "Resident, against 1GB GUIs" },
];

export default function Stats() {
  return (
    <section id="stats" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-16 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <Counter value={stat.value} className="text-h1 text-amber" />
            <div className="text-label mt-2 text-paper/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
