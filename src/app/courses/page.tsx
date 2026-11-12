import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CourseCard from "@/components/CourseCard";
import Steps from "@/components/Steps";
import { COURSES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Courses — Quran Light Institute",
  description:
    "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 3-day absolutely FREE trial classes.",
  alternates: { canonical: "https://quranlightinstitute.com/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageBanner crumb="Courses" title="Our Courses" />
      <section className="py-[88px] max-[640px]:py-[60px]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <div>
              <p className="kicker">Featured Quran Courses</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navyInk sm:text-4xl">
                Find Quran Courses for
                <br />
                Personal Growth
              </h2>
            </div>
            <p className="leading-relaxed text-muted lg:max-w-[430px] lg:justify-self-end">
              All 14 courses are taught live, one-to-one, with a 3-day absolutely FREE trial
              before you enrol in any of them.
            </p>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
      <Steps />
    </>
  );
}
