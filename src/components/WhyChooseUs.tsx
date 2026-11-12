import Image from "next/image";
import { TEACHERS_PHOTO } from "@/lib/site";

/** Why Choose Us (PREVIEW-SPEC §3.7): cream section, photo left with
 * circular "5+ Years Experience" badge, 4 features 2×2 on the right. */
const FEATURES = [
  {
    title: "Qualified Teachers",
    text: "Experienced, qualified and caring male and female Quran teachers for every student.",
    icon: "M12 3 1 8.5l11 5.5 9-4.5V15h2V8.5L12 3zM5 12.6V16c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.4l-7 3.5-7-3.5z",
  },
  {
    title: "One-to-One Attention",
    text: "Every class is a live one-to-one session — the teacher's full attention is on your child.",
    icon: "M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z",
  },
  {
    title: "Flexible Learning",
    text: "Choose class timings that fit your daily routine and your time zone — anywhere in the world.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6 4.2 2.5-.8 1.3L11 14V6h2v6.6z",
  },
  {
    title: "Progress Monitoring",
    text: "Regular progress assessments and personalized guidance keep parents fully informed.",
    icon: "M3 3v18h18v-2H5V3H3zm4 12 4-4 3 3 6-7-1.4-1.4L13 11.2l-3-3-5.4 5.4L4 14.4z",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-[88px] max-[640px]:py-[60px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <Image
              src={TEACHERS_PHOTO}
              alt="Two women in hijabs in a live online Quran class with their teacher on a laptop"
              width={1200}
              height={900}
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute -top-[26px] left-[-26px] flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full bg-white text-center shadow-cardLg max-lg:left-auto max-lg:right-4">
            <span className="font-display text-[40px] font-extrabold leading-none text-brandRed">
              5+
            </span>
            <span className="mt-1 px-3 text-[14px] font-bold leading-tight text-navyInk">
              Years Experience
            </span>
          </div>
        </div>
        <div>
          <p className="kicker">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navyInk sm:text-4xl">
            Empowering Skills for a Successful Future Ahead
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            With 5+ years of experience in online Quran teaching, we combine qualified teachers,
            a clear structure and genuine care — so every student progresses with confidence.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-brandRed text-white shadow-card">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                    <path d={f.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-[17px] font-bold text-navyInk">
                    {f.title}
                  </span>
                  <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted">
                    {f.text}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
