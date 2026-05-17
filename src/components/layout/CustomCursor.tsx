'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dx = 0,
      dy = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      }
    };

    let raf: number;
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button, .interactive');
      document.body.classList.toggle('cursor-hover', !!target);
    };

    // Only enable on desktop with hover support
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (canHover) {
      document.body.classList.add('has-cursor');
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseover', onOver);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.body.classList.remove('has-cursor');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
