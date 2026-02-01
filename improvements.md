# Website Enhancement Brief: tomdarcy.me

## Overview

Transform the current solid foundation into a distinctive, memorable site with robotics/AI energy and personality. Focus on visual dynamism, micro-interactions, and moments of delight.

---

## 1. Hero Section: Particle Animation

### Concept

Add a particle system background that creates visual energy and reinforces the "chaos → order" narrative of your work. Particles drift randomly, then periodically coalesce into structured formations.

### Specification

**Behaviour:**
- On page load: particles drift in random Brownian motion
- After 2-3 seconds: particles snap into a geometric formation (hexagonal grid, your "TD" initials, or abstract factory schematic)
- On scroll: formation gently disperses
- Subtle parallax effect—particles move slightly slower than scroll

**Visual style:**
- Particle colour: your accent colour at ~40% opacity (electric blue or amber)
- Particle size: 2-4px, slight variation
- Connection lines between nearby particles (like a network/mesh)—very subtle, 10-15% opacity
- Dark background to make particles pop

**Technical approach:**
- tsParticles (lighter weight than Three.js, good React/vanilla support)
- Alternatively: particles.js or custom canvas implementation
- Ensure it doesn't tank mobile performance—reduce particle count on smaller screens

**Interaction layer:**
- Particles gently repel from cursor (subtle, not dramatic)
- Creates sense that the site responds to you

### Content adjustment

Consider adding animated stat counters that tick up when hero scrolls into view:

```
14 sites · 12 countries · ~50 person teams
```

Numbers count from 0 to final value over ~1.5 seconds.

---

## 2. Experience Section: Alternating Layout with Role Images

### Concept

Transform the vertical card stack into an alternating left-right layout. Each role gets a supporting image on the opposite side—creating visual rhythm and a richer narrative.

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [AUAR IMAGE]                    ┌──────────────────┐      │
│   Robot cell / timber panel       │ Head of Robotics │      │
│   assembly / micro-factory        │ AUAR · 2025–     │      │
│                                   │ Description...   │      │
│                                   └──────────────────┘      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────────┐              [BCG IMAGE]             │
│   │ Consultant       │              Strategy session /      │
│   │ BCG · 2024–25    │              pharma facility /       │
│   │ Description...   │              consulting aesthetic    │
│   └──────────────────┘                                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [EDWARDS IMAGE]                 ┌──────────────────┐      │
│   Global factory / digital        │ Senior Manager   │      │
│   dashboard / I4.0 aesthetic      │ Edwards · 2023–24│      │
│                                   │ Description...   │      │
│                                   └──────────────────┘      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────────┐              [ULTRAFAN IMAGE]        │
│   │ DemoWorks Lead   │              Engine assembly /       │
│   │ RR · 2020–22     │              factory floor /         │
│   │ Description...   │              the UltraFan itself     │
│   └──────────────────┘                                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [EARLY CAREER IMAGE]            ┌──────────────────┐      │
│   Young Tom on factory floor /    │ OLP → Prod Lead  │      │
│   apprenticeship era              │ RR · 2014–20     │      │
│                                   │ Description...   │      │
│                                   └──────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Image Specifications

| Role | Image suggestion | Fallback if no photo |
|------|------------------|----------------------|
| AUAR | Robot cell in action, timber panels, micro-factory exterior | Stylised illustration of robotic arm |
| BCG | Professional strategy setting, or pharma/cleanroom if you have it | Abstract geometric pattern in BCG green |
| Edwards | Global facility shot, digital dashboard, semiconductor fab | World map with 14 dots, I4.0 iconography |
| Rolls-Royce (DemoWorks) | UltraFan engine, assembly hall, you with the engine | The famous UltraFan press photo |
| Rolls-Royce (Early) | Apprenticeship-era shot, early factory floor work | Subtle blueprint/schematic background |

### Visual Treatment

**Image styling:**
- Consistent aspect ratio (3:2 or 16:9)
- Subtle duotone or colour overlay matching your palette—ties them together even if source images vary
- Slight rounded corners (8px)
- Soft shadow to lift off page

**Card styling:**
- Company logo small above title
- Clear typographic hierarchy: Role → Company → Date → Description
- Accent colour left border or top border

**Animation:**
- Cards and images fade/slide in on scroll (images from their side, cards from opposite)
- Staggered timing—image first, then card
- Use Intersection Observer for performance

### Mobile Adaptation

Stack vertically: image on top, card below. Maintain alternating accent colour or border to preserve rhythm.

---

## 3. Micro-Interactions & Polish

### Navigation

| Element | Interaction |
|---------|-------------|
| Nav links | Underline slides in from left on hover |
| Logo "TD" | Subtle glow or colour shift on hover |
| Mobile menu | Smooth slide-in from right |

### Buttons

| State | Treatment |
|-------|-----------|
| Default | Solid fill (primary) or outlined (secondary) |
| Hover | Slight scale (1.02), shadow lift, colour brighten |
| Active | Scale down (0.98), darker shade |
| Focus | Visible ring for accessibility |

