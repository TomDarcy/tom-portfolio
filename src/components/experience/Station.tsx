"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { type ExperienceStation } from "@/lib/constants";

interface StationProps {
  station: ExperienceStation;
  index: number;
}

export function Station({ station, index }: StationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connection dot */}
      <div className="absolute -left-12 lg:left-1/2 lg:-translate-x-1/2 lg:-top-[3.25rem] top-0">
        <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-[var(--background)] shadow-lg" />
      </div>

      <Card hover className="h-full">
        <CardHeader>
          {/* Logo */}
          {station.logo && (
            <div className="relative w-12 h-12 mb-3 rounded-lg bg-[var(--muted)] p-2 border border-[var(--border)]">
              <Image
                src={station.logo}
                alt={station.company}
                fill
                className="object-contain p-1"
              />
            </div>
          )}

          {/* Company & Role */}
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-wider text-amber-500">
              {station.company}
            </p>
            <CardTitle>{station.role}</CardTitle>
            <p className="text-sm text-[var(--muted-foreground)] font-mono">
              {station.period}
            </p>
          </div>
        </CardHeader>

        <CardContent>
          {/* Tagline */}
          {station.tagline && (
            <p className="text-sm italic text-[var(--muted-foreground)] mb-4">
              {station.tagline}
            </p>
          )}

          {/* Highlights */}
          <ul className="space-y-2">
            {station.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
              >
                <span className="text-amber-500 mt-1.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Case study link */}
          {station.caseStudy && (
            <a
              href={station.caseStudy.href}
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
            >
              {station.caseStudy.title}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
