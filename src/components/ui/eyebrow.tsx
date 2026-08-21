import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3 text-amber", className)}>
      <span className="h-px w-6 bg-amber" aria-hidden="true" />
      <span className="text-label">{children}</span>
    </div>
  );
}
