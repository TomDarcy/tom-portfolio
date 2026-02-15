"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";

// Lazy load particles - they're not critical for initial render
const ParticleBackground = dynamic(
  () => import("@/components/home/ParticleBackground").then((mod) => ({ default: mod.ParticleBackground })),
  { ssr: false }
);

export function HeroBleed() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main.webp"
          alt="Tom d'Arcy on the factory floor"
          fill
          className="object-cover object-[50%_20%] sm:object-[60%_20%]"
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Mobile: gradient from bottom for readability; Desktop: gradient from right to reveal Tom on left */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 via-50% to-charcoal-950/30 sm:bg-gradient-to-l sm:from-charcoal-950 sm:via-charcoal-950/90 sm:via-45% sm:to-transparent" />
        {/* Additional top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-transparent to-charcoal-950/60" />
      </div>

      {/* Particle background - lazy loaded */}
      <div className="absolute inset-0 z-[1]">
        <ParticleBackground className="absolute inset-0" />
      </div>

      {/* Technical grid overlay - subtle texture */}
      <div className="absolute inset-0 opacity-10 z-[2]" />

      <Container
        size="full"
        className="relative z-[3] flex justify-center items-end sm:justify-end sm:items-end"
      >
        <div className="flex justify-center items-end w-full sm:justify-end">
          <div className="max-w-lg text-center sm:text-right px-4 sm:pe-16 sm:ps-0">
            {/* Stacked vertical layout for editorial feel */}
            <div className="animate-fade-in-up">
              {/* Small label */}
              <span className="inline-block font-mono text-sm text-amber-500 mb-4 tracking-wider">
                OPERATIONS LEADER
              </span>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
                Making things
                <br />
                that make things.
              </h1>
            </div>

            <p className="animate-fade-in-up delay-150 mt-8 text-lg text-gray-300 leading-relaxed">
              Taking manufacturing technology from prototype to scale.
            </p>

            {/* Currently Building Status */}
            <div className="animate-fade-in-up delay-250 mt-6 flex items-center gap-2 justify-center sm:justify-end">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-mono text-sm text-amber-500">
                Currently: Building robots that build houses.
              </span>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-500 mt-10 flex flex-wrap gap-4 justify-center sm:justify-end">
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
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-1500 absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]">
        <div className="animate-bounce-slow w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
