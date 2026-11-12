import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Preview tokens (PREVIEW-SPEC §1). navyDark #002257 is a darker
           shade of the one navy — hero card, sub-page hero and footer.
           redBright #ff3b30 is red text on dark navy; redDark #a80000 is
           the red button hover. WhatsApp green #25d366 only on WhatsApp
           buttons. Warm cream neutrals — no pale-blue tints, no extra
           greens, no Tailwind default reds. NO orange. */
        navy: "#00338c",
        navyDark: "#002257",
        navyInk: "#0d1b33",
        brandRed: "#d00000",
        redDark: "#a80000",
        redBright: "#ff3b30",
        redSoft: "#fdeeee",
        cream: "#fff7ec",
        cream2: "#fdeeda",
        ink: "#22304a",
        muted: "#5d6b82",
        line: "#e9e2d6",
        cardBorder: "#e9e2d6",
        whatsapp: "#25d366",
      },
      fontFamily: {
        display: ["var(--font-lexend)", "Lexend Deca", "Noto Sans", "system-ui", "sans-serif"],
        sans: [
          "var(--font-noto)",
          "Noto Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 18px 45px rgba(13,27,51,0.10)",
        cardLg: "0 22px 50px rgba(13,27,51,0.16)",
      },
      borderRadius: { card: "14px" },
    },
  },
  plugins: [],
};

export default config;
