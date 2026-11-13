# Development Guide

## Requirements
- Node.js compatible with the Vite version in `package.json`.
- npm and the committed `package-lock.json`.

## Setup
```bash
git clone https://github.com/Brajesh31/Kennedyconcrete.git
cd Kennedyconcrete
npm ci
npm run dev
```

## Commands
| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build |

## Working conventions
- Add route-level pages under `src/Views/Pages/`.
- Put reusable UI under `src/Views/Components/`.
- Keep shared navigation and footer concerns in `src/Layout/`.
- Keep images and styles in the existing asset locations.
- Update route documentation when paths change.
- Avoid committing generated `dist/`, `node_modules/`, or local IDE state.

Run lint and build before opening a pull request. Test direct navigation and browser refresh on nested routes.
