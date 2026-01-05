// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import HeroSectionWithSearchForm1 from '../hero-sections/HeroSectionWithSearchForm1'

// interface Slide {
//   heading: string
//   description: React.ReactNode
//   image: { src: string; width: number; height: number }
//   imageAlt: string
// }

// export default function HeroSlider({ slides, duration = 15000 }: { slides: Slide[]; duration?: number }) {
//   const [index, setIndex] = useState(0)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)

//   const clearTimer = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//       intervalRef.current = null
//     }
//   }

//   const startTimer = () => {
//     clearTimer()
//     if (slides.length > 1) {
//       intervalRef.current = setInterval(() => {
//         setIndex((prev) => (prev + 1) % slides.length)
//       }, duration)
//     }
//   }

//   useEffect(() => {
//     startTimer()
//     return () => clearTimer()
//   }, [index, duration, slides.length])

//   if (slides.length === 0) return null

//   const goToPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)
//   const goToNext = () => setIndex((prev) => (prev + 1) % slides.length)

//   const current = slides[index]

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <HeroSectionWithSearchForm1
//         heading={current.heading}
//         description={current.description}
//         image={current.image}
//         imageAlt={current.imageAlt}
//         searchForm=""
//       />


//       {slides.length > 1 && (
//     <>
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded"
//       >
//         &#8594;
//       </button>
//     </>
//   )}
//     </div>
//   )
// }

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Slide {
  heading: string
  description: React.ReactNode
  image: { src: string; width: number; height: number }
  imageAlt: string
}

export default function HeroFadeSlider({
  slides,
  duration = 10000,
}: {
  slides: Slide[]
  duration?: number
  searchForm?: React.ReactNode       // ✅ optional search form
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

  return (
    <div className="relative h-screen w-full">
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === index ? (
            <motion.div
              key={i}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  )
}

