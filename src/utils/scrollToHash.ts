'use client'
import { useEffect } from 'react'

export default function ScrollToHash() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (!hash) return

      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return null
}
