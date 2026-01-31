'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { BlueprintAnimation } from './BlueprintAnimation'
import { heroContent } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 technical-grid pointer-events-none" />

      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
              {heroContent.headline}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--muted-foreground)] max-w-xl">
              {heroContent.subheadline}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-6 font-mono text-sm"
            >
              {heroContent.stats.map((stat, index) => (
                <div key={index} className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-amber-500">
                    {stat.value}
                  </span>
                  <span className="text-[var(--muted-foreground)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href={heroContent.ctas.primary.href} variant="primary" size="lg">
                {heroContent.ctas.primary.text}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button href={heroContent.ctas.secondary.href} variant="secondary" size="lg">
                {heroContent.ctas.secondary.text}
              </Button>
            </motion.div>
          </motion.div>

          {/* Blueprint Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative aspect-square max-w-lg mx-auto lg:mx-0"
          >
            <BlueprintAnimation />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
