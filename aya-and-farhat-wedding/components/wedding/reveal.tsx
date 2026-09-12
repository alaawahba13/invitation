'use client'

import { useEffect, useRef, useState } from 'react'

export function Reveal({
  children,
  className,
  active,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  /** When provided, drives visibility directly (hides when false, re-plays the
   * reveal animation when it flips to true) instead of using scroll-based
   * IntersectionObserver detection. Use this for content inside pages that are
   * shown/hidden via a parent transition rather than actual page scroll. */
  active?: boolean
  /** Extra delay (ms) before showing, once `active` becomes true. Useful to
   * stagger multiple Reveals within the same page. */
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (active !== undefined) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [active])

  useEffect(() => {
    if (active === undefined) return
    if (!active) {
      setVisible(false)
      return
    }
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [active, delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
