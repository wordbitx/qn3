"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { VIDEO_POSTER } from "@/lib/site";

/**
 * Video band (PREVIEW-SPEC §3.10): full-width band, background photo
 * 20784662 + dark overlay, centred 16:9 video screen (max-width 600px)
 * with poster, caption bar + "0:10" pill, white circular play button
 * with red triangle + pulsing ring. Modal at body level (z-200): video
 * autoplays on open; close via red X, backdrop click or Escape; closing
 * pauses the video and restores scroll.
 */
export default function VideoCta() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    videoRef.current?.pause();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => undefined);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  function openVideo() {
    setOpen(true);
  }

  return (
    <section className="relative overflow-hidden">
      <Image
        src={VIDEO_POSTER}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,14,40,0.78)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-[88px] text-center max-[640px]:py-[60px]">
        <h2 className="mx-auto max-w-[720px] font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Preparation for The Future Begins with Online Quran
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] leading-relaxed text-white/85">
          Tap the screen for a quiet moment with the Holy Quran — then start with 3 absolutely
          FREE trial classes. Experience a live one-to-one lesson, meet the teacher, and then
          decide — with no obligation at all.
        </p>

        <div
          className="group relative mx-auto mt-10 max-w-[600px] cursor-pointer overflow-hidden rounded-[18px] border-4 border-white shadow-cardLg"
          role="button"
          tabIndex={0}
          aria-label="Play a quiet moment with the Holy Quran"
          onClick={openVideo}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openVideo();
            }
          }}
        >
          <Image
            src={VIDEO_POSTER}
            alt="A woman reading the Holy Quran on a prayer rug in a mosque"
            width={1200}
            height={675}
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.045]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 text-sm font-bold text-white">
            <span>A quiet moment with the Holy Quran</span>
            <span className="rounded-full bg-white/20 px-2.5 py-0.5">0:10</span>
          </div>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-24 w-24 items-center justify-center">
              <span className="pulse-ring absolute inset-0 rounded-full bg-white/50" aria-hidden="true" />
              <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-cardLg transition duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-10 w-10 text-brandRed" aria-hidden="true">
                  <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.2-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5z" />
                </svg>
              </span>
            </span>
          </span>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex min-h-[50px] items-center rounded-[9px] bg-brandRed px-[30px] py-[14px] text-[16.5px] font-extrabold text-white shadow-[0_12px_24px_rgba(208,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-redDark"
        >
          Discover More
        </Link>
      </div>

      {mounted && open
        ? createPortal(
            <div
              className="modal-backdrop fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(0,8,26,0.9)] p-4 backdrop-blur-sm"
              onClick={close}
              role="dialog"
              aria-modal="true"
              aria-label="A quiet moment with the Holy Quran"
            >
              <div
                className="modal-panel relative w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close video"
                  className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brandRed text-xl font-extrabold leading-none text-white shadow-card transition hover:bg-redDark"
                >
                  ×
                </button>
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster={VIDEO_POSTER}
                  src="/intro.mp4"
                  className="aspect-video w-full rounded-[18px] bg-black object-contain shadow-cardLg"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
