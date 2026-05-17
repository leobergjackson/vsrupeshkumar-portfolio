"use client";

import { useReveal } from "@/hooks/useReveal";
import { Counter } from "@/components/ui/Counter";
import { BgMascotTile, BgTerminal, BgWorldMap, BgSpeak } from "@/components/visuals/Visuals";
import { certifications } from "@/lib/data";

export function Edge() {
  const ref = useReveal();
  return (
    <section id="edge" ref={ref}>
      <div className="watermark"><span>My Edge</span></div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Achievements</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>My Edge</h2>
          <p className="section-sub" style={{ margin: "20px auto 0" }}>
            The receipts behind the resume — competitive programming, hackathons, public speaking, and a footprint that spans three continents.
          </p>
        </div>

        <div className="bento">
          <div className="bento-tile white reveal">
            <div className="stat-num"><Counter end="1100" suffix="+" /></div>
            <div className="stat-label">DSA problems solved</div>
          </div>
          <div className="bento-tile visual reveal">
            <div className="bento-visual"><BgMascotTile /></div>
          </div>
          <div className="bento-tile neon reveal">
            <div className="stat-num">Top 3.51%</div>
            <div className="stat-label">LeetCode worldwide</div>
          </div>
          <div className="bento-tile visual reveal">
            <div className="bento-visual"><BgTerminal /></div>
          </div>

          <div className="bento-tile visual reveal">
            <div className="bento-visual"><BgWorldMap /></div>
          </div>
          <div className="bento-tile dark reveal">
            <div className="stat-num"><Counter end="10" suffix="+" /></div>
            <div className="stat-label">hackathon finals</div>
          </div>
          <div className="bento-tile visual reveal">
            <div className="bento-visual"><BgSpeak /></div>
          </div>
          <div className="bento-tile neon reveal">
            <div className="stat-num"><Counter end="3" /></div>
            <div className="stat-label">continents explored</div>
          </div>
        </div>

        <div className="cert-strip">
          {certifications.map((c, i) => (
            <div key={i} className="cert-tile">
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
