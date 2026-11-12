import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CourseCard from "@/components/CourseCard";
import { COURSES, COURSE_MAP } from "@/lib/data";
import { PHONE_DISPLAY, PHONE_TEL, trialMessageForCourse, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = COURSE_MAP[params.slug];
  if (!course) return { title: "Course — Quran Light Institute" };
  return {
    title: `${course.name} — Quran Light Institute`,
    description: course.tag,
    alternates: { canonical: `https://quranlightinstitute.com/courses/${course.slug}` },
  };
}

/** Sidebar icon tile glyph: Arabic calligraphy for 4 courses, book glyph otherwise. */
function SidebarGlyph({ slug }: { slug: string }) {
  const glyphs: Record<string, string> = {
    tajweed: "تجويد",
    "six-kalimas": "6",
    "basic-arabic-learning": "أخلاق",
    seerah: "ﷺ",
  };
  const glyph = glyphs[slug];
  if (glyph) {
    return <span className="arabic text-[34px] font-bold leading-none text-white">{glyph}</span>;
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white" aria-hidden="true">
      <path d="M12 5.5C10.3 3.9 7.9 3 4.9 3c-.6 0-1.2.04-1.9.12v15.76c.7-.08 1.3-.12 1.9-.12 3 0 5.4.9 7.1 2.5 1.7-1.6 4.1-2.5 7.1-2.5.6 0 1.2.04 1.9.12V3.12C20.3 3.04 19.7 3 19.1 3c-3 0-5.4.9-7.1 2.5zM5 8.2c2-.06 3.9.35 5.5 1.3v2.1C8.9 10.72 7 10.3 5 10.36V8.2zm0 4.16c2-.06 3.9.35 5.5 1.3v2.1c-1.6-.9-3.5-1.32-5.5-1.26v-2.14zm14-4.16v2.16c-2-.06-3.9.36-5.5 1.24V9.5c1.6-.95 3.5-1.36 5.5-1.3zm0 4.16v2.14c-2-.06-3.9.36-5.5 1.26v-2.1c1.6-.95 3.5-1.36 5.5-1.3z" />
    </svg>
  );
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = COURSE_MAP[params.slug];
  if (!course) notFound();

  const idx = COURSES.findIndex((c) => c.slug === course.slug);
  const more = [1, 2, 3].map((n) => COURSES[(idx + n) % COURSES.length]);

  return (
    <>
      <PageBanner
        crumb={course.name}
        parentCrumb="Courses"
        parentHref="/courses"
        title={course.name}
      />

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="min-w-0">
            <p className="kicker">About This Course</p>
            <h2 className="mt-3 font-display text-[34px] font-extrabold leading-tight text-navyInk">
              {course.tag}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              {course.desc.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <h2 className="mt-10 font-display text-[30px] font-extrabold text-navyInk">
              What You&apos;ll Learn
            </h2>
            <ul className="mt-4 space-y-3">
              {course.learn.map((item) => (
                <li key={item} className="flex items-start gap-3 font-semibold text-navyInk">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-[30px] font-extrabold text-navyInk">
              Who Is It For?
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{course.who}</p>
          </div>

          <aside>
            <div className="sticky top-[130px] rounded-2xl bg-cream p-[32px_28px] shadow-card">
              <span className="flex h-[74px] w-[74px] items-center justify-center rounded-2xl bg-brandRed">
                <SidebarGlyph slug={course.slug} />
              </span>
              <h3 className="mt-5 font-display text-[23px] font-bold leading-snug text-navyInk">
                {course.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Start this course with 3-day absolutely FREE trial classes — live, one-to-one,
                with a qualified teacher.
              </p>
              <a
                href={whatsappUrl(trialMessageForCourse(course.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-[9px] bg-brandRed px-6 py-3.5 text-center text-[16.5px] font-extrabold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-redDark"
              >
                Book Free Trial on WhatsApp
              </a>
              <Link
                href={`/contact?course=${course.slug}`}
                className="mt-3 block w-full rounded-[9px] border-2 border-navy bg-transparent px-6 py-3.5 text-center text-[16.5px] font-extrabold text-navy transition hover:bg-navy hover:text-white"
              >
                Use the Trial Form
              </Link>
              <p className="mt-5 text-center text-[0.95rem] text-muted">
                Or call us:{" "}
                <a href={PHONE_TEL} className="font-bold text-navy hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-[88px] pt-[70px] max-[640px]:pb-[60px]">
        <div className="mx-auto max-w-7xl px-4">
          <p className="kicker">Keep Exploring</p>
          <h2 className="mt-3 font-display text-[32px] font-extrabold text-navyInk">
            More Courses You May Like
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
