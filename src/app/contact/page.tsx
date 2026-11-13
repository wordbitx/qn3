import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TrialForm from "@/components/TrialForm";
import { COURSE_MAP } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { course?: string };
}) {
  const courseName = searchParams?.course ? COURSE_MAP[searchParams.course]?.name ?? "" : "";
  return (
    <>
      <PageBanner crumb="Contact" title="Contact Us" />
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">Get In Touch</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Book Your 5-Day FREE Trial Classes
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Call, WhatsApp or email us — or fill the form and your trial request opens
              ready-to-send in WhatsApp.
            </p>
          </div>

          {/* Feedback round 12 (13 Nov 2026) — PREMIUM RESTYLE, same
              spirit as the round-10 Admission redesign. The 3 cream
              contact cards are replaced by a navy panel beside the form
              (same content, premium presentation): phone, WhatsApp and
              email as clean rows, then the trust points — every line a
              fact already stated elsewhere on the site. No address, no
              hours, nothing invented. Mobile: form first, panel after
              (the form is the point of the page, as on Admission). */}
          <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[20px] bg-navy p-8 text-white shadow-cardLg sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
                <p className="relative text-[12.5px] font-bold uppercase tracking-[0.16em] text-redBright">
                  Contact Details
                </p>
                <h3 className="relative mt-3 font-display text-[28px] font-bold leading-tight text-white">
                  Call, WhatsApp or Email Us
                </h3>
                <ul className="relative mt-7 space-y-5">
                  <li>
                    <a href={PHONE_TEL} className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition group-hover:bg-white/25">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">Call Us</span>
                        <span className="mt-0.5 block font-display text-[17px] font-bold text-white group-hover:underline">{PHONE_DISPLAY}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={whatsappUrl(TRIAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition group-hover:bg-white/25">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">WhatsApp</span>
                        <span className="mt-0.5 block font-display text-[17px] font-bold text-white group-hover:underline">Chat &amp; book your free trial</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition group-hover:bg-white/25">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">Email Us</span>
                        <span className="mt-0.5 block break-all font-display text-[17px] font-bold text-white group-hover:underline">{EMAIL}</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="relative my-8 border-t border-white/15" aria-hidden="true" />
                <ul className="relative space-y-3.5">
                  {[
                    "5-day absolutely FREE trial classes",
                    "Qualified male & female teachers",
                    "Flexible timings — 2, 3 or 5 days a week",
                    "Message us any time — we reply on WhatsApp and email",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[15px] font-medium text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <TrialForm variant="contact" defaultCourse={courseName} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
