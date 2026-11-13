import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fees & Tuition Packages — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Compare all five monthly tuition plans side by side, with international payments via PayPal, Stripe, Visa, MasterCard and bank transfer. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/fees" },
};

/* Feedback round 18 (13 Nov 2026): the Fee page, EXACTLY as the
   reference's dedicated fees page (equrantutors.com/fees — re-fetched
   fresh 13 Nov 21:38). KEY FINDING: the reference's /fees page has NO
   calculator and NO price cards and NO notes box — those live on the
   reference's HOMEPAGE (the user's 13 Nov 21:15 screenshot IS the
   homepage pricing section). So this page is ONLY, in order:
   (1) heading "Fees & Tuition Packages" + subtitle (adapted to OUR
   institute — never the reference's name); (2) Complete Plan
   Comparison Matrix (exact cell text from the fresh fetch — the
   audio-logs row has FIVE values; round 17 got the last two cells
   wrong: the 5-day cell is "✓ Daily / Weekly" and Weekend is
   "Monthly"); (3) 4 feature boxes; (4) Secure Global Checkout /
   Accepted International Payment Gateways as a premium CONTAINED
   navy band (the user's "blue si patti si"); (5) Fees & Billing
   FAQs; (6) final CTA "Start with 5 Free 1-on-1 Classes".
   5-day trial is kept everywhere (NOT the reference's 3-day trial).
   NO copied rating/reviews (4.9/5, 1450 reviews), NO DBS/COPPA, NO
   "Admissions 2026 Open" top bar (our top bar keeps phone +
   socials). The calculator lives on the HOME page only.
   Feedback round 19 (13 Nov 2026): the matrix's AFFIRMATIVE cells
   are GREEN — EXACT pattern from the parent's live-browser pixel
   measurement of equrantutors.com/fees (13 Nov 22:30 PKT): green
   #047857 (emerald-700), BOLD — the 3 Days column's values (EXCEPT
   "Available", which is dark), plus "✓ Included" (all 5) and
   "Free ($0)" (all 5), plus the single 5 Days "✓ Accelerated".
   Header row: solid #0f172a, white text, GOLD #fbbf24 for
   "3 Days/Wk ⭐". The blue band is rebuilt to the reference's exact
   measured design (solid #0f172a, contained ~900px, ~180px tall,
   gold eyebrow, white 28–30px heading, grey paragraph, NO pills,
   3 small icons right of the heading). */

/* Complete Plan Comparison Matrix — EXACT cell text from the
   reference's fees page (fresh fetch, 13 Nov 21:38). Columns:
   2 Days/Wk | 3 Days/Wk ⭐ | 4 Days/Wk | 5 Days/Wk | Weekend.
   The 3-day column is highlighted (gold header text + green bold
   values — NO background tint, per the live measurement). The
   star is an inline SVG — the site has NO emojis.
   Round 19 GREEN RULE (live-browser pixel measurement, 13 Nov
   22:30 PKT — green #047857, bold): a cell is green when (a) it is
   in the 3 Days column and is NOT "Available", or (b) its row is
   "100% Free Makeup Lessons" (✓ Included ×5), or (c) its row is
   "Admission / Registration Fee" (Free ($0) ×5), or (d) it is
   "✓ Accelerated". Everything else is dark: value cells #334155,
   "—" dashes light grey #cbd5e1, feature labels #0f172a bold.
   A checkmark is the same colour as its cell. */
const isGreenCell = (row: string, col: number, v: string) => {
  if (v === "Available" || v === "—") return false;
  if (row === "100% Free Makeup Lessons") return true;
  if (row === "Admission / Registration Fee") return true;
  if (v === "✓ Accelerated") return true;
  if (col === 1) return true; // the 3 Days column (except "Available")
  return false;
};
const MATRIX_ROWS: { feature: string; values: string[] }[] = [
  { feature: "Live 1-on-1 Classes per Month", values: ["8 Classes", "12 Classes", "16 Classes", "20 Classes", "8 Classes"] },
  { feature: "Class Duration (Minutes)", values: ["30 Mins", "30 Mins", "30 Mins", "30 / 45 Mins", "30 Mins"] },
  {
    feature: "Dedicated Teacher Selection",
    values: ["✓ Male/Female", "✓ Male/Female", "✓ Male/Female", "✓ Senior Scholar", "✓ Male/Female"],
  },
  {
    feature: "100% Free Makeup Lessons",
    values: ["✓ Included", "✓ Included", "✓ Included", "✓ Included", "✓ Included"],
  },
  {
    feature: "Weekly Audio Logs on WhatsApp",
    values: ["Monthly", "✓ Every Week", "✓ Every Week", "✓ Daily / Weekly", "Monthly"],
  },
  {
    feature: "Admission / Registration Fee",
    values: ["Free ($0)", "Free ($0)", "Free ($0)", "Free ($0)", "Free ($0)"],
  },
  {
    feature: "Ijazah / Sanad Tracking",
    values: ["—", "Available", "Available", "✓ Accelerated", "—"],
  },
];

