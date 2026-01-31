'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/constants'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[var(--background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Let's talk
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            I'm always interested in discussing manufacturing innovation, robotics,
            or connecting with fellow builders.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteConfig.links.linkedin}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </Button>
            <Button
              href={siteConfig.links.email}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send an email
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--muted-foreground)] mb-4">Open to:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Advisory roles', 'Speaking opportunities', 'Robotics collaborations'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm bg-[var(--muted)] border border-[var(--border)] rounded-full text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
