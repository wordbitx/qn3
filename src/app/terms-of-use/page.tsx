import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Quran Light Institute",
  description:
    "Terms of use for the Quran Light Institute website and online Quran classes.",
  alternates: { canonical: "https://quranlightinstitute.com/terms-of-use" },
};

/**
 * Terms of Use — honest, generic policy content for an online Quran
 * academy. Only known real facts are used: institute name, email,
 * phone/WhatsApp, one-to-one live online classes, male & female
 * teachers, 5-day free trial. No invented prices, stats, addresses
 * or teacher names.
 */
const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "About us",
    body: "Quran Light Institute is an online Quran academy. We offer live one-to-one online Quran classes for kids and adults, taught by qualified male and female teachers. Classes are held online, so students learn from home, anywhere in the world.",
  },
  {
    heading: "Free trial classes",
    body: "Every new student begins with 5-day absolutely FREE trial classes. The trial lets you meet your teacher, attend real one-to-one lessons, and see how the classes work before you enrol. No payment is taken before the trial.",
  },
  {
    heading: "Fees and enrolment",
    body: "Fees are discussed with the institute step by step and confirmed on WhatsApp before you enrol, so you always know the exact fee for your country before any payment is made.",
  },
  {
    heading: "Class conduct",
    body: "Students are expected to attend on time and behave respectfully towards their teacher. Parents or guardians are responsible for children attending classes. If a class needs to be rescheduled, please let us know in advance on WhatsApp.",
  },
  {
    heading: "Using this website",
    body: "You may use this website to learn about our courses and to book a free trial. Please do not misuse the website, copy our content without permission, or try to disrupt the service.",
  },
  {
    heading: "Changes to these terms",
    body: "We may update these terms from time to time. The version published on this page is the current one.",
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <PageBanner crumb="Terms of Use" title="Terms of Use" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-sm text-muted">Last updated: 12 November 2026</p>
            <p className="mt-4 leading-relaxed text-muted">
              These Terms of Use explain the rules for using the Quran Light Institute
              website and for joining our online Quran classes. By using this website or
              booking classes with us, you agree to these terms.
            </p>
            {SECTIONS.map((s) => (
              <div key={s.heading} className="mt-8">
                <h2 className="font-display text-[24px] font-bold leading-snug text-navyInk">
                  {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
            <div className="mt-10">
              <h2 className="font-display text-[24px] font-bold leading-snug text-navyInk">
                Contact us
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                If you have any questions about these terms, email us at{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium text-navyInk hover:underline">
                  {EMAIL}
                </a>{" "}
                or message us on WhatsApp at{" "}
                <a href="https://wa.me/923056622104" className="font-medium text-navyInk hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Contact Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
