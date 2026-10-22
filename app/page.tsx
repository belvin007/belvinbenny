import { About } from '@/components/about'
import { Certifications } from '@/components/certifications'
import { Contact, SiteFooter } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
