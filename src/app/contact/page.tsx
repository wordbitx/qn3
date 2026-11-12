import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TrialForm from "@/components/TrialForm";
import { COURSE_MAP } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
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
              Book Your 3-Day FREE Trial Classes
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Call, WhatsApp or email us — or fill the form below and your trial request opens
              ready-to-send in WhatsApp.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="rounded-[14px] bg-cream p-[32px_28px] text-center shadow-[0_3px_12px_rgba(13,27,51,0.05)]">
              <span className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-navy text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navyInk">Call Us</h3>
              <a href={PHONE_TEL} className="mt-2 block font-medium text-navy hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="rounded-[14px] bg-cream p-[32px_28px] text-center shadow-[0_3px_12px_rgba(13,27,51,0.05)]">
              <span className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-navy text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navyInk">WhatsApp</h3>
              <a
                href={whatsappUrl(TRIAL_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium text-navy hover:underline"
              >
                Chat &amp; book your free trial
              </a>
            </div>
            <div className="rounded-[14px] bg-cream p-[32px_28px] text-center shadow-[0_3px_12px_rgba(13,27,51,0.05)]">
              <span className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-navy text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navyInk">Email Us</h3>
              <a href={`mailto:${EMAIL}`} className="mt-2 block break-all font-medium text-navy hover:underline">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="mx-auto mt-11 max-w-3xl">
            <TrialForm variant="contact" defaultCourse={courseName} />
          </div>
        </div>
      </section>
    </>
  );
}
