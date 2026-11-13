# Deployment Guide

## Hosting model

The project is a Vite React single-page application configured for Vercel. The checked-in `vercel.json` rewrites all incoming paths to `/index.html`, allowing BrowserRouter routes to be served by the SPA entry point.

## Build configuration

Recommended Vercel settings:

| Setting | Value |
|---|---|
| Framework | Vite |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

No environment variables are currently read by the inspected frontend source.

## Local production verification

```bash
npm ci
npm run lint
npm run build
npm run preview
```

Inspect the output in `dist/` and test the production preview before deployment.

## External API blocker

The current application calls `http://localhost:5000` from the browser for About, Contact, and Instant Quote content. In a deployed browser, localhost refers to the visitor's own device. These requests will not reach a server running in your development environment.

Before production release:

1. Identify and deploy the companion API.
2. Add a public API base URL configuration strategy to the frontend.
3. Replace hard-coded localhost URLs with that configuration.
4. Use HTTPS for production API calls.
5. Configure the API CORS allowlist for the exact website origin.
6. Verify response schemas and error behavior.
7. Confirm the API does not expose private records or secrets.

Do not place API secrets in Vite client variables. Any `VITE_*` value is visible to browser users.

## Vercel routing

The existing rewrite sends every path to `index.html`. Verify that static assets are still served correctly and all routes render as expected:

- `/`
- `/login`
- `/blog`
- `/blog/page/1`
- `/search`
- `/driver-jobs`
- `/concrete-delivery-service`
- `/sidewalk`
- `/driveway`
- `/slab`
- `/cell-fill`
- `/commercial`
- `/shotcrete`
- `/decorative-concrete`
- `/construction-building-materials`
- `/preferred-contractors`
- `/instance-quote`
- `/contact-us`

## Content and asset verification

- Confirm public JSON files load from `/JSON/`.
- Check image paths, especially paths that refer to `/src/assets`.
- Confirm external image URLs and embedded video/map content load.
- Review page metadata and canonical URLs.
- Verify no development API URL remains in the production bundle.

## Post-deployment smoke test

- Open the homepage on desktop and mobile.
- Navigate through all primary service pages.
- Search and paginate blog content.
- Open the driver jobs page and verify its form behavior is clearly communicated.
- Open Contact and confirm dynamic contact details load from the production API.
- Open Instant Quote and confirm its dynamic content and video load.
- Refresh a nested route directly.
- Check browser console and network failures.
- Confirm HTTPS and custom-domain configuration.

## Rollback

Keep the previous Vercel deployment available. If the new release breaks routing, assets, or content loading, promote the previous deployment. A frontend rollback does not roll back changes in a separate API service.
