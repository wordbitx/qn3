import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Testimonials — Quran Light Institute",
  description:
    "Read what our students and parents say about learning the Quran online with Quran Light Institute — live one-to-one classes with qualified male and female teachers.",
  alternates: { canonical: "https://quranlightinstitute.com/testimonials" },
};

/**
 * Testimonials page — feedback round 11 (13 Nov 2026): 10 reviews in
 * a horizontal auto-scroll carousel (see TestimonialsGrid). Round 10
 * labelled them "Sample"; round 11 REMOVED all visible "Sample"
 * labelling on the user's direct instruction — let the client check
 * it once. The reviews are still samples awaiting the client's
 * official reviews (see SAMPLE_REVIEWS in src/lib/data.ts).
 */
export default function TestimonialsPage() {
  return (
    <>
      <PageBanner crumb="Testimonials" title="Testimonials" />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              What Our Students Say
            </h2>
          </div>
          </Reveal>
          <TestimonialsGrid />
          <Reveal>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="leading-relaxed text-muted">
              The truest testimonial is your own experience. That is why every new student
              begins with{" "}
              <strong className="text-navyInk">5-day absolutely FREE trial classes</strong> —
              meet the teacher, attend real one-to-one lessons, and see the progress yourself
              before you decide.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-8"
            >
              Book your 5-day FREE trial and share your experience →
            </Link>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