const MATRIX_COLS = ["2 Days/Wk", "3 Days/Wk", "4 Days/Wk", "5 Days/Wk", "Weekend"];

/* 4 feature boxes — from the reference's fees page (NO emojis; the
   site has no emojis — the reference's icons become the site's
   existing red icon squares). */
const FEATURE_BOXES = [
  {
    title: "Zero Admission Fee",
    text: "No hidden charges or setup costs. You only pay for your confirmed monthly class allocation after your 5-day evaluation trial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2.5 20 5.5v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10v-6l8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "100% Free Makeup Classes",
    text: "Illness, school exams, or family trips? Give us 4 hours advance notice via WhatsApp, and your class is rescheduled with zero forfeiture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-2.6-6.3" />
        <path d="M21 3v6h-6" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "15% Sibling Discount",
    text: "Enrolling two or more brothers or sisters unlocks a permanent 15% discount across all tuition invoices, making it family friendly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.8 20c.7-3.4 3.2-5.2 6.2-5.2s5.5 1.8 6.2 5.2" />
        <circle cx="17" cy="9" r="2.6" />
        <path d="M16.5 14.6c2.3.3 4 1.8 4.6 4.4" />
      </svg>
    ),
  },
  {
    title: "Zero Binding Contracts",
    text: "Pay month-to-month. You may pause during school breaks, modify your frequency, or cancel at any time with complete peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="4" y="10.5" width="16" height="10" rx="2" />
        <path d="M8 10.5V7.5a4 4 0 0 1 7.8-1.2" />
        <circle cx="12" cy="15.5" r="1.4" />
      </svg>
    ),
  },
];

const FEES_FAQS = [
  {
    q: "When do I pay my first tuition fee?",
    a: "You never pay anything upfront. You attend your 5-day free trial first. Only if you and your child are 100% delighted with the teacher and curriculum will an invoice for your first month be generated.",
  },
  {
    q: "How does the 15% Sibling Family Discount work?",
    a: "When you enroll 2 or more siblings, a flat 15% discount is automatically deducted from your total household invoice every single month.",
  },
  {
    q: "Can we pause classes during school summer or winter holidays?",
    a: "Yes, absolutely. Simply notify your academic coordinator at least 7 days before your vacation. Your account is put on hold, and your child's dedicated teacher and time slot are reserved until you return.",
  },
  {
    q: "What happens if a teacher is absent or sick?",
    a: "In the rare event that a tutor is unavailable, we provide an immediate qualified substitute teacher with identical lesson notes, or we reschedule the missed lesson at your preferred time. No class is ever lost.",
  },
];

