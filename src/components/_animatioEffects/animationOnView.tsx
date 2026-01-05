// 'use client'

// import { useEffect, useRef } from 'react'
// import { motion, useAnimation, type Variants } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import React from 'react'

// type Direction = 'left' | 'right' | 'up' | 'down' | 'center' | 'zoomin' | 'zoomout'
// type Trigger = 'scroll' | 'load'

// interface AnimationOnViewProps {
//   children: React.ReactNode
//   direction?: Direction
//   trigger?: Trigger
//   delay?: number
//   duration?: number
//   className?: string
//   exitSameSide?: boolean
//   animateOnExit?: boolean
// }

// const AnimationOnView: React.FC<AnimationOnViewProps> = ({
//   children,
//   direction = 'center',
//   trigger = 'scroll',
//   delay = 0,
//   duration = 1,
//   className = '',
//   exitSameSide = true,
//   animateOnExit = false,
// }) => {
//   const controls = useAnimation()
//   const prevScroll = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0)
//   const scrollDir = useRef<'up' | 'down'>('down')
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })

//   // detect scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY
//       scrollDir.current = y > prevScroll.current ? 'down' : 'up'
//       prevScroll.current = y
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // direction offsets
//   const offsets = {
//     xEnter: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
//     yEnter: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
//   }

//   const sign = (n: number) => (n === 0 ? 0 : -n)
//   const xExit = exitSameSide ? offsets.xEnter : sign(offsets.xEnter)
//   const yExit = exitSameSide ? offsets.yEnter : sign(offsets.yEnter)

//   const variants: Variants = {
//     hiddenEnter: {
//       opacity: 0.5,
//       scale: direction === 'zoomin' ? 0.5 : direction === 'zoomout' ? 1.5 : 1,
//       x: offsets.xEnter,
//       y: offsets.yEnter,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       y: 0,
//       transition: { duration, delay, ease: 'easeOut' },
//     },
//     hiddenExit: {
//       opacity: 0,
//       scale: direction === 'zoomin' ? 0.5 : direction === 'zoomout' ? 1.5 : 1,
//       x: xExit,
//       y: yExit,
//       transition: { duration: duration * 0.6, ease: 'easeIn' },
//     },
//   }

//   // handle scroll/load triggers
//   useEffect(() => {
//     if (trigger === 'load') {
//       const timer = setTimeout(() => controls.start('visible'), delay * 1000)
//       return () => clearTimeout(timer)
//     }

//     if (inView) {
//       controls.start('visible')
//     } else {
//       if (animateOnExit) {
//         // ✅ Always animate out when leaving viewport
//         controls.start('hiddenExit')
//       } else if (scrollDir.current === 'up') {
//         // fallback: only when scrolling up (old behavior)
//         controls.start('hiddenExit')
//       }
//     }
//   }, [inView, trigger, delay, controls, animateOnExit])

//   return (
//     <motion.div
//       ref={trigger === 'scroll' ? ref : undefined}
//       initial="hiddenEnter"
//       animate={controls}
//       variants={variants}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// export default AnimationOnView


'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, type Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

type Direction = 'left' | 'right' | 'up' | 'down' | 'center' | 'zoomin' | 'zoomout'
type Trigger = 'scroll' | 'load' | 'hover'

interface AnimationOnViewProps {
    children: React.ReactNode
    direction?: Direction
    trigger?: Trigger
    delay?: number
    duration?: number
    className?: string
    exitSameSide?: boolean
    animateOnExit?: boolean
}

const AnimationOnView: React.FC<AnimationOnViewProps> = ({
    children,
    direction = 'center',
    trigger = 'scroll',
    delay = 0,
    duration = 1,
    className = '',
    exitSameSide = true,
    animateOnExit = false,
    }) => {
    const controls = useAnimation()
    const prevScroll = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0)
    const scrollDir = useRef<'up' | 'down'>('down')
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
        const y = window.scrollY
        scrollDir.current = y > prevScroll.current ? 'down' : 'up'
        prevScroll.current = y
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Direction offsets
    const offsets = {
        xEnter: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
        yEnter: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    }

    const sign = (n: number) => (n === 0 ? 0 : -n)
    const xExit = exitSameSide ? offsets.xEnter : sign(offsets.xEnter)
    const yExit = exitSameSide ? offsets.yEnter : sign(offsets.yEnter)

    const variants: Variants = {
        hiddenEnter: {
        opacity: 0,
        scale: direction === 'zoomin' ? 0.5 : direction === 'zoomout' ? 1.5 : 1,
        x: offsets.xEnter,
        y: offsets.yEnter,
        },
        visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: { duration, delay, ease: 'easeOut' },
        },
        hiddenExit: {
        opacity: 0,
        scale: direction === 'zoomin' ? 0.5 : direction === 'zoomout' ? 1.5 : 1,
        x: xExit,
        y: yExit,
        transition: { duration: duration * 0.6, ease: 'easeIn' },
        },
    }

    // Handle triggers
    useEffect(() => {
        if (trigger === 'load') {
        const timer = setTimeout(() => controls.start('visible'), delay * 1000)
        return () => clearTimeout(timer)
        }

        if (trigger === 'scroll') {
        if (inView) controls.start('visible')
        else if (animateOnExit || scrollDir.current === 'up') controls.start('hiddenExit')
        }
    }, [inView, trigger, delay, controls, animateOnExit])

    // Handle hover manually
    const handleHoverStart = () => {
        if (trigger === 'hover') controls.start('visible')
    }

    const handleHoverEnd = () => {
        if (trigger === 'hover') controls.start('hiddenExit')
    }

    return (
        <motion.div
            ref={trigger === 'scroll' ? ref : undefined}
            initial="hiddenEnter"
            animate={controls}
            variants={variants}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            className={className}
            >
            {children}
        </motion.div>
    )
}

export default AnimationOnView