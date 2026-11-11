> **Status (all phases executed on `dev`, not yet committed):** answers applied -- PDFs left as-is, unused bar components removed, drawer mirrors the navbar links, gsap/lottie dependencies kept.
> Deviations from the plan: long-form blog/project pages were converted to typed TSX (not MDX); small bespoke CSS (hero, career path, blog index) was kept and moved to design tokens for dark mode; `next-themes` was used instead of a custom provider.

# mohdzain.com — Modernization Plan

Branch: work on `dev`, merge to `main` only at the end of Phase 9 (main auto-deploys).

## Goals
1. CRA → Vite, still **committing `build/`** (nginx serves static files; no build/RAM use on server).
2. Content moved out of JSX into typed data / MDX.
3. Optimized assets + restructured folders.
4. **Full TypeScript migration** (JS kept only where it fits better, e.g. `sitemap.js`).
5. Mobile nav becomes a **left drawer** (per the Docschat reference: brand + close, primary CTA row, divider, link list).
6. Bootstrap → Tailwind + shadcn/ui.
7. FontAwesome → lucide-react.
8. Refreshed UI (cards `shadow-sm`, consistent components).
9. Dark mode via Tailwind.

## Current state (facts found)
- CRA 5, React 18, Router 6, ~140 files in `src/`, ~8.9k LOC, all `.js`.
- Bootstrap 5.1.3 + FontAwesome kit loaded from CDN in `public/index.html` (lines ~107, 113, 140). Navbar relies on `data-bs-*` and `window.bootstrap`.
- ~144 `fa-solid` and ~39 `fa-brands` icon usages (github, whatsapp, x-twitter, python, etc.).
- ~1.3k lines of hand-written CSS (`App.css`, `index.css`, `pages/home/Styling/*`, per-component CSS).
- `build/` is 39 MB and tracked. Deploy workflow does `git pull` + `npm install --only=prod` on the server (unneeded once the build is static).
- Assets in `src/Assets`: DDBCICST.pdf 20 MB, DDBCICSRP.pdf 6 MB, ~11 MB images.

## Decisions / risks to keep in mind
- **Brand icons:** lucide-react has *removed* brand logos (GitHub, WhatsApp, X, Python...). Plan: lucide for all generic icons; brand icons via `simple-icons` (or small inline SVGs in `components/icons/Brands.tsx`). Do not add `react-icons` just for ~6 logos.
- **Committed build:** Vite `build.outDir = "build"` so nginx root and `.gitignore` stay unchanged. Commit `build/` only from the `main` release commit to keep history from bloating (or squash-release). Hashed filenames mean old chunks must be removed each build (`emptyOutDir: true`).
- **SPA routing on nginx:** needs `try_files $uri $uri/ /index.html;` (already required today; verify).
- **No SSR/prerender** is in scope; optional later add-on (Phase 10).
- **Tailwind version:** use Tailwind v4 with `@tailwindcss/vite` and shadcn's v4 setup.
- **Big-bang vs incremental:** Tailwind and old CSS coexist during Phases 4–6 only; Bootstrap is removed at the end of Phase 6. Tailwind preflight may shift Bootstrap pages, so migrate page-by-page and check each.

---

## Phase 0 — Baseline & safety
- Create branch `dev` work; tag current `main` as `pre-modernization`.
- Record baseline: screenshots of every route (desktop 1440, mobile 390), Lighthouse scores, bundle size.
- Delete junk: all `.DS_Store`, stale `App.test.js`, `ONBOARD.md` / `docs/flow` (auto-generated), `SKILL.md` inside `src/Assets`. Add `.DS_Store` to `.gitignore`.
- Add `prettier` config + `.editorconfig`.

**Done when:** baseline captured, repo clean, site still builds with CRA.

