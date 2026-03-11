"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSplitParallax() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        // Only calculate when section is in view
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          // 0 at top, 1 when scrolled past
          const progress = Math.max(0, -rect.top / sectionHeight);
          setScrollY(progress);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Photo shifts up as user scrolls down (max 40px movement)
  const parallaxOffset = scrollY * 40;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-[var(--background)]"
    >
      {/* ── LEFT HALF: Photo with scroll parallax ──────── */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-auto md:min-h-screen shrink-0 overflow-hidden">
        {/* Parallax image container — oversized for movement room */}
        <div
          className="absolute inset-[-40px] will-change-transform"
          style={{
            transform: `translateY(${-parallaxOffset}px)`,
          }}
        >
          <Image
            src="/Main.webp"
            alt="Tom d'Arcy on the factory floor"
            fill
            className="object-cover object-[25%_20%]"
            priority
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Amber duotone warmth */}
        <div className="absolute inset-0 bg-amber-500/[0.06] mix-blend-overlay" />

        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-[2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Desktop: right edge gradient */}
        <div
          className="hidden md:block absolute inset-0 z-[3]"
          style={{ background: 'linear-gradient(to right, transparent 0%, transparent 55%, var(--background) 100%)' }}
        />

        {/* Mobile: bottom gradient */}
        <div
          className="md:hidden absolute inset-0 z-[3]"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, var(--background) 100%)' }}
        />
      </div>

      {/* ── Vertical split line with amber glow pulse ─── */}
      <div
        className="hidden md:block absolute left-1/2 top-[8%] bottom-[8%] w-px z-10"
        style={{
          background: "rgba(245, 158, 11, 0.35)",
          animation: "heroSplitGlow 3s ease-in-out infinite",
        }}
      />

      {/* ── RIGHT HALF: Content ────────────────────────── */}
      <div className="relative w-full md:w-1/2 flex items-center bg-[var(--background)]">
        <div className="w-full px-6 py-12 md:py-0 md:pl-16 md:pr-12 lg:pl-20 lg:pr-16 max-w-2xl">
          {/* Expanding amber line */}
          <div
            className="h-[2px] bg-amber-500 mb-6"
            style={{
              animation: "heroSplitLineExpand 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              width: 0,
            }}
          />

          {/* Mono label */}
          <span className="animate-fade-in-up delay-100 block font-mono text-xs text-amber-500 tracking-[0.3em] uppercase mb-8">
            OPERATIONS LEADER
          </span>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-200 font-headline text-5xl sm:text-6xl xl:text-7xl font-bold text-[var(--foreground)] leading-[1.05]">
            Making things
            <br />
            that make things
            <span className="text-amber-500">.</span>
          </h1>

          {/* Positioning line */}
          <p className="animate-fade-in-up delay-300 mt-6 text-lg text-[var(--muted-foreground)] max-w-md leading-relaxed">
            Head of Robotics & Deployments at AUAR. Previously Rolls-Royce, Edwards Vacuum, BCG.
          </p>

          {/* Status indicator */}
          <div className="animate-fade-in-up delay-500 mt-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="font-mono text-sm text-amber-500">
              Currently: Building robots that build houses.
            </span>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-500 mt-10 flex flex-wrap gap-4">
            <Button href="#experience" variant="primary" size="lg">
              See my work
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="border-[var(--border)] text-[var(--foreground)] hover:border-amber-500"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroSplitLineExpand {
          from { width: 0; }
          to { width: 3rem; }
        }
        @keyframes heroSplitGlow {
          0%, 100% { box-shadow: 0 0 4px rgba(245, 158, 11, 0.15); }
          50% { box-shadow: 0 0 12px rgba(245, 158, 11, 0.4); }
        }
      `}</style>
    </section>
  );
}
