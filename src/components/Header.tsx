"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

/**
 * Sticky header — cream #fff7ec, 96px (78px mobile). Flat nav, active link
 * is red text. Brand: 82px circular logo, "Quran Light" (Light red) +
 * "Institute — Learn Quran Online" tagline. Red "Get Started" → /contact.
 * Burger (≤1080px): red 48×48 button, cream mobile menu, 48px rows.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream shadow-[0_2px_18px_rgba(13,27,51,0.06)]">
      <div className="mx-auto flex h-[96px] max-w-7xl items-center gap-3 px-4 max-[640px]:h-[78px]">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Quran Light Institute — home">
          <span className="block h-[82px] w-[82px] shrink-0 rounded-full bg-white p-1 shadow-[0_2px_12px_rgba(0,51,140,0.18)] max-[640px]:h-[58px] max-[640px]:w-[58px]">
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
            <span className="block font-display text-[27px] font-extrabold tracking-tight max-[640px]:text-[22px]">
              <span className="text-navy">Quran</span>{" "}
              <span className="text-brandRed">Light</span>
            </span>
            <span className="mt-1.5 hidden text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-muted min-[641px]:block">
              Institute — Learn Quran Online
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="ml-auto flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[5px] rounded-[9px] bg-brandRed text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[2.5px] w-6 rounded-full bg-white" aria-hidden="true" />
          <span className="block h-[2.5px] w-6 rounded-full bg-white" aria-hidden="true" />
          <span className="block h-[2.5px] w-6 rounded-full bg-white" aria-hidden="true" />
        </button>

        <nav className="main ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-[16.5px] font-extrabold transition ${
                isActive(item.href) ? "text-brandRed" : "text-navyInk hover:text-brandRed"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-trial ml-3 inline-flex min-h-[50px] items-center rounded-[9px] bg-brandRed px-[30px] py-[14px] text-[16.5px] font-extrabold text-white shadow-[0_12px_24px_rgba(208,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-redDark"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-cream px-4 py-2 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex h-12 items-center border-b border-line px-2 text-[16.5px] font-extrabold last:border-b-0 ${
                  isActive(item.href) ? "text-brandRed" : "text-navyInk"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-trial mt-3 flex h-12 items-center justify-center rounded-[9px] bg-brandRed text-[16.5px] font-extrabold text-white"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
