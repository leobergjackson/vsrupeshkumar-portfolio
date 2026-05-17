"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { BgMap } from "@/components/visuals/Visuals";
import { filters, identity, projects } from "@/lib/data";

export function Projects() {
  const [filter, setFilter] = useState("all");
  const ref = useReveal();

  return (
    <section id="projects" ref={ref}>
      <div className="watermark"><span>PROJECTS</span></div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="eyebrow">Selected Work</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>Selected Work</h2>
          <p className="section-sub" style={{ margin: "20px auto 0" }}>
            Systems I&apos;ve built from first principles. Every project open source. From zero-knowledge credit protocols to RL benchmarks and topology-driven anomaly detectors — these are the projects that define how I think and build.
          </p>
        </div>

        <div className="filter-row reveal" style={{ justifyContent: "center" }}>
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-pill ${filter === f.id ? "active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const matches = filter === "all" || filter === p.category || filter === "opensource";
            const Bg = BgMap[p.bg];
            return (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`project-card ${p.span === "full" ? "span-2" : ""} ${!matches ? "dim" : ""} reveal`}
              >
                <div className="project-bg">{Bg && <Bg />}</div>
                <div className="project-overlay" />
                <div className="project-content">
                  <div className="project-top">
                    <span className={`chip ${p.chip.variant}`}>{p.chip.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.55)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>
                  <div className="project-bottom">
                    <div className="project-name">{p.name}</div>
                    <p className="project-tagline">{p.tagline}</p>
                    <div className="project-tech">
                      {p.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                    <div className="project-foot">
                      <span>↗ github.com/vsrupeshkumar/{p.name.replace(/\s+/g, "-")}</span>
                      <span>Open Source · MIT</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="gh-cta-card reveal"
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>More Work</div>
              <div className="title">See all on GitHub</div>
            </div>
            <span className="gh-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
