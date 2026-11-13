import { FEE_DURATIONS, feeFor, type FeeFrequency, type FeeRegion } from "@/lib/data";
import { feeMessageForPlan, whatsappUrl } from "@/lib/site";

/**
 * One frequency fee card (feedback round 15). Shared by the /fees
 * page grid and the home page horizontal-scroll row, so both show the
 * same card. The card's fee slot reads feeFor(region, students,
 * frequency, "45") — the 45-minute cell, the site's middle/popular
 * duration. Every cell is "Confirmed on WhatsApp" until the rate
 * card arrives, so the slot is identical for all durations today.
 * When the rates arrive, the parent should decide whether the card
 * slot expands into a 3-row duration breakdown; filling the rates
 * themselves is a data change in FEE_BASE_RATES only.
 * Features are verbatim from the site's Hadiya Plans (data.ts).
 */

const CARD_FEATURES = [
  "1 on 1 Session",
  "Qualified Male & Female Teachers",
  "Monthly Progress Report",
  "Flexible Timings in Your Time Zone",
];

function durationLine(): string {
  const mins = FEE_DURATIONS.map((d) => d.minutes);
  return `${mins.slice(0, -1).join(", ")} or ${mins[mins.length - 1]} minutes per class`;
}

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
  const currencyLabel = region.currency ? ` (${region.currency})` : "";
  const studentLabel = students === 1 ? "For 1 student" : `For ${students} students`;

  return (
    <article
      className={`relative flex h-full w-full flex-col rounded-2xl border p-7 shadow-card ${
        popular
          ? "border-line bg-[linear-gradient(180deg,#ffffff,#fdeeee)] [border-top:3px_solid_#D00000]"
          : "border-line bg-[#fff8f6] hover:border-navy"
      }`}
    >
      <h3 className="font-display text-[24px] font-bold leading-tight text-navyInk">
        {freq.label}
        {popular ? (
          <span className="ml-2 inline-block -translate-y-0.5 rounded-full bg-brandRed px-3 py-1 align-middle text-xs font-bold uppercase tracking-wider text-white">
            Most Popular
          </span>
        ) : null}
      </h3>
      <p className="mt-2 text-[15px] font-semibold text-navyInk">
        {freq.classesPerMonth} classes per month
      </p>
      <p className="mt-1 text-sm text-muted">{durationLine()}</p>
      <p className="mt-5 font-medium text-navyInk">Features:</p>
      <ul className="mt-3 flex-1 space-y-3">
        {CARD_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.95rem] font-medium text-navyInk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-dashed border-line pt-5">
        <p className="font-display text-[21px] font-bold text-navyInk">
          Monthly Fee{currencyLabel}
        </p>
        <p className="mt-0.5 text-sm text-muted">
          {feeFor(region.id, students, freq.id, "45")} — no hidden charges
        </p>
        <p className="mt-0.5 text-sm text-muted">{studentLabel}</p>
      </div>
      <a
        href={whatsappUrl(feeMessageForPlan(freq.label))}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 w-full text-center ${popular ? "btn-primary" : "btn-navy"}`}
      >
        Confirm Fee on WhatsApp
      </a>
    </article>
  );
}
