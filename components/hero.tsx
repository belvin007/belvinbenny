import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-[-10%] -z-10 aspect-square w-[min(56rem,140vw)] rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_65%)] opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_60%,var(--color-background))]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-7">
        <p className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          MSIS · Business Data Analytics
        </p>
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>
        <p className="max-w-2xl text-balance text-2xl font-medium leading-snug text-foreground/90 sm:text-3xl">
          Turning data into{' '}
          <span className="text-primary">smarter business decisions.</span>
        </p>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Master of Science in Information Systems student at Central Michigan
          University, majoring in Business Data Analytics.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get in touch
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-3 font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <GithubIcon className="size-4" />
            View my GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
