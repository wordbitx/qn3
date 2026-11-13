import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FeesSchedule from "@/components/FeesSchedule";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing Plans — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/pricing" },
};

const PAYMENT_STEPS = [
  {
    n: "01.",
    title: "Take the Free Trial First",
    text: "Your first 5 days of classes are absolutely free. No payment is asked before or during the trial.",
  },
  {
    n: "02.",
    title: "Check the Exact Prices",
    text: "The exact monthly prices are shown above — choose your region and the number of students. For 45- or 60-minute classes, message us on WhatsApp and we confirm your exact fee.",
  },
  {
    n: "03.",
    title: "Enrol & Pay Monthly",
    text: "Once you are satisfied, enrol in your chosen plan and pay monthly — simply, with no hidden charges.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageBanner crumb="Pricing" title="Pricing Plans" />

      <section className="pb-[88px] pt-16 max-[640px]:pb-[60px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">Hadiya Plans</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Upgrade Your Skills and Knowledge
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Real monthly prices below — choose your region and the
              number of students, and the prices update automatically.
              Start with 5 absolutely FREE trial classes.
            </p>
          </div>
          </Reveal>
          {/* Feedback round 17 (user, 13 Nov 21:15): the /pricing
              page shows the SAME fee boxes as /fees — the shared
              FeesSchedule calculator + 5 price cards, with the
              Reveal animation. The old duration plans (30/45/60
              min, PricingCards) are RETIRED for now: the user will
              confirm with the client later whether to keep the
              pricing page or remove it. PricingCards.tsx is left
              in the repo, unused, in case the duration plans come
              back. */}
          <div className="mt-12">
            <FeesSchedule intro={false} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/fees"
              className="font-semibold text-navy underline decoration-navy/30 underline-offset-4 transition hover:text-brandRed"
            >
              See the detailed fee schedule →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">How Payment Works</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Trial First. Payment Later.
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              We never ask for payment before you have experienced our teaching yourself.
            </p>
          </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PAYMENT_STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                from={i % 2 === 0 ? "left" : "right"}
                delay={i as 0 | 1 | 2}
                className="h-full"
              >
              <div
                className="h-full rounded-[14px] border border-line bg-white p-8 text-center shadow-[0_3px_12px_rgba(13,27,51,0.05)] transition duration-300 hover:-translate-y-[5px] hover:shadow-card"
              >
                <p className="font-display text-[40px] font-bold leading-none text-brandRed">
                  {s.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-navyInk">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
