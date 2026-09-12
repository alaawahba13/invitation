import { MapPin } from 'lucide-react'
import { Countdown } from './countdown'
import { Reveal } from './reveal'

export function Location({ active }: { active?: boolean }) {
  return (
    <section className="relative flex w-full flex-col items-center pb-12 text-center">
      <Reveal active={active} delay={0} className="flex w-full flex-col items-center">
          <p className="font-sans text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
            Reception
          </p>
          <h2 className="mt-1.5 font-script text-3xl text-primary">Ziya Venue</h2>
          <a
            href="https://maps.app.goo.gl/NfHs64VzhmVx1nuYA?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-primary underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <MapPin className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
            <span className="underline decoration-primary/40 group-hover:decoration-primary">
              View on Google Maps
            </span>
          </a>
        </Reveal>

        <Reveal active={active} delay={150} className="mt-6 flex w-full flex-col items-center">
          <img
            src="/map.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-[clamp(400px,50svh,5000px)] w-auto max-w-full opacity-90"
          />
        </Reveal>

        <Reveal active={active} delay={300} className="mt-6 flex w-full flex-col items-center">
          <span className="h-px w-10 bg-primary/30" aria-hidden="true" />
          <p className="mt-2 font-sans text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
            Counting down to our big day
          </p>
          <div className="mt-2">
            <Countdown />
          </div>
        </Reveal>
    </section>
  )
}
