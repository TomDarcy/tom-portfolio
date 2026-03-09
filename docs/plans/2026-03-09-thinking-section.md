# Thinking Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a "Thinking" section with 4 MDX-powered essays, a listing page, individual essay pages, and a home page section.

**Architecture:** MDX files in `content/thinking/` parsed at build time with `gray-matter` + `next-mdx-remote`. Static pages generated via `generateStaticParams`. Minimalist typographic design — no cards, no images.

**Tech Stack:** next-mdx-remote, gray-matter, Next.js App Router dynamic routes, Tailwind CSS

---

### Task 1: Install MDX dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install packages**

Run: `npm install next-mdx-remote gray-matter`

**Step 2: Verify installation**

Run: `npm ls next-mdx-remote gray-matter`
Expected: Both packages listed without errors

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Add next-mdx-remote and gray-matter for MDX essay support"
```

---

### Task 2: Create MDX content files with placeholder essays

**Files:**
- Create: `content/thinking/why-manufacturing-innovation-dies.mdx`
- Create: `content/thinking/running-a-factory-at-25.mdx`
- Create: `content/thinking/python-on-the-factory-floor.mdx`
- Create: `content/thinking/robotic-construction-real-vs-hype.mdx`

**Step 1: Create content directory**

Run: `mkdir -p content/thinking`

**Step 2: Create first essay file**

Create `content/thinking/why-manufacturing-innovation-dies.mdx`:

```mdx
---
title: "Why Most Manufacturing Innovation Dies Between Prototype and Production"
date: "2026-03-01"
description: "The gap between 'it works in the lab' and 'it runs 24/7' is where most manufacturing innovation goes to die. Here's why."
slug: "why-manufacturing-innovation-dies"
---

This is placeholder content for the essay. Replace with the full essay.
```

**Step 3: Create remaining three essay files**

Create `content/thinking/running-a-factory-at-25.mdx`:

```mdx
---
title: "What Running a 24/7 R&D Factory at 25 Actually Looked Like"
date: "2026-02-15"
description: "The reality of leading a team of 50 engineers and technicians on the world's largest jet engine programme."
slug: "running-a-factory-at-25"
---

This is placeholder content for the essay. Replace with the full essay.
```

Create `content/thinking/python-on-the-factory-floor.mdx`:

```mdx
---
title: "The Case for Writing Python on the Factory Floor"
date: "2026-02-01"
description: "Why the most valuable skill in modern manufacturing isn't an engineering degree — it's knowing how to code."
slug: "python-on-the-factory-floor"
---

This is placeholder content for the essay. Replace with the full essay.
```

Create `content/thinking/robotic-construction-real-vs-hype.mdx`:

```mdx
---
title: "Robotic Construction: What's Real and What's Hype"
date: "2026-01-15"
description: "Separating signal from noise in the race to automate how we build."
slug: "robotic-construction-real-vs-hype"
---

This is placeholder content for the essay. Replace with the full essay.
```

**Step 4: Commit**

```bash
git add content/
git commit -m "Add placeholder MDX essay files for Thinking section"
```

---

### Task 3: Create MDX utility library

**Files:**
- Create: `src/lib/mdx.ts`

**Step 1: Create the MDX utility file**

Create `src/lib/mdx.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/thinking')

