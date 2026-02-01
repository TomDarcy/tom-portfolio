"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Concept 2: "The Bleed"
 * Full-width background image with heavy gradient from RIGHT
 * Text on right side, Tom visible on left half of frame
 * Editorial feel with stacked vertical text
 */
export function HeroBleed() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main.jpg"
          alt="Tom d'Arcy on the factory floor"
          fill
          className="object-cover object-[60%_20%]"
          priority
          quality={90}
        />
        {/* Heavy gradient from RIGHT - reveals Tom on left */}
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal-950 via-charcoal-950/90 via-45% to-transparent" />
        {/* Additional top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-transparent to-charcoal-950/60" />
      </div>

      {/* Technical grid overlay - subtle texture */}
      <div className="absolute inset-0  opacity-10 z-[1]" />

      <Container size="full" className="relative z-10 flex w-screen justify-end items-end">
        <div className="flex justify-end items-end w-full">
          <div className="max-w-lg text-right pe-16">
            {/* Stacked vertical layout for editorial feel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Small label */}
              <span className="inline-block font-mono text-sm text-amber-500 mb-4 tracking-wider">
                OPERATIONS LEADER
              </span>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
                I make
                <br />
                robots work
                <br />
                <span className="text-amber-500">for a living.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="mt-8 text-lg text-gray-300 leading-relaxed"
            >
              Taking manufacturing technology from prototype to scale. Currently
              building robotic construction systems at AUAR.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mt-10 flex flex-wrap gap-4 justify-end"
            >
              <Button href="#experience" variant="primary" size="lg">
                See my work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:border-amber-500"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
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
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
