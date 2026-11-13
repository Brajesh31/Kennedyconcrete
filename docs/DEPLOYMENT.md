# Deployment

The repository contains `vercel.json` with a rewrite that sends incoming paths to `/index.html`, supporting React Router browser-history routes.

## Vercel settings
- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

## Release checklist
1. Confirm lint and production build pass.
2. Confirm the production environment has only the intended public configuration.
3. Verify the root page and representative nested routes on direct load and refresh.
4. Test contact, quote, and other forms against their actual receiving services.
5. Confirm image paths, canonical domain, metadata, and mobile layout.
6. Review browser console and network errors after deployment.

A successful static build does not prove that external APIs, forms, authentication, or file uploads work securely.
