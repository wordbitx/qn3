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

/* Verified Pexels photos (see ~/workspace/quran-light-real-photos-2026-11-11/README.md).
   20784507 REPLACES 34407214 everywhere: the old mother-daughter photo's
   subjects look Korean (user feedback); 20784507 is a Turkish woman reading
   the Quran in Sancaklar Mosque, Silivri, Turkey. */
export const HERO_PHOTO =
  "https://images.pexels.com/photos/34481773/pexels-photo-34481773.jpeg?auto=compress&cs=tinysrgb&w=1600";
export const COLLAGE_MAIN_PHOTO =
  "https://images.pexels.com/photos/20784507/pexels-photo-20784507.jpeg?auto=compress&cs=tinysrgb&w=1200";
export const COLLAGE_INSET_PHOTO =
  "https://images.pexels.com/photos/29183999/pexels-photo-29183999.jpeg?auto=compress&cs=tinysrgb&w=1200";
export const TEACHERS_PHOTO =
  "https://images.pexels.com/photos/7249219/pexels-photo-7249219.jpeg?auto=compress&cs=tinysrgb&w=1200";
export const VIDEO_POSTER =
  "https://images.pexels.com/photos/20784662/pexels-photo-20784662.jpeg?auto=compress&cs=tinysrgb&w=1600";
