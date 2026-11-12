import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsRow from "@/components/StatsRow";
import Steps from "@/components/Steps";
import PricingCards from "@/components/PricingCards";
import VideoCta from "@/components/VideoCta";
import FaqList from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { COURSES, FAQS } from "@/lib/data";
import { COLLAGE_DUA_PHOTO, COLLAGE_GIRL_PHOTO, COLLAGE_WOMAN_PHOTO, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quran Light Institute — Learn Quran Online with Tajweed",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com" },
  openGraph: {
    title: "Quran Light Institute — Learn Quran Online with Tajweed",
    description:
      "Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
    url: "https://quranlightinstitute.com",
  },
};

const SITE_DESCRIPTION =
  "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Quran Light Institute",
  url: "https://quranlightinstitute.com",
  description: SITE_DESCRIPTION,
  email: "info@quranlightinstitute.com",
  telephone: "+92-305-6622104",
};

const ABOUT_POINTS = [
  "Qualified male & female Quran teachers",
  "Our courses are designed for effective Quran learning and understanding",
  "3-day absolutely FREE trial classes for every new student",
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Hero />

      <TrustBand />

      {/* About preview */}
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              {/* Stylish 3-image collage (photo round 2): tall girl-reading
                  photo left, dua + teacher-with-girl stacked right. Same copy,
                  same "14 Online Courses" overlay card as before.
                  Mobile-fix round: on phones the 3-image grid cut the Quran
                  in half at the bottom, so mobile shows ONE strong image
                  (taller, face + Quran in frame); the two small photos
                  appear only on desktop. */}
              <div className="grid gap-4 lg:grid-cols-5">
                <div className="relative h-[420px] overflow-hidden rounded-[20px] shadow-card lg:col-span-3 lg:row-span-2 lg:h-[490px]">
                  <Image
                    src={COLLAGE_GIRL_PHOTO}
                    alt="A young girl in a rust-orange hijab reading the Holy Quran in a mosque in Türkiye"
                    fill
                    sizes="(max-width: 1080px) 100vw, 50vw"
                    className="object-cover object-[center_45%] transition duration-500 hover:scale-[1.04]"
                  />
                </div>
                <div className="relative hidden overflow-hidden rounded-[20px] shadow-card lg:col-span-2 lg:block lg:h-[237px]">
                  <Image
                    src={COLLAGE_DUA_PHOTO}
                    alt="A young girl with hands raised in dua, holding a tasbih beside an open Quran"
                    fill
                    sizes="(max-width: 1080px) 50vw, 25vw"
                    className="object-cover object-[center_40%]"
                  />
                </div>
                <div className="relative hidden overflow-hidden rounded-[20px] shadow-card lg:col-span-2 lg:block lg:h-[237px]">
                  <Image
                    src={COLLAGE_WOMAN_PHOTO}
                    alt="A female teacher guiding a young girl reading the Holy Quran in a mosque"
                    fill
                    sizes="(max-width: 1080px) 50vw, 25vw"
                    className="object-cover object-[center_60%]"
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 max-w-[252px] rounded-2xl bg-navyDark p-5 text-white shadow-cardLg max-[640px]:max-w-[190px] max-[640px]:p-4">
                <p className="font-display text-[25px] font-bold leading-tight max-[640px]:text-[21px]">
                  14 <span className="text-redBright">Online</span> Courses
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                  Live one-to-one classes for kids &amp; adults — from home, anywhere in the
                  world.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="kicker">About Us</p>
              <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Quality Islamic &amp; Quranic Education for Everyone
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                At Quran Light Institute, we are dedicated to delivering authentic Quranic and
                Islamic education to students worldwide. Our aim is to build a strong foundation
                of faith, knowledge, and character through the teachings of the Holy Quran — in a
                positive learning environment where students grow spiritually and intellectually.
              </p>
              <ul className="mt-6 space-y-3">
                {ABOUT_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 font-bold text-navyInk">
                    {CHECK_ICON}
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 btn-primary"
              >
                Discover More
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsRow />

      <Banner />

      {/* Featured courses — first 6 only */}
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="grid items-end gap-6 lg:grid-cols-2">
              <div>
                <p className="kicker">Featured Quran Courses</p>
                <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                  Find Quran Courses for
                  <br />
                  Personal Growth
                </h2>
              </div>
              <div className="lg:text-right">
                <p className="leading-relaxed text-muted lg:ml-auto lg:max-w-[430px]">
                  At Quran Light Institute, our Quran courses are designed to strengthen
                  understanding, faith, and character through structured learning.
                </p>
                <Link
                  href="/courses"
                  className="mt-5 btn-primary"
                >
                  View All Course
                </Link>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.slice(0, 6).map((c, i) => (
              <Reveal
                key={c.slug}
                from={i % 2 === 0 ? "left" : "right"}
                delay={(i % 3) as 0 | 1 | 2}
                className="h-full"
              >
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Steps />

      {/* Pricing preview */}
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="kicker kicker-centered">Pricing Plans</p>
            <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Upgrade Your Skills and Knowledge
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Simple monthly plans built around your weekly schedule. Start with 3 absolutely
              FREE trial classes — the exact fee for your country is confirmed on WhatsApp
              before you enrol.
            </p>
          </Reveal>
          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>

      <VideoCta />

      {/* FAQ preview — first 5 */}
      <section className="py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.85fr_1.4fr]">
          <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
            <div>
            <p className="kicker">FAQ&apos;s</p>
            <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk">
              Still Have Questions?
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Message us any time — we reply on WhatsApp and email, and your first 3 trial
              classes are completely free.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block border-b-2 border-brandRed font-bold text-navyInk transition hover:text-brandRed"
            >
              Contact Us →
            </Link>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <FaqList faqs={FAQS.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      {/* Testimonials — honest placeholder. The 6 SAMPLE testimonials from
          the preview are NOT presented as real reviews. */}
      <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <p className="kicker kicker-centered">Testimonials</p>
            <h2 className="mt-3 font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              What Our Students &amp; Parents Say
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Real reviews from our students and parents will appear here soon — every review
              will come from a real student or parent, in their own words.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              The truest testimonial is your own experience. That is why every new student
              begins with 3-day absolutely FREE trial classes — meet the teacher, attend real
              one-to-one lessons, and see the progress yourself before you decide.
            </p>
            <Link
              href="/contact"
              className="mt-8 btn-primary"
            >
              Book Free Trial
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-[96px] max-[640px]:py-[64px]">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-navy px-12 py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px]">
                Start Your Quran Journey Today
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/85">
                Join your first class with 3 absolutely FREE trial lessons — meet your teacher,
                experience one-to-one learning, and then decide. No payment, no obligation.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-4">
              <a
                href={whatsappUrl(TRIAL_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Free Trial
              </a>
              <Link
                href="/courses"
                className="btn-outline-light"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}
