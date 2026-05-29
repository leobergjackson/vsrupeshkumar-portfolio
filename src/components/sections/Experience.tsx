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
              Real work. Real teams. Real shipping. Backend systems, banking workflows, and enterprise data — across four organizations.
            </p>
          </div>
          <div className="exp-list">
            {experience.map((e) => (
              <div key={e.n} className="exp-row reveal">
                <div className="exp-logo" style={{ background: e.color }}>{e.logo}</div>
                <div className="exp-body">
                  <div className="exp-title">{e.title}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-date">{e.date}</div>
                  <div className="exp-type">{e.type}</div>
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
