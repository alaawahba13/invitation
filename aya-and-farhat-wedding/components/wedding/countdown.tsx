'use client'

import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date(2026, 10, 5, 18, 0, 0).getTime()

function getTimeLeft() {
  const diff = Math.max(WEDDING_DATE - Date.now(), 0)
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!timeLeft) return null

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center justify-center gap-2">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl leading-none tabular-nums text-primary">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="mt-1 font-sans text-[0.5rem] uppercase tracking-[0.15em] text-muted-foreground">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="h-4 w-px bg-primary/25" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}
