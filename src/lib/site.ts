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
  "Assalamu Alaikum! I want to book the 5-Day FREE Trial Classes at Quran Light Institute.";

export function trialMessageForCourse(courseName: string): string {
  return `Assalamu Alaikum! I want to ask about the "${courseName}" course and book the 5-day FREE trial classes at Quran Light Institute.`;
}

export function feeMessageForPlan(planName: string): string {
  return `Assalamu Alaikum! I want the exact monthly fee for the "${planName}" plan at Quran Light Institute.`;
}

/* Feedback round 15 (13 Nov 2026): the /fees page CTA — a general
   fee enquiry (no plan name), used by the Fee Schedule page. */
export const FEE_MESSAGE =
  "Assalamu Alaikum! I want my exact monthly fee for Quran Light Institute.";

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
   bottom). Desktop is w=2400.
   Feedback round 4 (12 Nov 2026): the round-3 object hero 6873767 is
   REPLACED — the user rejected it: he wants a FEMALE, like Minha's
   images. New hero is Pexels 20785238 (Zeynep Sude Emek, Turkish): a
   woman in a dark hijab + long beige dress standing in prayer, hands
   folded at her chest, side profile, in a modern Sancaklar-style
   mosque — wooden screens behind her, a tasbih on the floor, soft
   light from a staircase on the left. Subject on the RIGHT, open space
   on the LEFT: the ideal hero composition (headline over the open
   left, trial form over the woman on the right). Native 6240×4160.
   Verified HTTP 200 + JPEG + visually inspected at w=2400 (2400×1600)
   and the right-anchored portrait mobile crop (1200×1800, full figure
   in frame). Desktop is w=2400. FLAG: same Zeynep Sude Emek model as
   the Teachers photo (20785854) — same woman, same dress, different
   pose/setting; unavoidable for a premium Turkish hero (see the photos
   README, round-4 flags).
   Feedback round 5 (12 Nov 2026): the round-4 PRAYING hero 20785238
   is REPLACED — the user wants a READING image like Minha's "Begin
   Your Learning Journey" banner (shot1: a girl in a WHITE hijab
   reading an open Quran). FLAG 1: Minha's shot1 girl looks YOUNG
   (~12–16) — the no-child rule forbids using her. FLAG 2: NO adult
   woman in a white hijab reading an open Quran exists on Pexels —
   every white-hijab reading photo is the Alena Darmel child
   (8164726 / 8164735 / 8164734); the other adult women reading are
   20784507 (same Zeynep model, subject LEFT — sits under the
   headline), 18268161 (FURKAN GUNES, reader tiny in a wide mosque
   shot), 7249316 (older woman, pink hijab, face blurred) and
   29106154 (the OLD hero, user-rejected as hospital-like). New hero
   is Pexels 20784759 (Zeynep Sude Emek, Sancaklar Mosque): an ADULT
   woman in a dark maroon hijab + beige dress, sitting cross-legged
   and reading an OPEN Quran in her lap, face visible looking down —
   subject CENTERED against a dark stone wall, so the headline sits
   over the dark wall on the left and the trial form over the dark
   wall on the right. Dark background suits the navy overlay.
   Verified HTTP 200 + JPEG + visually inspected at w=2400
   (2400×1600) and the CENTER-anchored portrait mobile crop
   (1200×1800 — full figure in frame, open Quran clearly visible,
   white tasbih on the floor). Desktop is w=2400. FLAG 3: same
   Zeynep model as the Teachers photo (20785854) — the user has
   accepted the same-model reuse in rounds 2 and 4; the hero and
   Teachers are the two prominent spots.
   Feedback round 6 (12 Nov 2026): the user wants a PREMIUM HOLY
   QURAN image for the hero ("koi Quran Pak ki koi aisi laga do") —
   the BOOK as subject. New hero is Pexels 11514335: an OPEN Holy
   Quran on a wooden rehal with a WHITE tasbih (Arabic-letter beads)
   on a patterned carpet, warm golden window light through a lattice.
   Verified HTTP 200 + JPEG at w=2400 (2400×3200) and the CENTER
   portrait mobile crop 1200×1800, both visually inspected (PIL
   simulations: desktop band at object-position 35% keeps the rehal
   + open Quran; mobile crop keeps rehal + Quran + tasbih). Desktop
   Image uses object-[center_35%]. NOT 6873767 (round-4 rejected
   object-only Quran — dark, hospital-like); 11514335 is warm +
   bright and was the round-5 collage-big backup. Rejected hero
   candidates this round: 31743462 (open Quran by a bright window,
   teal carpet — the window dominates, the book is small at the
   bottom), 325266 / 13549654 (macro Quran text, no context),
   12123505 (mosque wall "Allah" calligraphy, no Quran),
   14074052 / 14743719 / 28823661 (CLOSED books, product shots),
   3452843 (Holi crowd, not Quran), 17857931 / 28128042 (mosque
   interior / closed Quran + microphone). */
