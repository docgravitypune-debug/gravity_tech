# Axion Studio

A design agency landing page built with React, Vite, Tailwind CSS, and animated WebGPU shaders.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS 3.4
- [`shaders`](https://www.npmjs.com/package/shaders) — hero background effects
- [`lucide-react`](https://lucide.dev/) — icons

## Project Structure

```
src/
├── app/              # App shell
├── pages/            # Route-level pages
├── components/
│   ├── layout/       # Navbar, mobile menu
│   ├── sections/     # Hero, About, Case Studies
│   ├── ui/           # Reusable UI primitives
│   └── icons/        # Custom SVG icons
├── hooks/            # Shared hooks (e.g. London clock)
└── constants/        # Content & asset URLs
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
