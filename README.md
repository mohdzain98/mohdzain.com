# Mohd Zain Portfolio

Personal portfolio website showcasing professional work, projects, research, and blog posts.

## Sections
- Home: About, experience, skills, projects, and social links
- Projects: selected work with details and links
- Research/Blogs: articles and thesis highlights
- Vitae: CV and background
- GitHub Repositories: additional work and experiments

## Live
- https://mohdzain.com

## Highlights
- Live projects: Docschat, Curlmin
- Chrome extensions: SurfMind, LexiClick
- Python Package: GNOST

## Tech stack
React 18 · TypeScript · Vite · Tailwind CSS v4 · shadcn/ui · lucide-react · React Router · GSAP

## Development
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint
npm test           # vitest
```

## Build and deploy
nginx serves the **committed** `build/` folder directly, so nothing is built on the server.

```bash
npm run build      # sitemap -> typecheck -> vite build (outputs to build/)
git add build && git commit
git push origin main   # GitHub Action runs `git pull` on the server
```

nginx needs the SPA fallback: `try_files $uri $uri/ /index.html;`

## Project layout
```
src/
  components/   ui (shadcn), layout (navbar, footer...), common, icons, theme
  features/     home, blogs, projects, experience, industry, achievements, errors
  content/      typed data (projects, experience)
  config/       navigation config
  assets/       images (WebP) and PDFs
  lib/ hooks/ types/ styles/ test/
scripts/        sitemap.mjs, optimize-images.mjs
```

## Notes
- Dark mode: `next-themes` with the `dark` class on `<html>`; tokens live in `src/styles/globals.css`.
- Icons: add a slug to `ICONS` in `src/components/icons/Icon.tsx`, then use `<Icon name="slug" />`.
- New raster images: run `node scripts/optimize-images.mjs` to convert them to WebP.
