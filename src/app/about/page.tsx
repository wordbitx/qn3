import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsRow from "@/components/StatsRow";
import Specialities from "@/components/Specialities";
import Steps from "@/components/Steps";
import { Reveal } from "@/components/Reveal";
import { HERO_PHOTO, VIDEO_POSTER } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/about" },
};

const POINTS = [
  "Live one-to-one online classes — never recorded videos",
  "Qualified male & female teachers",
  "Classes for kids & adults of all ages",
  "Student progress monitoring with regular assessments",
];

export default function AboutPage() {
  return (
    <>
      <PageBanner crumb="About" title="About Us" />

      {/* Who We Are */}
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal from="left">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative row-span-2 min-h-[480px] overflow-hidden rounded-2xl shadow-card">
              <Image
                src={VIDEO_POSTER}
                alt="A woman reading the Holy Quran on a prayer rug in a mosque"
                fill
                sizes="(max-width: 1080px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-6 text-center shadow-card">
              <span className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl bg-brandRed text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden="true">
                  <path d="M12 5.5C10.3 3.9 7.9 3 4.9 3c-.6 0-1.2.04-1.9.12v15.76c.7-.08 1.3-.12 1.9-.12 3 0 5.4.9 7.1 2.5 1.7-1.6 4.1-2.5 7.1-2.5.6 0 1.2.04 1.9.12V3.12C20.3 3.04 19.7 3 19.1 3c-3 0-5.4.9-7.1 2.5zM5 8.2c2-.06 3.9.35 5.5 1.3v2.1C8.9 10.72 7 10.3 5 10.36V8.2zm0 4.16c2-.06 3.9.35 5.5 1.3v2.1c-1.6-.9-3.5-1.32-5.5-1.26v-2.14zm14-4.16v2.16c-2-.06-3.9.36-5.5 1.24V9.5c1.6-.95 3.5-1.36 5.5-1.3zm0 4.16v2.14c-2-.06-3.9.36-5.5 1.26v-2.1c1.6-.95 3.5-1.36 5.5-1.3z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-[21px] font-bold leading-snug text-navyInk">
                Learn Quran Online with Tajweed
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                Our promise, in every single class.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[16px_16px_90px_16px] shadow-card">
              <Image
                src={HERO_PHOTO}
                alt="A woman in a hijab reading the Holy Quran on a wooden rehal in a sunlit mosque"
                fill
                sizes="(max-width: 1080px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
          </Reveal>
          <Reveal from="right">
          <div>
            <p className="kicker">Who We Are</p>
            <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Help Your Child Learn the Holy Quran from Home
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Quran Light Institute is an online Quran academy with 5+ years of experience,
              teaching kids and adults through live one-to-one classes. Every lesson is
              personal: the teacher listens to the student&apos;s recitation, corrects gently,
              and follows a clear plan suited to the student&apos;s age and level.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Our mission is simple — to make authentic Quranic education reachable from any
              home in the world, with qualified male and female teachers, flexible timings that
              respect family routines, and honest progress monitoring for parents.
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
            <Link
              href="/contact"
              className="mt-8 btn-primary"
            >
              Book Free Trial
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      <StatsRow />

      <WhyChooseUs />

      <Specialities />

      <Steps />
    </>
  );
}
