import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FeesSchedule from "@/components/FeesSchedule";
import { Reveal } from "@/components/Reveal";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fee Schedule — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Real monthly prices by region — 2, 3, 4, 5 days a week and Weekend plans, from $35/month. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/fees" },
};

/* Feedback round 16 (13 Nov 2026): the Fee Schedule page, as it is
   — the SAME calculator as the home page (region dropdown + students
   slider + 5 price cards with REAL PRICES from the reference's price
   table, per the user's DIRECT instruction), the reference's Hifz
   long-session note + trial-guarantee note, the International
   Payments note, and the final CTA.
   REMOVED (round 16): the round-15 per-course fee list (it had no
   prices — the exact thing the user complained about — and the
   reference has no per-course list), the round-15 separate Hifz
   premium card (the 5 Days plan IS the Hifz plan at $75, the highest
   price), and the round-15 "Before You Enrol" notes that said
   "Confirmed on WhatsApp" — there is no "Confirmed on WhatsApp"
   anywhere on this page anymore.
   5-day trial is kept everywhere (NOT the reference's 3-day trial). */

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

          {/* International Payments (round 15, expansion #2 + user
              corrections 20:30 and 20:32) — the client approached
              WordbitX BECAUSE she wanted her PayPal made (website
              first, then WordbitX registers her company abroad as an
              LLC, then PayPal is opened on that basis), and her whole
              work is international. Correction #2 (user, 20:32,
              DIRECT): "whatever is written on the reference site —
              whether MasterCard is written or Stripe is written —
              just write whatever is written there." So the payment
              methods ARE copied from equrantutors.com, per the user's
              explicit instruction: PayPal, direct bank transfer,
              Stripe, Visa, and MasterCard. The billing line is
              adapted to Quran Light's real facts — monthly billing
              after the 5-day free trial (NOT the reference's 3-day
              trial). Still NOT copied: their stats / reviews, DBS /
              COPPA / makeup / Ijazah / Dean claims, "zero binding
              contracts", "zero admission or registration fees".
              Round 16: the fee itself is now SHOWN on this page, so
              only the PAYMENT ARRANGEMENT is confirmed on WhatsApp. */}
          <Reveal>
            <div className="mx-auto mt-6 max-w-4xl rounded-[14px] border border-line bg-white p-7 shadow-[0_3px_12px_rgba(13,27,51,0.05)]">
              <h3 className="font-display text-xl font-bold text-navyInk">
                International Payments
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                We welcome international students — we teach students online,
                worldwide. Choose your region above to see fees in your own
                currency. Fees are billed monthly after your 5-day absolutely
                FREE trial. We accept PayPal, direct bank transfer, Stripe,
                Visa, and MasterCard — your payment arrangement is confirmed
                personally on WhatsApp, with no hidden charges.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-[88px] pt-[72px] max-[640px]:pb-[60px] max-[640px]:pt-[56px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Ready to Start?
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                See a plan you like? Book your 5-day absolutely FREE trial —
                no payment, no obligation.
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
