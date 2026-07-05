"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type StatCounterProps = {
  value: string;
  className?: string;
};

const NUMBER_PATTERN = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/;

export default function StatCounter({ value, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState<string | null>(null);

  const match = value.match(NUMBER_PATTERN);

  useEffect(() => {
    if (!match || !inView || prefersReducedMotion) return;
    const [, prefix, numeric, suffix] = match;
    const target = parseFloat(numeric);
    const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
    const duration = 1100;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {display ?? (match && !prefersReducedMotion ? `${match[1]}0${match[3]}` : value)}
    </span>
  );
}
