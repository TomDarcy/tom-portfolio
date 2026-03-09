import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSplitParallax } from '@/components/sections/HeroSplitParallax'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ThinkingSection } from '@/components/sections/ThinkingSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { getAllEssays } from '@/lib/mdx'

export default function Home() {
  const essays = getAllEssays()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSplitParallax />
        <AboutSection />
        <ExperienceSection />
        <ThinkingSection essays={essays} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
