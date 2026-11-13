import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import ExperienceBadge from "@/components/ExperienceBadge";
import { TEACHERS_PHOTO } from "@/lib/site";

/** Why Choose Us (PREVIEW-SPEC §3.7): cream section, photo left with
 * the animated circular "11+ Years Experience" badge (rises in +
 * counts up, like Minha's 25+ badge), features on the right.
 * Feedback round 7 (13 Nov 2026): 4 features → 8, from the client's
 * own requirements.
 * Feedback round 9 (13 Nov 2026): 8 features → 10, in the CLIENT'S
 * EXACT WORDS — the user checked the live site and could not find
 * them (different words, scattered across pages). "Live 1-to-1
 * Online Classes" and "Kids & Adults Classes" were missing from
 * this section entirely (they only lived in the 12 Specialities,
 * which render on the About page only) — both added, with the
 * specialities' own descriptions. "Qualified Teachers" is now
 * "Male & Female Teachers" and "Flexible Learning" is now "Flexible
 * Class Timings" (her words). Icons for the 2 new items reuse
 * existing SVGs from this set. The h2 is now "Why Choose Quran
 * Light Institute" so the section is unmistakable. */
const FEATURES = [
  {
    title: "Live 1-to-1 Online Classes",
    text: "Personalized Quran lessons with full teacher attention through live online sessions.",
    icon: "M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z",
  },
  {
    title: "Male & Female Teachers",
    text: "Experienced, qualified and caring male and female Quran teachers for every student.",
    icon: "M12 3 1 8.5l11 5.5 9-4.5V15h2V8.5L12 3zM5 12.6V16c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.4l-7 3.5-7-3.5z",
  },
  {
    title: "Kids & Adults Classes",
    text: "Quran learning programs specially designed for children and adults of all ages.",
    icon: "M12 3 1 8.5l11 5.5 9-4.5V15h2V8.5L12 3zM5 12.6V16c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.4l-7 3.5-7-3.5z",
  },
  {
    title: "Flexible Class Timings",
    text: "Choose class timings that fit your daily routine and your time zone — anywhere in the world.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6 4.2 2.5-.8 1.3L11 14V6h2v6.6z",
  },
  {
    title: "Monthly Progress Reports",
    text: "Regular progress assessments and a monthly report keep parents fully informed.",
    icon: "M3 3v18h18v-2H5V3H3zm4 12 4-4 3 3 6-7-1.4-1.4L13 11.2l-3-3-5.4 5.4L4 14.4z",
  },
  {
    title: "Individual Student Attention",
    text: "Every class is a live one-to-one session — the teacher's full attention is on your child.",
    icon: "M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z",
  },
  {
    title: "Parent-Teacher Communication",
    text: "Parents stay in touch with the teacher — regular updates, questions and feedback, any time.",
    icon: "M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z",
  },
  {
    title: "Secure Online Learning",
    text: "Classes take place in a safe, private online setting — one-to-one, with no strangers in the room.",
    icon: "M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM9 8V6a3 3 0 0 1 6 0v2H9z",
  },
  {
    title: "Student Attendance System",
    text: "Attendance is recorded in every class, so parents always know their child attended.",
    icon: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  },
  {
    title: "Islamic Environment",
    text: "Learning in a caring Islamic environment — good manners, respect and Islamic values in every class.",
    icon: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-[96px] max-[640px]:py-[64px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Feedback round 4 — DESKTOP images first (original
            arrangement: photo left, text right), MOBILE text first.
            One DOM, responsive order classes. No copy changes. */}
        <Reveal from="right" className="order-1 lg:order-2">
          <div>
            <p className="kicker">Why Choose Us</p>
            <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
              Why Choose Quran Light Institute
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              With 11+ years of experience in online Quran teaching, we combine qualified teachers,
              a clear structure and genuine care — so every student progresses with confidence.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) as 0 | 1}>
                  <div className="flex gap-4">
                    <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-brandRed text-white shadow-card">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                        <path d={f.icon} />
                      </svg>
                    </span>
                    <span>
                      <span className="block font-display text-[17px] font-bold text-navyInk">
                        {f.title}
                      </span>
                      <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted">
                        {f.text}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
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
                className="h-[360px] w-full object-cover lg:h-[460px]"
              />
            </div>
            <ExperienceBadge />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
