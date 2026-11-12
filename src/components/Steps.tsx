import Image from "next/image";

/** Our Process (PREVIEW-SPEC §3.8): 4 full-photo cards, min-height 410px,
 * cards 2 and 4 offset 34px down on desktop, STEP 01–04 in #ff3b30.
 * Photos are the 4 step Pexels IDs in order. */
const STEPS = [
  {
    n: "STEP 01",
    title: "Browse Our Courses",
    text: "Explore the 14 courses and pick the one that fits your child — or ask us on WhatsApp and we will guide you.",
    src: "https://images.pexels.com/photos/8122079/pexels-photo-8122079.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A young woman in a hijab working on a laptop",
  },
  {
    n: "STEP 02",
    title: "Book Your Free Trial",
    text: "Fill the trial form or message us on WhatsApp. Your 3-day trial classes are absolutely free.",
    src: "https://images.pexels.com/photos/7582576/pexels-photo-7582576.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A woman in a hijab studying on a laptop with a book",
  },
  {
    n: "STEP 03",
    title: "Meet Your Teacher",
    text: "The teacher assesses the student's level in the trial and recommends the right starting point.",
    src: "https://images.pexels.com/photos/8164744/pexels-photo-8164744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Teachers guiding girls reading the Holy Quran in a mosque",
  },
  {
    n: "STEP 04",
    title: "Learn & Track Progress",
    text: "Live one-to-one classes begin, with regular progress assessments shared with parents.",
    src: "https://images.pexels.com/photos/8164747/pexels-photo-8164747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "A young girl in a hijab reading the Holy Quran by a mosque window",
  },
];

export default function Steps() {
  return (
    <section className="bg-cream pb-[88px] pt-[10px] max-[640px]:pb-[60px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker kicker-centered">Our Process</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navyInk sm:text-4xl">
            How Learning Happens Step By Step
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            From your first free trial class to steady, monitored progress — the journey is
            simple and clear.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={`group relative min-h-[410px] overflow-hidden rounded-[14px] shadow-card transition duration-300 hover:-translate-y-[7px] hover:shadow-cardLg ${
                i % 2 === 1 ? "lg:mt-[34px]" : ""
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[rgba(0,16,44,0.92)] via-[rgba(0,16,44,0.45)] to-transparent"
                aria-hidden="true"
              />
              <div className="relative flex h-full min-h-[410px] flex-col justify-end p-5">
                <span className="text-[14.5px] font-extrabold uppercase tracking-[0.16em] text-redBright">
                  {s.n}
                </span>
                <h3 className="mt-2 font-display text-[21px] font-bold leading-snug text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/85">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
