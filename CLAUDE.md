# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A wedding website for guests, built on Nuxt 4. It needs:

- Password-gated access, but reachable without a password via a direct QR code link (i.e. the QR link must bypass/embed the auth check).
- Sections: **Our Story**, **Q&A**, **Travel** (hotel block info), **RSVP**, **Photo Gallery**.
- Visual theme: literary/books aesthetic, monochromatic red colorscheme spanning dusty pink to burgundy.

The codebase is currently a freshly scaffolded Nuxt 4 + Tailwind v4 app (no pages, components, or auth logic yet) — expect to be building most of this from scratch rather than modifying existing patterns.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server at http://localhost:3000
pnpm build         # production build
pnpm generate      # static site generation
pnpm preview       # preview a production build locally
```

There is no lint or test tooling configured yet.

## Architecture

- **Nuxt 4** with the default `app/` source directory layout (`app/app.vue` is the root component). New pages, components, layouts, etc. should go under `app/` (e.g. `app/pages/`, `app/components/`), not the repo root.
- **Tailwind CSS v4** is wired in via the `@tailwindcss/vite` plugin in `nuxt.config.ts`, not the traditional `@nuxtjs/tailwindcss` module or a `tailwind.config.js`. Global styles/theme (including the red color scale once defined) belong in `app/assets/css/main.css`, using Tailwind v4's CSS-based `@theme` configuration rather than a JS config file.
- No routing, content, or auth modules are installed yet. When adding page-level password protection, decide between a Nuxt middleware (`app/middleware/`) checking a session/cookie vs. a simple client-side gate — and ensure the QR-code entry path is exempted from whatever gate is chosen.
