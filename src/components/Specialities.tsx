import { ADDITIONAL_SPECIALITIES } from "@/lib/data";

/** Our 12 Additional Specialities (PREVIEW-SPEC §5.3) — numbered
 * SPECIALITY 1–12 cards, About page only. */
export default function Specialities() {
  return (
    <section className="py-[88px] max-[640px]:py-[60px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker kicker-centered">What We Offer</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navyInk sm:text-4xl">
            Our 12 Additional Specialities
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Beyond the courses themselves, these are the specialities that make learning with
            Quran Light Institute complete.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADDITIONAL_SPECIALITIES.map((s, i) => (
            <article
              key={s.title}
              className="rounded-[14px] border border-line bg-white p-[28px_26px] shadow-[0_3px_12px_rgba(13,27,51,0.05)] transition duration-300 hover:-translate-y-[5px] hover:shadow-card"
            >
              <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-brandRed">
                Speciality {i + 1}
              </p>
              <h3 className="mt-2 font-display text-[19.5px] font-bold leading-snug text-navyInk">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
