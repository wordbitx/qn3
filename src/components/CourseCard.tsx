import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data";

/**
 * Course card (PREVIEW-SPEC §6.2), premium polish round: the card sits
 * on a very light red/cream tint (#fff8f6) with a warm blush ring
 * (#fbe9e4) — no flat white card — plus a whisper of warm blush wash
 * over the top of the photo. Feedback round 4 (user EXPLICITLY asked,
 * overrides the no-orange rule FOR THE COURSE CARDS ONLY): the tint is
 * now a WARM ORANGE/PEACH shade like Minha's — card background
 * #fdf1e7 (warm peach), ring #fed7aa (orange-200), and the wash over
 * the photo is a warm orange wash rgba(249,115,22,0.14 → 0.05) instead
 * of blush. Red chip, red arrow and navy text stay — the orange is a
 * subtle warm shade, NOT a colour-scheme change. Full-bleed photo
 * card, min-height 480px, dark gradient, red uppercase chip + red 62px
 * circular arrow top-right (hover: white circle, red arrow, rotate
 * 45°), uppercase white name, tag line, footer "Read More" + outlined
 * pill "3-Day FREE Trial". Whole card links to /courses/<slug>; hover
 * lift −8px + photo zoom.
 */
export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex h-full min-h-[480px] flex-col justify-end overflow-hidden rounded-[18px] bg-[#fdf1e7] text-white shadow-card ring-1 ring-[#fed7aa] transition duration-300 hover:-translate-y-2 hover:shadow-cardLg focus-visible:outline-none max-[640px]:min-h-[440px]"
    >
      <Image
        src={course.image}
        alt={`${course.name} — Quran course`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-[1.06]"
        style={{ objectPosition: course.position ?? "center" }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,20,55,0.18)] via-[rgba(0,20,55,0.25)] to-[rgba(0,16,44,0.88)]"
        aria-hidden="true"
      />
      {/* Warm ORANGE wash over the top of the photo — the card tint
          (round 4): rgba(249,115,22,0.14) at the top fading to
          transparent, so the card carries Minha's warm orange feel
          without touching the red chip / navy text identity. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,115,22,0.14)_0%,rgba(249,115,22,0.05)_28%,transparent_45%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="rounded-md bg-brandRed px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-white">
          {course.chip}
        </span>
        <span
          className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-brandRed text-white shadow-card transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-brandRed"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
      <div className="relative p-6">
        <h3 className="font-display text-[26px] font-bold uppercase leading-snug tracking-[-0.01em] text-white">
          {course.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-white/85">{course.tag}</p>
        <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-4">
          <span className="text-[15px] font-medium text-white">Read More</span>
          <span className="rounded-lg border-[1.5px] border-[#fdeeda]/80 bg-white/10 px-3 py-1 text-[15px] font-semibold text-white backdrop-blur-sm">
            3-Day FREE Trial
          </span>
        </div>
      </div>
    </Link>
  );
}
