# Tom d'Arcy Portfolio Website - Implementation Plan

## Overview

Build a personal portfolio website with an "industrial-technical with warmth" aesthetic. Fresh build using Next.js 14, Tailwind CSS 4, and Framer Motion. Deployed to GitHub Pages as static site.

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Build approach | Fresh build | New design direction differs substantially from previous template |
| Color accent | Warm orange/amber (#f59e0b) | Connects to robotics/factory aesthetics, provides warmth |
| Hero animation | Blueprint reveal | Sophisticated, achievable complexity, avoids "gimmicky" risk |
| MVP pages | 4 pages | Home, About, Experience, Contact |

## Tech Stack

- **Framework**: Next.js 16 with static export
- **Styling**: Tailwind CSS 4 with custom theme
- **Animation**: Framer Motion
- **Dark mode**: next-themes
- **Fonts**: Space Grotesk (headlines), Inter (body), JetBrains Mono (code)
- **Deployment**: GitHub Pages

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Charcoal 900 | #0f0f14 | Dark mode background |
| Charcoal 800 | #1a1a24 | Cards, elevated surfaces |
| Charcoal 700 | #252532 | Borders, dividers |
| Amber 600 | #d97706 | Primary accent, CTAs |
| Amber 500 | #f59e0b | Hover states, highlights |
| White | #ffffff | Text, light mode base |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers, fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom CSS
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                 # Button, Card, Container
│   ├── layout/             # Header, Footer, Navigation
│   ├── home/               # Hero, BlueprintAnimation, CredentialsStrip
│   ├── experience/         # Timeline, Station, CaseStudyCard
│   └── shared/             # ThemeToggle, GridOverlay, SocialLinks
└── lib/
    ├── utils.ts
    └── constants.ts        # Site content, experience data
```

## Implementation Phases

### Phase 1: Foundation

- Initialize Next.js 16 project with TypeScript
- Configure static export for GitHub Pages
- Install dependencies (framer-motion, next-themes, clsx, @headlessui/react)
- Configure Tailwind CSS 4 with custom colors and fonts
- Set up font loading (Google Fonts via next/font)
- Move/organize image assets to public directory

### Phase 2: Design System & Layout

- **Container** - Max-width wrapper with responsive padding
- **Button** - Primary (amber), secondary, ghost variants with mechanical hover
- **Card** - Industrial styling with hover effects
- **Header** - Logo, nav, mobile menu, theme toggle (industrial switch)
- **Footer** - Social links, minimal
- **ThemeToggle** - Industrial power switch styling
- **GridOverlay** - Subtle technical grid pattern

### Phase 3: MVP Pages

#### Home Page

- Hero section with headline: "I make robots work for a living."
- Subhead: "Operations leader turning manufacturing technology into factories that actually run."
- Stats: 14 sites · 12 countries · £M P&L
- **BlueprintAnimation**: SVG line-drawing animation using Framer Motion pathLength
- **CredentialsStrip**: Rolls-Royce, Edwards, BCG, AUAR logos + awards
- CTAs: "See the work →" and "Get in touch →"

#### About Page

- Headline: "Taking manufacturing tech from pilot to scale"
- Career narrative (~150 words)
- Quick Facts table (location, nationality, current role, background)
- Credentials (awards, education, certifications)
- Portrait image

#### Experience Page (Factory Floor Timeline)

7 career "stations" with horizontal scroll (desktop) / vertical stack (mobile):

- AUAR Ltd - Head of Robotics & Deployments (2025-Present)
- FactoryPulse Digital - Founder (2025)
- BCG - Consultant, Operations Practice (2024-2025)
- Edwards Vacuum - Senior Manager, Industry 4.0 (2023-2024)
- Rolls-Royce - Innovation & DemoWorks Lead (2020-2022)
- Rolls-Royce - Production Lead (2019-2020)
- Rolls-Royce - Operations Leadership Programme (2014-2019)

Each station: logo, title, dates, 2-3 impact bullets, entry animation

#### Contact Page

- LinkedIn prominent (primary CTA) <https://www.linkedin.com/in/thomasdarcyuk/>
- Email address <mailto:thomasdarcy@outlook.com>
- "What I'm open to": Advisory, Speaking, Collaboration <mailto:thomasdarcy@outlook.com>

### Phase 4: Polish & Deploy

- Responsive refinement (mobile nav, touch-friendly, timeline mobile)
- Micro-interactions (button hover, card lift, link animations)
- Image optimization (compress Main.jpg from 34MB, WebP format)
- SEO & meta (descriptions, Open Graph, Twitter Cards)
- Performance audit (Lighthouse)
- GitHub Actions workflow for deployment

### Phase 5: Future Enhancements (Post-MVP)

- Writing/Articles section with MDX
- Enhanced animations (robotic arm cursor follower)
- Dedicated case study pages
- Easter eggs (Konami code debug mode)

## Critical Files

| File | Purpose |
|------|---------|
| content.md | Full content copy for all pages |
| design-brief.md | Design requirements and specifications |
| images/logos/*.svg | Company logos for credentials and timeline |
| images/photos/UF.webp | UltraFan case study image |
| images/portrait.jpg | Portrait for about page |

## Verification Plan

- **Build**: npm run build completes without errors
- **Visual**: Each page matches design brief aesthetic
- **Responsive**: Test on mobile (375px), tablet (768px), desktop (1280px+)
- **Dark mode**: Toggle works, all colors correct in both modes
- **Animations**: Blueprint reveal plays smoothly, timeline stations animate on scroll
- **Performance**: Lighthouse score >90 for performance
- **Deploy**: Site accessible on GitHub Pages URL

## Success Criteria (from design brief)

- Someone understands Tom's unique positioning within 10 seconds
- It feels distinctly personal, not a template
- It invites conversation and connection
- Tom is proud to share it
