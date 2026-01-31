'use client'

import { motion } from 'framer-motion'
import { Station } from './Station'
import { experienceStations } from '@/lib/constants'

export function Timeline() {
  return (
    <div className="relative">
      {/* Conveyor belt line - desktop */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-[var(--border)]">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="h-full bg-gradient-to-r from-amber-500/50 via-amber-500 to-amber-500/50 origin-left"
        />
      </div>

      {/* Timeline line - mobile */}
      <div className="lg:hidden absolute top-0 bottom-0 left-4 w-0.5 bg-[var(--border)]">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full bg-gradient-to-b from-amber-500 to-amber-500/30 origin-top"
        />
      </div>

      {/* Desktop: Horizontal scroll */}
      <div className="hidden lg:block">
        <div className="flex gap-6 overflow-x-auto pb-8 pt-16 snap-x snap-mandatory scrollbar-thin scrollbar-track-[var(--muted)] scrollbar-thumb-amber-500">
          {experienceStations.map((station, index) => (
            <div key={station.id} className="snap-start shrink-0 w-80">
              <Station station={station} index={index} />
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--muted-foreground)] font-mono mt-4">
          ← Scroll to explore →
        </p>
      </div>

      {/* Mobile: Vertical stack */}
      <div className="lg:hidden space-y-8 pl-12">
        {experienceStations.map((station, index) => (
          <Station key={station.id} station={station} index={index} />
        ))}
      </div>
    </div>
  )
}
