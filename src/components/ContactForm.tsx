"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

/**
 * Contact form (feedback round 13, 13 Nov 2026) — a GENERAL message
 * form, NOT the trial form. The user said the Contact page looked
 * identical to Admission because both used the same TrialForm
 * ("Book My FREE Trial") in the same two-column navy-panel layout.
 * This form is for questions only — no trial, no booking, no plans.
 * Fields: Name* / Phone or Email* / subject dropdown / Message*.
 * Custom validation (novalidate); on success opens WhatsApp with the
 * message ready-to-send — no server submission, no email, no database.
 * Used ONLY on the Contact page. The hero and the Admission page
 * keep TrialForm exactly as it is.
 */
const SUBJECTS = ["Course enquiry", "Fees", "Class timings", "Something else"];

export default function ContactForm({
  defaultCourse = "",
}: {
  defaultCourse?: string;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState(
    defaultCourse ? `I want to ask about the "${defaultCourse}" course.` : ""
  );
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const inputCls =
    "w-full rounded-xl border-[1.5px] border-line bg-[#fffdf9] px-4 py-3 text-[16px] text-ink outline-none placeholder:text-muted/70 focus:border-navy focus:ring-2 focus:ring-navy/20";
  const labelCls = "mb-1.5 block text-sm font-semibold text-navyDark";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError("Please add your name, a phone number or email, and your message so we can reply.");
      setDone(false);
      return;
    }
    setError("");
    const lines = [
      "Assalamu Alaikum! I have a question for Quran Light Institute.",
      "",
      `Name: ${name.trim()}`,
      `Phone or Email: ${contact.trim()}`,
      `About: ${subject}`,
      `Message: ${message.trim()}`,
    ];
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
    setDone(true);
  }

  const firstName = name.trim().split(/\s+/)[0] || "";
  const successText = done
    ? `JazakAllah, ${firstName}! WhatsApp should now open with your message ready to send.`
    : "JazakAllah! WhatsApp should now open with your message ready to send.";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[20px] bg-white p-6 shadow-cardLg ring-1 ring-line sm:p-10"
    >
      <h2 className="text-left font-display text-[28px] font-bold leading-tight text-navyInk">
        Send Us a Message
      </h2>
      <p className="mt-2 leading-relaxed text-muted">
        Fill the form and your message opens ready-to-send in WhatsApp.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Your Name *</span>
          <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className={labelCls}>Phone or Email *</span>
          <input className={inputCls} value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Phone number or email" autoComplete="email" />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>What is your question about?</span>
          <select className={inputCls} value={subject} onChange={(e) => setSubject(e.target.value)}>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={labelCls}>Your Message *</span>
          <textarea className={`${inputCls} min-h-[120px] resize-y`} rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your question here..." />
        </label>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-sm font-medium text-brandRed" role="alert">
          {error}
        </p>
      ) : null}
      {done ? (
        <p className="mt-4 rounded-xl bg-cream px-4 py-3 text-sm font-medium text-navyInk" role="status">
          {successText}
        </p>
      ) : null}

      <button type="submit" className="mt-6 w-full btn-navy">
        Send Message
      </button>
    </form>
  );
}
