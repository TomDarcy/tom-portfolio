'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { siteConfig, contactContent } from '@/lib/constants'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
              {contactContent.headline}
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-xl mx-auto">
              {contactContent.description}
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <Button
              href={siteConfig.links.linkedin}
              variant="primary"
              size="lg"
              className="gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </Button>
          </motion.div>

          {/* What I'm open to */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <Card>
              <h2 className="font-headline text-lg font-semibold text-[var(--foreground)] mb-4">
                What I'm open to
              </h2>
              <ul className="space-y-3">
                {contactContent.openTo.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[var(--muted-foreground)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Alternative contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-[var(--muted-foreground)]">
              Prefer email?{' '}
              <a
                href={siteConfig.links.email}
                className="text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4"
              >
                Drop me a line
              </a>
            </p>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
