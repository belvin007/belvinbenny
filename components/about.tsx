import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const education = [
  {
    degree: 'Master of Science in Information Systems',
    school: 'Central Michigan University',
    details: [
      'Major: Business Data Analytics',
      'Minor and elective focus in AI and Business',
    ],
    tag: 'Graduating May 2027',
  },
  {
    degree: 'B.Sc in Computer Science',
    school: 'Koshys Group of Institutions, Bangalore',
    details: [],
    tag: 'Completed',
  },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading id="about-heading" eyebrow="About" title="Education" />
        </Reveal>
        <ul className="grid gap-5 md:grid-cols-2">
          {education.map((item, i) => (
            <li key={item.degree}>
              <Reveal delay={i * 120} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:brand-gradient group-hover:text-white">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-pretty text-xl font-semibold">{item.degree}</h3>
                    <p className="text-muted-foreground">{item.school}</p>
                  </div>
                  {item.details.length > 0 && (
                    <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full brand-gradient" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
