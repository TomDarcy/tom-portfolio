import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { getAllEssays } from '@/lib/mdx'

export const metadata = {
  title: 'Thinking | Tom d\'Arcy',
  description: 'Essays on manufacturing, robotics, and the gap between prototype and production.',
}

export default function ThinkingPage() {
  const essays = getAllEssays()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="narrow">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Thinking
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            How manufacturing actually changes. From someone building on the shop floor.
          </p>

          <div className="mt-12 space-y-10">
            {essays.map((essay) => (
              <article key={essay.slug}>
                <Link
                  href={`/thinking/${essay.slug}`}
                  className="group block"
                >
                  <h2 className="font-headline text-xl sm:text-2xl font-semibold text-[var(--foreground)] group-hover:text-amber-500 transition-colors">
                    {essay.title}
                  </h2>
                  <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">
                    {essay.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