### Cards (Experience Section)

| State | Treatment |
|-------|-----------|
| Default | Subtle background, clean border |
| Hover | Lift (translateY -4px), shadow deepen, accent border intensifies |
| Scroll-in | Fade up with slight Y translation (20px → 0) |

### Scroll Behaviour

- Smooth scroll for all anchor links
- Subtle parallax on hero image/particles (optional—can hurt performance)
- Section headers fade in on scroll

### Credentials Strip

- Items fade/slide in sequentially with 100ms stagger
- Subtle hover: scale up slightly, accent colour glow

### Contact Section

- "Open to" tags: style as chips with subtle hover glow
- LinkedIn button: primary style (solid)
- Email button: secondary style (outlined)
- Hover on both: icon animates (arrow slides, envelope opens)

---

## 4. "Currently Building" Live Status

### Concept

A small, persistent element showing what you're actively working on. Injects personality and makes the site feel alive.

### Placement Options

**Option A: Hero section**
Below your headline/subhead:

```
🔴 Currently: Optimising robotic cycle times at AUAR
```

**Option B: Floating badge**
Fixed position, bottom-left or top-right:

```
┌─────────────────────────────────────┐
│ 🟢 Live: Deploying micro-factories  │
│    across Europe & North America    │
└─────────────────────────────────────┘
```

**Option C: Nav bar**
Small text right-aligned in navigation:

```
TD        About  Work  Contact    🔴 Building: V3 deployment
```

### Specification

**Visual:**
- Pulsing dot (CSS animation, 2s loop)
- Small text (12-14px), monospace or your body font
- Muted colour—shouldn't compete with main content

**Content:**
- Update monthly or when something notable happens
- Keep it genuine and specific, not marketing-speak
- Examples:
  - "🔴 Currently: Commissioning a micro-factory in [city]"
  - "🟢 Live: V3 robotic cell running in production"
  - "🔧 Building: Next-gen gripper system for timber handling"

**Technical:**
- Hardcode initially—no need for a CMS
- Could later pull from a simple JSON file or Notion API if you want easy updates

### Recommendation

Go with **Option A** (in hero)—it's the most visible and contextually relevant. Keeps the rest of the UI clean.

---


The blinking cursor (▌) is a small wink—like a terminal waiting for the next command.

### 404 Page

If someone hits a dead link:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                         🤖                                  │
│                                                             │
│              This production line doesn't exist.            │
│                                                             │
│         The robots looked, but couldn't find it.            │
│                                                             │
│                  [ Back to the factory → ]                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Loading State (if needed)

If particles take a moment to initialise:

```
[ Initialising systems... ]
```

With a progress bar styled as a factory loading sequence.

### Dark Mode (Stretch)

Toggle styled as an industrial switch or breaker:

```
[OFF ○━━━━● ON]
```

Flips between light and dark themes. Dark is likely your default given the particle aesthetic.

---

## 6. Image Asset Checklist

You'll need to source or create:

| Asset | Purpose | Spec |
|-------|---------|------|
| Hero photo | Current—keep if it's good | Compress to <200kb |
| AUAR role image | Experience section | 800×533px (3:2), <150kb |
| BCG role image | Experience section | 800×533px (3:2), <150kb |
| Edwards role image | Experience section | 800×533px (3:2), <150kb |
| Rolls-Royce (DemoWorks) image | Experience section | 800×533px (3:2), <150kb |
| Rolls-Royce (Early career) image | Experience section | 800×533px (3:2), <150kb |
| OG share image | Social previews | 1200×630px |
| Favicon | Browser tab | 32×32 + 180×180 (Apple touch) |

**If you don't have photos for all roles:**
- Use press images (UltraFan is well-documented)
- Create abstract/geometric placeholders with brand colours
- Use subtle iconography or illustrations

---

## 7. Technical Implementation Notes

### Recommended Stack

Assuming you're on a static site (GitHub Pages):

| Need | Recommendation |
|------|----------------|
| Particles | tsParticles or vanilla canvas |
| Animations | CSS transitions + Intersection Observer (no library needed) |
| Scroll effects | Native CSS `scroll-behavior: smooth` + IO |
| Build | Keep it simple—vanilla HTML/CSS/JS or Astro if you want components |

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | >90 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Total page weight | <1MB |

### Particle Performance

- Desktop: 80-120 particles
- Tablet: 50-70 particles
- Mobile: 30-40 particles (or disable entirely)
- Use `requestAnimationFrame`, not `setInterval`
- Pause animation when tab not visible

---


## Summary

The brief delivers four main enhancements:

1. **Particle hero** — Sets the robotics/AI tone immediately
2. **Alternating experience layout with images** — Creates visual narrative and breaks monotony
3. **Micro-interactions throughout** — Makes the site feel alive and responsive
4. **"Currently building" status** — Injects personality and shows the site is active

End state: A site that's distinctly *you*—technical credibility with personality, professional but not boring, memorable enough that people mention it after meeting you.

---

NEw hero copy: Making things that make things.
