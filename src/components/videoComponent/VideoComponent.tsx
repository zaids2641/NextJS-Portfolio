'use client'

import { useEffect, useRef } from 'react'

const defaultWavePool = '/assets/video/campuestohan-wave-pool'

export default function VideoComponent({
  playbackSpeed = 1,
  src,
}: {
  playbackSpeed?: number
  src?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const baseSrc = src || defaultWavePool

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = playbackSpeed

    const tryPlay = () => {
      video.play().catch(() => {})
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
        else video.pause()
      },
      { threshold: 0.3 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [playbackSpeed])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"   // ✅ only load metadata
      >
        {/* WebM FIRST (lighter) */}
        <source src={`${baseSrc}.webm`} type="video/webm" />

        {/* MP4 fallback */}
        <source src={`${baseSrc}.mp4`} type="video/mp4" />
      </video>

      <span className="absolute inset-0 bg-green-900/25 pointer-events-none" />
    </div>
  )
}