import { cn } from "@/lib/utils";

interface SectionIndexProps {
  label: string;
  number: string;
  className?: string;
}

/** Sticky chapter marker used by long list sections (Experience, Projects). */
export function SectionIndex({ label, number, className }: SectionIndexProps) {
  return (
    <div className={cn("md:sticky md:top-28", className)}>
      <div className="text-label">{label}</div>
      <div className="text-h2 text-amber mt-2">{number}</div>
    </div>
  );
}
