import { clsx } from "clsx";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

// clsx, not the tailwind-merge-backed `cn` — twMerge treats our custom
// `text-label` class as conflicting with `text-amber` (both start with
// `text-`) and silently drops one. No real utility conflict here, so a
// plain join is correct.
export function TechTag({ children, className }: TechTagProps) {
  return (
    <span className={clsx("text-label text-amber", className)}>{children}</span>
  );
}
