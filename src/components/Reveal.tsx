"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — fade-up on scroll (IntersectionObserver). Safety fallback:
 * after 1200ms everything is force-revealed so content never stays
 * hidden (PREVIEW-SPEC §15).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const force = setTimeout(() => setVisible(true), 1200);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => {
      clearTimeout(force);
      obs.disconnect();
    };
  }, []);

  const delayCls = delay > 0 ? `rv-d${delay}` : "";
  return (
    <div ref={ref} className={`rv ${visible ? "is-visible" : ""} ${delayCls} ${className}`}>
      {children}
    </div>
  );
}

/** Animated count-up number, 0 → value over 1100ms when scrolled into view (once). */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1100);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
