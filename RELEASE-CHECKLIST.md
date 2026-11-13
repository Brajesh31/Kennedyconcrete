# Release Checklist

## Build and source

- [ ] `npm ci` succeeds using the committed lockfile.
- [ ] `npm run lint` succeeds.
- [ ] `npm run build` succeeds.
- [ ] Production preview renders without console errors.
- [ ] No unreviewed dependency or lockfile changes are included.

## Routes and navigation

- [ ] All routes in `docs/CONTENT_AND_ROUTES.md` render.
- [ ] Nested route refresh works on Vercel.
- [ ] Desktop and mobile navigation destinations are valid.
- [ ] Placeholder links are removed or replaced.
- [ ] Unknown routes show an appropriate not-found experience.

## Content and assets

- [ ] Business claims, locations, and contact details are approved.
- [ ] Blog JSON is valid and image references load.
- [ ] Service card icon paths work in the production build.
- [ ] Images have appropriate alt text and optimized dimensions.
- [ ] Embedded map and video content have usable fallbacks.

## API and privacy

- [ ] Production API origin is configured and uses HTTPS.
- [ ] No browser request targets localhost.
- [ ] CORS is restricted to approved origins.
- [ ] API responses are validated and error states are handled.
- [ ] No candidate or customer data is logged to the console.
- [ ] Job application and contact submission behavior is accurately represented.
- [ ] No private data or credentials are committed or bundled.

## Accessibility and SEO

- [ ] Keyboard navigation and visible focus are checked.
- [ ] Form labels and validation are accessible.
- [ ] Iframes have descriptive titles.
- [ ] Page titles and descriptions are unique.
- [ ] Canonical URLs, sitemap, and robots directives are verified.
- [ ] Mobile performance and accessibility are reviewed.

## Deployment

- [ ] Vercel build command is `npm run build`.
- [ ] Output directory is `dist`.
- [ ] Production domain and HTTPS are verified.
- [ ] Smoke tests pass on the deployed site.
- [ ] Previous deployment remains available for rollback.
- [ ] CHANGELOG.md and relevant documentation are updated.
