'use client'

import AnimatedReveal from '@/components/_animatioEffects/animationOnView'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const _imageSlider = ({
  className,
  heading,
  description,
  imageAlt,
  image,
  url
}: {
  className?: string
  heading: string | React.ReactNode
  description: string | React.ReactNode
  image: {
    src: string
    width: number
    height: number
  }
  imageAlt: string
  url: string
}) => {
  return (
    <div className={clsx('relative w-full h-full overflow-hidden', className)}>
      {/* === Background Image === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={image.src}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={image.src}
            alt={imageAlt}
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Text at bottom center */}
      <div className="absolute inset-0 flex items-end justify-center p-4">
        <div className="text-center text-white">
          <AnimatedReveal direction="up" trigger="load" duration={1}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold drop-shadow-md">
              {heading}
            </h2>
          </AnimatedReveal>
          <AnimatedReveal direction="up" trigger="load" duration={1.2}>
            <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
              {description}
            </p>
              <a href={url}>Live URL</a>
          </AnimatedReveal>
        </div>
      </div>
    </div>
  )
}

export default _imageSlider


// 'use client'

// import AnimatedReveal from '@/components/_animatioEffects/animationOnView'
// import clsx from 'clsx'
// import { AnimatePresence, motion } from 'framer-motion'
// import Image from 'next/image'
// // import Spinner2 from '../spinner/spinner2'

// const _imageSlider = ({
//   className,
//   description,
//   heading,
//   imageAlt,
//   image,
// }: {
//   className?: string
//   heading: string | React.ReactNode
//   description: string | React.ReactNode
//   image: {
//     src: string
//     width: number
//     height: number
//   }
//   imageAlt: string
// }) => {
//   return (
//     <>
//       <div>
//         <div className={clsx('relative h-full w-full overflow-hidden lg:h-screen', className)}>
//           {/* Animated Background Image */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={image.src} // triggers re-animation when src changes
//               initial={{ scale: 1, opacity: 0 }} // start normal size
//               animate={{ scale: 1.4, opacity: 1 }} // zoom in
//               exit={{ scale: 1, opacity: 0 }} // fade out and return to normal
//               transition={{ duration: 1, ease: 'easeOut' }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={image.src}
//                 alt={imageAlt}
//                 fill
//                 className="h-full w-full object-cover object-center"
//                 priority
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/25"></div>

//           {/* Centered Text + Description */}
//           <div className="absolute inset-0">
//             {/* Green fade overlay */}
//             {/* Text container */}
//         <div className="absolute bottom-0 inset-0 flex flex-col justify-center p-6 lg:flex-row ">
//           <div className="mb-12 max-w-lg text-white lg:mb-0">
//             <AnimatedReveal direction="right" trigger="load" duration={1}>
//               <h2 className="pointer-events-none text-5xl leading-tight font-normal text-white drop-shadow-md md:text-6xl">
//                 {heading}
//               </h2>
//             </AnimatedReveal>
//             <AnimatedReveal direction="right" trigger="load" duration={1.4}>
//               <div className="mt-4 max-w-2xl text-base leading-snug text-white md:mt-6 md:text-lg">
//                 {description}
//               </div>
//             </AnimatedReveal>
//           </div>
//         </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default _imageSlider
