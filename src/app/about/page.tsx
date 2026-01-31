import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { AboutHero } from '@/components/about/AboutHero'
import { QuickFacts } from '@/components/about/QuickFacts'
import { Credentials } from '@/components/about/Credentials'

export const metadata = {
  title: 'About | Tom d\'Arcy',
  description: 'Operations leader specialising in taking cutting-edge manufacturing technology from pilot to scale.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="narrow">
          <AboutHero />
          <QuickFacts />
          <Credentials />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
