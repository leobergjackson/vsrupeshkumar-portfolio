"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { Awards } from "@/components/sections/Awards";
import { Projects } from "@/components/sections/Projects";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Skills } from "@/components/sections/Skills";
import { Engagement } from "@/components/sections/Engagement";
import { Experience } from "@/components/sections/Experience";
import { Programs } from "@/components/sections/Programs";
import { Edge } from "@/components/sections/Edge";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { ContactDrawer } from "@/components/sections/ContactDrawer";

type Theme = "dark" | "light";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="grain" />
      <CustomCursor />

      <Navbar theme={theme} setTheme={setTheme} openDrawer={() => setDrawerOpen(true)} />

      <main>
        <Hero theme={theme} />
        <Awards />
        <Projects />
        <WhatIBuild />
        <Skills />
        <Engagement openDrawer={() => setDrawerOpen(true)} />
        <Experience />
        <Programs />
        <Edge />
        <FAQ />
        <Contact openDrawer={() => setDrawerOpen(true)} />
      </main>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
