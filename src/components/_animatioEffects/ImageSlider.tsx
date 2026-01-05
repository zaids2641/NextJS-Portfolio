'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ButtonWithStyle } from '@/shared/Button'

interface Slide {
  heading?: string
  description?: React.ReactNode
  image: { src: string; width: number; height: number }
  imageAlt: string
}

export default function HeroFadeSlider({
  slides,
  duration = 8000,
}: {
  slides: Slide[]
  duration?: number
}) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startTimer = () => {
    clearTimer()
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length)
      }, duration)
    }
  }

  useEffect(() => {
    startTimer()
    return () => clearTimer()
  }, [index, isPaused, duration, slides.length])

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    startTimer()
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
    startTimer()
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === index ? (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {/* BG IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image.src}
                  alt={slide.imageAlt}
                  width={slide.image.width}
                  height={slide.image.height}
                  sizes="100vw"
                  priority={i === 0}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              {(slide.heading || slide.description) && (
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center bg-black/30">
                  <div className="max-w-3xl space-y-3 text-white drop-shadow-lg">
                    {slide.heading && (
                      <h1 className="text-3xl sm:text-5xl font-semibold">
                        {slide.heading}
                      </h1>
                    )}
                    {slide.description && (
                      <div className="text-lg sm:text-xl">{slide.description}</div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* CONTROLS */}
      <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-8">
        <ButtonWithStyle
          onClick={goPrev}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-full w-14 h-14 bg-green-700/60 hover:bg-green-900 transition-colors"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </ButtonWithStyle>

        <ButtonWithStyle
          onClick={goNext}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-full w-14 h-14 bg-green-700/60 hover:bg-green-900 transition-colors"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </ButtonWithStyle>
      </div>
    </div>
  )
}


/**
 * 
 * Usage
 * 
 * import HeroFadeSlider from '@/components/HeroFadeSlider'

export default function HomePage() {
  const slides = [
    {
      heading: "Luxury Vacation Rentals",
      description: "Find your perfect destination.",
      image: { src: "/images/slide1.jpg", width: 1600, height: 900 },
      imageAlt: "slide1"
    },
    {
      heading: "Discover Nature",
      description: "Explore breathtaking scenery.",
      image: { src: "/images/slide2.jpg", width: 1600, height: 900 },
      imageAlt: "slide2"
    }
  ]

  return <HeroFadeSlider slides={slides} />
}

 * 
 */