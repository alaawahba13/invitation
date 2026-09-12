export function Opening(_props: { active?: boolean } = {}) {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#4a5940] px-6 text-center">
      <div className="relative flex h-[clamp(220px,78vw,320px)] w-[clamp(220px,78vw,320px)] items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full text-background/75"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
        >
          <defs>
            <path id="arc-top" d="M 16 108 A 84 84 0 0 1 184 108" fill="none" />
            <path id="arc-bottom" d="M 52 169 A 84 84 0 0 0 148 169" fill="none" />
          </defs>
          <text className="fill-background/90 font-serif text-[12px] uppercase tracking-[0.22em]" stroke="none">
            <textPath href="#arc-top" startOffset="47%" textAnchor="middle">
              Aya &amp; Abdelrahman
            </textPath>
          </text>
          <text className="fill-background/75 font-serif text-[10.5px] uppercase tracking-[0.01em]" stroke="none">
            <textPath href="#arc-bottom" startOffset="52%" textAnchor="middle">
              5th November 2026
            </textPath>
          </text>
        </svg>

        <img
          src="/1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-5 -left-4 h-[clamp(120px,44vw,200px)] w-auto max-w-[70vw] opacity-90"
        />

         <img
          src="/2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 h-[clamp(120px,44vw,200px)] w-auto max-w-[70vw] opacity-90"
        />

        <div className="flex items-center gap-2">
          <span className="font-display text-7xl leading-none text-background">A</span>
          <span className="font-display text-4xl leading-none text-background/70">&amp;</span>
          <span className="font-display text-7xl leading-none text-background">A</span>
        </div>
      </div>
    </section>
  )
}
