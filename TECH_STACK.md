# Technical Stack & Architecture

## Stack

- Vite 5 + React 18 + TypeScript
- Lightweight Hash router (local fallback after `react-router-dom` installation was unavailable)
- Native CSS with custom properties for the design system
- CSS/SVG interface mockups and data charts; no remote images, fonts, APIs, or UI libraries

## Architecture

- `src/data/portfolio.ts`: single source of truth for profile, navigation, projects, research placeholders, case-study copy, and contact fields.
- `src/components/`: shared layout, editorial sections, product mockups, diagrams, charts, and cards.
- `src/pages/`: route-level pages.
- `src/styles/`: tokens and global responsive rules.

## Quality rules

- Semantic landmarks and one `h1` per route.
- 44px minimum interactive targets, visible focus state, keyboard-operable menu.
- `prefers-reduced-motion` support.
- Breakpoints validated at 390, 768, 1024, and 1440 widths.
- Placeholder research data is always visibly labelled and must not be used as real evidence.
