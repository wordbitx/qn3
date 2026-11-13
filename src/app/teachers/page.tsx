import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import ExperienceBadge from "@/components/ExperienceBadge";
import Steps from "@/components/Steps";
import { Reveal } from "@/components/Reveal";
import { TEACHERS_PHOTO, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Teachers — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/teachers" },
};

const POINTS = [
  "Qualified male teachers for brothers and boys",
  "Qualified female teachers — sisters and young children learn comfortably",
  "Personal attention in every single class, because lessons are one-to-one",
  "Meet your teacher first in the 5-day FREE trial classes",
];

export default function TeachersPage() {
  return (
    <>
      <PageBanner crumb="Teachers" title="Our Teachers" />

      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          {/* Feedback round 4: DESKTOP images first (original), MOBILE
              text first — one DOM, responsive order classes. */}
          <Reveal from="right" className="order-1 lg:order-2">
          <div>
            <p className="kicker">Our Teachers</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Qualified Male &amp; Female Teachers
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Learn from experienced, qualified, and caring Quran teachers. Every teacher at
              Quran Light Institute teaches live and one-to-one, listens to the student&apos;s
              recitation in every class, and corrects pronunciation and Tajweed with patience.
            </p>
            <ul className="mt-6 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 font-medium text-navyInk">
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
              className="mt-8 btn-primary"
            >
              Meet a Teacher — Free Trial
            </a>
          </div>
          </Reveal>
          <Reveal from="left" className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <Image
                src={TEACHERS_PHOTO}
                alt="A woman in a hijab reading the Holy Quran on a rehal in a mosque"
                width={2400}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="h-[560px] w-full object-cover"
              />
            </div>
            <ExperienceBadge />
          </div>
          </Reveal>
        </div>
      </section>

      <Steps />
    </>
  );
}
