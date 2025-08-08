# Repository Guidelines

## Project Structure & Module Organization
- `styles/`: Theme entry (`index.ts`) and global CSS (base, layouts, colors). Primary source for exported theme code.
- `layouts/`: Slidev layout components (`*.vue`, kebab-case) shipped by the theme.
- `components/`: Reusable Vue components (PascalCase `*.vue`) used by layouts and examples.
- `presentations/`: Example decks and presentation-specific styles.
- `assets/` and `public/`: Static assets; use `public/` for files referenced directly in slides.
- `docs/`: VitePress site for documentation and examples.
- Root config: `uno.config.ts`, `vite.config.ts`, `.prettierrc`, `package.json`.

## Build, Test, and Development Commands
- `pnpm dev`: Run the example deck locally (`example.md`).
- `pnpm build`: Build the example to `docs/public/example/` for GitHub Pages.
- `pnpm export`: Export slides (PDF/images) from `example.md`.
- `pnpm screenshot`: Generate PNG screenshots to `docs/public/screenshots/`.
- `pnpm docs:dev | docs:build | docs:preview`: Work with the VitePress docs site.
- `pnpm release` and `pnpm ci:publish`: Maintainers only; version and publish.

## Coding Style & Naming Conventions
- Formatter: Prettier enforced (`.prettierrc`: no semicolons, single quotes, width 120, trailing commas `es5`).
- Vue: components in PascalCase (`components/Admonition.vue`); layouts in kebab-case (`layouts/two-cols.vue`).
- CSS/TS: prefer kebab-case filenames; keep theme entry in `styles/index.ts`.
- Utilities: Use UnoCSS utilities and follow `STYLING-GUIDE.md` for global styling and variables.

## Testing Guidelines
- No formal unit test suite yet. Validate visual changes with `pnpm screenshot` and by building docs.
- If adding tests, prefer Playwright; place under `tests/` with `*.spec.ts` and run via a dedicated script.
- Include before/after screenshots for layout or style changes.

## Commit & Pull Request Guidelines
- Commits: Imperative, concise subject (e.g., "Add section layout"), optional scope (e.g., `layouts:`). Reference issues (`#123`) when relevant.
- PRs must include: clear description, linked issues, screenshots/GIFs for visual changes, and notes on docs updates.
- Verify locally before opening: `pnpm build`, `pnpm docs:build`, and formatting (Prettier).

## Security & Configuration Tips
- Require Node >= 18 and `pnpm` (see `.npmrc`). Avoid committing large binaries; place assets under `assets/` or `public/`.
- Do not add secrets; environment variables are not used in this theme.
