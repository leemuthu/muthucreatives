"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ExplodedSiteCanvas = dynamic(() => import("./ExplodedSiteCanvas"), {
  ssr: false,
});

function useCanRun3d() {
  const [canRun, setCanRun] = useState(false);

  useEffect(() => {
    const capable = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanRun(capable.matches && !reducedMotion.matches);
    update();
    capable.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      capable.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return canRun;
}

function ExplodedSiteFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -right-16 top-1/2 hidden w-72 -translate-y-1/2 sm:block"
        style={{ perspective: "900px" }}
      >
        <div
          className="space-y-3"
          style={{ transform: "rotateX(18deg) rotateY(-24deg) rotateZ(2deg)" }}
        >
          <div className="h-7 rounded-sm border border-ink/25 bg-coal" />
          <div className="h-9 w-4/5 rounded-sm border border-ink/25 bg-coal" />
          <div className="h-9 w-3/5 rounded-sm border border-ink/25 bg-coal" />
          <div className="h-8 w-2/5 rounded-sm border border-flare bg-flare/90 shadow-[0_0_40px_rgba(241,78,20,0.35)]" />
          <div className="h-28 rounded-sm border border-ink/25 bg-coal" />
          <div className="flex gap-3">
            <div className="h-20 flex-1 rounded-sm border border-ink/25 bg-coal" />
            <div className="h-20 flex-1 rounded-sm border border-ink/25 bg-coal" />
            <div className="h-20 flex-1 rounded-sm border border-ink/25 bg-coal" />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 78% 45%, rgba(241, 78, 20, 0.08), transparent 65%)",
        }}
      />
    </div>
  );
}

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const canRun3d = useCanRun3d();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      {canRun3d ? <ExplodedSiteCanvas active={inView} /> : <ExplodedSiteFallback />}
    </div>
  );
}