export type Essay = {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export type EssayMeta = Omit<Essay, 'content'>

export function getAllEssays(): EssayMeta[] {
  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.mdx'))

  const essays = files.map((filename) => {
    const filePath = path.join(contentDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })

  return essays.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getEssayBySlug(slug: string): Essay {
  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(contentDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    if (data.slug === slug) {
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      }
    }
  }

  throw new Error(`Essay not found: ${slug}`)
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors (or only pre-existing errors)

**Step 3: Commit**

```bash
git add src/lib/mdx.ts
git commit -m "Add MDX utility library for reading essay files"
```

---

### Task 4: Create the Thinking listing page

**Files:**
- Create: `src/app/thinking/page.tsx`

**Step 1: Create the listing page**

Create `src/app/thinking/page.tsx`:

```tsx
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { getAllEssays } from '@/lib/mdx'

export const metadata = {
  title: 'Thinking | Tom d\'Arcy',
  description: 'Essays on manufacturing, robotics, and the gap between prototype and production.',
}

export default function ThinkingPage() {
  const essays = getAllEssays()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="narrow">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Thinking
          </h1>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Essays on manufacturing, robotics, and the messy middle.
          </p>

          <div className="mt-12 space-y-10">
            {essays.map((essay) => (
              <article key={essay.slug}>
                <Link
                  href={`/thinking/${essay.slug}`}
                  className="group block"
                >
                  <h2 className="font-headline text-xl sm:text-2xl font-semibold text-[var(--foreground)] group-hover:text-amber-500 transition-colors">
                    {essay.title}
                  </h2>
                  <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">
                    {essay.description}
                  </p>
                  <span className="mt-2 block font-mono text-sm text-[var(--muted-foreground)]">
                    {new Date(essay.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
```

**Step 2: Verify it builds**

Run: `npm run build 2>&1 | tail -15`
Expected: `/thinking` appears in the route list, build succeeds

**Step 3: Commit**

```bash
git add src/app/thinking/page.tsx
git commit -m "Add Thinking listing page"
```

---

### Task 5: Create the individual essay page

**Files:**
- Create: `src/app/thinking/[slug]/page.tsx`

**Step 1: Create the dynamic essay page**

Create `src/app/thinking/[slug]/page.tsx`:

```tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { getAllEssays, getEssayBySlug } from '@/lib/mdx'

export function generateStaticParams() {
  const essays = getAllEssays()
  return essays.map((essay) => ({ slug: essay.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Note: Next.js 16 makes params a Promise in static generation
  // For metadata, we need to handle this synchronously with a workaround
  // We'll use a try/catch since getEssayBySlug is synchronous (fs reads)
  return params.then(({ slug }) => {
    try {
      const essay = getEssayBySlug(slug)
      return {
        title: `${essay.title} | Tom d'Arcy`,
        description: essay.description,
      }
    } catch {
      return {
        title: 'Not Found | Tom d\'Arcy',
      }
    }
  })
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let essay
  try {
    essay = getEssayBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <Container size="narrow">
          <Link
            href="/thinking"
            className="inline-flex items-center gap-1 font-mono text-sm text-[var(--muted-foreground)] hover:text-amber-500 transition-colors mb-8"
          >
            ← Thinking
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight">
                {essay.title}
              </h1>
              <span className="mt-4 block font-mono text-sm text-[var(--muted-foreground)]">
                {new Date(essay.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </header>

            <div className="prose-custom">
              <MDXRemote source={essay.content} />
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
```

**Step 2: Add prose-custom styles to globals.css**

Add to `src/app/globals.css` (at the end, before any closing brackets):

```css
/* Thinking essay typography */
.prose-custom {
  @apply text-lg leading-relaxed text-[var(--muted-foreground)];
}

.prose-custom p {
  @apply mb-6;
}

.prose-custom h2 {
  @apply font-headline text-2xl font-bold text-[var(--foreground)] mt-12 mb-4;
}

.prose-custom h3 {
  @apply font-headline text-xl font-semibold text-[var(--foreground)] mt-8 mb-3;
}

.prose-custom blockquote {
  @apply border-l-2 border-amber-500 pl-6 italic my-6;
}

.prose-custom ul {
  @apply list-disc pl-6 mb-6 space-y-2;
}

.prose-custom ol {
  @apply list-decimal pl-6 mb-6 space-y-2;
}

.prose-custom code {
  @apply font-mono text-base bg-[var(--muted)] px-1.5 py-0.5 rounded;
}

.prose-custom pre {
  @apply bg-[var(--muted)] rounded-lg p-4 mb-6 overflow-x-auto;
}

.prose-custom a {
  @apply text-amber-500 hover:text-amber-400 underline underline-offset-4 transition-colors;
}

.prose-custom strong {
  @apply text-[var(--foreground)] font-semibold;
}
```

**Step 3: Verify it builds**

Run: `npm run build 2>&1 | tail -15`
Expected: `/thinking/[slug]` routes appear, build succeeds

**Step 4: Commit**

```bash
git add src/app/thinking/ src/app/globals.css
git commit -m "Add individual essay pages with MDX rendering and prose styles"
```

---

### Task 6: Add Thinking section to home page

**Files:**
- Create: `src/components/sections/ThinkingSection.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create the ThinkingSection component**

Create `src/components/sections/ThinkingSection.tsx`:

```tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

type EssayMeta = {
  slug: string
  title: string
  date: string
  description: string
}

export function ThinkingSection({ essays }: { essays: EssayMeta[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="thinking" className="py-24 bg-[var(--background)]" ref={sectionRef}>
      <Container>
        <div className="max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Thinking
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {essays.map((essay, index) => (
              <article
                key={essay.slug}
                className="animate-on-scroll"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Link
                  href={`/thinking/${essay.slug}`}
                  className="group block"
                >
                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-[var(--foreground)] group-hover:text-amber-500 transition-colors">
                    {essay.title}
                  </h3>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    {essay.description}
                  </p>
                  <span className="mt-1 block font-mono text-sm text-[var(--muted-foreground)]">
                    {new Date(essay.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
```

**Step 2: Modify the home page to include the section**

Modify `src/app/page.tsx` to import and render ThinkingSection between ExperienceSection and ContactSection. The home page is a server component, so it can call `getAllEssays()` directly and pass the data as props:

```tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSplitParallax } from '@/components/sections/HeroSplitParallax'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ThinkingSection } from '@/components/sections/ThinkingSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { getAllEssays } from '@/lib/mdx'

export default function Home() {
  const essays = getAllEssays()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSplitParallax />
        <AboutSection />
        <ExperienceSection />
        <ThinkingSection essays={essays} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
```

**Step 3: Verify it builds**

Run: `npm run build 2>&1 | tail -15`
Expected: Build succeeds, all routes listed

**Step 4: Commit**

```bash
git add src/components/sections/ThinkingSection.tsx src/app/page.tsx
git commit -m "Add Thinking section to home page with all essays listed"
```

---

### Task 7: Add Thinking to header navigation

**Files:**
- Modify: `src/components/layout/Header.tsx:7-11`

**Step 1: Add Thinking link to navigation array**

In `src/components/layout/Header.tsx`, update the `navigation` array:

```typescript
const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Thinking", href: "#thinking" },
  { name: "Contact", href: "#contact" },
];
```

**Step 2: Verify it builds**

Run: `npm run build 2>&1 | tail -15`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "Add Thinking to header navigation"
```

---

### Task 8: Visual verification and final build

**Step 1: Run production build**

Run: `npm run build`
Expected: All routes build successfully:
- `/`
- `/thinking`
- `/thinking/why-manufacturing-innovation-dies`
- `/thinking/running-a-factory-at-25`
- `/thinking/python-on-the-factory-floor`
- `/thinking/robotic-construction-real-vs-hype`

**Step 2: Run dev server and visually verify**

Run: `npm run dev`

Check:
- Home page: Thinking section appears between Experience and Contact
- `/thinking`: All 4 essays listed, newest first
- `/thinking/why-manufacturing-innovation-dies`: Essay renders with back link, title, date, body
- Navigation: "Thinking" link scrolls to section on home page
- Dark and light mode: Both work across all new pages

**Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "Fix any visual issues from verification"
```
