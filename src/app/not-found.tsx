import Link from "next/link";
import PageBanner from "@/components/PageBanner";

/** Branded 404 — navy page-hero style, link back home. */
export default function NotFound() {
  return (
    <>
      <PageBanner crumb="Not Found" title="Page Not Found" />
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="leading-relaxed text-muted">
            The page you are looking for does not exist or has moved. You can return to the
            homepage or explore our Quran courses instead.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[50px] items-center rounded-[9px] bg-brandRed px-[30px] py-[14px] text-[16.5px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-redDark"
            >
              Back to Home
            </Link>
            <Link
              href="/courses"
              className="inline-flex min-h-[50px] items-center rounded-[9px] border-2 border-navy bg-transparent px-[30px] py-[14px] text-[16.5px] font-extrabold text-navy transition hover:bg-navy hover:text-white"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
