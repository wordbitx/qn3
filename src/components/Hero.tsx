import Image from "next/image";
import Link from "next/link";
import TrialForm from "@/components/TrialForm";
import { HERO_PHOTO, HERO_PHOTO_MOBILE } from "@/lib/site";

/** Hero proof avatars — reuse of other photos (PREVIEW-SPEC §3.1).
 * 34407214 was replaced by 20784507 (Turkish mosque photo) everywhere. */
const AVATARS = [
  {
    src: "https://images.pexels.com/photos/8164735/pexels-photo-8164735.jpeg?auto=compress&cs=tinysrgb&w=200",
    alt: "A young student reading the Holy Quran",
  },
  {
    src: "https://images.pexels.com/photos/20784507/pexels-photo-20784507.jpeg?auto=compress&cs=tinysrgb&w=200",
    alt: "A woman reading the Holy Quran in a Turkish mosque",
  },
  {
    src: "https://images.pexels.com/photos/20784662/pexels-photo-20784662.jpeg?auto=compress&cs=tinysrgb&w=200",
    alt: "A woman reading the Holy Quran on a prayer rug",
  },
  {
    src: "https://images.pexels.com/photos/7249316/pexels-photo-7249316.jpeg?auto=compress&cs=tinysrgb&w=200",
    alt: "Hands raised in dua",
  },
];

/**
 * Hero (PREVIEW-SPEC §3.1): dark navy rounded-22px card, full-bleed hero
 * photo with left-to-right dark gradient overlay, trial form inside the
 * right column as a translucent red glass card.
 */
export default function Hero() {
  return (
    /* Feedback round 14: hero section top padding on mobile 14→10px, so
       the gap between the (now compacted) mobile header and the hero card
       shrinks. Desktop hero padding unchanged. */
    <section className="px-3.5 py-3.5 max-[640px]:pt-2.5">
      <div className="relative overflow-hidden rounded-[22px] bg-navyDark">
        {/*
          Mobile-fix round: the landscape hero stretched over a ~390×1300px
          portrait phone container upscaled its visible slice ~4x (DPR 2–3)
          — torn pixels. Mobile (≤lg, stacked layout) now gets a
          portrait crop of the SAME photo; desktop keeps the landscape
          at w=2400. Two <Image>s, shown/hidden by breakpoint.
          Feedback round 4: the photo is now 20785238 (a woman standing
          in prayer in a mosque, subject right) — same two-image technique.
          Feedback round 5: the photo is now 20784759 (an adult woman
          sitting and reading an open Quran, subject CENTERED against a
          dark stone wall) — the mobile crop is CENTER-anchored
          (crop=center), not right-anchored, because the subject is in
          the middle of the frame.
          Feedback round 6: the hero is now Pexels 11514335 — an OPEN
          Holy Quran on a wooden rehal with a WHITE tasbih on a
          patterned carpet, warm golden window light. The book is the
          subject (the user asked for "koi Quran Pak ki koi aisi laga
          do"). Desktop Image uses object-[center_35%] so the wide
          landscape band keeps the rehal + open Quran (verified by a
          PIL simulation); the mobile crop stays CENTER-anchored.
          NOT 6873767 (the round-4 object-only Quran the user
          rejected). */}
        <Image
          src={HERO_PHOTO}
          alt="An open Holy Quran on a wooden rehal with a white tasbih in warm window light"
          fill
          sizes="100vw"
          quality={85}
          className="hero-zoom hidden object-cover object-[center_35%] lg:block"
          priority
        />
        <Image
          src={HERO_PHOTO_MOBILE}
          alt="An open Holy Quran on a wooden rehal with a white tasbih in warm window light"
          fill
          sizes="100vw"
          quality={85}
          className="hero-zoom object-cover lg:hidden"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(0,18,48,0.88)] via-[rgba(0,20,54,0.55)] to-[rgba(0,24,64,0.18)]"
          aria-hidden="true"
        />
        {/* Decor: two rotated thin square outlines + a large faint circle. */}
        <div className="pointer-events-none absolute -right-10 top-16 h-40 w-40 rotate-45 rounded-[10px] border border-white/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-4 top-40 h-24 w-24 rotate-45 rounded-[8px] border border-brandRed/60" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-[1.12fr_0.88fr] lg:p-14">
          <div className="min-w-0 self-center">
            <p className="anim-rise anim-d1 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-white">
              <span className="h-[3px] w-[38px] rounded-full bg-brandRed" aria-hidden="true" />
              Welcome to Quran Light Institute
            </p>
            <h1 className="anim-rise anim-d2 mt-5 font-display text-[clamp(40px,4.6vw,64px)] font-extrabold leading-[1.08] text-white">
              Empowering Minds Through Quranic Learning —{" "}
              <span className="text-redBright">One-to-One Online</span>
            </h1>
            <p className="anim-rise anim-d3 mt-5 max-w-[520px] text-[18.5px] leading-relaxed text-white/90">
              Practical and structured learning designed to build strong Quranic understanding,
              confidence, and meaningful spiritual growth — live from home, with qualified male
              and female teachers.
            </p>
            {/*
              Feedback round 3 — Minha's hero buttons (video frame f1):
              STACKED, FULL-WIDTH, generous height (~56px) on mobile;
              in a row at Minha's proportions on desktop. Solid red
              "Explore Course", transparent with a red border
              "Discover More". Same labels as before.
            */}
            <div className="anim-rise anim-d4 mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
              <Link
                href="/courses"
                className="btn-primary btn-hero w-full lg:w-auto lg:min-w-[210px]"
              >
                Explore Course
              </Link>
              <Link
                href="/about"
                className="btn-outline-red btn-hero w-full lg:w-auto lg:min-w-[210px]"
              >
                Discover More
              </Link>
            </div>
            <div className="anim-rise anim-d5 mt-9 flex items-center gap-4">
              <div className="flex shrink-0">
                {AVATARS.map((a, i) => (
                  <Image
                    key={a.src}
                    src={a.src}
                    alt={a.alt}
                    width={104}
                    height={104}
                    className={`h-[52px] w-[52px] rounded-full border-[3px] border-white object-cover ${
                      i > 0 ? "-ml-3" : ""
                    }`}
                  />
                ))}
              </div>
              <p className="leading-tight">
                <span className="block font-display text-[26px] font-bold text-white">
                  11+ Years
                </span>
                <span className="text-sm text-white/85">
                  Teaching Experience — Kids &amp; Adults Worldwide
                </span>
              </p>
            </div>
          </div>

          <div className="anim-rise anim-d6 w-full max-w-[472px] justify-self-center self-center lg:justify-self-end">
            <TrialForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
