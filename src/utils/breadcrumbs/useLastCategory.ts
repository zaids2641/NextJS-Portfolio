'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function useLastUrlTracker() {
  const pathname = usePathname()
  const [last, setLast] = useState<{ href: string; clickable: boolean } | null>(null)

  // Load stored category on first mount
  useEffect(() => {
    const stored = sessionStorage.getItem('lastUrl')
    if (stored) {
      try {
        setLast(JSON.parse(stored))
      } catch {
        sessionStorage.removeItem('lastUrl')
      }
    }
  }, [])

  // Watch for category pages
  useEffect(() => {
    if (pathname.startsWith('/all-works')) {
      const data = {
        href: pathname,
        clickable: true,
      }

      sessionStorage.setItem('lastUrl', JSON.stringify(data))
      setLast(data)
    }
  }, [pathname])

  return last
}



// 'use client'

// import { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'

// export function useLastCategoryTracker() {
//   const pathname = usePathname()
//   const [last, setLast] = useState<string | null>(null)

//   useEffect(() => {
//     // safe: runs only in browser
//     const stored = sessionStorage.getItem('lastCategory')
//     setLast(stored)

//     // optional: store categories when visiting them
//     if (pathname.includes('stay-categories')) {
//       sessionStorage.setItem('lastCategory', pathname)
//       setLast(pathname)
//     }
//     // if (pathname.includes('cottages')) {
//     //   sessionStorage.setItem('lastCategory', pathname)
//     //   setLast(pathname)
//     // }
//     // if (pathname.includes('highland')) {
//     //   sessionStorage.setItem('lastCategory', pathname)
//     //   setLast(pathname)
//     // }

//   }, [pathname])

//   return last
// }