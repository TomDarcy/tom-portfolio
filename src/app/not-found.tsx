"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Robot emoji with animation */}
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="text-8xl mb-8"
          >
            🤖
          </motion.div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
            This production line doesn't exist.
          </h1>

          <p className="text-lg text-[var(--muted-foreground)] mb-8">
            The robots looked, but couldn't find it.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button href="/" variant="primary" size="lg">
              Back to the factory
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H3"
                />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
