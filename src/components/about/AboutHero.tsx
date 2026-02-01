'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutContent } from '@/lib/constants'

export function AboutHero() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight">
          {aboutContent.headline}
        </h1>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[var(--muted)] border border-[var(--border)]">
            <Image
              src="/portrait.webp"
              alt="Tom d'Arcy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {aboutContent.narrative.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-[var(--muted-foreground)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
