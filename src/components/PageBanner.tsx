import Image from "next/image";
import Link from "next/link";
import { HERO_PHOTO } from "@/lib/site";

/**
 * Sub-page hero (PREVIEW-SPEC §9): full-bleed hero photo at opacity 0.35
 * + navy gradient, centred H1, breadcrumb below it ("Home / <Crumb>").
 */
export default function PageBanner({
  crumb,
  title,
  parentCrumb,
  parentHref,
}: {
  crumb: string;
  title: string;
  parentCrumb?: string;
  parentHref?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-navyDark text-white">
      <Image
        src={HERO_PHOTO}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.35]"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#001233]/85 via-[#002257]/60 to-[#002257]/25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-[70px] pt-[74px] text-center">
        <h1 className="anim-rise anim-d1 font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">
          {title}
        </h1>
        <p className="anim-rise anim-d2 mt-4 text-[15px] font-bold text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {parentCrumb ? (
            <>
              <span className="mx-2 text-white" aria-hidden="true">
                /
              </span>
              {parentHref ? (
                <Link href={parentHref} className="hover:text-white">
                  {parentCrumb}
                </Link>
              ) : (
                <span>{parentCrumb}</span>
              )}
            </>
          ) : null}
          <span className="mx-2 text-white" aria-hidden="true">
            /
          </span>
          <span className="text-white">{crumb}</span>
        </p>
      </div>
    </div>
  );
}
