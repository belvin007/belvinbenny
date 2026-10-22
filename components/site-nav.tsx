import { navLinks, profile } from '@/lib/profile'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8"
      >
        <a
          href="#top"
          className="shrink-0 font-semibold tracking-tight transition-colors hover:text-primary"
        >
          {profile.name}
        </a>
        <ul className="flex items-center overflow-x-auto text-xs [scrollbar-width:none] sm:gap-2 sm:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block whitespace-nowrap rounded-md px-1.5 py-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
