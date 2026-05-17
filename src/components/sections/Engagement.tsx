"use client";

import { useReveal } from "@/hooks/useReveal";

export function Engagement({ openDrawer }: { openDrawer: () => void }) {
  const ref = useReveal();
  return (
    <section id="engagement" ref={ref}>
      <div className="watermark"><span>Open To</span></div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Engagement Model</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>Open To</h2>
          <p className="section-sub" style={{ margin: "20px auto 0" }}>
            Here&apos;s how we can work together.
          </p>
        </div>

        <div className="engage-row">
          <div className="engage-card dark reveal">
            <div className="num">01</div>
            <div className="label">Collaboration Type</div>
            <div className="title">Full Project Collaboration</div>
            <p className="desc">
              From zero to shipped — I take end-to-end ownership of complex systems, from architecture decisions through backend and frontend to deployment.
            </p>
            <ul>
              <li><span className="check">✓</span> System architecture and design</li>
              <li><span className="check">✓</span> Frontend + backend full delivery</li>
              <li><span className="check">✓</span> Open-source and research projects</li>
              <li><span className="check">✓</span> Solo or team embedded roles</li>
            </ul>
          </div>

          <div className="engage-card neon reveal">
            <div className="num">02</div>
            <div className="label">Right Now</div>
            <div className="title">Internships & Research</div>
            <p className="desc">
              Looking for summer internships, research collaborations, and open-source partnerships at the intersection of AI, Web3, and full-stack engineering.
            </p>
            <ul>
              <li><span className="check">✓</span> AI / ML engineering roles</li>
              <li><span className="check">✓</span> Full stack SDE internships</li>
              <li><span className="check">✓</span> Academic research collaborations</li>
              <li><span className="check">✓</span> Open-source project partnerships</li>
            </ul>
          </div>
        </div>

        <div className="engage-cta reveal">
          <button className="cta" onClick={openDrawer}>
            <span className="cta-text">Get in Touch</span>
            <span className="cta-circle">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
