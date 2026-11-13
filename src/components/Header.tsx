"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Fee",
    href: "/fees",
    children: [
      { label: "Fee Schedule", href: "/fees" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
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
 * Feedback round 16: 9 nav links ("Fee" → /fees added after Pricing,
 * the user's word) — measured at 1280px, the row still fits (see the
 * round-16 change log); the xl breakpoint is unchanged. The mobile
 * menu gets "Fee" automatically (same NAV array).
 * Feedback round 14: mobile header compacted (bar 78→64px, logo 58→48px,
 * name 21→23px, tagline 9→10px semibold ink) — and the CLOSED mobile
 * menu no longer leaks a 17px dead strip: its nav padding/border now
 * apply only when open (grid-rows 0fr alone did not collapse the
 * nav's py-2 + border-t). Desktop header unchanged (96px bar, 82px logo).
 * Feedback round 17: "Fee" becomes a DROPDOWN (desktop hover/click,
 * mobile tap-expand) with "Fee Schedule" → /fees and "Pricing" →
 * /pricing inside — the pricing page stays for now, the user will
 * confirm with the client later whether to keep it or remove it.
 * The desktop brand lockup is now THREE centred lines ("Quran
 * Light" / "Institute" / "Learn Quran Online") — the one-line
 * tagline was too long and squeezed the nav + Get Started button;
 * the lockup is narrower now. MOBILE IS UNCHANGED (round 14). */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  /* Fee dropdown (round 17): desktop hover/click + mobile tap-expand. */
  const [feeOpen, setFeeOpen] = useState(false);
  const [mobileFeeOpen, setMobileFeeOpen] = useState(false);
  const feeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOpen(false);
    setFeeOpen(false);
    setMobileFeeOpen(false);
  }, [pathname]);

  /* Close the desktop Fee dropdown on Escape or an outside click. */
  useEffect(() => {
    if (!feeOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFeeOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      if (feeRef.current && !feeRef.current.contains(e.target as Node)) {
        setFeeOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [feeOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const isFeeActive = pathname === "/fees" || pathname === "/pricing";

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
          {/* Brand lockup — round 17 scope addition (user, 13 Nov
              21:17, DESKTOP ONLY): the one-line tagline was too long
              and squeezed the nav + Get Started button. Desktop is
              now THREE lines, centred as a unit (each line centred
              relative to the widest line, "Learn Quran Online"):
              "Quran Light" (styling unchanged) / "Institute" /
              "Learn Quran Online" — the old one-line tagline
              "Institute — Learn Quran Online" is SPLIT into the two
              centred lines below, keeping the tagline styling
              (uppercase, tracking, muted). The lockup is narrower
              now, which frees horizontal space for the nav.
              MOBILE IS UNCHANGED (round 14): the two desktop lines
              are hidden on mobile and the one-line tagline shows
              instead — 64px header, 48px logo, 23px name, 10px
              tagline, exactly as before. */}
          <span className="min-w-0 leading-none min-[641px]:text-center">
            <span className="block font-display text-[27px] font-extrabold tracking-tight max-[640px]:text-[23px]">
              <span className="text-navy">Quran</span>{" "}
              <span className="text-brandRed">Light</span>
            </span>
            <span className="mt-1 block whitespace-nowrap text-[11.5px] font-medium uppercase tracking-[0.14em] text-muted max-[640px]:hidden">
              Institute
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[11.5px] font-medium uppercase tracking-[0.14em] text-muted max-[640px]:hidden">
              Learn Quran Online
            </span>
            <span className="mt-1 hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.09em] text-ink max-[640px]:block">
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
          {NAV.map((item) =>
            item.children ? (
              /* Fee dropdown (round 17): the top-level "Fee" label
                 links to /fees; hover (or the chevron) opens the
                 panel with "Fee Schedule" + "Pricing". The Pricing
                 page stays for now — the user will confirm with the
                 client later whether to keep it or remove it. */
              <div
                key={item.href}
                ref={feeRef}
                className="relative"
                onMouseEnter={() => setFeeOpen(true)}
                onMouseLeave={() => setFeeOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`py-2 pl-3 pr-1 text-[16.5px] font-medium transition ${
                      isFeeActive ? "text-brandRed" : "text-navyInk hover:text-brandRed"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-label="Fee menu"
                    aria-expanded={feeOpen}
                    aria-haspopup="true"
                    onClick={() => setFeeOpen((v) => !v)}
                    className={`flex items-center py-2 pl-0.5 pr-2 transition ${
                      isFeeActive ? "text-brandRed" : "text-navyInk hover:text-brandRed"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        feeOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
                {feeOpen ? (
                  <div className="absolute left-0 top-full z-50 w-52 rounded-xl border border-line bg-white py-2 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setFeeOpen(false)}
                        className={`block px-4 py-2.5 text-[16px] font-medium transition ${
                          isActive(child.href)
                            ? "text-brandRed"
                            : "text-navyInk hover:bg-cream hover:text-brandRed"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[16.5px] font-medium transition ${
                  isActive(item.href) ? "text-brandRed" : "text-navyInk hover:text-brandRed"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
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
            {NAV.map((item, i) =>
              item.children ? (
                /* Fee in the mobile menu (round 17): tapping the row
                   EXPANDS it to show "Fee Schedule" + "Pricing"
                   (indented below); the row itself does not navigate. */
                <div key={item.href} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    tabIndex={open ? 0 : -1}
                    aria-expanded={mobileFeeOpen}
                    onClick={() => setMobileFeeOpen((v) => !v)}
                    style={{ transitionDelay: open ? `${90 + i * 55}ms` : "0ms" }}
                    className={`flex h-12 w-full items-center justify-between px-2 text-[16.5px] font-medium transition-all duration-500 ease-out ${
                      open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    } ${isFeeActive ? "text-brandRed" : "text-navyInk"}`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileFeeOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      mobileFeeOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          tabIndex={open && mobileFeeOpen ? 0 : -1}
                          onClick={() => setOpen(false)}
                          className={`flex h-11 items-center border-t border-line/60 pl-6 pr-2 text-[16px] font-medium ${
                            isActive(child.href) ? "text-brandRed" : "text-navyInk"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              ),
            )}
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
