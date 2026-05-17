"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    document.body.classList.add("has-cursor");
    const dot = dotRef.current;
    const ring = ringRef.current;
    let dx = 0,
      dy = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot) dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
    };

    let raf = 0;
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const t = target?.closest("a, button, .filter-pill, .faq-q, .cta, .project-card");
      document.body.classList.toggle("cursor-hover", !!t);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />
    </>
  );
}
