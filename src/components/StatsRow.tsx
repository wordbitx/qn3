import { CountUp, Reveal } from "@/components/Reveal";

/** Stats row (PREVIEW-SPEC §3.4): white section, top hairline, red
 * numbers, navy-ink labels. Numbers count up over 1600ms. Each stat
 * rises in on scroll (staggered), like Minha's animated stats.
 * Feedback round 7 (13 Nov 2026): 4 stats → 7, from the client's
 * own requirements.
 * Feedback round 8 (13 Nov 2026): 7 stats → 4. The user said the
 * 7-in-one-line strip does not look professional, and the client
 * never asked for "14 Online Courses" / "12 Additional Specialities"
 * / "5-Day FREE Trial" as stats — only the four new numbers she
 * gave belong in the strip: 11+ Years Experience, 25+ Qualified
 * Teachers, 700+ Satisfied Students, 10+ Countries Reached. The
 * 14 courses and 12 specialities stay as site content (Courses page
 * and Specialities section) — only the stats strip loses them.
 * Layout back to a clean 4-in-a-row on desktop (2 per row mobile). */
const STATS = [
  { value: 11, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Qualified Teachers" },
  { value: 700, suffix: "+", label: "Satisfied Students" },
  { value: 10, suffix: "+", label: "Countries Reached" },
];

export default function StatsRow() {
  return (
    <section className="border-t border-line bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-x-8 gap-y-10 px-4 text-center">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={(i % 4) as 0 | 1 | 2 | 3}
            className="w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
          >
            <p className="font-display text-[40px] font-bold leading-none text-brandRed">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-medium text-navyInk">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
