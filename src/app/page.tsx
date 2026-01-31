import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroBleed } from '@/components/sections/HeroBleed'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Concept Comparison - scroll to see both */}
        {/* <HeroFrame /> */}
        <HeroBleed />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
