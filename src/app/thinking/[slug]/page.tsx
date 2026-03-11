import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { ShareButton } from '@/components/ui/ShareButton'
import { getAllEssays, getEssayBySlug } from '@/lib/mdx'
import { siteConfig } from '@/lib/constants'

export function generateStaticParams() {
  const essays = getAllEssays()
  return essays.map((essay) => ({ slug: essay.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const essay = getEssayBySlug(slug)
    return {
      title: `${essay.title} | Tom d'Arcy`,
      description: essay.description,
    }
  } catch {
    return {
      title: 'Not Found | Tom d\'Arcy',
    }
  }
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let essay
  try {
    essay = getEssayBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="narrow">
          <Link
            href="/thinking"
            className="inline-flex items-center gap-1 font-mono text-sm text-[var(--muted-foreground)] hover:text-amber-500 transition-colors mb-8"
          >
            ← Thinking
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight">
                {essay.title}
              </h1>
            </header>

            <div className="prose-custom">
              <MDXRemote source={essay.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--border)]">
              <ShareButton
                url={`${siteConfig.url}/thinking/${slug}`}
                title={essay.title}
              />
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
