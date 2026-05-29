"use client";

import { useReveal } from "@/hooks/useReveal";
import { visited } from "@/lib/data";
import { MAP_W, MAP_H, projectPin, worldPaths } from "@/lib/worldmap";

export function WorldMap() {
  const ref = useReveal();
  return (
    <section id="map" ref={ref}>
      <div className="watermark"><span>Atlas</span></div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Where I&apos;ve Been</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>On the Map</h2>
          <p className="section-sub" style={{ margin: "20px auto 0" }}>
            Every pin is a place I&apos;ve studied, built, or presented — Chennai out to Taiwan and across Europe.
          </p>
        </div>

        <div className="map-wrap reveal">
          <svg
            className="map-svg"
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="World map of places visited"
          >
            <g className="map-land">
              {worldPaths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
            <g className="map-routes">
              {visited
                .filter((p) => !p.home)
                .map((p) => {
                  const home = visited.find((v) => v.home)!;
                  const a = projectPin(home.lng, home.lat);
                  const b = projectPin(p.lng, p.lat);
                  return (
                    <line key={p.city} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
                  );
                })}
            </g>
            <g className="map-pins">
              {visited.map((p) => {
                const { x, y } = projectPin(p.lng, p.lat);
                return (
                  <g key={p.city} transform={`translate(${x} ${y})`} className={p.home ? "pin home" : "pin"}>
                    <circle className="pin-halo" r={p.home ? 9 : 7} />
                    <circle className="pin-dot" r={p.home ? 4 : 3} />
                  </g>
                );
              })}
            </g>
          </svg>

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
