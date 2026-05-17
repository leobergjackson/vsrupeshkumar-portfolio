"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { faq } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  const ref = useReveal();
  return (
    <section id="faq" ref={ref}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>FAQ</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>Frequently Asked</h2>
        </div>

        <div className="faq-list">
          {faq.map((f, i) => (
            <div key={i} className={`faq-item reveal ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
