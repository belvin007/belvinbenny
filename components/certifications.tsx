import { Award, BadgeCheck, Cloud } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const certifications = [
  { name: 'AWS Cloud Computing', issuer: 'AWS', icon: Cloud },
  { name: 'Celonis Rising Star', issuer: 'Celonis · Technical', icon: BadgeCheck },
  { name: 'Celonis Rising Star', issuer: 'Celonis · Business', icon: Award },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            eyebrow="Certifications"
            title="Credentials"
          />
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = cert.icon
            return (
              <li key={cert.issuer}>
                <Reveal delay={i * 120} className="h-full">
                  <article className="group flex h-full flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    <span className="flex size-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
