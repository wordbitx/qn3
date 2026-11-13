import { CountUp, Reveal } from "@/components/Reveal";

/** Stats row (PREVIEW-SPEC §3.4): white section, top hairline, red
 * numbers, navy-ink labels. Numbers count up over 1600ms. Each stat
 * rises in on scroll (staggered), like Minha's animated stats.
 * Feedback round 7 (13 Nov 2026): 4 stats → 7, from the client's
 * own requirements — 11+ Years Experience, 25+ Qualified Teachers,
 * 700+ Satisfied Students, 10+ Countries Reached, 5-Day FREE Trial
 * (was 3-Day). Flex-wrap + justify-center so the last row is centred
 * on every width (2 per row mobile, 3 per row sm, 7 in one row lg). */
const STATS = [
  { value: 11, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Qualified Teachers" },
  { value: 700, suffix: "+", label: "Satisfied Students" },
  { value: 10, suffix: "+", label: "Countries Reached" },
  { value: 14, suffix: "", label: "Online Courses" },
  { value: 12, suffix: "", label: "Additional Specialities" },
  { value: 5, suffix: "-Day", label: "Absolutely FREE Trial" },
];

export default function StatsRow() {
  return (
    <section className="border-t border-line bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-x-8 gap-y-10 px-4 text-center">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={(i % 4) as 0 | 1 | 2 | 3}
            className="w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.5rem)] lg:w-[calc(14.2857%-1.75rem)]"
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
