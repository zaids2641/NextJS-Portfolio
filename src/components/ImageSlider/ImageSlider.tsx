"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import type { Slide } from "@/data/work_slides";

export default function HeroModalSlider({
  slides,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  slides: Slide[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const slide = slides[index];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-10 text-white text-2xl cursor-pointer opacity-25 hover:opacity-100 transition duration-200"
        >
          ✕
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 z-50 opacity-25 hover:opacity-100 transition cursor-pointer"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-full border-3 bg-white/10 border-white/20 text-white text-3xl">
            <span className="-mt-2">‹</span>
          </span>
        </button>

        {/* Next */}
        <button
          onClick={onPrev}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 z-50 opacity-25 hover:opacity-100 transition cursor-pointer"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-full border-3 bg-white/10 border-white/20 text-white text-3xl">
            <span className="-mt-2">›</span>
          </span>
        </button>

        {/* Slide */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-[90vw] max-w-5xl mx-auto"
        >
          {/* Image container */}

          {(slide.image || slide.imageUrl) && (
            <div
              className="relative w-full"
              style={{
                height: "clamp(450px, 60vw, 650px)", // min 450px, max 650px, proportional in between
              }}
            >
              <Image
                src={slide.image ?? slide.imageUrl ?? "/placeholder.png"}
                alt={slide.imageAlt ?? slide.heading ?? "Image"}
                fill
                sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
              />
            </div>
          )}

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-6 bg-black/60 p-6 text-white rounded-b-xl">
            <div>
              <h3 className="text-2xl md:text-3xl tracking-wide font-ubuntu-condensed">
                {slide.heading}
              </h3>
              <p className="mt-1 text-sm md:text-base leading-relaxed text-white/90 font-inter">
                {slide.description}
              </p>
            </div>

            {slide.url && (
              <div className="flex flex-row gap-4">
                <a href={slide.url} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block border border-[var(--accent-teal)] text-[var(--accent-teal)] py-1.5 px-3 rounded-md text-xs tracking-wide uppercase font-inter hover:bg-[var(--accent-teal)] hover:text-white transition">
                    Project URL
                  </span>
                </a>
                <a href={`/all-works/${slide.handler}`}>
                  <span className="inline-block border border-[var(--accent-teal)] bg-[var(--accent-teal)] text-white/80 py-1.5 px-3 rounded-md text-xs tracking-wide uppercase font-inter transition">
                    <span className="flex flex-row gap-1 ">
                      <span>Info</span>
                      <span className="text-lg leading-none translate-y-[-2px]">
                        →
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
