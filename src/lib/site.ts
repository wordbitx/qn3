export const SITE_NAME = "Quran Light Institute";
export const SITE_TAGLINE = "Learn Quran Online with Tajweed";
export const PHONE_DISPLAY = "+92 305 6622104";
export const PHONE_TEL = "tel:+923056622104";
export const PHONE_LOCAL = "0305 6622104";
export const WHATSAPP_NUMBER = "923056622104";
export const EMAIL = "info@quranlightinstitute.com";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappUrl(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const TRIAL_MESSAGE =
  "Assalamu Alaikum! I want to book the 3-Day FREE Trial Classes at Quran Light Institute.";

export function trialMessageForCourse(courseName: string): string {
  return `Assalamu Alaikum! I want to ask about the "${courseName}" course and book the 3-day FREE trial classes at Quran Light Institute.`;
}

export function feeMessageForPlan(planName: string): string {
  return `Assalamu Alaikum! I want the exact monthly fee for the "${planName}" plan at Quran Light Institute.`;
}

/* Verified Pexels photos (see ~/workspace/quran-light-real-photos-2026-11-11/README.md
   and ~/workspace/quran-light-qn3-spec/PHOTO-ROUND-2-2026-11-12.md).
   Photo round 2 (12 Nov 2026): the old hero female 34481773 and the
   green-dress female 7249219 are replaced EVERYWHERE. New photos are
   Turkish / Arab / South Asian subjects, each HTTP 200 + JPEG + visually
   inspected. 20784507 (Turkish woman, Sancaklar Mosque) survives only as
   one tiny 52px hero proof avatar.
   Feedback round 3 (12 Nov 2026): the hero female 29106154 is replaced —
   the user said she looks like a hospital nurse (white shirt, no Quranic
   meaning at first glance). New hero is an OBJECT photo: an open Holy
   Quran in near-darkness with a warm shaft of light across the pages
   (Surah Al-Kahf header visible) — no person at all, so zero nurse /
   subject risk, and it matches Minha's dark moody open-Quran hero.
   Left side is dark (perfect for the white headline), right side is
   warm-lit (behind the translucent red trial form). Verified HTTP 200 +
   JPEG + visually inspected at w=1200, w=2400 (2400×1600) and the
   right-anchored portrait mobile crop (1200×1800, lit pages top, dark
   bottom). Desktop is w=2400. */
export const HERO_PHOTO =
  "https://images.pexels.com/photos/6873767/pexels-photo-6873767.jpeg?auto=compress&cs=tinysrgb&w=2400";
/* Mobile hero: same photo 6873767, right-anchored portrait crop
   (lit Quran pages top, dark bottom — headline over the lit pages,
   trial form over the dark). Verified HTTP 200 + JPEG 1200×1800. */
export const HERO_PHOTO_MOBILE =
  "https://images.pexels.com/photos/6873767/pexels-photo-6873767.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=right&w=1200&h=1800";
/* About collage — stylish 3-image composition (round 2):
   dua = South Asian girl, hands raised in dua with tasbih + Quran on rehal;
   girl = young Turkish girl in a rust-orange hijab reading the Quran in a
   mosque in Kahta, Türkiye; woman = female teacher guiding a girl at a
   rehal under a mosque dome. */
export const COLLAGE_DUA_PHOTO =
  "https://images.pexels.com/photos/4521950/pexels-photo-4521950.jpeg?auto=compress&cs=tinysrgb&w=1600";
export const COLLAGE_GIRL_PHOTO =
  "https://images.pexels.com/photos/20558190/pexels-photo-20558190.jpeg?auto=compress&cs=tinysrgb&w=1600";
export const COLLAGE_WOMAN_PHOTO =
  "https://images.pexels.com/photos/8164752/pexels-photo-8164752.jpeg?auto=compress&cs=tinysrgb&w=1600";
export const TEACHERS_PHOTO =
  "https://images.pexels.com/photos/20785854/pexels-photo-20785854.jpeg?auto=compress&cs=tinysrgb&w=2400";
/* Banner band + Basic Arabic card: open Quran with a wooden tasbih —
   a still life, no person, kept as-is (round 2 changed only the collage). */
export const BANNER_PHOTO =
  "https://images.pexels.com/photos/29183999/pexels-photo-29183999.jpeg?auto=compress&cs=tinysrgb&w=2400";
export const VIDEO_POSTER =
  "https://images.pexels.com/photos/20784662/pexels-photo-20784662.jpeg?auto=compress&cs=tinysrgb&w=1600";
