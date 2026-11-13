"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  COURSES,
  FEE_DURATIONS,
  FEE_FREQUENCIES,
  FEE_NOT_SET,
  FEE_REGIONS,
  FEE_STUDENTS,
  feeFor,
} from "@/lib/data";
import { FEE_MESSAGE, feeMessageForPlan, whatsappUrl } from "@/lib/site";
import FeeCard from "@/components/FeeCard";

/**
 * Fee Schedule (feedback round 15, 13 Nov 2026) — the /fees page,
 * modelled on the LAYOUT of equrantutors.com's pricing section only:
 * region/currency selector + number-of-students slider + frequency
 * plan cards + Hifz premium + per-course fees. Their prices, stats
 * and claims are NOT copied. The fee AMOUNTS do not exist yet — the
 * client never sent a rate card — so every fee slot reads the
 * FEE_BASE_RATES value ("Confirmed on WhatsApp"). The controls update
 * the DISPLAY only: the region changes the currency label next to
 * every fee slot, the slider changes the student count shown. NO
 * computed prices, NO dollar amounts, NO discount anywhere.
 * Browser-verified control details (parent, 13 Nov 2026): the
 * dropdown is exactly 5 options (USD/CAD/EUR/GBP/PKR, default USD,
 * NO Australia); the slider is a thin dark track with a small orange
 * thumb and a green pill showing the current count ("1 Student" /
 * "2 Students"); the note under the slider stays neutral — the
 * reference's "15% Family Discount" note is NOT copied.
 * Calculator formula (verified logic, amounts NOT copied): monthly
 * fee = base rate (per currency, 1 student) × students ×
 * sibling-discount factor (only when 2+ students AND the client has
 * confirmed a discount). See FEE_BASE_RATES in lib/data.ts.
 *
 * The frequency cards each carry ONE amount slot (the brief's design).
 * Its lookup uses the 45-minute cell — the site's middle/popular
 * duration — and every cell is identical until the rate card arrives,
 * so the slot is the same for all durations today. When the rates
 * arrive, the parent should decide whether the card slot expands
 * into a 3-row duration breakdown; filling the rates themselves is
 * a data change in FEE_BASE_RATES only.
 */

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function FeesSchedule() {
  /* Default region is USD (the reference's default). Default students: 1. */
  const [regionId, setRegionId] = useState("US");
  const [students, setStudents] = useState(1);
  const region = FEE_REGIONS.find((r) => r.id === regionId) ?? FEE_REGIONS[0];
  const currencyLabel = region.currency ? ` (${region.currency})` : "";
  const studentLabel = students === 1 ? "For 1 student" : `For ${students} students`;

  return (
    <>
      {/* Intro + controls */}
      <section className="pb-[72px] pt-16 max-[640px]:pb-[52px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Hadiya</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Monthly Fees, Made Clear
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Monthly fees, billed monthly after your 5-day absolutely FREE trial. Choose
                how many days a week you learn and how long each class is — then confirm
                your exact monthly fee on WhatsApp before you enrol.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
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
                    Fees are confirmed in your currency on WhatsApp.
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
                  <p className="mt-2 text-sm text-muted">
                    {students === 1
                      ? "One student — one-to-one live classes."
                      : `${students} students learning together — each with their own one-to-one teacher.`}
                  </p>
                </div>
              </div>
              <p className="mt-6 border-t border-dashed border-line pt-5 text-center text-[15px] font-medium text-navyInk">
                Showing fees{region.currency ? ` in ${region.currency}` : " in your currency"} ·{" "}
                {studentLabel} — every fee is confirmed personally on WhatsApp.
              </p>
            </div>
          </Reveal>

          {/* Frequency plan cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* Hifz premium */}
      <section className="bg-cream py-[72px] max-[640px]:py-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-[linear-gradient(180deg,#ffffff,#fdeeee)] p-7 shadow-card [border-top:3px_solid_#D00000] sm:p-9">
              <p className="kicker">Hifz-ul-Quran</p>
              <h3 className="mt-3 font-display text-[28px] font-bold leading-tight text-navyInk sm:text-[32px]">
                Hifz-ul-Quran — Premium
                <span className="ml-2 inline-block -translate-y-0.5 rounded-full bg-brandRed px-3 py-1 align-middle text-xs font-bold uppercase tracking-wider text-white">
                  Higher Fee
                </span>
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                The Hifz fee is higher than regular courses. Hifz students memorise
                daily, with new memorization (Sabaq), revision of the recent portion
                (Sabqi) and revision of the earlier Quran (Manzil) in every class.
              </p>
              <p className="mt-3 text-[15px] font-semibold text-navyInk">
                5 or 7 days a week · 45 or 60 minutes per session
              </p>
              <div className="mt-6 border-t border-dashed border-line pt-5">
                <p className="font-display text-[21px] font-bold text-navyInk">
                  Monthly Fee{currencyLabel} · {studentLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {FEE_DURATIONS.filter((d) => d.minutes >= 45).map((d) => (
                    <li key={d.id} className="flex items-start gap-2.5 text-[0.95rem] font-medium text-navyInk">
                      <CheckIcon />
                      {d.label} sessions — {feeFor(regionId, students, "5", d.id)}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted">
                  The right session length is decided with your teacher during the free trial.
                </p>
              </div>
              <a
                href={whatsappUrl(feeMessageForPlan("Hifz-ul-Quran"))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full text-center sm:w-auto"
              >
                Confirm Hifz Fee on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Per-course fees */}
      <section className="pb-[88px] pt-[72px] max-[640px]:pb-[60px] max-[640px]:pt-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Every Course</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Fee for Every Course
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Every course below follows the same schedule — choose your days per week
                and your class length, then confirm your exact monthly fee on WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line">
              <ul className="divide-y divide-line">
                {COURSES.map((course) => {
                  const isHifz = course.slug === "hifz-ul-quran";
                  return (
                    <li key={course.slug} className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                      <div className="min-w-0">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="font-display text-[17px] font-bold text-navyInk transition hover:text-brandRed"
                        >
                          {course.name}
                        </Link>
                        {isHifz ? (
                          <span className="ml-2 inline-block -translate-y-0.5 rounded-full bg-brandRed px-2.5 py-0.5 align-middle text-[11px] font-bold uppercase tracking-wider text-white">
                            Premium — higher fee
                          </span>
                        ) : (
                          <span className="ml-2 inline-block -translate-y-0.5 rounded-full bg-navy/[0.07] px-2.5 py-0.5 align-middle text-[11px] font-bold uppercase tracking-wider text-navy">
                            {course.chip}
                          </span>
                        )}
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[15px] font-semibold text-navyInk">{FEE_NOT_SET}</p>
                        <p className="mt-0.5 text-[13px] text-muted">
                          {region.currency ? `${region.currency} · ` : ""}
                          {studentLabel}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
