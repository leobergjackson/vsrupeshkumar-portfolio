"use client";

import { useEffect, useState } from "react";
import { StarGlyph } from "@/components/visuals/Visuals";
import { identity } from "@/lib/data";

type Theme = "dark" | "light";

const links = [
  { href: "#home", label: "Home", plus: true },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({
  theme,
  setTheme,
  openDrawer,
}: {
  theme: Theme;
  setTheme: (t: Theme) => void;
  openDrawer: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <StarGlyph size={20} color="var(--accent)" />
          <span className="nav-brand-name">Rupesh Kumar</span>
        </div>

        <div className="nav-center">
          <div className="theme-pill" role="tablist">
            <div className="theme-pill-thumb" />
            <button data-active={theme === "light"} onClick={() => setTheme("light")}>
              Light
            </button>
            <button data-active={theme === "dark"} onClick={() => setTheme("dark")}>
              Dark
            </button>
          </div>
        </div>

        <nav className="nav-right">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.plus && <span className="plus">+</span>}
              {l.label}
            </a>
          ))}
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="nav-link has-arrow"
          >
            GitHub
          </a>
          <button
            className="cta"
            style={{ padding: "4px 4px 4px 18px", fontSize: 13 }}
            onClick={openDrawer}
          >
            <span className="cta-text">Let&apos;s connect</span>
            <span className="cta-circle" style={{ width: 32, height: 32, fontSize: 14 }}>
              →
            </span>
          </button>
        </nav>

        <button className="nav-mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          ☰
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <button
          className="drawer-close"
          style={{ alignSelf: "flex-end" }}
          aria-label="Close menu"
        >
          ×
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={identity.github} target="_blank" rel="noreferrer">
          GitHub →
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
            openDrawer();
          }}
          style={{ color: "var(--accent)", cursor: "pointer" }}
        >
          Let&apos;s connect →
        </a>
      </div>
    </>
  );
}
