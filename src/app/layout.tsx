import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  preload: true,
  weight: ['700'], // Only load bold weight for headlines
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false, // Don't preload mono font - it's less critical
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Tom d\'Arcy | Operations Leader & Robotics Builder',
  description: 'Operations leader turning bleeding-edge manufacturing technology into factories that actually run. Currently building robotic construction systems at AUAR.',
  keywords: ['operations', 'manufacturing', 'robotics', 'Industry 4.0', 'automation', 'Rolls-Royce', 'AUAR'],
  authors: [{ name: 'Tom d\'Arcy' }],
  openGraph: {
    title: 'Tom d\'Arcy | Operations Leader & Robotics Builder',
    description: 'From prototype to scale. Taking manufacturing technology that works in the lab and making it run 24/7 across continents.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tom d\'Arcy | Operations Leader & Robotics Builder',
    description: 'From prototype to scale. Taking manufacturing technology that works in the lab and making it run 24/7 across continents.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Preload hero image for better LCP */}
        <link
          rel="preload"
          href="/Main.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
