// Course icons — VERIFIED against the reference, per icon (Round 7).
//
// The user rejected hand-drawn icons twice and library icons once, so each
// pictorial icon below was CROPPED from the client's own reference design
// (workspace/user/media_library/image/WhatsApp_Image_2026-11-09_at_2.25.26_PM.jpeg),
// white background removed with soft-alpha matting (no hard threshold, so
// no jagged edges), upscaled 2x with Lanczos + sharpening, and checked at
// 56px card size AND 112px: clean, no blocky pixelation, no white halo on
// white or light-blue backgrounds. At 56px display the source is ~90px, so
// the crop is shown at/below its native resolution — that is why it is
// sharp. Files: public/icons/<slug>.png (10 files).
//
// Per-icon decision (comparison sheet in the Round 7 work notes):
// - CROP (exact reference icon): Quran Translation, Noorani Qaida, Masnoon
//   Duas, Salah, Islamic Studies, Hifz-ul-Quran, Quran Reading (Nazra),
//   Selected Surah, Quran Tafseer, Islamic Manners — the crop IS the
//   reference icon, so it matches same-to-same; the library version was a
//   different drawing (e.g. Hifz library icon showed a person reading,
//   while the reference is just an open book).
// - VECTOR (kept, identical look and crisper): Six Kalimas — big white "6"
//   in a navy circle; the crop looked the same, the vector is sharper.
// - Arabic calligraphy as SVG <text> (vector text, not an image): Tajweed,
//   Basic Arabic, Seerah (محمد ﷺ kept exactly as the user confirmed it).
// data.ts is untouched.

const WHITE = "#ffffff";
const NAVY = "currentColor";

/** Cropped reference icon (public/icons/<slug>.png), shown at card size. */
const img = (slug: string) =>
  `<img src="/icons/${slug}.png" alt="" class="h-14 w-auto max-w-full" loading="lazy" />`;

/** Arabic calligraphy — Tajweed. */
const TAJWEED_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="42" text-anchor="middle" font-size="26" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="54" lengthAdjust="spacingAndGlyphs">تجويد</text></svg>`;

/** Big white "6" in a navy circle — Six Kalimas. */
const SIX_KALIMAS = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="${NAVY}"/><text x="32" y="46" text-anchor="middle" font-size="38" font-weight="800" fill="${WHITE}" font-family="Arial, sans-serif">6</text></svg>`;

/** Arabic calligraphy — Basic Arabic Learning. */
const ARABIC_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="42" text-anchor="middle" font-size="25" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="52" lengthAdjust="spacingAndGlyphs">أخلاق</text></svg>`;

/** Arabic calligraphy — Seerah of Prophet Muhammad ﷺ (user-confirmed text). */
const SEERAH_TEXT = `<svg viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="${NAVY}" font-family="'Amiri','Noto Naskh Arabic','Noto Sans Arabic',serif" textLength="56" lengthAdjust="spacingAndGlyphs">محمد ﷺ</text></svg>`;

/** Icon HTML by course slug. Every slug has an entry — no fallback needed. */
export const COURSE_ICONS: Record<string, string> = {
  "quran-translation": img("quran-translation"), // cropped from reference
  "noorani-qaida": img("noorani-qaida"), // cropped from reference
  "masnoon-duas": img("masnoon-duas"), // cropped from reference
  "salah-namaz": img("salah-namaz"), // cropped from reference
  "islamic-studies": img("islamic-studies"), // cropped from reference
  "hifz-ul-quran": img("hifz-ul-quran"), // cropped from reference
  "tajweed": TAJWEED_TEXT, // Arabic calligraphy text
  "quran-reading-nazra": img("quran-reading-nazra"), // cropped from reference
  "selected-surah-memorization": img("selected-surah-memorization"), // cropped from reference
  "six-kalimas": SIX_KALIMAS, // vector "6" in navy circle
  "basic-arabic-learning": ARABIC_TEXT, // Arabic calligraphy text
  "quran-tafseer": img("quran-tafseer"), // cropped from reference
  "seerah": SEERAH_TEXT, // Arabic calligraphy text
  "islamic-manners-ethics": img("islamic-manners-ethics"), // cropped from reference
};

/** Resolve the icon HTML for a course (override first, original icon as fallback). */
export function courseIcon(slug: string, fallback: string): string {
  return COURSE_ICONS[slug] ?? fallback;
}
