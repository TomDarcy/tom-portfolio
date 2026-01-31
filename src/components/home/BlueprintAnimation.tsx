'use client'

import { motion, type Variants } from 'framer-motion'

export function BlueprintAnimation() {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.2,
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1],
        },
        opacity: { delay: i * 0.2, duration: 0.3 },
      },
    }),
  }

  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  return (
    <div className="relative w-full h-full">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      {/* SVG Animation */}
      <svg
        viewBox="0 0 400 400"
        className="relative w-full h-full p-8"
        fill="none"
      >
        {/* Robotic arm base */}
        <motion.rect
          x="160"
          y="320"
          width="80"
          height="40"
          rx="4"
          className="stroke-amber-500"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        />

        {/* Base mounting bolts */}
        <motion.circle
          cx="175"
          cy="340"
          r="4"
          className="fill-amber-500"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.circle
          cx="225"
          cy="340"
          r="4"
          className="fill-amber-500"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        />

        {/* First arm segment (vertical) */}
        <motion.path
          d="M200 320 L200 240"
          className="stroke-[var(--foreground)]"
          strokeWidth="3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        />

        {/* Joint 1 */}
        <motion.circle
          cx="200"
          cy="240"
          r="12"
          className="stroke-amber-500 fill-[var(--card)]"
          strokeWidth="2"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        />
        <motion.circle
          cx="200"
          cy="240"
          r="4"
          className="fill-amber-500"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        />

        {/* Second arm segment (diagonal) */}
        <motion.path
          d="M200 240 L280 180"
          className="stroke-[var(--foreground)]"
          strokeWidth="3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        />

        {/* Joint 2 */}
        <motion.circle
          cx="280"
          cy="180"
          r="10"
          className="stroke-amber-500 fill-[var(--card)]"
          strokeWidth="2"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        />
        <motion.circle
          cx="280"
          cy="180"
          r="3"
          className="fill-amber-500"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        />

        {/* Third arm segment (horizontal) */}
        <motion.path
          d="M280 180 L340 180"
          className="stroke-[var(--foreground)]"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        />

        {/* End effector / gripper */}
        <motion.path
          d="M340 180 L360 165 M340 180 L360 195"
          className="stroke-amber-500"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        />

        {/* Technical annotations */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          {/* Dimension lines */}
          <line
            x1="160"
            y1="380"
            x2="240"
            y2="380"
            className="stroke-[var(--muted-foreground)]"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          <text
            x="200"
            y="395"
            textAnchor="middle"
            className="fill-[var(--muted-foreground)] text-[10px] font-mono"
          >
            80mm
          </text>

          {/* Angle annotation */}
          <path
            d="M200 240 Q220 230 230 220"
            className="stroke-[var(--muted-foreground)]"
            strokeWidth="1"
            fill="none"
          />
          <text
            x="235"
            y="215"
            className="fill-[var(--muted-foreground)] text-[10px] font-mono"
          >
            45°
          </text>

          {/* Label */}
          <text
            x="60"
            y="140"
            className="fill-[var(--muted-foreground)] text-[11px] font-mono uppercase tracking-wider"
          >
            Articulated
          </text>
          <text
            x="60"
            y="155"
            className="fill-[var(--muted-foreground)] text-[11px] font-mono uppercase tracking-wider"
          >
            Robot Arm
          </text>
          <text
            x="60"
            y="175"
            className="fill-amber-500 text-[10px] font-mono"
          >
            REV 3.0
          </text>
        </motion.g>

        {/* Corner brackets */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="stroke-[var(--muted-foreground)]"
          strokeWidth="1"
        >
          <path d="M30 30 L30 50 M30 30 L50 30" />
          <path d="M370 30 L370 50 M370 30 L350 30" />
          <path d="M30 370 L30 350 M30 370 L50 370" />
          <path d="M370 370 L370 350 M370 370 L350 370" />
        </motion.g>
      </svg>
    </div>
  )
}
