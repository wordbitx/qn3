"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SAMPLE_REVIEWS } from "@/lib/data";

/**
 * Reviews carousel (feedback round 11, 13 Nov 2026).
 * 10 reviews in a horizontal row — auto-advance every ~4.5s, PAUSE on
 * hover / focus / touch-drag, manual control via drag/swipe + prev/next
 * arrows. Auto-advance never fights the user: it pauses while the user
 * is interacting and resumes a few seconds after they stop.
 * Round 11 (user's DIRECT instruction): NO visible "Sample" labelling
 * anywhere — no badge on the cards, no note under the heading. The
 * reviews are still samples awaiting the client's official reviews —
 * they live in SAMPLE_REVIEWS in src/lib/data.ts (internal name only,
 * never rendered) so replacement stays a one-file change. First names
 * only, no full names, no invented countries or results.
 * The carousel scrolls INTERNALLY only — it must never widen the page
 * (round-5 WhatsApp fix: overflow-x:clip on html/body).
 */
const STAR = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.4L18 20.5 12 17l-6 3.5 1.25-6.8L2.5 9.3l6.6-1.04L12 2z" />
  </svg>
);

const AUTO_MS = 4500;
const RESUME_MS = 3000;
const GAP_PX = 24;

export default function TestimonialsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dragging, setDragging] = useState(false);

  const step = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 320;
    const card = el.firstElementChild as HTMLElement | null;
    return card ? card.clientWidth + GAP_PX : el.clientWidth * 0.85;
  }, []);

  const goNext = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= max - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step(), behavior: "smooth" });
    }
  }, [step]);

  const goPrev = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    if (el.scrollLeft <= 8) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -step(), behavior: "smooth" });
    }
  }, [step]);

  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
      resumeTimer.current = null;
    }, RESUME_MS);
  }, []);

  /* Auto-advance — skips a tick while paused, hidden, or reduced-motion. */
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      goNext();
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [goNext]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  /* Mouse drag — touch uses native swipe scrolling. */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    draggingRef.current = true;
    setDragging(true);
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.style.scrollSnapType = "none";
    el.setPointerCapture(e.pointerId);
    pause();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = dragStartScroll.current - (e.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    const el = trackRef.current;
    if (el) el.style.scrollSnapType = "";
    scheduleResume();
  };

  const arrowBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-card ring-1 ring-line transition hover:bg-brandRed hover:text-white focus-visible:outline-2 focus-visible:outline-brandRed";

  return (
    <div
      className="relative mt-12"
      role="region"
      aria-label="Student and parent reviews"
      onMouseEnter={pause}
      onMouseLeave={scheduleResume}
      onFocusCapture={pause}
      onBlurCapture={scheduleResume}
    >
      <div
        ref={trackRef}
        className={`scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {SAMPLE_REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-[20px] bg-white p-6 shadow-card ring-1 ring-line sm:w-[60%] sm:p-7 lg:w-[calc(33.333%-1rem)]"
          >
            <span className="flex gap-0.5 text-brandRed" aria-label="5 out of 5 stars">
              {STAR}
              {STAR}
              {STAR}
              {STAR}
              {STAR}
            </span>
            <blockquote className="mt-4 flex-1 leading-relaxed text-navyInk">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-white" aria-hidden="true">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="block font-display text-[15px] font-bold text-navyInk">{r.name}</span>
                <span className="block text-[13px] text-muted">
                  {r.role} &middot; {r.course}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous review"
        onClick={() => {
          pause();
          goPrev();
          scheduleResume();
        }}
        className={`${arrowBtn} left-1 sm:left-2`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next review"
        onClick={() => {
          pause();
          goNext();
          scheduleResume();
        }}
        className={`${arrowBtn} right-1 sm:right-2`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
