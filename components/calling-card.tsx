import { ArrowUpRight, Mail } from 'lucide-react'

const roles = [
  {
    title: 'Graduate Assistant',
    org: 'BIS Department, Central Michigan University',
    detail:
      'Supporting faculty with their academic work and writing a research paper under Professor Ming Liu.',
  },
  {
    title: 'Student Assistant',
    org: 'CMU Honors Program',
    detail:
      "Designing flyers, running the front desk, and managing the program's social media.",
  },
]

const credentials = [
  'AWS Cloud Computing',
  'Celonis Rising Star — Technical',
  'Celonis Rising Star — Business',
  'B.Sc in Computer Science',
  'IT support experience',
]

const links = [
  {
    label: 'LinkedIn',
    value: 'in/belvin-benny-85378a2a8',
    href: 'https://www.linkedin.com/in/belvin-benny-85378a2a8',
  },
  {
    label: 'GitHub',
    value: 'github.com/belvin007',
    href: 'https://github.com/belvin007',
  },
]

export function CallingCard() {
  return (
    <article className="w-full max-w-2xl overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="h-2 bg-primary" aria-hidden="true" />

      <div className="flex flex-col gap-10 p-8 sm:p-12">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            MSIS · Business Data Analytics
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Belvin Benny
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Master of Science in Information Systems student at Central Michigan
            University, majoring in Business Data Analytics. Graduating May 2027
            with a minor and elective focus in AI and Business.
          </p>
        </header>

        <section aria-labelledby="roles-heading" className="flex flex-col gap-5">
          <h2
            id="roles-heading"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            At CMU
          </h2>
          <ul className="flex flex-col gap-5">
            {roles.map((role) => (
              <li key={role.title} className="border-l-2 border-primary pl-4">
                <p className="font-medium">{role.title}</p>
                <p className="text-sm text-primary">{role.org}</p>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {role.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="creds-heading" className="flex flex-col gap-4">
          <h2
            id="creds-heading"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Certifications & background
          </h2>
          <ul className="flex flex-wrap gap-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-col gap-4 border-t pt-8">
          <h2 className="sr-only">Contact</h2>
          <a
            href="mailto:bennybelvin65@gmail.com"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail className="size-4" aria-hidden="true" />
            bennybelvin65@gmail.com
          </a>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="font-medium text-foreground group-hover:text-primary">
                    {link.label}
                  </span>
                  <span className="sr-only">:</span>
                  <span className="ml-1 break-all">{link.value}</span>
                  <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </article>
  )
}
