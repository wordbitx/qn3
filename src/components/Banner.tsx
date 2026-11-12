import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BANNER_PHOTO } from "@/lib/site";

/** Banner (PREVIEW-SPEC §3.5): full-width image band, photo 29183999 +
 * dark navy→red gradient overlay. */
export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={BANNER_PHOTO}
        alt="An open Holy Quran with a wooden tasbih draped across the pages"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,34,87,0.92),rgba(0,51,140,0.72)_55%,rgba(208,0,0,0.55))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-[110px] max-[640px]:py-[70px]">
        <Reveal from="left">
          <h2 className="max-w-[560px] font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px]">
            Building a Bright Future Through Quranic Education
          </h2>
        </Reveal>
        <Reveal from="left" delay={1}>
          <p className="mt-4 max-w-[520px] leading-relaxed text-white/90">
            At Quran Light Institute, we provide structured Quranic learning to build strong
            knowledge and values. Our programs focus on developing understanding, discipline,
            and confidence through quality education.
          </p>
        </Reveal>
        <Reveal from="left" delay={2}>
          <Link
            href="/courses"
            className="mt-7 btn-primary"
          >
            Explore Course
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