export default function FeesPage() {
  return (
    <>
      {/* Heading — the reference's own heading + our institute's subtitle. */}
      <section className="pb-2 pt-16 max-[640px]:pt-12">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Fee Schedule</p>
              <h1 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Fees &amp; Tuition Packages
              </h1>
              <p className="mt-3 leading-relaxed text-muted">
                Quran Light Institute — Official Fee Schedule &amp; Tuition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Complete Plan Comparison Matrix */}
      <section className="pb-[72px] pt-10 max-[640px]:pb-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Compare Plans</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Complete Plan Comparison Matrix
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Detailed feature breakdown across all five monthly tuition plans.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            {/* On mobile the table scrolls INSIDE this wrapper — the
                page itself never overflows (round-5 overflow-x:clip). */}
            <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
              <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
                <thead>
                  <tr className="bg-[#0f172a]">
                    <th scope="col" className="px-5 py-4 font-display text-[16px] font-bold text-white">
                      Feature &amp; Benefit
                    </th>
                    {MATRIX_COLS.map((c, i) => (
                      <th
                        key={c}
                        scope="col"
                        className={`px-4 py-4 text-center font-display text-[16px] font-bold ${
                          i === 1 ? "text-[#fbbf24]" : "text-white"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center gap-1.5">
                          {c}
                          {i === 1 ? (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#fbbf24]" aria-hidden="true">
                              <path d="M12 2.6 14.9 8.5l6.4.9-4.6 4.5 1.1 6.4L12 17.3l-5.8 3 1.1-6.4L2.7 9.4l6.4-.9L12 2.6Z" />
                            </svg>
                          ) : null}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                      <th scope="row" className="px-5 py-3.5 font-bold text-[#0f172a]">
                        {row.feature}
                      </th>
                      {row.values.map((v, i) => (
                        <td
                          key={`${row.feature}-${i}`}
                          className={`px-4 py-3.5 text-center ${
                            isGreenCell(row.feature, i, v)
                              ? "font-bold text-[#047857]"
                              : v === "—"
                                ? "font-medium text-[#cbd5e1]"
                                : "font-medium text-[#334155]"
                          }`}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 feature boxes */}
      <section className="bg-cream py-[72px] max-[640px]:py-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_BOXES.map((b, i) => (
              <Reveal
                key={b.title}
                from={i % 2 === 0 ? "left" : "right"}
                delay={(i % 3) as 0 | 1 | 2}
                className="h-full"
              >
                <div className="h-full rounded-[14px] border border-line bg-white p-7 shadow-[0_3px_12px_rgba(13,27,51,0.05)]">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brandRed text-white shadow-card">
                    {b.icon}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-navyInk">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* International Payments — EXACT REFERENCE STRIP (round 19):
          rebuilt to the parent's live-browser pixel measurement of
          equrantutors.com/fees (13 Nov 22:30 PKT): SOLID #0f172a
          (slate-900, NOT a gradient), contained box ~900px wide
          (the reference: 1,214px at a 1,919px viewport = 63.3%),
          ~180px tall, radius 20px, padding ~41/39/35px. Gold
          #fbbf24 eyebrow "SECURE GLOBAL CHECKOUT" (~12px, bold,
          letter-spaced); white heading ~28–30px; light-grey
          #cbd5e1 paragraph ~15–16px, two lines, exact text. The
          payment methods appear ONLY as plain text inside the
          paragraph — NO pills, NO logos, NO badges. Three small
          generic icons (gold card, gold lock, light bank) sit
          right of the heading — small SVGs, NO emojis, NO labels.
          Gold #fbbf24 is used ONLY here + the matrix header
          "3 Days/Wk ⭐" (the fee-card gold button stays #c19a3d). */}
      <section className="py-12 max-[640px]:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-[900px] overflow-hidden rounded-[20px] bg-[#0f172a] px-5 py-8 text-center shadow-[0_16px_40px_rgba(15,23,42,0.30)] sm:px-9 sm:py-10">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#fbbf24]">
                Secure Global Checkout
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <h2 className="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[30px]">
                  Accepted International Payment Gateways
                </h2>
                <span className="flex items-center gap-3" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#fbbf24]">
                    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                    <path d="M2.5 10h19" />
                    <path d="M6 15h4" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#fbbf24]">
                    <rect x="4" y="10.5" width="16" height="10" rx="2" />
                    <path d="M8 10.5V7.5a4 4 0 0 1 7.8-1.2" />
                    <circle cx="12" cy="15.5" r="1.4" />
                  </svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#cbd5e1]">
                    <path d="M3 9.5 12 4l9 5.5" />
                    <path d="M5 10v8M9.7 10v8M14.3 10v8M19 10v8" />
                    <path d="M3.5 20.5h17" />
                  </svg>
                </span>
              </div>
              <p className="mx-auto mt-3 text-[15px] leading-relaxed text-[#cbd5e1] sm:text-base">
                We support encrypted payments via PayPal, Stripe, Visa,
                MasterCard, and direct local bank transfers in the UK
                (Faster Payments), USA (ACH/Zelle), Canada (Interac),
                and Australia (PayID). Invoices are sent via email and
                WhatsApp on the 1st of every month.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fees & Billing FAQs */}
      <section className="bg-cream py-[72px] max-[640px]:py-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Questions</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Fees &amp; Billing Frequently Asked Questions (FAQs)
              </h2>
            </div>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <FaqList faqs={FEES_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-[88px] pt-[72px] max-[640px]:pb-[60px] max-[640px]:pt-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Start with 5 Free 1-on-1 Classes
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Experience our teaching, meet your qualified teacher, and
                see how your child engages before deciding on any monthly
                tuition plan.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/admission" className="btn-primary w-full text-center sm:w-auto">
                  Book Your 5-Day FREE Trial
                </Link>
                <a
                  href={whatsappUrl(TRIAL_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy w-full text-center sm:w-auto"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
