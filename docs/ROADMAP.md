# Roadmap

This roadmap distinguishes current repository behavior from proposed improvements. Items are not delivery commitments.

## Current baseline

- [x] React 19 and Vite frontend.
- [x] Shared navigation and footer layout.
- [x] Homepage and company overview sections.
- [x] Concrete delivery and project service pages.
- [x] Building materials and preferred contractor pages.
- [x] Location content page for Orlando.
- [x] Blog listing, search, and pagination backed by public JSON.
- [x] Driver jobs information and form UI.
- [x] Contact page with embedded map and dynamic contact data.
- [x] Vercel SPA rewrite configuration.
- [x] Build workflow in GitHub Actions.

## Production readiness

- [ ] Replace localhost API origins with environment-based configuration.
- [ ] Deploy and document the companion content API.
- [ ] Add explicit API response validation and recoverable error states.
- [ ] Implement secure driver application submission.
- [ ] Implement a real contact enquiry workflow if required.
- [ ] Clarify whether Instant Quote is informational or a real quote/order flow.
- [ ] Implement real authentication or remove the incomplete login shell.
- [ ] Remove browser console logging of submitted personal information.
- [ ] Fix placeholder navigation and social destinations.
- [ ] Add a branded not-found route.

## Content and search

- [ ] Add structured content validation for public JSON.
- [ ] Add unique blog article detail routes if full articles are required.
- [ ] Improve search pagination and URL synchronization.
- [ ] Audit duplicate and oversized blog images.
- [ ] Verify every service and location page has unique, accurate content.
- [ ] Correct and verify asset paths used by JSON content.

## Quality and accessibility

- [ ] Resolve ESLint issues and add lint to CI.
- [ ] Add component tests for navigation, blog search, and form validation.
- [ ] Add browser end-to-end smoke tests for key routes.
- [ ] Add accessibility checks and manual keyboard testing.
- [ ] Add image optimization and performance budgets.
- [ ] Add route-specific SEO metadata, sitemap, and robots policy.

## Scope boundary

The backend, employment application intake, authentication, quote/order processing, and customer data storage are not implemented in this frontend repository. They require separate backend work and coordinated contracts.
