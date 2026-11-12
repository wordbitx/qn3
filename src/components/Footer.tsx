import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/data";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, TRIAL_MESSAGE, whatsappUrl } from "@/lib/site";

const QUICK_LINKS: [string, string][] = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Courses", "/courses"],
  ["Our Teachers", "/teachers"],
  ["Pricing Plans", "/pricing"],
  ["FAQs", "/faqs"],
  ["Contact Us", "/contact"],
];

/**
 * Footer — navy-dark #002257. Brand lockup mirrors the header: "Quran"
 * white + "Light" #ff3b30, tagline "Institute — Learn Quran Online".
 * Facebook/YouTube are PLACEHOLDERS → /contact (preview behaviour);
 * only WhatsApp is a real link.
 */
export default function Footer() {
  const wa = whatsappUrl(TRIAL_MESSAGE);
  return (
    <footer className="bg-navyDark pt-[72px] text-white/80">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo.jpg"
                alt="Quran Light Institute logo"
                width={640}
                height={640}
                className="h-24 w-24 shrink-0 rounded-full bg-white object-cover p-1"
              />
              <div className="leading-none">
                <p className="font-display text-[27px] font-extrabold">
                  <span className="text-white">Quran</span>{" "}
                  <span className="text-redBright">Light</span>
                </p>
                <p className="mt-2 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-white/70">
                  Institute — Learn Quran Online
                </p>
              </div>
            </div>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/80">
              Quran Light Institute offers live one-to-one online Quran classes for kids and
              adults — with qualified male and female teachers, flexible timings and a 3-day
              absolutely FREE trial.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <Link
                href="/contact"
                aria-label="Facebook (contact page)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brandRed"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                  <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                aria-label="YouTube (contact page)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brandRed"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
                </svg>
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brandRed"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .6-.2 1.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/80 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Popular Courses</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className="text-white/80 transition hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                </svg>
                <span>
                  <span className="block text-white/60">Phone / WhatsApp</span>
                  <a href={PHONE_TEL} className="font-bold text-white hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>
                  <span className="block text-white/60">Email</span>
                  <a href={`mailto:${EMAIL}`} className="break-all font-bold text-white hover:underline">
                    {EMAIL}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>
                  <span className="block font-bold text-white">Online Classes — Worldwide</span>
                  <span className="text-white/80">Learn from home, anywhere</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-[14.5px] text-white/65">
          © 2026 Quran Light Institute — Learn Quran Online with Tajweed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
