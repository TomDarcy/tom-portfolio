"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);
  const [particleCount, setParticleCount] = useState(80);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Adjust particle count based on screen size
    const updateParticleCount = () => {
      if (window.innerWidth < 640) {
        setParticleCount(30); // Mobile
      } else if (window.innerWidth < 1024) {
        setParticleCount(50); // Tablet
      } else {
        setParticleCount(80); // Desktop
      }
    };

    updateParticleCount();
    window.addEventListener("resize", updateParticleCount);
    return () => window.removeEventListener("resize", updateParticleCount);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Particles loaded - particles will animate automatically
    // Formation behavior is handled by the particle configuration
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
            factor: 0.5,
            speed: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: "#f59e0b", // amber-500
        },
        links: {
          color: "#f59e0b",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: particleCount,
        },
        opacity: {
          value: 0.4,
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
          random: true,
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [particleCount]
  );

  if (!init) return null;

  return (
    <Particles
      className={className}
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
