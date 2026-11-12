import Image from "next/image";
import { Reveal } from "@/components/Reveal";

/**
 * Our Process (PREVIEW-SPEC §3.8), feedback round 5 — restyled to
 * Minha's "How Learning Happens" (shot2) EXACTLY. What was odd vs
 * Minha: (1) our photos were small (104px mobile / 120px desktop) —
 * Minha's are a big ~150px square on the left; (2) our cards had a
 * warm blush RING (#fbe9e4) — Minha's are plain white with only a
 * soft shadow; (3) our cards HOVER-LIFTED (-translate-y-1.5) —
 * Minha's sit still; (4) our titles turned RED on hover —
 * Minha's stay dark navy; (5) our padding/gap were tight (p-4,
 * gap-5) — Minha's are roomier. Fixed: 120px mobile / 150px
 * desktop photos with ~12px corners, plain white cards (soft
 * shadow only, no ring, no lift), dark titles, p-5/sm:p-6,
 * gap-6. KEPT: our red "01." numbers (not Minha's orange), our
 * 4 steps' content and photos, the 2×2 desktop grid, the photo
 * zoom on hover (inside its overflow-hidden frame — no layout
 * effect), and the blush #fff8f6 SECTION background (the user
 * complained about the boxes, not the section; the blush keeps
 * this section distinct from the cream Why Choose Us above it).
 * Same copy, same photos as the mobile-fix round.
 */
const STEPS = [
  {
    n: "STEP 01",
    num: "01",
    title: "Browse Our Courses",
    text: "Explore the 14 courses and pick the one that fits your child — or ask us on WhatsApp and we will guide you.",
    src: "https://images.pexels.com/photos/8122079/pexels-photo-8122079.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A young woman in a hijab working on a laptop",
  },
  {
    n: "STEP 02",
    num: "02",
    title: "Book Your Free Trial",
    text: "Fill the trial form or message us on WhatsApp. Your 3-day trial classes are absolutely free.",
    src: "https://images.pexels.com/photos/7582576/pexels-photo-7582576.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A woman in a hijab studying on a laptop with a book",
  },
  {
    n: "STEP 03",
    num: "03",
    title: "Meet Your Teacher",
    text: "The teacher assesses the student's level in the trial and recommends the right starting point.",
    src: "https://images.pexels.com/photos/8164744/pexels-photo-8164744.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Teachers guiding girls reading the Holy Quran in a mosque",
  },
  {
    n: "STEP 04",
    num: "04",
    title: "Learn & Track Progress",
    text: "Live one-to-one classes begin, with regular progress assessments shared with parents.",
    src: "https://images.pexels.com/photos/8164747/pexels-photo-8164747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A young girl in a hijab reading the Holy Quran by a mosque window",
  },
];

export default function Steps() {
  return (
    <section className="bg-[#fff8f6] pb-[96px] pt-[10px] max-[640px]:pb-[64px]">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="kicker kicker-centered">Our Process</p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-navyInk sm:text-[44px]">
            How Learning Happens Step By Step
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            From your first free trial class to steady, monitored progress — the journey is
            simple and clear.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              from={i % 2 === 0 ? "left" : "right"}
              delay={(i % 2) as 0 | 1}
              className="h-full"
            >
              <div className="group flex h-full items-center gap-5 rounded-[18px] bg-white p-5 shadow-card sm:gap-6 sm:p-6">
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[12px] sm:h-[150px] sm:w-[150px]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 120px, 160px"
                    className="object-cover transition duration-500 group-hover:scale-[1.07]"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-display text-[20px] font-bold leading-none text-brandRed">
                    {s.num}.
                  </span>
                  <h3 className="mt-1.5 font-display text-[20px] font-bold leading-snug text-navyInk sm:text-[22px]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
