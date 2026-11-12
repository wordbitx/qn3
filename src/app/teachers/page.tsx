import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Steps from "@/components/Steps";
import { TEACHERS_PHOTO, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Teachers — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/teachers" },
};

const POINTS = [
  "Qualified male teachers for brothers and boys",
  "Qualified female teachers — sisters and young children learn comfortably",
  "Personal attention in every single class, because lessons are one-to-one",
  "Meet your teacher first in the 3-day FREE trial classes",
];

export default function TeachersPage() {
  return (
    <>
      <PageBanner crumb="Teachers" title="Our Teachers" />

      <section className="py-[88px] max-[640px]:py-[60px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <Image
                src={TEACHERS_PHOTO}
                alt="A woman in a hijab in a live online Quran class with her teacher on a laptop"
                width={1200}
                height={900}
                className="h-[560px] w-full object-cover"
              />
            </div>
            <div className="absolute -top-[26px] left-[-26px] flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full bg-white text-center shadow-cardLg max-lg:left-auto max-lg:right-4">
              <span className="font-display text-[40px] font-extrabold leading-none text-brandRed">
                5+
              </span>
              <span className="mt-1 px-3 text-[14px] font-bold leading-tight text-navyInk">
                Years Experience
              </span>
            </div>
          </div>
          <div>
            <p className="kicker">Our Teachers</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navyInk sm:text-4xl">
              Qualified Male &amp; Female Teachers
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Learn from experienced, qualified, and caring Quran teachers. Every teacher at
              Quran Light Institute teaches live and one-to-one, listens to the student&apos;s
              recitation in every class, and corrects pronunciation and Tajweed with patience.
            </p>
            <ul className="mt-6 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 font-bold text-navyInk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(TRIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[50px] items-center rounded-[9px] bg-brandRed px-[30px] py-[14px] text-[16.5px] font-extrabold text-white shadow-[0_12px_24px_rgba(208,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-redDark"
            >
              Meet a Teacher — Free Trial
            </a>
          </div>
        </div>
      </section>

      <Steps />
    </>
  );
}
