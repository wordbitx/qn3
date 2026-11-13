import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TrialForm from "@/components/TrialForm";
import FaqList from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Admission — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Online admission in three simple steps: book the 5-day absolutely FREE trial classes, choose your plan, and start learning live one-to-one.",
  alternates: { canonical: "https://quranlightinstitute.com/admission" },
};

/* Feedback round 7 (13 Nov 2026): the client's "Online admission"
   requirement. Admission is a process, not a page of new facts —
   every step below describes the existing trial → plan → start flow
   only. No invented content, prices or timelines. */
const ADMISSION_STEPS = [
  {
    n: "01.",
    title: "Book Your 5-Day Free Trial",
    text: "Fill the free trial registration form below or message us on WhatsApp. Your first 5 days of classes are absolutely free — no payment is asked before or during the trial.",
  },
  {
    n: "02.",
    title: "Choose Your Plan",
    text: "After the trial, choose your class length — 30, 45 or 60 minutes — and your days, 2, 3 or 5 days a week. Your exact monthly fee is confirmed personally on WhatsApp.",
  },
  {
    n: "03.",
    title: "Start Classes",
    text: "Meet your teacher, get your class schedule, and begin learning — live, one-to-one, from home.",
  },
];

const ADMISSION_FAQS = [
  {
    q: "What do I need to start?",
    a: "A phone, tablet or computer with an internet connection, and WhatsApp. That is all you need to start — the teacher guides you through everything else in the trial.",
  },
  {
    q: "How is my teacher assigned?",
    a: "During the free trial you meet your teacher first. We match every student with a qualified male or female teacher — sisters and young children learn comfortably with a female tutor.",
  },
  {
    q: "When do classes start?",
    a: "As soon as you choose your plan after the free trial. Message us on WhatsApp and we arrange your first class.",
  },
];

/* Feedback round 10 (13 Nov 2026) — PREMIUM REDESIGN. The user said
   the page did not feel premium (the content was complete — 3 steps,
   form, 3 FAQs, WhatsApp CTA were all live). Steps are now left-aligned
   premium cards with a red icon, a ghost numeral and a red top accent;
   the form sits beside a navy "What happens next" panel with the trial
   trust points. No copy removed, no invented claims — every trust point
   is a fact already stated elsewhere on the site. */
const STEP_ICONS = [
  <svg key="cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
  </svg>,
  <svg key="plan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  <svg key="play" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
  </svg>,
];

const WHAT_HAPPENS_NEXT = [
  {
    n: "1",
    title: "We reply on WhatsApp",
    text: "We confirm your trial days and timings on WhatsApp.",
  },
  {
    n: "2",
    title: "You meet your teacher",
    text: "Your first trial class is a real one-to-one lesson with your teacher.",
  },
  {
    n: "3",
    title: "Your 5-day trial begins",
    text: "Five days of free classes. After the trial, you choose your plan.",
  },
];

const TRUST_POINTS = [
  "No payment needed for the trial",
  "5-day absolutely FREE trial classes",
  "Qualified male & female teachers",
  "Flexible timings — 2, 3 or 5 days a week",
];

const CHECK_ICON_WHITE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function AdmissionPage() {
  return (
    <>
      <PageBanner crumb="Admission" title="Online Admission" />

      <section className="pb-[88px] pt-16 max-[640px]:pb-[60px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">How Admission Works</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Three Simple Steps to Start Learning
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Admission is fully online — no visit, no paperwork. Trial first,
              then you decide.
            </p>
          </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ADMISSION_STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                from={i % 2 === 0 ? "left" : "right"}
                delay={i as 0 | 1 | 2}
                className="h-full"
              >
              <div className="relative h-full overflow-hidden rounded-[20px] border border-line bg-white p-8 text-left shadow-[0_3px_12px_rgba(13,27,51,0.05)] transition duration-300 hover:-translate-y-[5px] hover:shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-brandRed" aria-hidden="true" />
                <span className="pointer-events-none absolute -right-1 top-2 select-none font-display text-[84px] font-extrabold leading-none text-brandRed/[0.08]" aria-hidden="true">
                  {s.n}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brandRed text-white shadow-[0_10px_22px_rgba(208,0,0,0.3)]">
                  {STEP_ICONS[i]}
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold text-navyInk">{s.title}</h3>
                <p className="relative mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">Free Trial Registration Form</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Register for Your Free Trial
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Fill the form and your trial request opens ready-to-send in WhatsApp —
              nothing is charged, the trial is completely free.
            </p>
          </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <Reveal className="order-2 lg:order-1" delay={1}>
              <div className="relative overflow-hidden rounded-[20px] bg-navy p-8 text-white shadow-cardLg sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
                <p className="relative text-[12.5px] font-bold uppercase tracking-[0.16em] text-redBright">
                  What happens next
                </p>
                <h3 className="relative mt-3 font-display text-[28px] font-bold leading-tight text-white">
                  After You Send the Form
                </h3>
                <ol className="relative mt-7 space-y-5">
                  {WHAT_HAPPENS_NEXT.map((w) => (
                    <li key={w.n} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-[15px] font-bold text-white ring-1 ring-white/25">
                        {w.n}
                      </span>
                      <span>
                        <span className="block font-display text-[16px] font-bold text-white">{w.title}</span>
                        <span className="mt-0.5 block text-[14px] leading-relaxed text-white/80">{w.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="relative my-8 border-t border-white/15" aria-hidden="true" />
                <ul className="relative space-y-3.5">
                  {TRUST_POINTS.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[15px] font-medium text-white">
                      {CHECK_ICON_WHITE}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2" delay={2}>
              <TrialForm variant="contact" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.4fr]">
          <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
          <div>
            <p className="kicker">Admission</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk">
              Admission Questions
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Everything parents usually ask before enrolling. Anything else — just message us.
            </p>
            <a
              href={whatsappUrl(TRIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-primary"
            >
              Book Free Trial on WhatsApp
            </a>
          </div>
          </Reveal>
          <Reveal delay={1}>
          <FaqList faqs={ADMISSION_FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
