'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main.jpg"
          alt="Tom d'Arcy"
          fill
          className="object-cover object-[70%_top]"
          priority
          quality={90}
        />
        {/* Gradient overlay - from left for text readability, keeps right side visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
              I make robots work
              <br />
              <span className="text-amber-500">for a living.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl"
          >
            Operations leader taking manufacturing technology from prototype to scale.
            Currently building robotic construction systems at AUAR.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 flex flex-wrap gap-8 font-mono text-sm"
          >
            <div>
              <span className="text-3xl font-bold text-amber-500">14</span>
              <span className="ml-2 text-gray-400">sites</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-amber-500">12</span>
              <span className="ml-2 text-gray-400">countries</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-amber-500">£M</span>
              <span className="ml-2 text-gray-400">P&L</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#experience" variant="primary" size="lg">
              See my work
            </Button>
            <Button href="#contact" variant="secondary" size="lg" className="border-white/30 text-white hover:border-amber-500">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
