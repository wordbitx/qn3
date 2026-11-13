"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  FEE_FREQUENCIES,
  FEE_REGIONS,
  FEE_STUDENTS,
} from "@/lib/data";
import FeeCard from "@/components/FeeCard";

/**
 * Fee calculator (feedback rounds 15–16, 13 Nov 2026) — ONE shared
 * component rendered on BOTH the home page (intro={false}) and the
 * /fees page (intro={true}): region/currency selector + number-of-
 * students slider ABOVE the 5 price cards, and the card prices update
 * live when the controls change — exactly like the reference's
 * homepage calculator (equrantutors.com).
 *
 * Round 16 (user, 13 Nov 20:51 — firm correction): round 15 showed
 * NO price anywhere ("Confirmed on WhatsApp" slots) and hid the home
 * cards behind a horizontal scroll. The user sent a screen recording
 * of the reference HOMEPAGE to show the calculator belongs there,
 * with real prices that change with students, and compact premium
 * boxes. So: the cards now show REAL PRICES from the reference's
 * price table in lib/data.ts (per the user's DIRECT instruction),
 * the home cards STACK (no horizontal scroll — every price is
 * visible by scrolling the page), and the round-15 Hifz premium
 * card + per-course fee list are REMOVED (the per-course list had
 * no prices — the exact thing the user complained about — and the
 * reference has no per-course list; the 5 Days plan IS the Hifz
 * plan at $75, the highest price, which is how "Hifz fee higher"
 * is expressed now).
 *
 * Controls (browser-verified, parent, 13 Nov 2026): the dropdown is
 * exactly 5 options (USD/CAD/EUR/GBP/PKR, default USD, NO
 * Australia); the slider is a thin dark track with a small orange
 * thumb and a green pill showing the current count ("1 Student" /
 * "2 Students"). The note under the slider is the reference's own:
 * at 1 student "Add 2 or more siblings to unlock 15% Family
 * Discount!"; at 2+ students "15% Family Sibling Discount
 * Applied!" (NO emoji — the site has no emojis). The discount IS
 * in because it is how the reference's prices move with students:
 * monthly fee = base × students × 0.85 (see feeFor in lib/data.ts).
 *
 * 5-day trial is kept everywhere (NOT the reference's 3-day trial).
 * Per-card Reveals are safe here: the cards stack / sit in a grid,
 * not a scroll container (round-15 lesson: no card-level Reveals
 * inside a scroll track).
 *
 * Layout: this component renders NO outer container — the parent
 * provides the section + max-w-7xl wrapper (home: page.tsx's
 * pricing section; /fees: fees/page.tsx's section).
 */

export default function FeesSchedule({ intro = true }: { intro?: boolean }) {
  /* Default region is USD (the reference's default). Default students: 1. */
  const [regionId, setRegionId] = useState("US");
  const [students, setStudents] = useState(1);
  const region = FEE_REGIONS.find((r) => r.id === regionId) ?? FEE_REGIONS[0];
  const studentLabel = students === 1 ? "For 1 student" : `For ${students} students`;

  return (
    <>
      {intro ? (
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">Hadiya</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Monthly Fees, Made Clear
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Fixed monthly fees for overseas families, billed monthly
              after your 5-day absolutely FREE trial. Choose your region
              and the number of students — the prices below update
              automatically.
            </p>
          </div>
        </Reveal>
      ) : null}

      <Reveal className="mt-10">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="fee-region" className="mb-2 block text-sm font-semibold text-navyDark">
                Select Your Regional Currency
              </label>
              <select
                id="fee-region"
                value={regionId}
                onChange={(e) => setRegionId(e.target.value)}
                className="w-full rounded-xl border-[1.5px] border-line bg-[#fffdf9] px-4 py-3 text-[16px] text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
              >
                {FEE_REGIONS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.currency} ({r.symbol} {r.currencyName}) - {r.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-muted">
                Prices below update in your currency.
              </p>
            </div>
            <div>
              <label htmlFor="fee-students" className="mb-2 block text-sm font-semibold text-navyDark">
                Number of Students
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="fee-students"
                  type="range"
                  min={FEE_STUDENTS[0]}
                  max={FEE_STUDENTS[FEE_STUDENTS.length - 1]}
                  step={1}
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="fee-range mt-1 flex-1"
                  aria-label="Number of students"
                />
                <span className="inline-flex h-8 shrink-0 items-center rounded-full bg-[#16a34a] px-3.5 text-[15px] font-bold text-white">
                  {students} {students === 1 ? "Student" : "Students"}
                </span>
              </div>
              <div className="mt-2 flex justify-between text-sm font-medium text-muted" aria-hidden="true">
                {FEE_STUDENTS.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
              <p className="mt-2 text-sm font-medium text-navyInk">
                {students === 1
                  ? "Add 2 or more siblings to unlock 15% Family Discount!"
                  : "15% Family Sibling Discount Applied!"}
              </p>
            </div>
          </div>
          <p className="mt-6 border-t border-dashed border-line pt-5 text-center text-[15px] font-medium text-navyInk">
            Showing fees{region.currency ? ` in ${region.currency}` : " in your currency"} ·{" "}
            {studentLabel}
          </p>
        </div>
      </Reveal>

      {/* Price cards — 5 across on desktop (xl), 3 across on lg,
          2 across on sm, STACKED on mobile: every price is visible
          by scrolling the page, never hidden behind a horizontal
          scroll (round 16 — the user's complaint about round 15). */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {FEE_FREQUENCIES.map((freq, i) => (
          <Reveal
            key={freq.id}
            from={i % 2 === 0 ? "left" : "right"}
            delay={(i % 3) as 0 | 1 | 2}
            className="h-full"
          >
            <FeeCard freq={freq} region={region} students={students} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
