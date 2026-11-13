import { Reveal } from "@/components/Reveal";
import { SAMPLE_REVIEWS } from "@/lib/data";

/**
 * Sample reviews grid (feedback round 10, 13 Nov 2026).
 * These are SAMPLES, not real reviews — the user asked for 5–10 good
 * reviews to show how the section will look, and the client will delete
 * them and replace them with her official reviews after handover.
 * Honesty guard: EVERY card carries a visible "Sample" badge, and the
 * section using this grid carries the sample note under its heading.
 * First names only, no full names, no invented countries or results.
 */
const STAR = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.4L18 20.5 12 17l-6 3.5 1.25-6.8L2.5 9.3l6.6-1.04L12 2z" />
  </svg>
);

export default function TestimonialsGrid() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SAMPLE_REVIEWS.map((r, i) => (
        <Reveal
          key={r.name}
          from={i % 2 === 0 ? "left" : "right"}
          delay={(i % 3) as 0 | 1 | 2}
          className="h-full"
        >
          <figure className="flex h-full flex-col rounded-[20px] bg-white p-6 shadow-card ring-1 ring-line transition duration-300 hover:-translate-y-[5px] hover:shadow-cardLg sm:p-7">
            <div className="flex items-center justify-between">
              <span className="flex gap-0.5 text-brandRed" aria-label="5 out of 5 stars">
                {STAR}
                {STAR}
                {STAR}
                {STAR}
                {STAR}
              </span>
              <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                Sample
              </span>
            </div>
            <blockquote className="mt-4 flex-1 leading-relaxed text-navyInk">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-white" aria-hidden="true">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="block font-display text-[15px] font-bold text-navyInk">{r.name}</span>
                <span className="block text-[13px] text-muted">
                  {r.role} &middot; {r.course}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
