import Image from "next/image";
import Link from "next/link";
import { COLLAGE_INSET_PHOTO } from "@/lib/site";

/** Banner (PREVIEW-SPEC §3.5): full-width image band, photo 29183999 +
 * dark navy→red gradient overlay. */
export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={COLLAGE_INSET_PHOTO}
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
        <h2 className="max-w-[560px] font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Building a Bright Future Through Quranic Education
        </h2>
        <p className="mt-4 max-w-[520px] leading-relaxed text-white/90">
          At Quran Light Institute, we provide structured Quranic learning to build strong
          knowledge and values. Our programs focus on developing understanding, discipline,
          and confidence through quality education.
        </p>
        <Link
          href="/courses"
          className="mt-7 inline-flex min-h-[50px] items-center rounded-[9px] bg-brandRed px-[30px] py-[14px] text-[16.5px] font-extrabold text-white shadow-[0_12px_24px_rgba(208,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-redDark"
        >
          Explore Course
        </Link>
      </div>
    </section>
  );
}
