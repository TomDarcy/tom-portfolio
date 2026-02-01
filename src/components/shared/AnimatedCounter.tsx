"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1500,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Handle string values (like "~50")
    if (typeof value === "string") {
      setCount(value as any);
      setHasAnimated(true);
      return;
    }

    // Animate numeric values
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(
        startValue + (endValue - startValue) * easeOut
      );

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
