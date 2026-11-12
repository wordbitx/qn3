import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy — Quran Light Institute",
  description:
    "What cookies the Quran Light Institute website uses, and how you can control them.",
  alternates: { canonical: "https://quranlightinstitute.com/cookie-policy" },
};

/**
 * Cookie Policy — honest, generic policy content for an online Quran
 * academy. Only known real facts are used: institute name, email,
 * phone/WhatsApp. No invented facts, prices, stats or addresses.
 */
const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "What are cookies?",
    body: "Cookies are small text files that a website stores on your device. They help the website remember basic settings and work properly.",
  },
  {
    heading: "Cookies we use",
    body: "This website uses only the cookies that are strictly necessary for it to work — for example, cookies that keep the website secure and remember your basic preferences. We do not use advertising cookies, tracking cookies, or cookies that follow you across other websites.",
  },
  {
    heading: "Managing cookies",
    body: "You can block or delete cookies at any time in your browser settings. Please note that blocking essential cookies may stop some parts of the website from working properly.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time. The version published on this page is the current one.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner crumb="Cookie Policy" title="Cookie Policy" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-sm text-muted">Last updated: 12 November 2026</p>
            <p className="mt-4 leading-relaxed text-muted">
              This Cookie Policy explains what cookies are, which cookies this website
              uses, and how you can control them.
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
                If you have any questions about this policy, email us at{" "}
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
