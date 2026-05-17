"use client";

import { useEffect, useRef, useState } from "react";
import { StarMascot } from "@/components/visuals/Visuals";
import { heroCopy, identity, typingPhrases } from "@/lib/data";

type Theme = "dark" | "light";

function HeroParticles() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    const N = window.innerWidth < 768 ? 22 : 50;
    const parts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 0.8 + Math.random() * 1.4,
    }));
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d = Math.hypot(dx, dy);
          const maxD = 140 * window.devicePixelRatio;
          if (d < maxD) {
            ctx.strokeStyle = `rgba(0,255,178,${(1 - d / maxD) * 0.18})`;
            ctx.lineWidth = window.devicePixelRatio * 0.5;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.fillStyle = "rgba(0,255,178,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <canvas ref={ref} className="hero-particles" />;
}

export function Hero({ theme }: { theme: Theme }) {
  const [typed, setTyped] = useState("");
  const idx = useRef(0);
  const ch = useRef(0);
  const phase = useRef<"typing" | "hold" | "deleting">("typing");

  useEffect(() => {
    let to: ReturnType<typeof setTimeout>;
    const tick = () => {
      const phrases = typingPhrases;
      const cur = phrases[idx.current];
      if (phase.current === "typing") {
        ch.current++;
        setTyped(cur.slice(0, ch.current));
        if (ch.current >= cur.length) {
          phase.current = "hold";
          to = setTimeout(tick, 1800);
          return;
        }
        to = setTimeout(tick, 40 + Math.random() * 50);
      } else if (phase.current === "hold") {
        phase.current = "deleting";
        to = setTimeout(tick, 30);
      } else {
        ch.current--;
        setTyped(cur.slice(0, ch.current));
        if (ch.current <= 0) {
          idx.current = (idx.current + 1) % phrases.length;
          phase.current = "typing";
          to = setTimeout(tick, 200);
        } else {
          to = setTimeout(tick, 20);
        }
      }
    };
    to = setTimeout(tick, 600);
    return () => clearTimeout(to);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <HeroParticles />

      <div className="live-pill">
        <span className="pulse" />
        Open to opportunities
      </div>

      <div className="hero-mascot-wrap">
        <div className="hero-mascot">
          <StarMascot light={theme === "light"} />
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="hero-line">
            <span>{heroCopy.line1}</span>
          </span>
          <span className="hero-line">
            <span>{heroCopy.line2}</span>
          </span>
          <span className="hero-line">
            <span>{heroCopy.line3}</span>
          </span>
        </h1>

        <div className="hero-subline">
          AI / ML Engineer · Web3 Builder · Full Stack · Open-Source Contributor
        </div>

        <div className="hero-typing">{typed || " "}</div>

        <p className="hero-body">{heroCopy.body}</p>

        <div className="hero-ctas">
          <a className="cta" href="#projects">
            <span className="cta-text">View My Work</span>
            <span className="cta-circle">→</span>
          </a>
          <a className="cta ghost" href={identity.github} target="_blank" rel="noreferrer">
            <span className="cta-text">Download Resume</span>
            <span className="cta-circle">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-corner bl">
        <a href={identity.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="dot">·</span>
        <a href={identity.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span className="dot">·</span>
        <a href={`mailto:${identity.email}`}>Email</a>
      </div>
      <div className="hero-corner br">Scroll to explore ↓</div>

      <a className="hero-scroll" href="#projects" aria-label="Scroll">
        ↓
      </a>
    </section>
  );
}
