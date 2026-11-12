"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — fade (and slide) on scroll (IntersectionObserver). Safety fallback:
 * after 8000ms everything is force-revealed so content never stays
 * hidden. The timer is deliberately long: the old 1200ms timer fired
 * before the user ever scrolled to below-fold sections, so their
 * scroll animations never played (they were already visible).
 * `from` picks the entry direction:
 * "up" (default, fade-up), "left" (slide in from the left),
 * "right" (slide in from the right). Stagger with `delay` (0–4).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  from?: "up" | "left" | "right";
  /* "li" keeps <ol> valid when a Reveal wraps a list item (Steps). */
  as?: "div" | "li";
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const force = setTimeout(() => setVisible(true), 8000);
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
  const fromCls = from === "left" ? "rv-from-left" : from === "right" ? "rv-from-right" : "";
  const Tag = as;
  return (
    <Tag ref={ref} className={`rv ${visible ? "is-visible" : ""} ${delayCls} ${fromCls} ${className}`}>
      {children}
    </Tag>
  );
}

/** Animated count-up number, 0 → value over 1600ms when scrolled into view (once).
 * Feedback round 3: slower (was 1100ms) — the user said the count-up
 * was so fast you could not feel it. Reduced-motion users see the final
 * value immediately — no animation. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1600);
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
