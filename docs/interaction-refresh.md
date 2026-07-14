# Portfolio interaction refresh

## Technical boundary

- Keep the existing Vite 5, React 18, TypeScript, native CSS and lightweight hash router.
- Do not add animation libraries, remote fonts, remote images or runtime APIs.
- Keep `src/data/portfolio.ts` as the content source and preserve all case-study routes.

## Direction

- The homepage opens with one concise Chinese identity statement, then moves directly into selected work.
- The diffusion-gradient visual language remains, but gradients behave as quiet spatial accents rather than full-page decoration.
- Project browsing receives the strongest interaction detail: image scale, text shift, reveal label and press feedback.
- Page changes use the View Transitions API when supported and fall back to the existing hash navigation.
- A thin scroll progress indicator provides orientation without hijacking scrolling.

## Motion rules

- Micro interactions: 180–320 ms.
- Section reveal: 420–520 ms, using only opacity and transform.
- Page transition: old page exits faster than the new page enters.
- No loading screen, scroll hijacking, mouse-following cursor or layout-changing animation.
- `prefers-reduced-motion` disables ambient, entrance and page-transition motion while leaving every control immediately usable.

## Responsive and accessibility rules

- Validate at 1440, 1024, 768 and 390 px.
- Maintain one `h1` per route, visible focus states and 44 px minimum interactive targets.
- Mobile uses a static project call-to-action instead of hover-only feedback.
- Images retain declared aspect ratios to avoid layout shift.
