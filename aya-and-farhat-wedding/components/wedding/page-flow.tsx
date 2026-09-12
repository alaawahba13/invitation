'use client'

import { useRef, useState } from 'react'
import { Hero } from './hero'
import { Location } from './location'
import { MusicPlayer } from './music-player'
import { Opening } from './opening'

const ZOOM_DURATION = 1000

export function PageFlow() {
  const [started, setStarted] = useState(false)
  const [opened, setOpened] = useState(false)
  const [zooming, setZooming] = useState(false)
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleOpen = () => {
    setStarted(true)
    setZooming(true)
    advanceTimer.current = setTimeout(() => setOpened(true), ZOOM_DURATION)
  }

  return (
    <main
      className={`relative w-full bg-background text-foreground ${
        opened ? 'min-h-svh overflow-y-auto' : 'h-svh overflow-hidden'
      }`}
    >
      <MusicPlayer />

      <div
        className={`absolute inset-0 z-40 overflow-hidden transition-opacity duration-700 ease-out ${
          opened ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className={`h-full w-full ${zooming ? 'zoom-into-letters' : ''}`}>
          {!started ? (
            <button type="button" onClick={handleOpen} className="relative h-full w-full cursor-pointer">
              <Opening active={!opened} />
              <span className="absolute inset-x-0 bottom-10 font-serif text-sm uppercase tracking-[0.22em] text-background/75">
                Tap to open
              </span>
            </button>
          ) : (
            <Opening active={!opened} />
          )}
        </div>
      </div>

      {started && (
        <div className="relative z-10 flex justify-center px-4 py-10">
          <div className="relative flex w-full max-w-md flex-col items-center border border-primary/25 px-4 sm:px-8">
            <div
              className="pointer-events-none absolute inset-[6px] border border-primary/15"
              aria-hidden="true"
            />

            <Hero />

            <div className="my-10 h-px w-full max-w-[220px] bg-primary/30" aria-hidden="true" />

            <Location />

            {/* Corner floral spray */}
            <img
              src="/corner-spray.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-[clamp(88px,26vw,144px)] w-auto -scale-x-100 opacity-90"
            />
          </div>
        </div>
      )}
    </main>
  )
}
