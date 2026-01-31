'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-[var(--muted)] rounded-full" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative w-14 h-7 rounded-full p-1 transition-colors duration-300',
        'bg-charcoal-700 dark:bg-charcoal-600',
        'border-2 border-charcoal-500 dark:border-charcoal-400',
        'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]'
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track markings - industrial switch aesthetic */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5 text-[8px] font-mono text-charcoal-400">
        <span>I</span>
        <span>O</span>
      </span>

      {/* Toggle knob */}
      <motion.span
        layout
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        className={cn(
          'relative z-10 block w-5 h-5 rounded-full',
          'bg-gradient-to-b shadow-md',
          isDark
            ? 'bg-amber-500 from-amber-400 to-amber-600 ml-auto'
            : 'bg-gray-200 from-gray-100 to-gray-300'
        )}
      >
        {/* Knob texture */}
        <span className="absolute inset-1 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
      </motion.span>
    </button>
  )
}
