# CLAUDE.md

Personal portfolio and blog for mohdzain.com. React 18 + TypeScript + Vite + Tailwind v4 + shadcn/ui.

## Commands
```bash
npm run dev        # Vite dev server on :3000
npm run typecheck  # tsc --noEmit (strict)
npm run lint       # eslint
npm test           # vitest (jsdom)
npm run build      # sitemap -> typecheck -> vite build -> build/
npm run preview    # serve build/ on :4173
```
Before finishing a change: typecheck, lint, test, then build.

## Deploy (important)
- nginx serves the **committed** `build/` folder. Nothing is built on the server.
- After changing app code, run `npm run build` and commit `build/` (preferably as a separate `build:` commit).
- GitHub Action on push to `main` only runs `git pull` on the server.
- SPA fallback is required in nginx: `try_files $uri $uri/ /index.html;`

## Layout
```
src/components/   ui (shadcn), layout (navbar/footer/...), common, icons, theme
src/features/     home, blogs, projects, experience, industry, achievements, errors
src/content/      typed data (projects, experience)
src/config/       nav config
src/assets/       images (WebP) and PDFs
src/lib hooks types styles test
scripts/          sitemap.mjs, optimize-images.mjs
```
Use the `@/` alias for imports (`@/components/...`), not long relative paths.

## Conventions
- TypeScript only; plain JS is kept just for `scripts/*.mjs`. No `any`.
- Styling is Tailwind utilities with theme tokens (`bg-card`, `text-muted-foreground`, `border`...). Never hard-code colors; use tokens from `src/styles/globals.css` so dark mode works.
- Dark mode: `next-themes`, `dark` class on `<html>`. Check both themes when changing UI.
- Icons: lucide-react, or the `Icon` registry in `src/components/icons/Icon.tsx` (`<Icon name="slug" />`). Brand logos come from `simple-icons`. A test checks every icon slug in data exists.
- Cards: no shadow, small radius (`rounded-lg`). Buttons and links need a pointer cursor.
- New images: convert with `node scripts/optimize-images.mjs` (WebP).
- Blog posts register in `src/features/blogs/blogRegistry.ts`; routes are lazy-loaded in `src/App.tsx`. Add new routes to `scripts/sitemap.mjs` too.

## Gotchas (learned the hard way)
- **React 18, not 19.** shadcn components are generated for React 19. Any component used as a Radix `asChild` target needs `React.forwardRef` (see `ui/button.tsx`), otherwise dropdowns render off-screen.
- Unlayered CSS beats Tailwind utilities. Keep global rules inside `@layer base`; the hero/career CSS files are unlayered, so scope their selectors.
- `grid-cols-12` with a large gap overflows on mobile. Use `grid-cols-1 md:grid-cols-12` for big gaps.
- Tailwind's reset makes `img` and `svg` block-level; `Icon` sets `inline-block` itself.
- Long unbroken text in flex children needs `min-w-0`.
- Verify UI changes in a real browser (mobile 390px and desktop 1440px, light and dark), not just typecheck.

## Using `.cache/` (gitignored)
Save useful generated or reusable material in `.cache/` instead of `/tmp`, so it survives and the user can open it later:
- theme demos and comparison screenshots (`.cache/themes/`, with an `index.html` gallery)
- one-off scripts (screenshot/check scripts), generated reports, audits, notes
- anything the user may want to look at again but that must not be committed

Put a short `README.md` or `index.html` in each subfolder explaining what it is. Never put secrets there. Do not commit `.cache/`.
