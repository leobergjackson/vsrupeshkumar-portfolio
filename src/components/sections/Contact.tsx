"use client";

import { useReveal } from "@/hooks/useReveal";
import { identity } from "@/lib/data";

export function Contact({ openDrawer }: { openDrawer: () => void }) {
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} style={{ paddingTop: 80 }}>
      <div className="container">
        <div className="contact-cta reveal">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Want to Collaborate?</div>
          <h2>Let&apos;s Connect</h2>
          <p>Open to internships, research, and building hard things together.</p>
          <button className="cta" onClick={openDrawer}>
            <span className="cta-text">Send a Message</span>
            <span className="cta-circle">→</span>
          </button>
        </div>

        <div className="footer-grid">
          <div>
            <div className="footer-label">Want to Reach Out?</div>
            <div className="footer-item"><a href={`mailto:${identity.email}`}>{identity.email}</a></div>
            <div className="footer-item"><a href={`tel:${identity.phone.replace(/\s/g, "")}`}>{identity.phone}</a></div>
          </div>
          <div>
            <div className="footer-label">Based In</div>
            <div className="footer-item">Chennai, India</div>
            <div className="footer-item muted">Open to remote and on-site globally</div>
          </div>
          <div>
            <div className="footer-label">Stay in the Loop</div>
            <div className="footer-socials">
              <a className="social-btn" href={identity.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A12 12 0 0 0 12 .5" /></svg>
              </a>
              <a className="social-btn" href={identity.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM7.7 18.7H5V10h2.7v8.7zM6.4 8.8a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM19 18.7h-2.7v-4.2c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7v4.2H10.9V10h2.6v1.1c.4-.6 1-1.3 2.4-1.3 1.8 0 3.1 1.2 3.1 3.7v5.2z" /></svg>
              </a>
              <a className="social-btn" href={`mailto:${identity.email}`} aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18v12H3z" /><path d="M3 7l9 7 9-7" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <div>Chennai, India · Open to Global Opportunities</div>
          <div className="center">Made with React · CSS Grid · SVG · and too many late nights</div>
          <div>Built by Rupesh Kumar V S · 2026</div>
        </div>
      </div>
    </section>
  );
}
