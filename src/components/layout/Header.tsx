"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/60 backdrop-blur-md border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="font-headline text-xl font-bold text-white hover:text-amber-500 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
          >
            TD
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-amber-500 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu - CSS transition */}
      <div
        className={`
          md:hidden border-t border-white/10 bg-charcoal-950/95 backdrop-blur-md
          overflow-hidden transition-all duration-200 ease-out
          ${mobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <Container>
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-300 hover:text-amber-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
