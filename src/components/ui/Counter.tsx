"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 1200,
}: {
  end: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const num = parseFloat(end);
            const step = (t: number) => {
              const p = Math.min((t - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(num * eased);
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  const isInt = !String(end).includes(".");
  const display = isInt ? Math.round(val) : val.toFixed(2);
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
