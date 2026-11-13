import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FeesSchedule from "@/components/FeesSchedule";
import FaqList from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fee Schedule — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Real monthly prices by region — 2, 3, 4, 5 days a week and Weekend plans, from $35/month. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/fees" },
};

/* Feedback round 17 (13 Nov 2026): the Fee Schedule page, AS IT IS
   on the reference's dedicated fees page (equrantutors.com/fees —
   the user's screenshot + link, 13 Nov 21:15). In order:
   (1) the SAME calculator as the home page (region dropdown +
   students slider + 5 price cards with REAL PRICES from the
   reference's price table, per the user's DIRECT instruction);
   (2) the reference's Hifz long-session note + trial-guarantee note;
   (3) the Complete Plan Comparison Matrix; (4) 4 feature boxes
   (Zero Admission Fee / Free Makeup / 15% Sibling / Zero Binding);
   (5) the International Payments section as a highlighted NAVY band
   (the user's "blue si patti si" — premium); (6) Fees & Billing
   FAQs; (7) the final CTA "Start with 5 Free 1-on-1 Classes".
   5-day trial is kept everywhere (NOT the reference's 3-day trial).
   NO copied rating/reviews (4.9/5, 1450 reviews), NO DBS/COPPA. */

const NOTES = [
  {
    title: "Hifz Long Sessions",
    text: "For dedicated Hifz students requiring 45-minute or 60-minute daily sessions, custom monthly plans are arranged during your trial evaluation.",
  },
  {
    title: "Trial Guarantee",
    text: "If after your first trial class you feel the institute isn't the right fit, you will not be charged. No pressure, no obligation.",
  },
];

/* Complete Plan Comparison Matrix — from the reference's fees page.
   Columns: 2 Days/Wk | 3 Days/Wk | 4 Days/Wk | 5 Days/Wk | Weekend.
   NOTE (round 17): the brief listed SIX values for the "Weekly
   Audio Logs" row (Monthly / Every Week / Every Week / Daily /
   Weekly / Monthly) for FIVE plan columns — the extra trailing
   "Monthly" is a copy error in the brief, so the row reads Monthly /
   Every Week / Every Week / Daily / Weekly. */
const MATRIX_ROWS: { feature: string; values: string[] }[] = [
  { feature: "Live 1-on-1 Classes per Month", values: ["8", "12", "16", "20", "8"] },
  { feature: "Class Duration (Minutes)", values: ["30", "30", "30", "30 / 45 Mins", "30"] },
  {
    feature: "Dedicated Teacher Selection",
    values: ["Male/Female", "Male/Female", "Male/Female", "Senior Scholar", "Male/Female"],
  },
  {
    feature: "100% Free Makeup Lessons",
    values: ["Included", "Included", "Included", "Included", "Included"],
  },
  {
    feature: "Weekly Audio Logs on WhatsApp",
    values: ["Monthly", "Every Week", "Every Week", "Daily", "Weekly"],
  },
  {
    feature: "Admission / Registration Fee",
    values: ["Free ($0)", "Free ($0)", "Free ($0)", "Free ($0)", "Free ($0)"],
  },
  {
    feature: "Ijazah / Sanad Tracking",
    values: ["—", "Available", "Available", "Accelerated", "—"],
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
    a: "You never pay anything upfront. You attend your 5-day free trial first. Only if you are 100% delighted with the teacher and curriculum will an invoice for your first month be generated.",
  },
  {
    q: "How does the 15% Sibling Family Discount work?",
    a: "When you enroll 2 or more siblings, a flat 15% discount is automatically deducted from your total household invoice every single month.",
  },
  {
    q: "Can we pause classes during school summer or winter holidays?",
    a: "Yes, absolutely. Simply notify us at least 7 days before your vacation. Your account is put on hold, and your child's dedicated teacher and time slot are reserved until you return.",
  },
  {
    q: "What happens if a teacher is absent or sick?",
    a: "In the rare event that a tutor is unavailable, we provide an immediate qualified substitute teacher with identical lesson notes, or we reschedule the missed lesson at your preferred time. No class is ever lost.",
  },
];

export default function FeesPage() {
  return (
    <>
      <PageBanner crumb="Fee Schedule" title="Fee Schedule" />

      <section className="pb-[72px] pt-16 max-[640px]:pb-[52px]">
        <div className="mx-auto max-w-7xl px-4">
          <FeesSchedule />
        </div>
      </section>

      <section className="bg-cream py-[72px] max-[640px]:py-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Good to Know</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Before You Enrol
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {NOTES.map((n, i) => (
              <Reveal
                key={n.title}
                from={i % 2 === 0 ? "left" : "right"}
                delay={i as 0 | 1 | 2}
                className="h-full"
              >
                <div className="h-full rounded-[14px] border border-line bg-white p-7 shadow-[0_3px_12px_rgba(13,27,51,0.05)]">
                  <h3 className="font-display text-xl font-bold text-navyInk">{n.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{n.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Plan Comparison Matrix */}
      <section className="py-[72px] max-[640px]:py-[56px]">
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
                  <tr className="border-b border-line bg-[#f8f6f2]">
                    <th scope="col" className="px-5 py-4 font-display text-[16px] font-bold text-navyInk">
                      Feature &amp; Benefit
                    </th>
                    {MATRIX_COLS.map((c, i) => (
                      <th
                        key={c}
                        scope="col"
                        className={`px-4 py-4 text-center font-display text-[16px] font-bold ${
                          i === 1 ? "text-brandRed" : "text-navyInk"
                        }`}
                      >
                        {c}
                        {i === 1 ? " ⭐" : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                      <th scope="row" className="px-5 py-3.5 font-semibold text-navyInk">
                        {row.feature}
                      </th>
                      {row.values.map((v, i) => (
                        <td
                          key={`${row.feature}-${i}`}
                          className={`px-4 py-3.5 text-center font-medium ${
                            i === 1 ? "text-navyInk" : "text-muted"
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

      {/* International Payments — HIGHLIGHTED NAVY BAND (round 17,
          the user's "blue si patti si", premium). Replaces the
          round-16 plain note. Same content: PayPal, direct bank
          transfer, Stripe, Visa, MasterCard (user's direct
          instruction, rounds 15–16) + UK Faster Payments, USA
          ACH/Zelle, Canada Interac, Australia PayID + invoices on
          the 1st of every month via email and WhatsApp. */}
      <section className="bg-navy py-[72px] max-[640px]:py-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered !text-white/70">Secure Global Checkout</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px]">
                Accepted International Payment Gateways
              </h2>
              <p className="mt-4 leading-relaxed text-white/85">
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
      <section className="py-[72px] max-[640px]:py-[56px]">
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
                see how you or your child engages before deciding on any
                monthly tuition plan.
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
