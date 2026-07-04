"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const SkylineCanvas = dynamic(() => import("./SkylineCanvas"), { ssr: false });

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

function SkylineFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 72% 60%, rgba(201, 168, 112, 0.13), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-25"
      >
        {[
          [40, 90], [70, 140], [100, 110], [130, 190], [160, 150],
          [190, 230], [220, 175], [250, 205], [280, 130], [310, 160], [340, 100],
        ].map(([x, height]) => (
          <rect
            key={x}
            x={x}
            y={300 - height}
            width={16}
            height={height}
            fill="none"
            stroke="#c9a870"
            strokeWidth={1}
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
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
      {canRun3d ? <SkylineCanvas active={inView} /> : <SkylineFallback />}
    </div>
  );
}
