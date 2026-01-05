import { ReactNode } from 'react'

interface ParallaxSectionProps {
  image: string // the .src from imported image
  children?: ReactNode
  parallaxText: string
  url?: string
  linkName?: string
}

export default function ParallaxSection({ image, parallaxText, url, linkName }: ParallaxSectionProps) {
  return (
    <div className="relative bg-white h-96 w-screen">
      <div className="h-full w-full bg-cover bg-no-repeat bg-fixed bg-center" style={{ backgroundImage: `url(${image})` }}>
        {/* <div className="absolute h-full w-full inset-0 bg-green-600/20 backdrop-blur" /> */}

        {/* <div className="absolute inset-0 h-full w-full bg-black/30 backdrop-blur-[3px] lg:bg-gradient-to-r"></div> */}
        <div className="absolute inset-0 h-full w-full bg-black/35 backdrop-blur-[0.05rem]"></div>
        {/* <div className="absolute  h-full w-full inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/80 backdrop-blur lg:rounded-md lg:bg-gradient-to-r"></div> */}

        <div className="relative flex flex-col h-full items-center justify-center">
          <h1
            className="animated-gradient inline-block bg-gradient-to-r from-white/70 via-green-200 to-white/90 bg-clip-text text-transparent px-4 py-2 text-center text-5xl leading-none font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.45)] md:text-7xl md:leading-tight"
          >
            {parallaxText}
          </h1>

          {url && url.trim() !== "" && (
            <a
              href={url}
              className="text-[1.2rem] font-semibold text-green-100 hover:text-green-100/90 transition-colors duration-300 underline"
            >
              {linkName}  →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}