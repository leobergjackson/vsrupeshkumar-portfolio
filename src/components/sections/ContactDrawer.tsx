"use client";

import { useEffect, useState } from "react";
import { identity } from "@/lib/data";

export function ContactDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ first: "", last: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm({ first: "", last: "", email: "", org: "", message: "" });
    }, 1800);
  };

  const f = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <div className={`drawer-scrim ${open ? "open" : ""}`} onClick={onClose} />
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-head">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h3 style={{ marginTop: 8 }}>Let&apos;s connect</h3>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <p className="intro">
          Drop your details below and I&apos;ll get back within 24 hours. Whether it&apos;s an internship, a research collaboration, or an idea you want to build — let&apos;s talk.
        </p>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--accent)",
                color: "#000",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                margin: "0 auto 20px",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24 }}>Message sent</h3>
            <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
              I&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div className="field">
                <input type="text" placeholder=" " required value={form.first} onChange={f("first")} />
                <label>First name</label>
              </div>
              <div className="field">
                <input type="text" placeholder=" " required value={form.last} onChange={f("last")} />
                <label>Last name</label>
              </div>
            </div>
            <div className="field">
              <input type="email" placeholder=" " required value={form.email} onChange={f("email")} />
              <label>Email address</label>
            </div>
            <div className="field">
              <input type="text" placeholder=" " value={form.org} onChange={f("org")} />
              <label>Organization / University</label>
            </div>
            <div className="field">
              <textarea placeholder=" " required value={form.message} onChange={f("message")} />
              <label>Message</label>
            </div>
            <p className="privacy">By submitting, I confirm I&apos;ve read Rupesh&apos;s privacy policy.</p>
            <button type="submit" className="cta submit">
              <span className="cta-text">Send message</span>
              <span className="cta-circle">→</span>
            </button>
          </form>
        )}

        <div className="drawer-foot">
          <div>
            Prefer email? <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </div>
          <div>
            LinkedIn?{" "}
            <a href={identity.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/rupeshkumarvs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
