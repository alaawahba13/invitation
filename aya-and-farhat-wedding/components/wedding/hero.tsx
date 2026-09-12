import { Heart, MapPin } from 'lucide-react'
import { Reveal } from './reveal'

export function Hero({ active }: { active?: boolean }) {
  return (
    <header className="relative flex w-full flex-col items-center pt-8 text-center">
      {/* Monogram */}
        <Reveal active={active} delay={0} className="relative flex h-24 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-primary/50" />
          <div className="absolute inset-[3px] rounded-full border border-primary/50" />
          <span className="absolute font-serif text-base tracking-[0.3em] text-primary">
            A<span className="mx-1 text-primary/50">|</span>A
          </span>
        </Reveal>

        <Reveal active={active} delay={100} className="flex w-full flex-col items-center">
          <p className="mt-8 font-sans text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
            Together with their families
          </p>

          <div className="mt-4 flex flex-col items-center">
            <h1 className="font-display text-5xl uppercase leading-none tracking-[0.1em] text-primary">
              Aya
            </h1>
            <span className="mt-3 font-script text-4xl text-primary" aria-hidden="true">
              and
            </span>
            <h1 className="font-display text-4xl uppercase leading-none tracking-[0.08em] text-primary">
              Abdelrahman
            </h1>
          </div>
        </Reveal>

        <Reveal active={active} delay={200}>
          <p className="mt-6 font-sans text-[0.7rem] uppercase leading-relaxed tracking-[0.25em] text-muted-foreground">
            Joyfully invite you
            <br />
            to celebrate their wedding
          </p>
        </Reveal>

        <Reveal active={active} delay={300} className="mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-primary/30" aria-hidden="true" />
          <Heart
            className="h-3 w-3 text-primary/60"
            strokeWidth={1.5}
            fill="currentColor"
            aria-hidden="true"
          />
          <span className="h-px w-10 bg-primary/30" aria-hidden="true" />
        </Reveal>

        <Reveal
          active={active}
          delay={380}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Thursday
          </span>
          <span className="h-8 w-px bg-primary/25" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl leading-none text-primary">05</span>
            <span className="mt-1 font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
              November 2026
            </span>
          </div>
          <span className="h-8 w-px bg-primary/25" aria-hidden="true" />
          <span className="font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
            At 6:00 PM
          </span>
        </Reveal>

    </header>
  )
}
