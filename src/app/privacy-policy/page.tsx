import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Quran Light Institute",
  description:
    "How Quran Light Institute collects and uses your personal information when you book a free trial.",
  alternates: { canonical: "https://quranlightinstitute.com/privacy-policy" },
};

/**
 * Privacy Policy — honest, generic policy content for an online Quran
 * academy. Only known real facts are used: institute name, email,
 * phone/WhatsApp, the trial form, one-to-one live online classes.
 * No invented facts, prices, stats or addresses.
 */
const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "Information we collect",
    body: "When you fill in the free trial form or message us on WhatsApp, we may collect your name, country, email address, phone or WhatsApp number, the course you are interested in, and any message you send us.",
  },
  {
    heading: "How we use your information",
    body: "We use your details only to arrange your trial classes, answer your questions, and contact you about your classes. We do not use your details for any other purpose.",
  },
  {
    heading: "Sharing your information",
    body: "We do not sell, rent, or share your personal information with any third party for advertising. We only share details where it is needed to deliver our classes, or where the law requires it.",
  },
  {
    heading: "Keeping your information",
    body: "We keep your details only as long as needed to arrange and run your classes. If you would like us to delete your details, email us or message us on WhatsApp, and we will remove them.",
  },
  {
    heading: "Your rights",
    body: "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it at any time.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner crumb="Privacy Policy" title="Privacy Policy" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-sm text-muted">Last updated: 12 November 2026</p>
            <p className="mt-4 leading-relaxed text-muted">
              This Privacy Policy explains what personal information we collect when you
              contact us or book a free trial, and how we use it.
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
                If you have any questions about this policy, or you would like us to
                delete your details, email us at{" "}
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
