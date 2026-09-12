'use client'

import { useEffect, useRef, useState } from 'react'
import { Hero } from './hero'
import { Location } from './location'
import { MusicPlayer } from './music-player'
import { Opening } from './opening'

const PAGES = [Opening, Hero, Location]
const ZOOM_START_DELAY = 1500
const ZOOM_DURATION = 1000
const HERO_TO_LOCATION_DELAY = 4000

export function PageFlow() {
  const [index, setIndex] = useState(0)
  const [zooming, setZooming] = useState(false)
  const timers = useRef<{ zoom?: ReturnType<typeof setTimeout>; advance?: ReturnType<typeof setTimeout> }>({})

  useEffect(() => {
    timers.current.zoom = setTimeout(() => setZooming(true), ZOOM_START_DELAY)
    timers.current.advance = setTimeout(() => setIndex(1), ZOOM_START_DELAY + ZOOM_DURATION)
    return () => {
      clearTimeout(timers.current.zoom)
      clearTimeout(timers.current.advance)
    }
  }, [])

  useEffect(() => {
    if (index !== 1) return
    const timer = setTimeout(() => setIndex(2), HERO_TO_LOCATION_DELAY)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <main className="relative h-svh w-full overflow-hidden bg-background text-foreground">
      <MusicPlayer />

      {PAGES.map((Page, i) => {
        const isActive = i === index
        const isOpening = i === 0

        return (
          <div
            key={i}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {isOpening ? (
              <div className={`h-full w-full ${zooming ? 'zoom-into-letters' : ''}`}>
                <Page active={isActive} />
              </div>
            ) : (
              <Page active={isActive} />
            )}
          </div>
        )
      })}
    </main>
  )
}
