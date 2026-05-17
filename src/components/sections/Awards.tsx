"use client";

import { StarGlyph } from "@/components/visuals/Visuals";

export function Awards() {
  return (
    <section className="awards" style={{ padding: 0 }}>
      <div className="container">
        <div className="awards-row">
          <div className="award-card">
            <div className="award-icon lc">LC</div>
            <div className="eyebrow" style={{ marginTop: 4 }}>LeetCode</div>
            <div className="award-title">Knight Badge</div>
            <div className="award-sub">Top 3.51% worldwide · 1100+ solved</div>
          </div>

          <div className="award-card featured">
            <div className="award-icon">
              <StarGlyph size={28} color="var(--accent)" />
            </div>
            <div className="eyebrow">Competitive Programmer</div>
            <div className="award-title">Codeforces Specialist · CodeChef 4★</div>
            <div className="award-sub">1500+ CF rating · 1674 CC rating</div>
          </div>

          <div className="award-card">
            <div className="award-flags">🇮🇳 🇩🇪 🇫🇷 🇹🇼</div>
            <div className="eyebrow" style={{ marginTop: 4 }}>Global Research</div>
            <div className="award-title">3 Continents · 5 Programs</div>
            <div className="award-sub">Taiwan · Germany · France · 2025–2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
