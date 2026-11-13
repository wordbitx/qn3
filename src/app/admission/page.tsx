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
              <div
                className="h-full rounded-[14px] border border-line bg-white p-8 text-center shadow-[0_3px_12px_rgba(13,27,51,0.05)] transition duration-300 hover:-translate-y-[5px] hover:shadow-card"
              >
                <p className="font-display text-[40px] font-bold leading-none text-brandRed">
                  {s.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-navyInk">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
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
          <Reveal delay={1}>
          <div className="mx-auto mt-10 max-w-3xl">
            <TrialForm variant="contact" />
          </div>
          </Reveal>
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
