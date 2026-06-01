# Vedant Agrawal — Personal Website

A highly personal, story-driven website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Dark, premium, warm aesthetic.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Framer Motion
- **Content**: MDX-ready (for Ideas Lab / blog posts)
- **Deployment**: Vercel

---

## Getting Started

### 1. Clone / download the project

```bash
cd vedant-site
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, animations, global styles
│   ├── layout.tsx           # Root layout with metadata, Nav, Footer
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Nav.tsx          # Fixed navigation with mobile menu
│   │   └── Footer.tsx       # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx  # Full-screen hero with animated orb
│   │   ├── IntroSection.tsx # Who am I + trait grid
│   │   ├── StorySection.tsx # 6 expandable chapters
│   │   ├── InterestsSection.tsx  # Interactive interest pills
│   │   ├── SportsSection.tsx     # Sports grid + lesson cards
│   │   ├── NowSection.tsx        # What I'm doing now
│   │   ├── IdeasSection.tsx      # Ideas lab list
│   │   ├── ExploreSection.tsx    # Cooking / travel / gaming
│   │   └── ContactSection.tsx    # Contact CTA
│   └── ui/
│       ├── Divider.tsx      # Divider + FadeIn + SectionLabel + SectionTitle
│       └── CursorGlow.tsx   # Subtle cursor tracking glow effect
```

---

## Customisation

### Update contact links
In `ContactSection.tsx`, replace the placeholder URLs and email:
```tsx
href="mailto:your@email.com"
href="https://twitter.com/yourhandle"
href="https://linkedin.com/in/yourprofile"
href="https://read.cv/yourname"
```

### Add the Ideas Lab as a blog
Create `src/app/ideas/` with MDX pages:
```
src/app/ideas/
├── page.tsx          # List page
└── [slug]/
    └── page.tsx      # Individual idea post
```

### Add new sections
1. Create a component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add a nav link in `Nav.tsx`

### Change the "Now" content
Edit the `nowItems` array in `NowSection.tsx` — update it regularly to keep the site fresh.

---

## Deployment on Vercel

### One-click deploy (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repository
4. Vercel auto-detects Next.js — click Deploy

### CLI deploy

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Environment variables

No environment variables required for the base site.

If you add a contact form (e.g. Resend, Formspree), add:
```
RESEND_API_KEY=your_key_here
```

---

## SEO

Metadata is configured in `src/app/layout.tsx`. Update:
- `title`
- `description`
- `keywords`
- `openGraph.url` (once you have your domain)

Add your domain to `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  // ...
}
```

---

## Adding MDX Blog (Ideas Lab)

Install if needed:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

Already configured in `next.config.ts`. Create MDX files:
```mdx
---
title: "Why does India export talent but not capital?"
date: "2025-05-01"
tag: "Economics"
type: "Question"
---

Your thoughts here...
```

---

## Performance Notes

- All animations use `will-change: transform` via Framer Motion (automatic)
- Images: use `next/image` for any photos you add
- Fonts: loaded via Google Fonts with `display=swap`
- The cursor glow uses `requestAnimationFrame` implicitly via event listeners

---

## License

Personal use — Vedant Agrawal
