# Development Guide

## Requirements

- Node.js compatible with Vite 6.
- npm.
- Git.
- Access to the companion content API if you need to exercise the dynamic About, Contact, or Instant Quote sections.

Use the committed `package-lock.json` and npm. Do not mix package managers.

## Setup

```bash
git clone https://github.com/Brajesh31/Kennedyconcrete.git
cd Kennedyconcrete
npm ci
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173`.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start local Vite server |
| `npm run build` | Create production output in `dist/` |
| `npm run preview` | Preview production output |
| `npm run lint` | Run ESLint |

Before submitting a change:

```bash
npm run lint
npm run build
npm run preview
```

The current GitHub Actions CI runs dependency installation and the production build. It does not currently run ESLint or an automated test suite.

## Project conventions

- Route registration belongs in `src/App.jsx`.
- Shared navigation and footer composition belongs in `src/Layout`.
- Route-level content belongs in `src/Views/Pages`.
- Reusable UI belongs in `src/Views/Components`.
- Static public JSON belongs in `public/JSON`.
- Source images and styles belong under `src/assets`.
- Keep content requests and external integrations explicit.
- Preserve existing routes unless a route migration is intentional.
- Use React's `className` prop, not the HTML `class` attribute.
- Use stable IDs or content keys when rendering lists.
- Prefer semantic buttons and links over clickable generic containers.

## Content editing

### Blog content

Blog records are loaded from `/JSON/Blogs.json`. The blog card component reads fields including `blogtitle`, `blogtext`, `blogimg`, and `tags`. Preserve this shape when editing records unless the component and documentation are updated together.

### Service content

`/JSON/Servicebox.json` contains service card icon paths, titles, and text. Its current icon values reference source asset paths. Verify those paths in the built site because files under `src/assets` are normally bundled and should be imported or copied to public assets rather than referenced as arbitrary source URLs.

### Dynamic content

The About, Contact, and Instant Quote sections depend on the companion API on port 5000. Check its response shape before changing the UI. Avoid silently replacing missing content with invented business details.

## Routing

The app uses BrowserRouter. When adding a route:

1. Create or reuse a page component.
2. Import it in `src/App.jsx`.
3. Register the exact path.
4. Decide whether it should use the shared Layout.
5. Add the route to the route table in `docs/ARCHITECTURE.md`.
6. Add navigation links only when the destination exists.
7. Test direct navigation and refresh in local and deployed environments.

## Visual and responsive checks

- Check desktop, tablet, and mobile widths.
- Verify the desktop and mobile navigation independently.
- Check image loading and alternative text.
- Verify carousels and animation behavior with reduced motion where practical.
- Confirm embedded maps and videos remain usable on small screens.
- Check text contrast, focus visibility, and keyboard operation.

## External API development

The current API URLs are hard-coded to localhost. Start the companion service on port 5000 for local development and verify the expected routes:

- `GET /about`
- `GET /contact`
- `GET /instant`

The frontend repository does not include the API implementation or a formal schema. Use [API_INTEGRATIONS.md](API_INTEGRATIONS.md) as the current source-level record, not as a substitute for backend contract tests.

## Pull request checklist

- [ ] Scope is limited to the intended page or component.
- [ ] Existing routes and navigation still work.
- [ ] Content and business claims are accurate.
- [ ] Images have appropriate alt text.
- [ ] External API failures do not crash the page.
- [ ] No secrets or personal information are committed.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Relevant documentation is updated.
- [ ] Screenshots are included for meaningful visual changes.
