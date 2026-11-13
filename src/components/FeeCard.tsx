import Link from "next/link";
import { feeFor, type FeeFrequency, type FeeRegion } from "@/lib/data";

/**
 * One fee plan card — COMPACT and premium, like the reference's
 * cards. Shared by the home page calculator, the /fees page and the
 * /pricing page (round 17), so all three show the same card.
 *
 * Round 17 (user, 13 Nov 21:15 — screenshot of equrantutors.com/fees):
 * the SUBTITLES and FEATURES are now the reference's own words, per
 * the user's DIRECT "as it is" instruction. "30 mins" appears ONLY
 * on the 2-day, 4-day and Weekend cards — the 3-day card says "12
 * classes / month (Recommended)" and the 5-day "20 classes / month
 * (Intensive)", exactly as on the reference. Each card has its own
 * 4-item feature list (from the reference — makeup lessons, Dean
 * review, Ijazah track, scholar supervision, certified tutor; the
 * client can correct any claim about her institute). The 3-day card
 * (Most Popular) has the GOLD "START 5-DAY FREE TRIAL →" button —
 * the reference says "START 3-DAY FREE TRIAL", adapted to OUR 5-day
 * trial (the client's own fact). All other cards: dark "BOOK FREE
 * TRIAL →" → /admission.
 *
 * The fee slot is a REAL PRICE — feeFor(region, students, frequency)
 * returns e.g. "$48/mo" from the reference's price table in
 * lib/data.ts (round 16, per the user's DIRECT instruction). NO
 * "Confirmed on WhatsApp" anywhere on this card.
 *
 * Compact by design (the user's round-16 complaint was that round
 * 15's cards were too long): p-5, ONE subtitle line, ONE large price
 * line, 4 compact features, NO "Features:" label and NO separate
 * fee-label block. Measured round 16: 326px mobile / 415px desktop
 * (~40% shorter than round 15's 540px).
 */

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
  /* feeFor returns e.g. "$48/mo" — split the "/mo" off so it renders
     small next to the large amount (like the reference). */
  const priceAmount = price.replace("/mo", "");

  return (
    <article
      className={`relative flex h-full w-full flex-col rounded-2xl border p-5 shadow-card ${
        popular
          ? "border-line bg-[linear-gradient(180deg,#ffffff,#fdeeee)] [border-top:3px_solid_#D00000]"
          : "border-line bg-[#fff8f6] hover:border-navy"
      }`}
    >
      {/* Frequency pill — the reference's grey pill ("2 Days / Week");
          the popular card's pill is pale gold, with the "Most Popular"
          line above it. */}
      {popular ? (
        <p className="flex items-center gap-1.5 text-[15px] font-bold text-navyInk">
          <svg viewBox="0 0 24 24" fill="#f59e0b" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path d="M12 2.5 14.9 8.6l6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5Z" />
          </svg>
          Most Popular
        </p>
      ) : null}
      <p className="mt-2">
        <span
          className={`inline-block rounded-full px-3 py-1 text-[13px] font-bold ${
            popular ? "bg-[#fef3c7] text-navyInk" : "bg-[#f1f2f4] text-navyInk"
          }`}
        >
          {freq.freqLabel}
        </span>
      </p>
      <h3 className="mt-3 font-display text-[21px] font-bold leading-tight text-navyInk">
        {freq.title}
      </h3>
      <p className="mt-1.5 text-[14px] font-medium leading-snug text-muted">
        {freq.subtitle}
      </p>
      <p className="mt-4 whitespace-nowrap font-display text-[28px] font-bold leading-none text-navyInk">
        {priceAmount}
        <span className="text-[15px] font-semibold text-muted">/mo</span>
      </p>
      <ul className="mt-4 flex-1 space-y-2">
        {freq.features.map((f) => (
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
        className={`mt-5 w-full text-center ${freq.ctaGold ? "btn-gold" : "btn-navy"}`}
      >
        {freq.ctaGold ? "START 5-DAY FREE TRIAL →" : "BOOK FREE TRIAL →"}
      </Link>
    </article>
  );
}
