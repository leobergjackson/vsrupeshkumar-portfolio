"use client";

import { useReveal } from "@/hooks/useReveal";
import { logoRowA, logoRowB, programs } from "@/lib/data";

export function Programs() {
  const ref = useReveal();
  const rowA = [...logoRowA, ...logoRowA];
  const rowB = [...logoRowB, ...logoRowB];
  return (
    <section id="programs" ref={ref}>
      <div className="watermark"><span>Global</span></div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>3 Continents · 5 Programs</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>Global Programs</h2>
          <p className="section-sub" style={{ margin: "20px auto 0" }}>
            Crossing borders to learn from the best — research programs, engineering immersions, and industry exposure across three continents.
          </p>
        </div>

        <div className="logo-ticker reveal">
          <div className="logo-row">
            {rowA.map((l, i) => (
              <div key={`a${i}`} className="logo-tile">{l}</div>
            ))}
          </div>
          <div className="logo-row reverse">
            {rowB.map((l, i) => (
              <div key={`b${i}`} className="logo-tile">{l}</div>
            ))}
          </div>
        </div>

        <div className="programs-row">
          {programs.map((p) => (
            <div key={p.loc} className="program-card reveal">
              <div className="program-flag">{p.flag}</div>
              <div className="program-loc">{p.loc}</div>
              <div className="program-date">{p.date}</div>
              <div className="program-inst">{p.inst}</div>
              <p className="program-desc">{p.desc}</p>
              <div className="program-tags">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
