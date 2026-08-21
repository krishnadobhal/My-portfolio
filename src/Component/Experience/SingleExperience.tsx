interface ExperienceItemProps {
  title: string;
  duration: string;
  position: string;
  bullets: string[];
}

export default function ExperienceItem({
  title,
  duration,
  position,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className="border-b border-line py-10 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-h2">{title}</h3>
        <div className="text-nav text-paper/60">{duration}</div>
      </div>
      <div className="text-label mt-3 text-paper/60">{position}</div>

      <ul className="mt-6 flex flex-col gap-4">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-4 text-body text-paper/85">
            <span className="text-paper/40" aria-hidden="true">
              —
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
