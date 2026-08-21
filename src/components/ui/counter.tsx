"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: string;
  className?: string;
}

/** Animates the leading number in `value` (e.g. "95+", "50K", "75MB") on scroll into view. */
export function Counter({ value, className }: CounterProps) {
  const match = value.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20, mass: 1 });

  useEffect(() => {
    if (inView && target !== null) motionValue.set(target);
  }, [inView, target, motionValue]);

  useEffect(() => {
    if (!ref.current) return;
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
    });
  }, [spring, suffix]);

  if (target === null) {
    return (
      <span className={className}>{value}</span>
    );
  }

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
