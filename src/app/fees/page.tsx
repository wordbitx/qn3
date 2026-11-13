import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FeesSchedule from "@/components/FeesSchedule";
import { Reveal } from "@/components/Reveal";
import { FEE_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fee Schedule — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Monthly fee schedule for every course — 2, 3, 5 or 7 days a week, 30, 45 or 60 minutes per class, Hifz premium. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/fees" },
};

/* Feedback round 15 (13 Nov 2026): the separate Fee Schedule page
   the client asked for — each course's fee, 2/3/5/7 days a week,
   30-minute vs 1-hour classes, Hifz fee higher. The fee AMOUNTS do
   not exist yet (the client never sent a rate card), so every fee
   slot reads "Confirmed on WhatsApp" — no numbers are invented. */

const NOTES = [
  {
    title: "Confirmed on WhatsApp",
    text: "Your monthly fee is confirmed personally on WhatsApp — no hidden charges. Fees depend on your plan and country.",
  },
  {
    title: "5 Days Absolutely FREE First",
    text: "Your first 5 days of classes are absolutely free. No payment is asked before or during the trial.",
  },
  {
    title: "Hifz Sessions, Decided in the Trial",
    text: "Hifz sessions are 45 or 60 minutes — the right length is decided with your teacher during the free trial.",
  },
];

export default function FeesPage() {
  return (
    <>
      <PageBanner crumb="Fee Schedule" title="Fee Schedule" />

      <FeesSchedule />

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
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
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
              trial). Still NOT copied: their prices, their stats /
              reviews, DBS / COPPA / makeup / 15% / Ijazah / Dean
              claims, "zero binding contracts", "zero admission or
              registration fees". The fee AND the payment arrangement
              stay "confirmed personally on WhatsApp". */}
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
                Visa, and MasterCard — your exact monthly fee and your payment
                arrangement are both confirmed personally on WhatsApp, with no
                hidden charges.
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
                Message us on WhatsApp and we confirm your exact monthly fee personally —
                then book your 5-day absolutely FREE trial.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappUrl(FEE_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center sm:w-auto"
                >
                  Confirm Your Fee on WhatsApp
                </a>
                <Link href="/admission" className="btn-navy w-full text-center sm:w-auto">
                  Book Your 5-Day FREE Trial
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
