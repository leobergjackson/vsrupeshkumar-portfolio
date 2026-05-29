"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { visited } from "@/lib/data";

const ACCENT = "#00FFB2";
const WARM = "#FF6B35";

export default function GlobeView() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 600, h: 560 });
  const [ready, setReady] = useState(false);

  // Responsive: track the container width, keep a comfortable height.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      setSize({ w, h: Math.min(Math.max(w * 0.7, 420), 620) });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Auto-rotate + a starting vantage point over Asia/Europe.
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    const controls = g.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.minDistance = 180;
    controls.maxDistance = 600;
    g.pointOfView({ lat: 28, lng: 55, altitude: 2.4 }, 0);
  }, [ready]);

  const home = visited.find((v) => v.home)!;
  const points = visited.map((p) => ({
    ...p,
    color: p.home ? WARM : ACCENT,
  }));
  const rings = visited.map((p) => ({
    lat: p.lat,
    lng: p.lng,
    color: p.home ? WARM : ACCENT,
  }));
  const arcs = visited
    .filter((p) => !p.home)
    .map((p) => ({
      startLat: home.lat,
      startLng: home.lng,
      endLat: p.lat,
      endLng: p.lng,
    }));

  return (
    <div ref={wrapRef} className="globe-canvas">
      <Globe
        ref={globeRef}
        width={size.w}
        height={size.h}
        onGlobeReady={() => setReady(true)}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="/earth-night.jpg"
        showAtmosphere
        atmosphereColor={ACCENT}
        atmosphereAltitude={0.18}
        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.04}
        pointRadius={0.45}
        pointsMerge={false}
        labelsData={points}
        labelLat="lat"
        labelLng="lng"
        labelText="city"
        labelColor="color"
        labelSize={1.4}
        labelDotRadius={0.4}
        labelResolution={2}
        labelAltitude={0.05}
        ringsData={rings}
        ringLat="lat"
        ringLng="lng"
        ringColor={(d: object) => (d as { color: string }).color}
        ringMaxRadius={4}
        ringPropagationSpeed={1.6}
        ringRepeatPeriod={1400}
        arcsData={arcs}
        arcColor={() => [WARM, ACCENT]}
        arcDashLength={0.5}
        arcDashGap={0.25}
        arcDashAnimateTime={2600}
        arcStroke={0.5}
        arcAltitudeAutoScale={0.4}
      />
    </div>
  );
}
