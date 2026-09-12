'use client'

import { useEffect, useRef } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Try to autoplay on load. Browsers usually block audio with sound until
    // the user interacts, so if it's rejected we start on the first gesture.
    const tryPlay = async () => {
      try {
        await audio.play()
        return true
      } catch {
        return false
      }
    }

    const onFirstInteraction = async () => {
      const started = await tryPlay()
      if (started) removeInteractionListeners()
    }

    const removeInteractionListeners = () => {
      window.removeEventListener('pointerdown', onFirstInteraction)
      window.removeEventListener('keydown', onFirstInteraction)
      window.removeEventListener('touchstart', onFirstInteraction)
      window.removeEventListener('scroll', onFirstInteraction)
    }

    tryPlay().then((started) => {
      if (!started) {
        window.addEventListener('pointerdown', onFirstInteraction)
        window.addEventListener('keydown', onFirstInteraction)
        window.addEventListener('touchstart', onFirstInteraction)
        window.addEventListener('scroll', onFirstInteraction, { passive: true })
      }
    })

    return removeInteractionListeners
  }, [])

  return <audio ref={audioRef} src="/young-and-beautiful.mp3" loop autoPlay preload="auto" />
}
