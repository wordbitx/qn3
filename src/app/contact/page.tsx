import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { COURSE_MAP } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/contact" },
};

/* Feedback round 13 (13 Nov 2026) — the user said the Contact page
   looked IDENTICAL to Admission: both used the same TrialForm
   ("Book My FREE Trial") in the same two-column navy-panel layout.
   Contact is now a DIFFERENT page by design: it is for QUESTIONS,
   not enrolment. Three contact cards in a row on top (Call /
   WhatsApp / Email), then a WIDE general message form below on a
   cream background — no navy panel beside the form, no trial form,
   no trial trust checklist. The Admission page is untouched; the
   difference comes from Contact changing, not Admission. */
const CONTACT_MESSAGE =
  "Assalamu Alaikum! I have a question for Quran Light Institute.";

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
);

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
  </svg>
);

const MAIL_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { course?: string };
}) {
  const courseName = searchParams?.course ? COURSE_MAP[searchParams.course]?.name ?? "" : "";
  const cards = [
    {
      icon: PHONE_ICON,
      label: "Call Us",
      value: PHONE_DISPLAY,
      href: PHONE_TEL,
    },
    {
      icon: WHATSAPP_ICON,
      label: "WhatsApp",
      value: "Chat with us",
      href: whatsappUrl(CONTACT_MESSAGE),
      blank: true,
    },
    {
      icon: MAIL_ICON,
      label: "Email Us",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
  ];
  return (
    <>
      <PageBanner crumb="Contact" title="Contact Us" />

      {/* Intro + three contact cards in a row */}
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">Get In Touch</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Ask Us Anything
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Questions about our courses, fees, class timings, or anything
              else — call, WhatsApp, email, or send a message below.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group rounded-[20px] bg-white p-7 text-center shadow-card ring-1 ring-line transition duration-300 hover:-translate-y-[5px] hover:shadow-cardLg"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brandRed text-white shadow-[0_10px_22px_rgba(208,0,0,0.3)]">
                  {c.icon}
                </span>
                <span className="mt-4 block text-[12.5px] font-bold uppercase tracking-[0.14em] text-muted">
                  {c.label}
                </span>
                <span className="mt-1.5 block break-all font-display text-[18px] font-bold leading-snug text-navyInk group-hover:underline">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Wide message form on a cream background */}
      <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <ContactForm defaultCourse={courseName} />
            <p className="mt-6 text-center leading-relaxed text-muted">
              We reply on WhatsApp and email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
