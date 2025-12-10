**CookieLove — Frontend**

- **Purpose:**: Small React + Vite frontend for a bakery site (CookieLove). This README documents what has been implemented so far, how to run and build the frontend locally, CI/CD notes, and development details for the responsive hero section and other components.

**Status Summary**
- **Working:**: React (Vite) frontend with responsive UI, Tailwind CSS, and a crafted hero section matching the provided design.
- **Hero section:**: Desktop and mobile versions implemented. Mobile now displays the hero illustration near the top so users see it on entry; CTAs and a `Watch Video` button are present. Decorative doodles are reduced on small screens for clarity.
- **Components converted/fixed:**: Navbar, Footer, UI Button component (moved variant config to avoid Fast Refresh issues). Image assets for the hero are available in `frontend/public/images/`.
- **CI/CD:**: GitHub Actions workflows added (`.github/workflows/ci.yml` and `pages-deploy.yml`) and Vercel config (`vercel.json`) configured. Workflows use Node 20.x for Vite compatibility and cache `frontend/package-lock.json`.

**Repository layout (relevant paths)**
- `frontend/` — the React/Vite app folder
- `frontend/src/` — source code
- `frontend/src/components/` — UI components (`Hero.jsx`, `Navbar.jsx`, `Footer.jsx`, `ui/button.jsx`, `ui/button-variants.js`)
- `frontend/public/images/` — public images (hero, logo)
- `.github/workflows/` — CI / pages deploy workflows
- `vercel.json` — Vercel configuration (frontend target)

**What Was Done (high level)**
- Implemented the hero section using responsive Tailwind utility classes and conditional rendering of decorative elements.
- Ensured the mobile layout shows the hero artwork early by inserting a mobile-only image block after the headline and hiding the larger right-column image on small viewports.
- Converted TypeScript/TSX artifacts to JS/JSX where required for consistency and to avoid build/lint errors.
- Fixed Tailwind / CSS issues (removed invalid `@apply` usage), added Google fonts and CSS variables in `index.css`.
- Resolved Node version mismatch in CI (switched to Node 20.x) and added package-lock-based cache keys.
- Addressed case-sensitivity filename issue (Windows vs Linux) by normalising file names and export shapes.
- Addressed Fast Refresh lint by moving `buttonVariants` into `button-variants.js` and exporting only the React component from `button.jsx`.

**How to run locally (development)**
1. Open a terminal in the repository and change into the frontend folder:

```powershell
cd .\frontend\
```

2. Install dependencies (only needed once or after changes to `package.json`):

```powershell
# Windows / PowerShell
npm ci
# or
npm install
```

3. Run the dev server (Vite):

```powershell
npm run dev
```

4. Open the site in your browser (Vite will print the local URL; typically `http://localhost:5173`). Use the browser devtools to emulate mobile view to test the mobile hero layout.

**How to build for production**

```powershell
cd .\frontend\
npm run build
# production assets will be in frontend/dist/
```

**Linting & Tests**
- Lint (ESLint) is configured in the frontend package. Run:

```powershell
cd .\frontend\
npm run lint
```

**CI / Deployment**
- GitHub Actions: `ci.yml` runs install, lint, and build using Node 20.x and caches using `frontend/package-lock.json`.
- GitHub Pages deployment workflow pushes the `frontend/dist` to `gh-pages` (ensure repo `Actions` permissions allow `contents: write`).
- Vercel: `vercel.json` is configured for the monorepo to deploy the `frontend` folder.

**Hero / Mobile notes (developer details)**
- The hero is in `frontend/src/components/Hero.jsx`.
- Mobile-first behavior: a mobile-only image block (`block md:hidden`) is inserted immediately after the H1 so the illustration is visible on entry. The original right-column illustration is hidden on small screens (`hidden md:flex`) to avoid duplication.
- CTAs: Primary CTA (`See Menu`) is styled as a pill and is large on mobile; the `Watch Video` button is restored and placed beside it.
- Decorative doodles (SVGs/emoji/gradient blobs) use `hidden sm:block` / `hidden md:block` rules to limit clutter on small screens.
- Badge: `100% Fresh` badge overlays the mobile image for parity with the provided design.

**Known issues & recommendations**
- Confirm GitHub Actions permissions if `pages-deploy` fails with a 403 when pushing to `gh-pages` (repository admin may need to allow workflows to create commits).
- Visual polish: you may want to fine-tune pixel distances for the mobile hero (slightly negative margin or translateY) depending on exact device viewport heights.
- Accessibility: add `alt` text variations and keyboard focus states for CTAs to improve accessibility.

**Next steps / Suggested tasks**
- Visual QA: test the hero on common phone sizes (iPhone SE, iPhone 13/14/15, Pixel series) and adjust spacing if necessary.
- Add integration tests or visual regression tests (Percy, Playwright snapshots) to protect layout.
- If you want the mobile hero image to be even more 'above the fold', consider moving the hero component higher in the page or reducing header/nav height.
- Commit and push: if you'd like, I can commit these changes to `feature-hero-section` and open a PR.

**Contact / Author**
- This repo is being edited interactively in the workspace. If you want me to commit/push or run the build/lint and paste the output, tell me and I'll do that next.

---
Generated: December 10, 2025
