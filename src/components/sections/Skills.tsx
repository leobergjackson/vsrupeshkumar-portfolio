"use client";

import { useReveal } from "@/hooks/useReveal";
import { identity, skills } from "@/lib/data";

export function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" ref={ref}>
      <div className="watermark"><span>Arsenal</span></div>
      <div className="container">
        <div className="split">
          <div className="sticky reveal">
            <div className="eyebrow">Technical Arsenal</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>Technical Arsenal</h2>
            <p className="section-sub" style={{ marginTop: 22 }}>
              From AI research toolchains to Web3 protocol engineering, full-stack product delivery, and competitive programming — here&apos;s the full map of how I build.
            </p>
            <a
              className="cta"
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 30 }}
            >
              <span className="cta-text">View GitHub Profile</span>
              <span className="cta-circle">→</span>
            </a>
          </div>

          <div className="skill-items">
            {skills.map((s) => (
              <div key={s.n} className="skill-item reveal">
                <div className="skill-num">{s.n}</div>
                <div className="skill-info">
                  <div className="skill-domain">{s.domain}</div>
                  <div className="skill-list">{s.items}</div>
                </div>
                <div className="skill-star">✦</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
