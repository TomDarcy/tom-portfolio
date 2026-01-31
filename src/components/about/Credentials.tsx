'use client'

import { motion } from 'framer-motion'
import { aboutContent } from '@/lib/constants'

export function Credentials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <h2 className="font-headline text-xl font-semibold text-[var(--foreground)] mb-6">
        Credentials
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {aboutContent.credentials.map((credential, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-[var(--muted)] border border-[var(--border)]"
          >
            <span className="text-xl">{credential.icon}</span>
            <span className="text-sm text-[var(--foreground)]">
              {credential.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
