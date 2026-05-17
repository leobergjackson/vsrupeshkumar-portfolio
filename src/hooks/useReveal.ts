"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);
  return ref;
}
