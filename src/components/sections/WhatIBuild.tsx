"use client";

import { Fragment } from "react";
import { useReveal } from "@/hooks/useReveal";
import { BgMap } from "@/components/visuals/Visuals";
import { whatIBuild } from "@/lib/data";

export function WhatIBuild() {
  const ref = useReveal();
  return (
    <>
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <Fragment key={i}>
              <span>What I Build</span>
              <span className="star">✦</span>
            </Fragment>
          ))}
        </div>
      </div>

      <section id="build" ref={ref} style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="split">
            <div className="sticky reveal">
              <div className="eyebrow">What I Build</div>
              <h2 className="section-title" style={{ marginTop: 16 }}>What I Build</h2>
              <p className="section-sub" style={{ marginTop: 24 }}>
                I focus on the intersection of research-grade technical depth and real, shipped software — building systems where most people don&apos;t even know what the problem is yet.
              </p>
            </div>

            <div className="build-cards">
              {whatIBuild.map((c) => {
                const Bg = BgMap[c.bg];
                return (
                  <div key={c.n} className="build-card reveal">
                    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                      {Bg && <Bg />}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(8,11,16,0.4), rgba(8,11,16,0.92))",
                        }}
                      />
                    </div>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div className="num">{c.n} / 04</div>
                      <div className="title">{c.title}</div>
                      <p className="desc">{c.desc}</p>
                    </div>
                    <div className="tags" style={{ position: "relative", zIndex: 1 }}>
                      {c.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
