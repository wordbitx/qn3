# Quran Light Institute

Professional multi-page website for **Quran Light Institute** — live one-to-one
online Quran classes for kids and adults, with qualified male and female teachers.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. This is a real
project with proper routes, shared components and a data layer — not a single
HTML file.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, Our Specialities (14 courses), Additional Specialities, trust band |
| `/about` | About — 5+ years of teaching experience, how it works (3 steps) |
| `/courses` | All 14 courses |
| `/courses/[slug]` | One page per course (14 pages): about, what you will learn, who it is for, free-trial box |
| `/teachers` | Qualified, caring & experienced teachers |
| `/testimonials` | Testimonials (no invented reviews — the free trial is the proof) |
| `/faqs` | Frequently asked questions (accordion) |
| `/contact` | Contact cards + 3-day FREE trial form |

## The 14 courses

Noorani Qaida · Quran Reading (Nazra) · Tajweed · Hifz-ul-Quran · Quran
Translation · Quran Tafseer · Selected Surah Memorization · Six Kalimas ·
Masnoon Duas · Salah (Namaz) · Islamic Studies · Basic Arabic Learning ·
Seerah of Prophet Muhammad ﷺ · Islamic Manners & Ethics

Course copy lives in `src/lib/data.ts` and was taken verbatim from the
previous site. No prices, durations, teacher names, testimonials or statistics
were invented.

## Contact (used everywhere)

- Phone / WhatsApp: **+92 305 6622104** (`wa.me/923056622104`)
- Email: **info@quranlightinstitute.com**

The trial form opens WhatsApp with a pre-filled message to that number.
Nothing is stored on a server.

## Images (`public/`)

- `logo.jpg` — the client's real circular logo, used as-is (never redrawn)
- `hero.jpg` — hero photo, 1760×1408 (boy and girl with headphones at the
  laptop, logo on its lid, mosque behind), cropped from the client's own design
- `about.webp` — photo used on the About page
- `icons/handshake.png` — the Islamic Manners & Ethics handshake icon,
  cropped from the client's reference design (transparent PNG); all other
  course icons are SVG recreations in `src/lib/icons.ts`

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Any Next.js host works (e.g. Vercel: import the repo, framework preset
Next.js, no extra settings). The trial form needs no backend — it hands off
to WhatsApp.

## PayPal — how to go live (owner checklist)

The site is **PayPal-ready, NOT live**. No PayPal account exists yet, no
course prices have been set, and no money can be taken. The integration is
built so it activates in 5 steps:

1. **Register the business** — USA/UK LLC (or other) + business documents.
2. **Open a PayPal Business account** in the business name.
3. **Put the live credentials in Vercel** (Project Settings → Environment
   Variables): `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET` and
   `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (same client ID as the first one).
   Keep the secret server-side only — it never goes in code or in the browser.
4. **Set `PAYPAL_MODE=live`** (it defaults to `sandbox` for testing).
5. **Set the course prices** in `src/lib/paypal.ts` (`COURSE_PRICES` — it is
   empty on purpose; no prices are invented). Amounts come from this
   server-side list only, never from the browser.

Then **redeploy**. Until then:

- `/api/paypal/create-order` and `/api/paypal/capture-order` answer
  **503 "PayPal not configured yet"** instead of charging anything.
- The PayPal button (`src/components/PayPalCheckout.tsx`) only renders when
  `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set; otherwise the `/payments` page shows
  the WhatsApp confirmation flow.
- The `/payments` page (linked from the Footer and the Contact page) explains
  to international students that PayPal activates after business registration,
  and that the 3-day free trial always comes first, with no payment needed.
- To test before going live, use the PayPal sandbox credentials with
  `PAYPAL_MODE=sandbox`.
