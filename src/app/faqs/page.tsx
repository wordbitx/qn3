import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FaqList from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner crumb="FAQs" title="FAQs" />
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.4fr]">
          <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
          <div>
            <p className="kicker">FAQ&apos;s</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Everything parents usually ask before starting. Anything else — just message us.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block border-b-2 border-brandRed font-medium text-navyInk transition hover:text-brandRed"
            >
              Contact Us →
            </Link>
          </div>
          </Reveal>
          <Reveal delay={1}>
          <FaqList faqs={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
