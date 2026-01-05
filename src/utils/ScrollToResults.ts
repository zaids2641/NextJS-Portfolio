'use client'

import { useEffect } from 'react'
import { useListingsStore } from './../components/store/useListingsStore'

export default function ScrollToResults() {
  const { listings } = useListingsStore()

  useEffect(() => {
    if (listings && listings.length > 0) {
      const el = document.getElementById('listGridResults')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [listings])

  return null
}
