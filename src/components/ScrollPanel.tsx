"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollPanelProps = {
  children: ReactNode;
  index: number;
  className?: string;
  isLast?: boolean;
};

// Each homepage section becomes a "page": it pins in place once you've
// scrolled through it, and the next section slides up over it. Sections
// taller than the viewport get a negative sticky top so they pin only
// after their full content has been seen.
export default function ScrollPanel({
  children,
  index,
  className = "",
  isLast = false,
}: ScrollPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (isLast) return;
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const overflow = el.offsetHeight - window.innerHeight;
      setTop(overflow > 0 ? -overflow : 0);
    };
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [isLast]);

  if (isLast) {
    return (
      <div className={`relative min-h-svh ${className}`} style={{ zIndex: index }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`sticky min-h-svh shadow-[0_-36px_70px_rgba(0,0,0,0.38)] ${className}`}
      style={{ top, zIndex: index }}
    >
      {children}
    </div>
  );
}
