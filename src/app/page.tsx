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
import { COLLAGE_DUA_PHOTO, COLLAGE_MAN_PHOTO, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

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

      {/* About preview — feedback round 4 (user CORRECTED round 3:
          round 3 made it text-first everywhere; desktop goes back to
          the ORIGINAL layout). DESKTOP: images FIRST (collage left,
          text right). MOBILE: text FIRST, images after (round 3's
          mobile order kept). One DOM, responsive order classes —
          text Reveal is order-1 lg:order-2, the collage div is
          order-2 lg:order-1. No copy changes.
          Feedback round 5 (user, side-by-side vs Minha shot6):
          Minha's About has consistent ~24px side padding on heading,
          paragraph and checklist (ours let text touch the edges),
          a ~32px mobile heading, regular-weight paragraph with ~1.7
          line-height, and comfortable checklist spacing. Also the
          gap between the trust marquee and the "— ABOUT US" kicker
          was ~112px (TrustBand py-12 bottom 48px + this section's
          64px mobile top) — Minha has no such gap, so the mobile
          top padding is cut to 40px (TrustBand bottom cut to 24px
          too: 64px total now). */}
      <section className="py-[96px] max-[640px]:pb-[64px] max-[640px]:pt-[40px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="order-1 lg:order-2">
            <div>
              <p className="kicker">About Us</p>
              <h2 className="mt-3 font-display text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                Quality Islamic &amp; Quranic Education for Everyone
              </h2>
              <p className="mt-4 leading-[1.7] text-muted">
                At Quran Light Institute, we are dedicated to delivering authentic Quranic and
                Islamic education to students worldwide. Our aim is to build a strong foundation
                of faith, knowledge, and character through the teachings of the Holy Quran — in a
                positive learning environment where students grow spiritually and intellectually.
              </p>
              <ul className="mt-6 space-y-4">
                {ABOUT_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 font-normal text-navyInk">
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
          <div className="order-2 lg:order-1">
            {/* Minha's collage, feedback round 5 (shot4 — EXACT
                structure): 1 BIG image on top, standing ALONE; bottom
                row = 2 items — the light "Online Quran Courses" box
                (SAME AS IT IS: font, colour, everything unchanged)
                + ONE male photo. The navy "14 Online Courses" card is
                REMOVED entirely (user: "ye wala box khatm kar do") —
                the "14" fact stays in StatsRow. Big image 30890559:
                an open palm cupped holding a white tasbih on a red
                patterned carpet (object-position 45% keeps the palm +
                beads in the landscape crop). Male photo 7129612: a
                young man in a white thobe reading a Quran
                (object-position 62% centres his face + the book).
                Desktop 2 columns, mobile stacked. Each bottom item
                animates in on scroll (slower Reveal). NOTE (round 5):
                Minha's shot4 shows NO badge on the About big image,
                and our collage NEVER had one — the 5+ ExperienceBadge
                lives on WhyChooseUs + the Teachers page only, so none
                is added here. */}
            <Reveal from="left" delay={1}>
              <div className="relative overflow-hidden rounded-[20px] shadow-card">
                <Image
                  src={COLLAGE_DUA_PHOTO}
                  alt="An open palm cupped holding a white tasbih over a patterned prayer carpet in warm light"
                  width={1600}
                  height={2400}
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="h-[340px] w-full object-cover object-[center_45%] transition duration-500 hover:scale-[1.04] lg:h-[400px]"
                />
              </div>
            </Reveal>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Reveal delay={1} className="h-full">
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center rounded-[20px] bg-[#fff8f6] p-6 text-center shadow-card ring-1 ring-[#fbe9e4] lg:min-h-[260px]">
                  <span className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl bg-brandRed text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden="true">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-bold leading-snug tracking-[0.06em] text-navyInk lg:text-[22px]">
                    Online Quran Courses
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Our courses are designed for effective Quran learning and understanding
                  </p>
                </div>
              </Reveal>
              <Reveal from="right" delay={2} className="h-full">
                <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] shadow-card lg:min-h-[260px]">
                  <Image
                    src={COLLAGE_MAN_PHOTO}
                    alt="A young man in a white thobe reading the Holy Quran indoors"
                    fill
                    sizes="(max-width: 1080px) 50vw, 25vw"
                    className="object-cover object-[62%_50%] transition duration-500 hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
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
                <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
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
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
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
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk">
              Still Have Questions?
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Message us any time — we reply on WhatsApp and email, and your first 3 trial
              classes are completely free.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block border-b-2 border-brandRed font-medium text-navyInk transition hover:text-brandRed"
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
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
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
              <h2 className="font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px]">
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
