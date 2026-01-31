'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const experiences = [
  {
    company: "AUAR",
    role: "Head of Robotics & Deployments",
    period: "2025–Present",
    description:
      "Building robotic construction systems. Took next-gen product from design to test launch in under 3 months. Own deployment lifecycle across Europe and North America.",
    logo: "/logos/auar.svg",
    highlight: true,
  },
  {
    company: "Boston Consulting Group",
    role: "Consultant, Operations Practice",
    period: "2024–2025",
    description:
      "Led lean production system rollouts for pharma manufacturers. Delivered 10% reduction in lead times through digital tools and operational excellence.",
    logo: "/logos/BCG.svg",
  },
  {
    company: "Edwards Vacuum",
    role: "Senior Manager, Industry 4.0",
    period: "2023–2024",
    description:
      "Directed Industry 4.0 rollout across 14 facilities in 12 countries. Led global team executing >£1M CapEx projects. Consolidated digital toolkit by 90%+ onto Azure.",
    logo: "/logos/AC.svg",
  },
  {
    company: "Rolls-Royce",
    role: "Innovation & DemoWorks Lead",
    period: "2020–2022",
    description:
      "Ran 24/7 R&D factory with full P&L accountability. Team of ~50 engineers and technicians. Directed assembly of the UltraFan—the world's largest jet engine.",
    logo: "/logos/rr.svg",
    featured: true,
  },
  {
    company: "Rolls-Royce",
    role: "Operations Leadership Programme → Production Lead",
    period: "2014–2020",
    description:
      "4.5-year accelerated development programme leading my first team at 20. Built the operational foundational skills that everything else sits on.",
    logo: "/logos/rr.svg",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[var(--muted)]/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Where I've built things
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)] max-w-2xl">
            From apprentice to global operations—a decade of making manufacturing work.
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300
                ${exp.highlight
                  ? 'bg-amber-500/5 border-amber-500/30 hover:border-amber-500/50'
                  : 'bg-[var(--card)] border-[var(--border)] hover:border-amber-500/30'}
              `}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Logo */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-[var(--border)] p-2 flex items-center justify-center">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-[var(--foreground)]">
                        {exp.role}
                      </h3>
                      <p className="text-amber-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="font-mono text-sm text-[var(--muted-foreground)] shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.featured && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      UltraFan: World's largest jet engine
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
