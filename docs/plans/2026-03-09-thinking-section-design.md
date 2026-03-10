# Thinking Section — Design Document

*9 March 2026*

## Goal

Add a "Thinking" section to the portfolio: 4 short-form essays (500–800 words) hosted on the site, showing how Tom thinks — not just what he's done. Minimalist aesthetic; let the writing do the work.

## Architecture

### Content layer

- MDX files stored in `content/thinking/` at the repo root
- Each file has YAML frontmatter: `title`, `date`, `description`, `slug`
- Parsed at build time using `gray-matter` + `next-mdx-remote`
- Fully static — no runtime dependency

### Routes

| Route | Purpose |
|---|---|
| `/thinking` | Listing page — all 4 essays, newest first |
| `/thinking/[slug]` | Individual essay page |

### Home page section

- New "Thinking" section placed between Experience and Contact
- Shows all 4 essays as a tight typographic list
- Each entry: title (amber link), one-line description (muted), date (mono)
- Section header: "Thinking" — no "See all" link needed since all are shown

## Visual Design

### Listing page (`/thinking`)

Clean vertical list. Each entry is:
- Title as link (font-headline, amber on hover)
- Date in mono, muted
- One-line description

No cards, no images, no boxes. Just typography with generous whitespace.

### Essay page (`/thinking/[slug]`)

- Narrow content column: `max-w-prose` (~65ch)
- Back link at top: "← Thinking" in mono/muted
- Title in font-headline, large
- Date below title in mono, muted
- Body text in Inter, `text-lg`, `leading-relaxed`
- Standard Markdown elements styled: h2, h3, blockquotes, code, lists
- No sidebar, no decorations

### Home page section

- Same Container as other sections
- "Thinking" heading matching existing section headings
- 4 entries listed vertically with consistent spacing
- Animate on scroll, matching existing site patterns

## Technical Decisions

- **next-mdx-remote** for MDX parsing (works with static export)
- **gray-matter** for frontmatter extraction
- **generateStaticParams** to build essay pages at build time
- MDX components map for consistent typography styling
- No pagination needed (only 4 posts)

## Candidate essay topics (from brief)

1. Why most manufacturing innovation dies between prototype and production
2. What running a 24/7 R&D factory at 25 actually looked like
3. The case for writing Python on the factory floor
4. Robotic construction: what's real and what's hype

## Out of scope

- CMS integration
- Comments / reactions
- RSS feed
- Search
- Tags / categories
