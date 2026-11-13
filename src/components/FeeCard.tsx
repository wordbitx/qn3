import Link from "next/link";
import { feeFor, type FeeFrequency, type FeeRegion } from "@/lib/data";

/**
 * One fee plan card (feedback round 16, 13 Nov 2026) — COMPACT and
 * premium, like the reference's cards. Shared by the home page
 * calculator and the /fees page, so both show the same card.
 *
 * Round 16 replaces the round-15 card: the fee slot is now a REAL
 * PRICE — feeFor(region, students, frequency) returns e.g. "$48/mo"
 * from the reference's price table in lib/data.ts (per the user's
 * DIRECT instruction: write the price as written on the reference
 * site). NO "Confirmed on WhatsApp" anywhere on this card.
 *
 * Compact by design (the user's round-16 complaint was that round
 * 15's cards were too long): p-5 instead of p-7, ONE line for
 * classes + minutes, ONE large price line, 4 compact features
 * (smaller text, tighter gaps, smaller check icons), NO "Features:"
 * label and NO separate fee-label block. CTA is "Book Free Trial"
 * → /admission (the reference's CTA), not WhatsApp.
 * Features are the site's own Hadiya Plan features (data.ts).
 */

const CARD_FEATURES = [
  "1 on 1 Session",
  "Qualified Male & Female Teachers",
  "Monthly Progress Report",
  "Flexible Timings in Your Time Zone",
];

export default function FeeCard({
  freq,
  region,
  students,
}: {
  freq: FeeFrequency;
  region: FeeRegion;
  students: number;
}) {
  const popular = Boolean(freq.popular);
  const price = feeFor(region.id, students, freq.id);

  return (
    <article
      className={`relative flex h-full w-full flex-col rounded-2xl border p-5 shadow-card ${
        popular
          ? "border-line bg-[linear-gradient(180deg,#ffffff,#fdeeee)] [border-top:3px_solid_#D00000]"
          : "border-line bg-[#fff8f6] hover:border-navy"
      }`}
    >
      <h3 className="font-display text-[21px] font-bold leading-tight text-navyInk">
        {freq.title}
        {popular ? (
          <span className="ml-2 inline-block -translate-y-0.5 rounded-full bg-brandRed px-3 py-1 align-middle text-xs font-bold uppercase tracking-wider text-white">
            Most Popular
          </span>
        ) : null}
      </h3>
      <p className="mt-1.5 text-[14px] font-semibold text-navyInk">
        {freq.classesPerMonth} classes per month · {freq.minutesEach} mins each
      </p>
      <p className="mt-4 whitespace-nowrap font-display text-[28px] font-bold leading-none text-navyInk">
        {price}
      </p>
      <ul className="mt-4 flex-1 space-y-2">
        {CARD_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[14px] font-medium leading-snug text-navyInk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-brandRed" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/admission"
        className={`mt-5 w-full text-center ${popular ? "btn-primary" : "btn-navy"}`}
      >
        Book Free Trial
      </Link>
    </article>
  );
}
