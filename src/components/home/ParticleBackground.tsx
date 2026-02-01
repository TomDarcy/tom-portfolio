"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { type ISourceOptions } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className }: ParticleBackgroundProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Particles, setParticles] = useState<React.ComponentType<{
    className?: string;
    id: string;
    options: ISourceOptions;
  }> | null>(null);

  // Lazy load particles on user interaction or after idle
  useEffect(() => {
    const loadParticles = () => {
      if (shouldLoad) return;
      setShouldLoad(true);
    };

    // Load on first interaction
    const events = ["mousemove", "touchstart", "scroll"];
    events.forEach((event) => {
      window.addEventListener(event, loadParticles, { once: true, passive: true });
    });

    // Also load after 3 seconds idle as fallback
    const idleTimeout = setTimeout(loadParticles, 3000);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, loadParticles);
      });
      clearTimeout(idleTimeout);
    };
  }, [shouldLoad]);

  // Dynamically import particles when needed
  useEffect(() => {
    if (!shouldLoad) return;

    const loadParticlesModule = async () => {
      const [{ default: ParticlesComponent }, { initParticlesEngine }, { loadSlim }] = await Promise.all([
        import("@tsparticles/react"),
        import("@tsparticles/react"),
        import("@tsparticles/slim"),
      ]);

      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      setParticles(() => ParticlesComponent);
      setIsLoaded(true);
    };

    loadParticlesModule();
  }, [shouldLoad]);

  const getParticleCount = useCallback(() => {
    if (typeof window === "undefined") return 40;
    if (window.innerWidth < 640) return 20;
    if (window.innerWidth < 1024) return 30;
    return 40;
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 30, // Reduced from 60 for better performance
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: { enable: true },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4,
            factor: 0.3,
            speed: 0.3,
          },
        },
      },
      particles: {
        color: { value: "#f59e0b" },
        links: {
          color: "#f59e0b",
          distance: 120,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 0.3, // Reduced speed
          straight: false,
        },
        number: {
          density: { enable: true, area: 1000 },
          value: getParticleCount(),
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: false, // Disable retina for performance
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [getParticleCount]
  );

  if (!isLoaded || !Particles) return null;

  return (
    <Particles
      className={className}
      id="tsparticles"
      options={options}
    />
  );
}
