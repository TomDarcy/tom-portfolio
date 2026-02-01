'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const credentials = [
  'UK Manufacturer Top 100',
  'Young Manufacturer of the Year',
  'MSc Engineering Business Management',
  'Le Wagon Full Stack Development',
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[var(--background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            The messy middle is where I thrive.
          </h2>

          <div className="mt-8 space-y-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
            <p>
              I specialise in taking cutting-edge manufacturing technology from "it works in the lab"
              to "it's running 24/7 across 14 sites." That gap between prototype and production
              is where most innovation dies, and that's where I do my best work.
            </p>
            <p>
              My career started on the shop floor at Rolls-Royce, where I eventually led the team
              assembling the world's largest jet engine. I've since driven Industry 4.0 transformation
              across 12 countries, optimised pharmaceutical production lines at BCG, and now I'm building
              robotic construction systems at AUAR.
            </p>
            <p className="text-[var(--foreground)] font-medium">
              What makes me different: I write Python and I run factories. I can debug machine code and present
              to a board. That bridge between the technical and the operational is my sweet spot.
            </p>
          </div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {credentials.map((credential, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-[var(--muted)] border border-[var(--border)] rounded-full text-[var(--foreground)]"
              >
                {credential}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
