"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Admission", href: "/admission" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

/**
 * Sticky header — cream #fff7ec, 96px (64px mobile). Flat nav, active link
 * is red text. Brand: 82px circular logo, "Quran Light" (Light red) +
 * "Institute — Learn Quran Online" tagline (visible on mobile too since
 * the mobile-fix round — smaller, single line). Red "Get Started" → /contact.
 * Burger (≤1080px): red 48×48 button, morphs into an X when open, gentle
 * float + press feedback; the cream mobile menu slides down + fades in
 * with links staggering in one by one (never all at once).
 * Menu closes on link tap and on route change.
 * Feedback round 7: 8 nav links now (Admission added) — the desktop
 * row needs ≥1280px to fit, so the desktop nav / burger breakpoint
 * moves from lg to xl; below 1280px the mobile menu shows instead.
 * Feedback round 14: mobile header compacted (bar 78→64px, logo 58→48px,
 * name 21→23px, tagline 9→10px semibold ink) — and the CLOSED mobile
 * menu no longer leaks a 17px dead strip: its nav padding/border now
 * apply only when open (grid-rows 0fr alone did not collapse the
 * nav's py-2 + border-t). Desktop header unchanged (96px bar, 82px logo). */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream shadow-[0_2px_18px_rgba(13,27,51,0.06)]">
      <div className="mx-auto flex h-[96px] max-w-7xl items-center gap-3 px-4 max-[640px]:h-[64px]">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Quran Light Institute — home">
          <span className="block h-[82px] w-[82px] shrink-0 rounded-full bg-white p-1 shadow-[0_2px_12px_rgba(0,51,140,0.18)] max-[640px]:h-[48px] max-[640px]:w-[48px]">
            <Image
              src="/logo.jpg"
              alt="Quran Light Institute logo"
              width={640}
              height={640}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block font-display text-[27px] font-extrabold tracking-tight max-[640px]:text-[23px]">
              <span className="text-navy">Quran</span>{" "}
              <span className="text-brandRed">Light</span>
            </span>
            <span className="mt-1.5 block whitespace-nowrap text-[11.5px] font-medium uppercase tracking-[0.14em] text-muted max-[640px]:mt-1 max-[640px]:text-[10px] max-[640px]:font-semibold max-[640px]:tracking-[0.09em] max-[640px]:text-ink">
              Institute — Learn Quran Online
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="burger-float ml-auto flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full bg-brandRed text-white shadow-[0_8px_20px_rgba(208,0,0,0.35)] transition duration-300 hover:bg-redDark hover:shadow-[0_10px_24px_rgba(208,0,0,0.45)] active:scale-90 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ease-out ${
              open ? "translate-y-[7.5px] rotate-45" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`block h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ease-out ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`block h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ease-out ${
              open ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        <nav className="main ml-auto hidden items-center gap-1 xl:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-[16.5px] font-medium transition ${
                isActive(item.href) ? "text-brandRed" : "text-navyInk hover:text-brandRed"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-trial ml-3 btn-primary"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Mobile menu — always mounted; opens with a smooth slide-down +
          fade (grid-rows 0fr → 1fr) and links stagger in one by one. */}
      <div
        className={`grid transition-all duration-500 ease-in-out xl:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className={`min-h-0 overflow-hidden bg-cream px-4 ${
            open ? "border-t border-line py-2" : "pointer-events-none border-t-0 py-0"
          }`}
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${90 + i * 55}ms` : "0ms" }}
                className={`flex h-12 items-center border-b border-line px-2 text-[16.5px] font-medium transition-all duration-500 ease-out last:border-b-0 ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                } ${isActive(item.href) ? "text-brandRed" : "text-navyInk"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${90 + NAV.length * 55}ms` : "0ms" }}
              className={`btn-trial mt-3 flex h-12 items-center justify-center rounded-[12px] bg-brandRed text-[16.5px] font-extrabold text-white shadow-[0_10px_22px_rgba(208,0,0,0.30)] transition-all duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
