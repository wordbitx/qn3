import Image from "next/image";
import Link from "next/link";
import TrialForm from "@/components/TrialForm";
import { HERO_PHOTO } from "@/lib/site";

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
    <section className="px-3.5 py-3.5">
      <div className="relative overflow-hidden rounded-[22px] bg-navyDark">
        <Image
          src={HERO_PHOTO}
          alt="An open Holy Quran on a wooden rehal"
          fill
          sizes="100vw"
          className="object-cover"
          priority
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
            <p className="flex items-center gap-3 text-[13.5px] font-extrabold uppercase tracking-[0.22em] text-white">
              <span className="h-[3px] w-[38px] rounded-full bg-brandRed" aria-hidden="true" />
              Welcome to Quran Light Institute
            </p>
            <h1 className="mt-5 font-display text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.12] text-white">
              Empowering Minds Through Quranic Learning —{" "}
              <span className="text-redBright">One-to-One Online</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[18.5px] leading-relaxed text-white/90">
              Practical and structured learning designed to build strong Quranic understanding,
              confidence, and meaningful spiritual growth — live from home, with qualified male
              and female teachers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className="inline-flex min-h-[50px] items-center rounded-[9px] bg-brandRed px-[30px] py-[14px] text-[16.5px] font-extrabold text-white shadow-[0_12px_24px_rgba(208,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-redDark"
              >
                Explore Course
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[50px] items-center rounded-[9px] border-2 border-white bg-transparent px-[30px] py-[14px] text-[16.5px] font-extrabold text-white transition hover:bg-white hover:text-navyInk"
              >
                Discover More
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-4">
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
                <span className="block font-display text-[26px] font-extrabold text-white">
                  5+ Years
                </span>
                <span className="text-sm text-white/85">
                  Teaching Experience — Kids &amp; Adults Worldwide
                </span>
              </p>
            </div>
          </div>

          <div className="w-full max-w-[472px] justify-self-center self-center lg:justify-self-end">
            <TrialForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
