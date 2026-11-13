import type { Metadata } from "next";
/* Fonts are bundled via @fontsource (installed from npm) — NOT
   next/font/google. Vercel's build could not fetch Google Fonts at
   build time (next/font loader crashed), so the fonts now ship with
   the app and no build-time Google request happens. */
import "@fontsource/lexend-deca/500.css";
import "@fontsource/lexend-deca/600.css";
import "@fontsource/lexend-deca/700.css";
import "@fontsource/lexend-deca/800.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/600.css";
import "@fontsource/noto-sans/700.css";
import "@fontsource/noto-sans/800.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/700.css";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_DESCRIPTION =
  "Quran Light Institute — Learn Quran Online with Tajweed. Live one-to-one online Quran classes for kids and adults with qualified male and female teachers. 5-day absolutely FREE trial classes.";

export const metadata: Metadata = {
  title: "Quran Light Institute — Learn Quran Online with Tajweed",
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://quranlightinstitute.com"),
  alternates: { canonical: "https://quranlightinstitute.com" },
  openGraph: {
    type: "website",
    siteName: "Quran Light Institute",
    title: "Quran Light Institute — Learn Quran Online with Tajweed",
    description: SITE_DESCRIPTION,
    url: "https://quranlightinstitute.com",
    images: [{ url: "/logo.jpg", width: 640, height: 640, alt: "Quran Light Institute logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Light Institute — Learn Quran Online with Tajweed",
    description: SITE_DESCRIPTION,
    images: ["/logo.jpg"],
  },
  icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/923056622104?text=Assalamu%20Alaikum!%20I%20want%20to%20book%20the%205-Day%20FREE%20Trial%20Classes%20at%20Quran%20Light%20Institute."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-[calc(18px+env(safe-area-inset-bottom))] right-[max(18px,env(safe-area-inset-right))] z-50 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-cardLg transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 9.88 9.9c0 5.44-4.44 9.87-9.89 9.87m8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.4" />
          </svg>
        </a>
      </body>
    </html>
  );
}
