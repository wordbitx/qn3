"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/Reveal";

/**
 * Experience badge — circular white "5+ Years Experience" badge that
 * overlaps the teachers photo (WhyChooseUs + Teachers page).
 *
 * Premium polish round: like Minha's animated "25+ years" badge, this
 * one RISES into view (badge-rise keyframes, soft overshoot) and the
 * number counts up (CountUp), with a faint pulsing ring around the
 * circle. The rise is driven by this component's own
 * IntersectionObserver — Reveal's force timer would fire too early for
 * a below-fold badge. The number stays 5+ (the real figure).
 */
export default function ExperienceBadge({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute -top-[26px] left-[-26px] max-lg:left-auto max-lg:right-4 ${className}`}
    >
      <div
        className={`badge-rise relative flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full bg-white text-center shadow-cardLg ${
          visible ? "is-visible" : ""
        }`}
      >
        <span
          className="badge-ring pointer-events-none absolute inset-0 rounded-full border-2 border-brandRed/30"
          aria-hidden="true"
        />
        <span className="font-display text-[40px] font-extrabold leading-none text-brandRed">
          <CountUp value={5} suffix="+" />
        </span>
        <span className="mt-1 px-3 text-[14px] font-bold leading-tight text-navyInk">
          Years Experience
        </span>
      </div>
    </div>
  );
}
