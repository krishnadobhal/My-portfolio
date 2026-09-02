"use client";

import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { useLenis } from "@/components/providers/lenis-provider";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "top", label: "Introduction" },
  { id: "now", label: "Now" },
  { id: "stats", label: "Numbers" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

const spring = { type: "spring" as const, stiffness: 320, damping: 32 };

// y stays in the variants: motion writes an inline transform that would
// otherwise drop Tailwind's -translate-y-1/2 centering.
const railVariants = {
  hidden: { opacity: 0, x: -16, y: "-50%" },
  shown: {
    opacity: 1,
    x: 0,
    y: "-50%",
    transition: { staggerChildren: 0.045 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  shown: { opacity: 1, x: 0 },
};

/** Tick rail that replaces the native scrollbar: marks every section, names
 *  the one you are in, and scrolls to any of them. */
export function SectionRail() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const lenis = useLenis();

  useEffect(() => {
    // Thin band across the viewport middle — whatever sits there is "active".
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth" });
  };

  // Hidden over the hero, and over the solid-amber contact panel.
  const shown = active !== "top" && active !== "contact";

  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        aria-label="Sections"
        variants={railVariants}
        initial="hidden"
        animate={shown ? "shown" : "hidden"}
        whileHover="hover"
        transition={spring}
        className={cn(
          "group fixed left-3 top-1/2 z-40 hidden flex-col gap-2 lg:flex",
          !shown && "pointer-events-none",
        )}
      >
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <motion.button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              aria-current={isActive ? "true" : undefined}
              variants={itemVariants}
              transition={spring}
              className="flex items-center gap-2"
            >
              <motion.span
                variants={{
                  hidden: { width: 10 },
                  shown: { width: isActive ? 22 : 10 },
                  hover: { width: 22 },
                }}
                transition={spring}
                className={cn(
                  "h-px shrink-0",
                  isActive ? "bg-amber" : "bg-line-strong",
                )}
              />
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -4 },
                  shown: { opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={spring}
                className={cn(
                  "whitespace-nowrap rounded-full px-2 py-px text-[11px] leading-5",
                  isActive
                    ? "bg-paper/10 text-paper"
                    : "bg-paper/[0.06] text-paper/50",
                )}
              >
                {section.label}
              </motion.span>
            </motion.button>
          );
        })}
      </motion.nav>
    </MotionConfig>
  );
}
