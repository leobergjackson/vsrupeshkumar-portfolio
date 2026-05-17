"use client";

import { useReveal } from "@/hooks/useReveal";
import { experience } from "@/lib/data";

export function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" ref={ref}>
      <div className="watermark"><span>Experience</span></div>
      <div className="container">
        <div className="split">
          <div className="sticky reveal">
            <div className="eyebrow">Experience</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>Experience</h2>
            <p className="section-sub" style={{ marginTop: 22 }}>
              Real work. Real teams. Real shipping. Backend systems, banking workflows, and enterprise data — across three companies in 14 months.
            </p>
          </div>
          <div className="timeline">
            {experience.map((e) => (
              <div key={e.n} className="exp-card reveal">
                <div className="exp-num">{e.n}</div>
                <div>
                  <div className="exp-title">{e.title}</div>
                  <div className="exp-meta">
                    <div className="exp-company">{e.company}</div>
                    <div className="exp-date">{e.date}</div>
                  </div>
                  <p className="exp-desc">{e.desc}</p>
                  <div className="exp-tags">
                    {e.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
