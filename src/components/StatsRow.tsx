import { CountUp, Reveal } from "@/components/Reveal";

/** Stats row (PREVIEW-SPEC §3.4): white section, top hairline, red
 * numbers, navy-ink labels. Numbers count up over 1100ms. Each stat
 * rises in on scroll (staggered), like Minha's animated stats. */
const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 14, suffix: "", label: "Online Courses" },
  { value: 12, suffix: "", label: "Additional Specialities" },
  { value: 3, suffix: "-Day", label: "Absolutely FREE Trial" },
];

export default function StatsRow() {
  return (
    <section className="border-t border-line bg-white py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <p className="font-display text-[52px] font-extrabold leading-none text-brandRed">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-bold text-navyInk">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
