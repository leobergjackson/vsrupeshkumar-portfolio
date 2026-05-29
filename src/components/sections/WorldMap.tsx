"use client";

import dynamic from "next/dynamic";
import { useReveal } from "@/hooks/useReveal";
import { visited } from "@/lib/data";

// The globe uses WebGL/Three.js — load it client-side only.
const GlobeView = dynamic(() => import("./GlobeView"), {
  ssr: false,
  loading: () => <div className="globe-canvas globe-loading">Loading globe…</div>,
});

export function WorldMap() {
  const ref = useReveal();
  return (
    <section id="map" ref={ref}>
      <div className="watermark"><span>Atlas</span></div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Where I&apos;ve Been</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>On the Globe</h2>
          <p className="section-sub" style={{ margin: "20px auto 0" }}>
            Drag to spin, scroll to zoom. Every pin is a place I&apos;ve studied, built, or
            presented — Chennai out to Taiwan and across Europe.
          </p>
        </div>

        <div className="globe-wrap reveal">
          <GlobeView />

          <div className="map-legend">
            {visited.map((p) => (
              <div key={p.city} className={p.home ? "legend-item home" : "legend-item"}>
                <span className="legend-flag">{p.flag}</span>
                <div>
                  <div className="legend-city">
                    {p.city}, {p.country}{p.home && <span className="legend-tag">Home</span>}
                  </div>
                  <div className="legend-note">{p.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
