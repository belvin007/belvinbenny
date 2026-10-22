import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const roles = [
  {
    title: 'Graduate Assistant',
    org: 'BIS Department, Central Michigan University',
    detail:
      'Supporting faculty with academic work and writing a research paper under Professor Ming Liu.',
  },
  {
    title: 'Student Assistant',
    org: 'CMU Honors Program',
    detail:
      "Designing flyers, running the front desk, and managing the program's social media.",
  },
  {
    title: 'IT Support Specialist',
    org: 'Global Visa Online',
    detail: null,
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y bg-muted/30 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Where I've been working"
          />
        </Reveal>
        <ol className="relative flex flex-col gap-6 border-l-2 border-primary/25 pl-8 sm:pl-10">
          {roles.map((role, i) => (
            <li key={role.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+7px)] top-7 flex size-3 items-center justify-center rounded-full bg-primary ring-4 ring-primary/20 sm:-left-[calc(2.5rem+7px)]"
              />
              <Reveal delay={i * 120}>
                <article className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="text-sm font-medium text-primary">{role.org}</p>
                  {role.detail && (
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {role.detail}
                    </p>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
