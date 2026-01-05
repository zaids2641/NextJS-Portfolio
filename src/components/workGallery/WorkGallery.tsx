"use client";

import type { Slide } from "@/data/work_slides";
import HeroModalSlider from "../ImageSlider/ImageSlider";
import { useWorksGallery } from "@/services/useWorksGallery";
import Link from "next/link";
import SharedImage from "../shared/SharedImage";

export default function WorksGallery({ slides }: { slides: Slide[] }) {
  const { open, index, openSlider, closeSlider, prev, next } =
    useWorksGallery(slides);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => openSlider(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer hover:shadow-md"
          >
            <div className="relative w-full h-full">
              {(slide.image || slide.imageUrl) && (
                <SharedImage
                  data={{
                    image: slide.image ?? slide.imageUrl ?? "/placeholder.png",
                    imageAlt: slide.imageAlt ?? slide.heading,
                    heading: slide.heading,
                  }}
                />
              )}

              <div className="absolute inset-0 flex flex-col items-end p-4">
                <h3
                  className="
                    text-2xl tracking-wide font-ubuntu-condensed
                    text-white font-semibold
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  {slide.heading}
                </h3>

                {slide.id && slide.handler && (
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    href={`/all-works/${slide.handler}`}
                    className="flex flex-row gap-2 items-center content-center text-white opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500"
                  >
                    <span className="border-b-2 flex flex-row gap-1 border-b-[var(--accent-teal)]">
                      <span>Info</span>
                      <span className="text-2xl leading-none translate-y-[-2px]">
                        →
                      </span>
                    </span>
                  </Link>
                )}
              </div>
              <h3 className="absolute group-hover:opacity-100 opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[var(--accent-soft-teal)] capitalize font-ubuntu-condensed text-2xl transition-all duration-500">
                {slide.category}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {open && slides[index]?.useModal !== false && (
        <HeroModalSlider
          slides={slides}
          index={index}
          onClose={closeSlider}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
