import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Testimonials — Quran Light Institute",
  description:
    "Sample reviews showing how our student testimonials will look — real reviews from our students and parents will replace them.",
  alternates: { canonical: "https://quranlightinstitute.com/testimonials" },
};

/**
 * Testimonials page — feedback round 10 (13 Nov 2026): 6 SAMPLE
 * reviews, each card labelled "Sample", with the sample note under
 * the heading. The user asked for 5–10 good reviews to show how the
 * section will look; the client will delete them and replace them
 * with her official reviews after handover. They are NEVER presented
 * as real reviews — when the client sends real ones, replace the
 * SAMPLE_REVIEWS list in src/lib/data.ts.
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
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-navyInk/80">
              Sample reviews showing how this section will look — the
              institute&apos;s real student and parent reviews will
              replace them.
            </p>
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
