'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLastUrlTracker } from './useLastCategory'

const LABEL_MAP: Record<string, string> = {
  'all-works': 'All Works',
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const lastCategory = useLastUrlTracker()

  const showExtraCategory =
    lastCategory && lastCategory.href?.startsWith('/all-works') && !segments.includes('all-works')
      ? lastCategory
      : null

  console.log('Last visited page: ', segments)

  return (
    <nav className="mb-4 flex items-center space-x-1 text-sm">
      <Link href="/" className="text-black/70 hover:text-black">
        Home
      </Link>

      {/* Insert Stay Categories if user came from there */}
      {showExtraCategory && (
        <>
          <span className="text-green-900/70">/</span>

          {showExtraCategory.clickable ? (
            // Clickable version
            <Link href={showExtraCategory.href} className="text-black/70 hover:text-black">
              All Works
            </Link>
          ) : (
            // NOT clickable
            <span className="font-medium text-black">All Workss</span>
          )}
        </>
      )}

      {segments.map((segment, i) => {
        const isLast = i === segments.length - 1
        const label = LABEL_MAP[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

        const href = '/' + segments.slice(0, i + 1).join('/')

        // Disable Stay Listings link when on a room info page
        const isStayListingsNonClickable = segment === 'stay-listings' && !isLast

        return (
          <span key={i} className="flex items-center space-x-1">
            <span className="text-black">/</span>

            {isLast || isStayListingsNonClickable ? (
              <span className={isLast ? 'font-semibold text-black' : 'text-black/70'}>{label}</span>
            ) : (
              <Link href={href} className="text-black/70 hover:text-black">
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
