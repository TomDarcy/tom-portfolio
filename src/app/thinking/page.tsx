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

          <div className="mt-16 pt-8 border-t border-[var(--border)]">
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/darcy"
              method="post"
              className="embeddable-buttondown-form flex flex-col gap-3 max-w-md"
            >
              <label htmlFor="bd-email" className="font-mono text-sm text-[var(--muted-foreground)]">
                Enter your email
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  id="bd-email"
                  className="flex-1 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="you@example.com"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-black cursor-pointer hover:bg-amber-400 transition-colors"
                />
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">
                <a href="https://buttondown.com/refer/darcy" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                  Powered by Buttondown.
                </a>
              </p>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
