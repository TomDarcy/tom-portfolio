import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Timeline } from '@/components/experience/Timeline'

export const metadata = {
  title: 'Experience | Tom d\'Arcy',
  description: 'From Rolls-Royce to AUAR - a journey through manufacturing innovation, Industry 4.0 transformation, and robotic systems.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="wide">
          <div className="mb-12">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
              The Factory Floor
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl">
              Each role is a station on the production line—from apprentice to global operations leader to startup builder.
            </p>
          </div>
          <Timeline />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
