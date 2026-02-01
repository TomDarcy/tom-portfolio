"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const experiences = [
  {
    company: "AUAR",
    role: "Head of Robotics & Deployments",
    period: "2025–Present",
    description:
      "Building robotic construction systems. Took next-gen product from design to test launch in under 3 months. Own deployment lifecycle across Europe and North America.",
    logo: "/logos/auar.svg",
    highlight: true,
    image: "/photos/auar.png", // Robot setup / factory image
  },
  {
    company: "Boston Consulting Group",
    role: "Consultant, Operations Practice",
    period: "2024–2025",
    description:
      "Led lean production system rollouts for pharma manufacturers. Delivered 10% reduction in lead times through digital tools and operational excellence.",
    logo: "/logos/BCG.svg",
    image: "/photos/pharma.png", // Strategy/design aesthetic
  },
  {
    company: "Edwards Vacuum",
    role: "Senior Manager, Industry 4.0",
    period: "2023–2024",
    description:
      "Directed Industry 4.0 rollout across 14 facilities in 12 countries. Led global team executing >£1M CapEx projects. Consolidated digital toolkit by 90%+ onto Azure.",
    logo: "/logos/AC.svg",
    image: "/photos/semi.png", // Digital/I4.0 aesthetic
  },
  {
    company: "Rolls-Royce",
    role: "Innovation & DemoWorks Lead",
    period: "2020–2022",
    description:
      "Ran 24/7 R&D factory with full P&L accountability. Team of ~50 engineers and technicians. Directed assembly of the UltraFan—the world's largest jet engine.",
    logo: "/logos/rr.svg",
    featured: true,
    image: "/photos/UF.jpg", // UltraFan engine
  },
  {
    company: "Rolls-Royce",
    role: "Operations Leadership Programme → Production Lead",
    period: "2014–2020",
    description:
      "4.5-year accelerated development programme leading my first team at 20. Built the operational foundational skills that everything else sits on.",
    logo: "/logos/rr.svg",
    image: "/photos/rr1.jpg", // Early career / factory floor
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[var(--muted)]/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Where I've built things
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl">
            From apprentice to global operations—a decade of making
            manufacturing work.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const imageSide = isEven ? "left" : "right";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`
                  grid lg:grid-cols-2 gap-8 lg:gap-12 items-center
                  ${!isEven ? "lg:grid-flow-dense" : ""}
                `}
                >
                  {/* Image - alternates sides */}
                  {exp.image && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: imageSide === "left" ? -40 : 40,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                      className={`
                        relative aspect-[3/2] rounded-lg overflow-hidden
                        ${isEven ? "lg:order-1" : "lg:order-2"}
                        shadow-lg group-hover:shadow-xl transition-shadow duration-300
                      `}
                    >
                      <Image
                        src={exp.image}
                        alt={`${exp.company} - ${exp.role}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Subtle duotone overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-charcoal-950/20" />
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: imageSide === "left" ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className={`
                      relative p-6 sm:p-8 rounded-2xl border transition-all duration-300
                      ${
                        exp.highlight
                          ? "bg-amber-500/5 border-amber-500/30 hover:border-amber-500/50"
                          : "bg-[var(--card)] border-[var(--border)] hover:border-amber-500/30"
                      }
                      hover:shadow-lg hover:-translate-y-1
                      ${isEven ? "lg:order-2" : "lg:order-1"}
                    `}
                  >
                    {/* Accent border */}
                    <div
                      className={`
                      absolute ${
                        isEven
                          ? "left-0 top-0 bottom-0"
                          : "right-0 top-0 bottom-0"
                      }
                      w-1 bg-amber-500/0 group-hover:bg-amber-500/50 transition-colors duration-300 rounded-l
                    `}
                    />

                    {/* Logo */}
                    <div className="mb-4">
                      <div className="inline-flex shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-[var(--muted)] border border-[var(--border)] p-2 items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                        <div>
                          <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[var(--foreground)]">
                            {exp.role}
                          </h3>
                          <p className="text-amber-500 font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="font-mono text-sm text-[var(--muted-foreground)] shrink-0">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-[var(--muted-foreground)] leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.featured && (
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                          UltraFan: World's largest jet engine
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
