'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

type EssayMeta = {
  slug: string
  title: string
  date: string
  description: string
}

export function ThinkingSection({ essays }: { essays: EssayMeta[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="thinking" className="py-24 bg-[var(--background)]" ref={sectionRef}>
      <Container>
        <div className="max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Thinking
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {essays.map((essay, index) => (
              <article
                key={essay.slug}
                className="animate-on-scroll"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Link
                  href={`/thinking/${essay.slug}`}
                  className="group block"
                >
                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-[var(--foreground)] group-hover:text-amber-500 transition-colors">
                    {essay.title}
                  </h3>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    {essay.description}
                  </p>
                  <span className="mt-1 block font-mono text-sm text-[var(--muted-foreground)]">
                    {new Date(essay.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
