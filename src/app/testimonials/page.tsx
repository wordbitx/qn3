import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Testimonials — Quran Light Institute",
  description:
    "What our students say about learning with Quran Light Institute.",
  alternates: { canonical: "https://quranlightinstitute.com/testimonials" },
};

/**
 * Testimonials page — HONEST placeholder by design. No testimonial has been
 * invented: no names, quotes or countries are made up here.
 * Real student stories will appear here once students share them.
 * The page is unlinked from the nav/footer (the preview has no
 * testimonials link).
 */
export default function TestimonialsPage() {
  return (
    <>
      <PageBanner crumb="Testimonials" title="Testimonials" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
          <h2 className="font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg font-sans leading-relaxed text-muted">
            Student stories are being collected and will appear here soon. Every story on
            this page will come from a real student or parent, in their own words — nothing
            here is made up.
          </p>
          <p className="mt-3 font-sans leading-relaxed text-muted">
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
