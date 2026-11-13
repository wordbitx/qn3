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
import FeesSchedule from "@/components/FeesSchedule";
import VideoCta from "@/components/VideoCta";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import FaqList from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { COURSES, FAQS } from "@/lib/data";
import { COLLAGE_DUA_PHOTO, COLLAGE_MAN_PHOTO, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quran Light Institute — Learn Quran Online with Tajweed",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com" },
  openGraph: {
    title: "Quran Light Institute — Learn Quran Online with Tajweed",
    description:
      "Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.",
    url: "https://quranlightinstitute.com",
  },
};

const SITE_DESCRIPTION =
  "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.";

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
  "5-day absolutely FREE trial classes for every new student",
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
                the "14" fact stays in StatsRow. NOTE (round 5):
                Minha's shot4 shows NO badge on the About big image,
                and our collage NEVER had one — the 5+ ExperienceBadge
                lives on WhyChooseUs + the Teachers page only, so none
                is added here.
                Feedback round 6 (12 Nov 2026): (a) TOP IMAGE =
                MINHA'S EXACT PHOTO ("yahi utha ke laga do, same as it
                is"): two cupped hands holding a white tasbih over an
                open Quran with gold-bordered pages on a patterned
                carpet, warm sunlight — from Minha's homepage HTML
                (wp-content/uploads/2026/04/Untitled-design-2026-04-17T115532.867.png),
                saved LOCALLY as /about-dua-hands.jpg (do NOT hotlink
                Minha's server; the file is a BINARY — it must reach
                the repo via GitHub WEB UPLOAD, not push-files).
                The old 30890559 (one palm, no Quran in frame) is
                REPLACED. (b) MALE PHOTO 7129612 REPLACED ("boy
                wala... iski jagah koi aur laga do") with Pexels
                34162875: a young man in a white shawl + maroon cap,
                sitting cross-legged on a green prayer rug in a mosque,
                reading an open Quran, side profile, face visible.
                Object-position 50%/35% keeps face + book. FLAG: he
                is a Black man (West African look), not Minha's
                light-skinned man in a blue shirt by a window; backup
                8164585 (older man, grey suit). (c) BOTTOM ROW is now
                TWO COLUMNS at ALL widths (grid-cols-2 — round 5 had
                sm:grid-cols-2 so it stacked on mobile, which the user
                rejected: "aise nahi"). The OQC box keeps OUR content
                (same title/text/font/colour) — only the mobile sizing
                shrinks so it fits half-width: smaller icon, title
                ~16px, text ~12px, tighter padding. Desktop keeps the
                same 2-col design. */}
            <Reveal from="left" delay={1}>
              <div className="relative overflow-hidden rounded-[20px] shadow-card">
                <Image
                  src={COLLAGE_DUA_PHOTO}
                  alt="Two hands cupped holding a white tasbih over an open Holy Quran on a patterned carpet in warm sunlight"
                  width={1600}
                  height={1152}
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="h-[340px] w-full object-cover object-[center_45%] transition duration-500 hover:scale-[1.04] lg:h-[400px]"
                />
              </div>
            </Reveal>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">
              <Reveal delay={1} className="h-full">
                <div className="flex h-full min-h-[210px] flex-col items-center justify-center rounded-[20px] bg-[#fff8f6] p-3 text-center shadow-card ring-1 ring-[#fbe9e4] sm:p-4 lg:min-h-[260px] lg:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brandRed text-white lg:h-[62px] lg:w-[62px]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 lg:h-9 lg:w-9" aria-hidden="true">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                    </svg>
                  </span>
                  <h3 className="mt-3 font-display text-[16px] font-bold leading-snug tracking-[0.06em] text-navyInk lg:mt-4 lg:text-[22px]">
                    Online Quran Courses
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted lg:mt-2 lg:text-sm">
                    Our courses are designed for effective Quran learning and understanding
                  </p>
                </div>
              </Reveal>
              <Reveal from="right" delay={2} className="h-full">
                <div className="relative h-full min-h-[210px] overflow-hidden rounded-[20px] shadow-card lg:min-h-[260px]">
                  <Image
                    src={COLLAGE_MAN_PHOTO}
                    alt="A young man in a white shawl reading the Holy Quran in a mosque"
                    fill
                    sizes="(max-width: 1080px) 50vw, 25vw"
                    className="object-cover object-[50%_35%] transition duration-500 hover:scale-[1.04]"
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
            <p className="kicker kicker-centered">Hadiya Plans</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Upgrade Your Skills and Knowledge
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Real monthly prices below — choose your region and the number
              of students, and the prices update automatically. Start with
              5 absolutely FREE trial classes.
            </p>
          </Reveal>
          {/* Fee calculator (round 16, 13 Nov 2026 — the user's firm
              correction of round 15): the FULL calculator on the home
              page, like the reference's homepage — currency dropdown
              + students slider ABOVE the 5 price cards, prices
              updating live. The round-15 horizontal-scroll row (4
              frequency cards, "Confirmed on WhatsApp", no prices)
              is GONE: the cards now show REAL PRICES and STACK on
              mobile, so every price is visible by scrolling the
              page. The calculator is the shared FeesSchedule
              component (same as /fees); only the heading above is
              the home page's own. */}
          <FeesSchedule intro={false} />
          <Reveal>
            <div className="mt-8 text-center">
              <Link
                href="/fees"
                className="font-semibold text-navy underline decoration-navy/30 underline-offset-4 transition hover:text-brandRed"
              >
                See the detailed fee schedule →
              </Link>
            </div>
          </Reveal>
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
              Message us any time — we reply on WhatsApp and email, and your first 5 trial
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

      {/* Testimonials — feedback round 11 (13 Nov 2026): 10 reviews
          in a horizontal auto-scroll carousel (see TestimonialsGrid).
          Round 10 labelled them "Sample"; round 11 REMOVED all visible
          "Sample" labelling on the user's direct instruction — let the
          client check it once. The reviews are still samples awaiting
          the client's official reviews (see SAMPLE_REVIEWS in
          src/lib/data.ts). */}
      <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker kicker-centered">Testimonials</p>
              <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
                What Our Students &amp; Parents Say
              </h2>
            </div>
          </Reveal>
          <TestimonialsGrid />
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p className="leading-relaxed text-muted">
                The truest testimonial is your own experience. That is why every new student
                begins with 5-day absolutely FREE trial classes — meet the teacher, attend real
                one-to-one lessons, and see the progress yourself before you decide.
              </p>
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
                Join your first class with 5 absolutely FREE trial lessons — meet your teacher,
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
              <Link
                href="/admission"
                className="btn-outline-light"
              >
                Online Admission
              </Link>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}
