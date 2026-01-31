'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { aboutContent } from '@/lib/constants'

export function QuickFacts() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <h2 className="font-headline text-xl font-semibold text-[var(--foreground)] mb-6">
        Quick Facts
      </h2>

      <Card className="overflow-hidden">
        <div className="divide-y divide-[var(--border)]">
          {aboutContent.quickFacts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 first:pt-0 last:pb-0"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-amber-500 sm:w-32 shrink-0">
                {fact.label}
              </span>
              <span className="text-[var(--foreground)]">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </motion.section>
  )
}
