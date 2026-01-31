'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { credentialsLogos } from '@/lib/constants'

const awards = [
  'Manufacturer Top 100',
  'Young Manufacturer of the Year',
]

export function CredentialsStrip() {
  return (
    <section className="py-12 border-t border-[var(--border)] bg-[var(--muted)]/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {/* Logos */}
          <div className="flex items-center gap-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
              Built with
            </span>
            <div className="flex items-center gap-6">
              {credentialsLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative h-8 w-16 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-[var(--border)]" />

          {/* Awards */}
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
              Recognised by
            </span>
            <div className="flex items-center gap-4">
              {awards.map((award) => (
                <span
                  key={award}
                  className="text-sm text-[var(--foreground)] font-medium"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