export const HERO_PHOTO =
  "https://images.pexels.com/photos/11514335/pexels-photo-11514335.jpeg?auto=compress&cs=tinysrgb&w=2400";
/* Mobile hero: same photo 11514335, CENTER-anchored portrait crop
   (the rehal + open Quran + tasbih are centred, so the crop keeps
   them all). Verified HTTP 200 + JPEG 1200×1800, visually inspected. */
export const HERO_PHOTO_MOBILE =
  "https://images.pexels.com/photos/11514335/pexels-photo-11514335.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=center&w=1200&h=1800";
/* About collage — stylish 3-image composition (round 2):
   dua = South Asian girl, hands raised in dua with tasbih + Quran on rehal;
   girl = young Turkish girl in a rust-orange hijab reading the Quran in a
   mosque in Kahta, Türkiye; woman = female teacher guiding a girl at a
   rehal under a mosque dome.
   Feedback round 4 (12 Nov 2026): NO CHILD in the collage. The girl
   photo 20558190 is REMOVED and the big dua image 4521950 (young girl
   in a white dupatta — the user considers it child-like too) is
   replaced. Big image = 20558487 (SERHAT TUĞ, Kahta, Türkiye): a
   woman's hands raised in dua, white sleeve + white tasbih on the
   wrist, warm red mosque carpet, sunlit — the closest Pexels match to
   Minha's frame f18 (warm-lit female hands + tasbih). No face. The
   landscape slot shows a 22–60% vertical slice (object-position 35%);
   the crop was simulated and visually inspected — both hands + tasbih
   survive. Bottom-row photo = 20558488 (same SERHAT TUĞ shoot, same
   woman in a rust hijab, side profile, hands raised in dua with a
   white tasbih in a sunlit mosque).
   Feedback round 5 (12 Nov 2026): the collage is restructured to
   Minha's shot4 EXACTLY. (a) The navy "14 Online Courses" card is
   REMOVED from the collage (the "14" fact stays in StatsRow).
   (b) Big image = 30890559 (Emre Ateşoğlu, Türkiye): an OPEN PALM
   CUPPED holding a WHITE tasbih (white beads with black dots) over a
   red patterned prayer carpet, warm light — the closest Pexels match
   to Minha's shot4 big photo (CUPPED hands + white tasbih + open
   Quran + patterned carpet). FLAG: only ONE hand is visible and NO
   open Quran is in frame — no Pexels photo has cupped hands + tasbih
   + Quran together (7249180 = hand RESTING on a Quran, DARK tasbih;
   20785794 = hands FOLDED holding a wooden tasbih, no Quran;
   8164599 = man's hands, RED tasbih; 16197226 = dark tasbih
   hanging; 11514335 = open Quran + WHITE tasbih + patterned carpet
   + warm light but NO hands — the backup). The palm + white beads
   are central, so the landscape crop (object-position 45%) keeps
   them. (c) Bottom row = [OQC box UNCHANGED | male photo].
   Male photo = 7129612 (Michael Burrows): a YOUNG man in a white
   thobe, face visible looking down, reading a Quran indoors — the
   closest Pexels match to Minha's shot4 young man (light-blue shirt,
   by a window, warm light). FLAG: not by a window (plain white
   wall) and the Quran is a small red book; backup is 8164585 (Alena
   Darmel, man in a grey suit at a LARGE ornate Quran on a rehal,
   portrait-native, unmistakable Quran — older man, corporate look).
   Rejected male candidates: 20597768 (hands only, no person),
   29894263 (too dark, face hidden by the book), 16066399
   (over-shoulder, no face), 34496696 (back of head only).
   Feedback round 6 (12 Nov 2026): (a) TOP IMAGE = MINHA'S EXACT
   PHOTO. The user re-sent shot4 and said "yahi utha ke laga do,
   same as it is". Found in Minha's homepage HTML next to the About
   heading: https://minhainternationalinstitute.com/wp-content/uploads/2026/04/Untitled-design-2026-04-17T115532.867.png
   (1700×1224). Visually verified against shot4: two cupped hands
   holding a WHITE pearl tasbih over an OPEN Quran with
   gold-bordered pages on a patterned carpet, warm sunlight.
   Downloaded and saved locally as public/about-dua-hands.jpg
   (converted to JPG q82, 1600×1152, 189 KB) — DO NOT HOTLINK
   MINHA'S SERVER. BINARY: this file CANNOT go through github
   push-files — it must be uploaded via the GitHub WEB UPLOAD to
   the repo (same route as logo.jpg / intro.mp4 in round 1) or the
   live site will 404 the image. Original PNG kept in
   ~/workspace/quran-light-real-photos-2026-11-11/minha-exact-dua-hands-tasbih-quran.png.
   The old 30890559 (one palm, no Quran in frame) is REPLACED.
   (b) MALE PHOTO 7129612 REPLACED — the user said "boy wala...
   iski jagah koi aur laga do". New male = Pexels 34162875: a YOUNG
   man in a white shawl + maroon cap, sitting cross-legged on a
   green prayer rug in a mosque, reading an OPEN Quran, side
   profile, face visible, warm orange-tiled wall. Photographer
   name not retrievable (Pexels photo page returns a stub).
   Verified HTTP 200 + JPEG at w=1600 (1600×2000) + PIL crop
   simulations (desktop band at object-position 35% keeps face +
   book; mobile near-full frame). FLAG: he is a Black man (West
   African look), NOT Minha's light-skinned man in a blue shirt by
   a window — the user asked for "koi aur" (a different person),
   and this is the best premium adult male reading a Quran found;
   backup is 8164585 (older man, grey suit, corporate look). The
   object position is object-[50%_35%]. (c) BOTTOM ROW is now
   grid-cols-2 at ALL widths (mobile too — round 5 had
   sm:grid-cols-2 so it stacked on mobile, which the user
   rejected: "aise nahi"). The OQC box gets mobile half-width
   sizing (smaller icon/title/text/padding). Desktop keeps the
   same 2-col design. */
export const COLLAGE_DUA_PHOTO = "/about-dua-hands.jpg";
export const COLLAGE_MAN_PHOTO =
  "https://images.pexels.com/photos/34162875/pexels-photo-34162875.jpeg?auto=compress&cs=tinysrgb&w=1600";
export const TEACHERS_PHOTO =
  "https://images.pexels.com/photos/20785854/pexels-photo-20785854.jpeg?auto=compress&cs=tinysrgb&w=2400";
/* Banner band + Basic Arabic card: open Quran with a wooden tasbih —
   a still life, no person, kept as-is (round 2 changed only the collage). */
export const BANNER_PHOTO =
  "https://images.pexels.com/photos/29183999/pexels-photo-29183999.jpeg?auto=compress&cs=tinysrgb&w=2400";
export const VIDEO_POSTER =
  "https://images.pexels.com/photos/20784662/pexels-photo-20784662.jpeg?auto=compress&cs=tinysrgb&w=1600";
