"use client";

import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { PRICING_PLANS } from "@/lib/data";
import { feeMessageForPlan, whatsappUrl } from "@/lib/site";

/**
 * Pricing cards (PREVIEW-SPEC §3.9). No numeric prices anywhere — the
 * price line reads "Monthly Fee / Confirmed personally on WhatsApp — no
 * hidden charges". Popular card (45 Minutes): pale-pink gradient +
 * red top border + red button + "Popular" badge. Clicking a card body
 * plays a tap bounce; Enter/Space on a focused card focuses its button.
 */
export default function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PRICING_PLANS.map((plan, i) => (
        <Reveal
          key={plan.id}
          from={i === 0 ? "left" : i === 1 ? "up" : "right"}
          delay={i as 0 | 1 | 2}
          className="h-full"
        >
          <PricingCard plan={plan} />
        </Reveal>
      ))}
    </div>
  );
}

function PricingCard({ plan }: { plan: (typeof PRICING_PLANS)[number] }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const popular = Boolean(plan.popular);

  function tap() {
    const el = cardRef.current;
    if (!el) return;
    el.classList.remove("tapped");
    void el.offsetWidth; // restart the animation
    el.classList.add("tapped");
  }

  return (
    <article
      ref={cardRef}
      tabIndex={0}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) return;
        tap();
      }}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && e.target === cardRef.current) {
          e.preventDefault();
          btnRef.current?.focus();
        }
      }}
      className={`pricing-card relative flex h-full flex-col rounded-2xl border p-7 shadow-card ${
        popular
          ? "border-line bg-[linear-gradient(180deg,#ffffff,#fdeeee)] [border-top:3px_solid_#D00000]"
          : "border-line bg-[#fff8f6] hover:border-navy"
      }`}
    >
      <h3 className="font-display text-[27px] font-bold leading-tight text-navyInk">
        {plan.name}
        {popular ? (
          <span className="ml-2 inline-block -translate-y-0.5 rounded-full bg-brandRed px-3 py-1 align-middle text-xs font-bold uppercase tracking-wider text-white">
            Popular
          </span>
        ) : null}
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{plan.desc}</p>
      <p className="mt-5 font-medium text-navyInk">Features:</p>
      <ul className="mt-3 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.95rem] font-medium text-navyInk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-dashed border-line pt-5">
        <p className="font-display text-[21px] font-bold text-navyInk">Monthly Fee</p>
        <p className="mt-0.5 text-sm text-muted">
          Exact monthly prices by days per week — see the{" "}
          <a href="/fees" className="font-semibold text-brandRed underline">
            Fee Schedule
          </a>
        </p>
      </div>
      <a
        ref={btnRef}
        href={whatsappUrl(feeMessageForPlan(plan.name))}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 w-full text-center ${popular ? "btn-primary" : "btn-navy"}`}
      >
        Confirm Fee on WhatsApp
      </a>
    </article>
  );
}
