"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FeeCard from "@/components/FeeCard";
import { FEE_FREQUENCIES, FEE_REGIONS } from "@/lib/data";

/**
 * Home page fee row (feedback round 15, expansion #2). The 4 frequency
 * fee cards in a horizontal-scroll row — scroll-snap, mouse drag +
 * native touch swipe + prev/next arrows, like the round-11 reviews
 * carousel. Differences from the reviews carousel, deliberate:
 * NO auto-advance — fee cards need reading time, so the row never
 * moves on its own. Arrows do NOT loop — they stop (disabled) at
 * each end. On desktop all 4 cards fit (25% each); on mobile the
 * row scrolls (85% card + peek). The row scrolls INTERNALLY only —
 * it must never widen the page (round-5 WhatsApp fix).
 * The cards show the default state (USD, 1 student) — the region
 * and student controls live on the /fees page, linked below the row.
 */

const GAP_PX = 24;

export default function FeeCardsRow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const region = FEE_REGIONS[0]; // USD — the default, as on /fees.
  const students = 1;

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(max > 8 && el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const step = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 320;
    const card = el.firstElementChild as HTMLElement | null;
    return card ? card.clientWidth + GAP_PX : el.clientWidth * 0.85;
  }, []);

  const goNext = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: step(), behavior: "smooth" });
  }, [step]);

  const goPrev = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -step(), behavior: "smooth" });
  }, [step]);

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
    updateArrows();
  };

  const arrowBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-card ring-1 ring-line transition hover:bg-brandRed hover:text-white focus-visible:outline-2 focus-visible:outline-brandRed disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-navy";

  return (
    <div className="relative mt-12" role="region" aria-label="Monthly fee plans by days per week">
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className={`scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {FEE_FREQUENCIES.map((freq) => (
          <div
            key={freq.id}
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(25%-18px)]"
          >
            <FeeCard freq={freq} region={region} students={students} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous fee plan"
        onClick={goPrev}
        disabled={!canPrev}
        className={`${arrowBtn} left-1 sm:left-2`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next fee plan"
        onClick={goNext}
        disabled={!canNext}
        className={`${arrowBtn} right-1 sm:right-2`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