## Phase 1 — Vite + TypeScript scaffold
- Install `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `@types/node`.
- Add `vite.config.ts` (`outDir: "build"`, `emptyOutDir`, alias `@/* → src/*`, sourcemaps off).
- Add `tsconfig.json` (`strict: true`, `allowJs: true` temporarily), `tsconfig.node.json`, `src/vite-env.d.ts`.
- Move `public/index.html` → root `index.html`; replace `%PUBLIC_URL%`, add `<script type="module" src="/src/main.tsx">`. Keep GA + meta tags.
- Rename `src/index.js` → `src/main.tsx`. Remove `react-scripts`, `web-vitals`, `reportWebVitals.js`, `setupTests.js`, CRA `eslintConfig`.
- Scripts: `dev`, `build` (`tsc --noEmit && vite build && node sitemap.js`), `preview`, `typecheck`, `format`.
- Add ESLint flat config (`typescript-eslint`, `react-hooks`) and Vitest + Testing Library (replace Jest).
- Replace `process.env.REACT_APP_*` (if any) with `import.meta.env.VITE_*`.

**Done when:** `npm run dev` and `npm run build` work; output in `build/` serves identically to current site (compare via `vite preview`).

## Phase 2 — Tailwind + shadcn foundation
- Install `tailwindcss`, `@tailwindcss/vite`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`.
- `npx shadcn@latest init` (style: new-york, base color neutral, CSS variables on). Creates `components.json`, `src/lib/utils.ts` (`cn`).
- Define design tokens in `src/styles/globals.css`: `:root` and `.dark` CSS variables (background, foreground, card, border, primary, muted, accent, ring), radius scale, font stack (self-host Inter via `@fontsource-variable/inter`, drop any Google/CDN font).
- Add base shadcn components: `button`, `card`, `badge`, `separator`, `sheet`, `dropdown-menu`, `tooltip`, `tabs`, `input`, `skeleton`, `sonner` (as needed).
- Shared layout primitives: `Container`, `Section`, `SectionHeader` (replaces `SectionHeader.js/.css`).

**Done when:** a demo route renders shadcn Button/Card in light mode; Bootstrap still loaded for untouched pages.

## Phase 3 — Dark mode
- Strategy: `class`-based (`.dark` on `<html>`), custom variant `@custom-variant dark (&:is(.dark *));`.
- `ThemeProvider` (`light | dark | system`, persisted in `localStorage` with try/catch, listens to `prefers-color-scheme`).
- **No-flash script** inline in `index.html` `<head>` that sets the class before paint; update `<meta name="theme-color">` per theme.
- `ThemeToggle` (lucide `Sun`/`Moon`/`Monitor`, dropdown-menu) placed in the navbar and drawer.
- Audit every hard-coded color in old CSS; replace with tokens as pages are migrated. Check images/logos that need dark variants (`dark:invert`, alternate assets) and syntax-highlighter theme (switch light/dark theme with the mode).

**Done when:** toggle works, persists, respects system, no flash on reload.

## Phase 4 — Layout shell: Navbar + left mobile drawer
- Rebuild `Topbar`, `Navbar`, `Footer`, `ScrollToTop` in TSX with Tailwind.
- **Desktop (≥ lg):** sticky header, blur/border on scroll, links + Home section dropdown (react-scroll anchors kept), theme toggle.
- **Mobile (< lg): left drawer** using shadcn `Sheet side="left"`, modeled on the reference screenshot:
  - Header row: brand "MZ" (left), close `X` (right), bottom border.
  - Primary CTA row (e.g. "Contact →" with `ArrowRight`), separated by dividers.
  - Link list (Home sections, Projects, Blogs, Experience, Industry) with generous tap targets (≥ 44px), muted text, active state.
  - Theme toggle at drawer bottom.
  - Behaviour: closes on route change and link click, focus trap + Esc + overlay click (Radix provides), body scroll lock, `aria-label`s, width `min(85vw, 20rem)`.
- Remove `react-responsive` (use CSS breakpoints; no JS media-query for layout), remove `window.bootstrap` code.

**Done when:** drawer matches the reference at 390px, keyboard/screen-reader usable, no Bootstrap JS needed by the nav.

## Phase 5 — TypeScript migration + content model (core)
Do this alongside the page rewrites in Phase 6 so each file is touched once; order:
1. `config/*` → typed data modules with interfaces (`Project`, `Experience`, `Repo`, `Skill`, `Achievement`, `Blog`) in `src/types/`.
2. Shared components (`CodeBlock`, `TypingEffect`, bars → single typed `Progress` component, `Ribbon`).
3. `blogRegistry` → typed registry (slug, title, date, tags, description, component/MDX loader).
4. Pages and home sections.
- Enforce `strict`, no `any`; then set `allowJs: false`.
- Keep as JS: `sitemap.js` (Node build script, CommonJS, no type value) — convert to `sitemap.mjs` and generate its route list from the typed registry/data so routes aren't duplicated.

**Content changes (item 2):**
- Move hard-coded copy out of JSX into `src/content/` typed data (home, experience, industry, skills, achievements).
- Blogs and long project pages (`CimagesCrypt`, `AxisSpendingBlog`, `LLMTracing`, `AxisSpending`, `AxisSpendingSetup`, `LoanLensAI`, `Gnost`) → **MDX** files in `src/content/{blogs,projects}/` with frontmatter, using `@mdx-js/rollup` + `remark-frontmatter` + `remark-math`/`rehype-katex` (replaces `better-react-mathjax`). Shared `BlogLayout` / `ProjectLayout` templates replace per-page duplicated layout.
- Merge `Skills` + `Skills2`; fix `Achivements` → `Achievements`.
- Per-route SEO through one typed `<Seo>` component (react-helmet-async stays).
- Content review pass with you: stale text, dead links, ordering. (Needs your input per page.)

## Phase 6 — UI migration, page by page (Bootstrap/CSS → Tailwind/shadcn)
Order: Home sections → Projects/Gnost → Blogs index/post → Experience → Industry → Axis/LoanLens pages → 404.
- Replace Bootstrap grid/utility classes with Tailwind (`container`, `grid`, `flex`, responsive prefixes).
- Cards: shadcn `Card` with `shadow-sm`, `border`, `rounded-xl`, subtle `hover:shadow-md` transition; consistent padding scale.
- Buttons, badges (tech tags), tabs, tooltips from shadcn; unify spacing/typography scale.
- Replace `animate.css`, `react-animated-css-onscroll`, `react-scroll` usage where CSS/IntersectionObserver or `scroll-behavior` suffices; keep `gsap` only if actually used on a page (decide after audit).
- Delete each old CSS file as its component migrates. At the end remove Bootstrap `<link>`/`<script>` from `index.html` and any `bootstrap` classes; `App.css`/`index.css` reduced to nothing or a few tokens.
- Accessibility pass: contrast in both themes, focus rings, heading order, alt text, `prefers-reduced-motion`.

**Done when:** zero `data-bs-*`/Bootstrap classes remain (grep), CSS lines ≈ 0 outside `globals.css`.

## Phase 7 — Icons: FontAwesome → lucide-react
- Install `lucide-react`; remove FA kit `<script>` from `index.html`.
- Build a mapping (from ~25 distinct icons found), e.g. `fa-arrow-right → ArrowRight`, `fa-arrow-up-right-from-square → ExternalLink`, `fa-robot → Bot`, `fa-chart-line → LineChart`, `fa-database → Database`, `fa-magnifying-glass → Search`, `fa-download → Download`, `fa-brain → Brain`, `fa-file-lines → FileText`, `fa-envelope → Mail`, `fa-clock → Clock`, `fa-tags → Tags`, `fa-sitemap → Network`, `fa-shield-halved → ShieldCheck`, `fa-server → Server`, `fa-flask → FlaskConical`, `fa-code → Code`, `fa-check → Check`, `fa-chart-pie → PieChart`, `fa-bolt → Zap`, `fa-triangle-exclamation → TriangleAlert`.
- Brand icons (github, whatsapp, x-twitter, python, linkedin...) → `components/icons/Brands.tsx` from `simple-icons` paths (see Decisions).
- Data-driven icons (project/skill configs) store an icon *key* resolved via a typed icon map, not strings of FA classes.
- Import icons individually (tree-shaken); verify bundle.

Practically done together with Phase 6 per page; this phase is the final sweep + grep check (`grep -r "fa-"` = 0).

## Phase 8 — Asset optimization & folder restructure
**Assets**
- Images → WebP/AVIF at needed sizes (`sharp` script in `scripts/optimize-images.mjs`), `width`/`height` set, `loading="lazy"`, `decoding="async"`, hero/LCP image eager with `fetchpriority="high"`; `srcset` where useful.
- PDFs (20 MB + 6 MB): compress (Ghostscript) or move out of the bundle (host once, link) — decide with you; never import into JS bundle. Put downloads in `public/files/`.
- Move static, non-imported assets to `public/` (favicons, OG image, PDFs); imported images stay in `src/assets/` (lowercase).
- Self-host fonts, subset; remove unused deps (`animate.css`, `react-circular-progressbar`, `lottie-react`, etc. if unused).
- Vite: `manualChunks` for vendor split, route-level `React.lazy` code splitting.

**Target structure**
```
src/
  main.tsx  App.tsx  routes.tsx
  components/{ui(shadcn), layout, common, icons}/
  features/{home,blogs,projects,experience,industry}/
  content/{blogs,projects,*.ts}/
  hooks/  lib/  types/  styles/globals.css  assets/
scripts/   (optimize-images.mjs, sitemap.mjs)
public/    (favicons, og image, robots, manifest, files/)
build/     (committed output)
```

## Phase 9 — QA, build, deploy
- `typecheck`, lint, unit tests (Vitest: registry, theme provider, drawer open/close), manual route-by-route visual check vs. Phase 0 baselines in light + dark, 390px + 1440px.
- Lighthouse (perf/a11y/SEO ≥ 90), bundle size compare, check GA still fires, check sitemap/robots/canonical/OG tags.
- Final `npm run build` locally → commit `build/` (single release commit).
- **Deploy workflow:** change server script to just `git pull origin main` (drop `npm install`, which costs RAM and is no longer needed). Fix workflow comments; keep `paths-ignore`.
- Confirm nginx: root → `build/`, `try_files ... /index.html`, long-cache for hashed `/assets/*`, no-cache for `index.html`, gzip/brotli.
- Merge `dev` → `main`; smoke test production; keep tag for quick rollback.

## Phase 10 — Optional follow-ups (not in scope unless you ask)
- Prerender routes at build time (e.g. `vite-react-ssg`) for SEO since output must stay static.
- RSS feed for blogs, search, OG images per post.

---

## Suggested execution order & sizing
| Phase | Effort | Notes |
|---|---|---|
| 0 Baseline | S | |
| 1 Vite + TS scaffold | M | site works end of phase |
| 2 Tailwind + shadcn | S | |
| 3 Dark mode | S | |
| 4 Navbar + drawer | M | |
| 5 TS + content/MDX | L | biggest chunk, merge with 6 |
| 6 UI migration | L | page by page |
| 7 Icons | S–M | folded into 6 |
| 8 Assets + structure | M | |
| 9 QA + deploy | M | |

Each phase = its own commit(s) on `dev`; site must build after every phase.

## Questions to resolve while executing
1. PDFs (20 MB / 6 MB): compress and keep in repo, or host elsewhere?
2. Any pages you want deleted rather than migrated?
3. Primary CTA text/link for the drawer's top row (reference shows "Chat →")?
4. Keep `gsap`/`lottie-react` animations, or drop for CSS-only motion?
