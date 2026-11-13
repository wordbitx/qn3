"use client";

import { useState } from "react";
import { COURSES } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/site";

/**
 * Trial form (PREVIEW-SPEC §4) — same component, two placements.
 * variant "hero": translucent red glass card. variant "contact": white
 * card, left-aligned. Fields: Name* / Country / Email / Phone/WhatsApp* /
 * course dropdown (all 14, preview order) / message. Custom validation
 * (novalidate); on success opens WhatsApp with the trial request — no
 * server submission, no email, no database.
 */
export default function TrialForm({
  variant = "hero",
  defaultCourse = "",
}: {
  variant?: "hero" | "contact";
  defaultCourse?: string;
}) {
  const hero = variant === "hero";
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(defaultCourse);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const inputCls = hero
    ? "w-full rounded-lg border border-white/50 bg-white/95 px-4 py-2.5 text-[16px] text-ink outline-none placeholder:text-muted/70 focus:border-white focus:ring-2 focus:ring-white/40"
    : "w-full rounded-xl border-[1.5px] border-line bg-[#fffdf9] px-4 py-3 text-[16px] text-ink outline-none placeholder:text-muted/70 focus:border-navy focus:ring-2 focus:ring-navy/20";
  const labelCls = hero
    ? "mb-1 block text-sm font-medium text-white"
    : "mb-1.5 block text-sm font-semibold text-navyDark";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please add your name and Phone/WhatsApp number so we can arrange your trial.");
      setDone(false);
      return;
    }
    setError("");
    const lines = [
      "Assalamu Alaikum! I want to book the 5-Day FREE Trial Classes at Quran Light Institute.",
      "",
      `Name: ${name.trim()}`,
    ];
    if (country.trim()) lines.push(`Country: ${country.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    lines.push(`Phone/WhatsApp: ${phone.trim()}`);
    if (course) lines.push(`Course: ${course}`);
    if (message.trim()) lines.push(`Message: ${message.trim()}`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    setDone(true);
  }

  const firstName = name.trim().split(/\s+/)[0] || "";
  const successText = done
    ? `JazakAllah, ${firstName}! WhatsApp should now open with your trial request ready to send.`
    : "JazakAllah! WhatsApp should now open with your trial request ready to send.";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={
        hero
          ? "rounded-[18px] border border-white/50 bg-[linear-gradient(135deg,rgba(208,0,0,0.68),rgba(150,0,0,0.62))] p-[27px_26px_22px] shadow-cardLg backdrop-blur-[18px]"
          : "relative overflow-hidden rounded-[20px] bg-white p-6 shadow-cardLg ring-1 ring-line sm:p-10"
      }
    >
      {/* Feedback round 10 (13 Nov 2026): premium contact card — red top
          accent + "100% Free" pill. Hero variant untouched. */}
      {hero ? null : (
        <span className="absolute inset-x-0 top-0 h-1.5 bg-brandRed" aria-hidden="true" />
      )}
      {hero ? null : (
        <p className="relative inline-flex rounded-full bg-[#fff1f0] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-brandRed">
          100% Free &middot; No Payment Needed
        </p>
      )}
      <h2
        className={`font-display font-bold leading-tight ${
          hero
            ? "text-center text-[26px] text-white"
            : "mt-4 text-left text-[28px] text-navyInk"
        }`}
      >
        5 Free Trial Classes
      </h2>
      <p
        className={`mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] ${
          hero ? "text-center text-white/90" : "text-left text-brandRed"
        }`}
      >
        Book your trial for students satisfaction
      </p>

      <div className={hero ? "mt-5 grid gap-3 sm:grid-cols-2" : "mt-6 grid gap-4 sm:grid-cols-2"}>
        <label className="block">
          <span className={labelCls}>Name *</span>
          <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className={labelCls}>Your Country</span>
          <input className={inputCls} value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Your country" autoComplete="country-name" />
        </label>
        <label className="block">
          <span className={labelCls}>Email</span>
          <input className={inputCls} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" autoComplete="email" />
        </label>
        <label className="block">
          <span className={labelCls}>Phone/Whatsapp *</span>
          <input className={inputCls} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+92 ..." inputMode="tel" autoComplete="tel" />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Select a Course (Subject)</span>
          <select className={inputCls} value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select a Course (Subject)</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Write your message...</span>
          <textarea className={`${inputCls} min-h-[72px] resize-y`} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>

      {error ? (
        <p
          className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
            hero ? "bg-white text-brandRed" : "bg-cream text-brandRed"
          }`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
      {done ? (
        <p
          className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
            hero ? "bg-white text-navyInk" : "bg-cream text-navyInk"
          }`}
          role="status"
        >
          {successText}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 w-full btn-navy"
      >
        Book My FREE Trial
      </button>
      {hero ? (
        <p className="mt-3 text-center text-[13.5px] leading-relaxed text-white/85">
          Your details open in WhatsApp — nothing is charged, the trial is completely free.
        </p>
      ) : (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 border-t border-line pt-4">
          {["No payment needed", "5-day FREE trial", "Reply on WhatsApp"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[13px] font-medium text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-brandRed" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      )}
    </form>
  );
}
