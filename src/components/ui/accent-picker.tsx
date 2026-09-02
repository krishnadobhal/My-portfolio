"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const ACCENTS = [
  { name: "Amber", value: "#ffb020" },
  { name: "Ember", value: "#ff6f3c" },
  { name: "Sand", value: "#e6cf8b" },
];

export function AccentPicker({ className }: { className?: string }) {
  const [active, setActive] = useState(ACCENTS[0].value);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-ink/40 px-1 py-0.5 ",
        className,
      )}
    >
      {ACCENTS.map((accent) => (
        <button
          key={accent.value}
          type="button"
          aria-label={`${accent.name} accent`}
          aria-pressed={active === accent.value}
          onClick={() => {
            document.documentElement.style.setProperty(
              "--color-amber",
              accent.value,
            );
            window.dispatchEvent(new Event("accentchange"));
            setActive(accent.value);
          }}
          className="grid h-6 w-6 place-items-center rounded-full"
        >
          {/* 24px hit area, 14px dot */}
          <span
            className={cn(
              "h-3.5 w-3.5 rounded-full ring-offset-1 ring-offset-ink transition",
              active === accent.value
                ? "ring-2 ring-paper"
                : "ring-1 ring-line-strong",
            )}
            style={{ backgroundColor: accent.value }}
          />
        </button>
      ))}
    </div>
  );
}
