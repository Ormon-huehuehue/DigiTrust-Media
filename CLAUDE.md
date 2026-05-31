# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing website for **DigiTrust Media**, a Delhi-based influencer marketing agency. It's a Next.js 15 (App Router) + React 19 + TypeScript site styled with Tailwind v3. Almost entirely a composition of animated, scroll-driven section components — there is no backend or database; the only external integration is a Cal.com booking embed.

## Commands

`bun` is the package manager (`bun.lock` / `bun.lockb`), though the scripts are standard Next.js and work with npm too.

```bash
bun install            # install deps
bun run dev            # dev server at http://localhost:3000
bun run build          # production build (fails on TS or ESLint errors — see next.config.ts)
bun run start          # serve the production build
bun run lint           # next lint
ANALYZE=true bun run build   # build with @next/bundle-analyzer report
```

There is no test suite.

## Architecture

**Page composition.** Routes live in `src/app/` (`/`, `/about`, `/services`). Each page is mostly a top-to-bottom assembly of section components from `src/components/` (e.g. `page.tsx` stacks `Hero`, `BrandShowcase`, `WhatWeDo`, `WhyChooseUs`, `PortfolioGrid`, `CampaignProcess`, `Marquee`). To restructure a page, edit which sections it renders rather than editing the sections in place.

**Global shell (`src/app/layout.tsx`).** Wraps every page in `ThemeProvider` → `SmoothScroll` → (`RevealOnScroll`, `Header`, `main`, `Footer`). The contact/booking section (`BookMeeting`) and Vercel `Analytics` are injected here, so they appear on all routes — not in individual pages.

**Scroll system — two cooperating pieces, both critical to the site's feel:**
- `src/app/smooth-scroll.tsx` — Lenis smooth scrolling via `ReactLenis root`. Note `globals.css` sets `html { scroll-behavior: auto }` so Lenis owns scrolling.
- `src/app/reveal-on-scroll.tsx` — a client component that runs once per route (`usePathname`), finds every `[data-reveal]` / `.reveal` element, and adds the `in` class via `IntersectionObserver` when it enters the viewport (with a 1.5s failsafe). **To make a section animate in on scroll, add `data-reveal` to it** — the entrance transition itself is defined by `.reveal` / `.reveal.in` CSS in `globals.css`. New sections without this attribute will not animate.

**Booking.** `CalBooker.tsx` embeds Cal.com (`@calcom/embed-react`) pointing at `calLink="digitrustmedia/meeting"`, namespace `30min`. Wrapped by `BookMeeting.tsx`, which is mounted globally in the layout.

## Styling conventions

- **Tailwind config is `tailwind.config.js`** (not referenced from `components.json`, whose `tailwind.config` is left blank). Custom theme additions live here: the `blueish` (#e7ebf1) color, and the `haptik` and `anton` font families. Most semantic colors (`background`, `primary`, `muted`, etc.) are HSL CSS variables defined in `src/app/globals.css`.
- `globals.css` also holds custom component/utility classes (`.text-gradient`, `.apple-button`, `.bg-section-*`) and the self-hosted `gt-haptik` `@font-face`. `Inter` and `Anton` are loaded via `next/font`.
- UI primitives in `src/components/ui/` are **shadcn/ui** (new-york style, `@/components/ui` alias). `src/components/magicui/` holds animated-effect components. Import path alias is `@/*` → `src/*`.
- Animations use `framer-motion` / `motion`. Many components are `"use client"`.

## SEO

This site invests heavily in SEO — keep it intact when editing:
- Rich `metadata` exports in `layout.tsx` (defaults + template) and per-route `page.tsx` files (OpenGraph, Twitter, canonical, robots).
- JSON-LD `ProfessionalService` structured data injected in `layout.tsx`.
- `src/app/robots.ts` and `src/app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml`. **When adding a route, add it to the `routes` array in `sitemap.ts`.**
- Base URL comes from `NEXT_PUBLIC_SITE_URL` (falls back to `https://digitrustmedia.com`), used consistently across layout, robots, and sitemap.

## Build/lint gotchas

- Builds do **not** ignore errors — both `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` are `false` in `next.config.ts`, so type and lint errors break `bun run build`.
- ESLint (`eslint.config.mjs`) adds `eslint-plugin-unused-imports` (unused imports/vars are warnings, `^_`-prefixed names are exempt) and explicitly **ignores** a handful of files (`use-toast.ts`, `animated-grid-pattern.tsx`, `apple-cards-carousel.tsx`, `use-outside-click.tsx`, `infinite-moving-cards.tsx`).
