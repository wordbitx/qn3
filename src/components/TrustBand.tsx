import { Reveal } from "@/components/Reveal";

/**
 * Trust marquee (PREVIEW-SPEC §3.2): centred heading + auto-scrolling
 * line of 7 items, each with a red icon + navy bold text, separated by a
 * 7px red dot. Track duplicated for the seamless loop; 30s linear.
 */
const ITEMS: { label: string; icon: string }[] = [
  { label: "One-to-One Quran Learning", icon: "M12 3 1 8.5l11 5.5 9-4.5V15h2V8.5L12 3zM5 12.6V16c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.4l-7 3.5-7-3.5z" },
  { label: "Trusted by Families Worldwide", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7 6h-3.1a15 15 0 0 0-1.5-3.6A8 8 0 0 1 19 8zM12 4a13 13 0 0 1 1.9 4h-3.8A13 13 0 0 1 12 4zM4.3 14H7c.1 1.3.5 2.6 1 3.8A8 8 0 0 1 4.3 14zM4.3 10a8 8 0 0 1 3.7-3.8c.5 1.2.9 2.5 1 3.8H4.3zM12 20a13 13 0 0 1-1.9-4h3.8A13 13 0 0 1 12 20zm2.5-6c-.1-1.3-.5-2.6-1-3.8a8 8 0 0 1 3.7 3.8h-2.7zm.9 3.8c.5-1.2.9-2.5 1-3.8h2.7a8 8 0 0 1-3.7 3.8z" },
  { label: "Live 1-to-1 Classes", icon: "M8 5.5v13a1 1 0 0 0 1.53.85l10.2-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5z" },
  { label: "Male & Female Teachers", icon: "M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-2.7 0-8 1.3-8 4v2h10v-2c0-.9-.4-1.8-1.1-2.5A10 10 0 0 0 8 13zm8 0c-.6 0-1.2.1-1.8.2A5.6 5.6 0 0 1 16 17v2h8v-2c0-2.7-5.3-4-8-4z" },
  { label: "Flexible Timings", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6 4.2 2.5-.8 1.3L11 14V6h2v6.6z" },
  { label: "Progress Monitoring", icon: "M3 3v18h18v-2H5V3H3zm4 12 4-4 3 3 6-7-1.4-1.4L13 11.2l-3-3-5.4 5.4L4 14.4z" },
  { label: "3-Day FREE Trial", icon: "M12 2 9.2 8.6 2 9.3l5.5 4.7L5.8 21 12 17.3 18.2 21l-1.7-7 5.5-4.7-7.2-.7L12 2z" },
];

function TrackChunk({ hidden = false }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden || undefined} className="flex shrink-0 items-center whitespace-nowrap">
      {ITEMS.map((item) => (
        <span key={item.label} className="flex items-center">
          <span className="flex items-center gap-2.5 px-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-brandRed" aria-hidden="true">
              <path d={item.icon} />
            </svg>
            <span className="font-display text-[17.5px] font-bold text-navyInk">{item.label}</span>
          </span>
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-brandRed" aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

export default function TrustBand() {
  return (
    <section className="py-12" aria-label="Trusted by families worldwide">
      <Reveal>
        <h2 className="text-center font-display text-xl font-bold text-navyInk">
          One-to-One Quran Learning — Trusted by Families Worldwide
        </h2>
      </Reveal>
      <div className="marquee mt-6">
        <div className="marquee-track">
          <TrackChunk />
          <TrackChunk hidden />
        </div>
      </div>
    </section>
  );
}
