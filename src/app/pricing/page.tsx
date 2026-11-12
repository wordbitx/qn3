import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PricingCards from "@/components/PricingCards";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing Plans — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/pricing" },
};

const PAYMENT_STEPS = [
  {
    n: "01.",
    title: "Take the Free Trial First",
    text: "Your first 3 days of classes are absolutely free. No payment is asked before or during the trial.",
  },
  {
    n: "02.",
    title: "Confirm Your Fee on WhatsApp",
    text: "Fees depend on your plan and country. Message us on WhatsApp and we confirm your exact monthly fee personally.",
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
            <p className="kicker kicker-centered">Pricing Plans</p>
            <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Upgrade Your Skills and Knowledge
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Simple monthly plans built around your weekly schedule. Start with 3 absolutely
              FREE trial classes — the exact fee for your country is confirmed on WhatsApp
              before you enrol.
            </p>
          </div>
          </Reveal>
          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>

      <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">How Payment Works</p>
            <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
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
                <p className="font-display text-[40px] font-extrabold leading-none text-brandRed">
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
