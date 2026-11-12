"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data";

/**
 * FAQ accordion (PREVIEW-SPEC §3.11/§15): one open at a time, first open
 * by default. Open item's question bar is a red→navy gradient with white
 * text, chevron rotates 180°, answer expands with a 0.45s max-height
 * animation (wired to globals.css .accordion-head / .accordion-panel).
 */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            data-open={isOpen}
            className={`accordion-item overflow-hidden rounded-2xl border bg-white ${
              isOpen ? "border-brandRed shadow-card" : "border-line"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="accordion-head flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[1.05rem] font-bold text-navyInk"
            >
              {f.q}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="accordion-chevron h-5 w-5 shrink-0"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="accordion-panel" style={{ maxHeight: isOpen ? 400 : 0 }}>
              <p className="border-t border-line px-5 py-4 leading-relaxed text-muted">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
