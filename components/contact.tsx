import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/profile'

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', href: profile.github, icon: GithubIcon, external: true },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-5 pb-20 sm:px-8 sm:pb-24"
    >
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative isolate overflow-hidden rounded-3xl border border-primary/30 bg-primary/10 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="hero-glow brand-glow pointer-events-none absolute left-1/2 top-1/3 -z-10 aspect-square w-[40rem] rounded-full opacity-40 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {"Let's connect"}
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex max-w-full items-center gap-2 break-all rounded-lg brand-gradient px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/70 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/70 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">{profile.name}</p>
        <ul className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-transparent hover:brand-gradient hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
