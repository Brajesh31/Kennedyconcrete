# API and External Integrations

## Scope

This repository contains a frontend only. The inspected source has three dynamic content requests to a separate local service on port 5000. No backend implementation or formal API schema is present in this repository.

## Current requests

| Component | Method | URL in source | Purpose |
|---|---|---|---|
| `src/Views/Pages/Home/KennedyConcrete.jsx` | GET | `http://localhost:5000/about` | Company/about copy |
| `src/Views/Pages/Contact/ContactMap.jsx` | GET | `http://localhost:5000/contact` | Contact page copy and location records |
| `src/Views/Pages/Homeowners/InstantQuote_and_Order/InstantQuote.jsx` | GET | `http://localhost:5000/instant` | Instant quote page text |

These URLs are hard-coded in the current frontend. They are development endpoints, not production-ready configuration.

## Expected response usage

### About

The About request reads the first array item and renders these fields:

- `aboutTitle`
- `aboutSubTitle`
- `paraone`
- `paratwo`
- `locationtitle`

The location images displayed alongside this copy are imported from local assets.

### Contact

The Contact request reads the first array item and renders:

- `contact_title`
- `contact_secondtitle`
- `contact_paraone`
- `contact_paratwo`
- `locations`

Each location record is expected to contain `location`, `phone`, and `email`. Phone and email are rendered as `tel:` and `mailto:` links.

### Instant quote

The Instant Quote request reads the first array item and renders:

- `Herotitle`
- `subtitle`
- `title`
- `text`
- `btntext`

The page also embeds a fixed YouTube video. The visible component does not submit an order or create a quote transaction.

## Static JSON content

| File | Consumer | Known fields |
|---|---|---|
| `public/JSON/Blogs.json` | BlogCard | `blogtitle`, `blogtext`, `blogimg`, `tags` |
| `public/JSON/Blogmeta.json` | Blogmeta | `icon`, `text` |
| `public/JSON/Servicebox.json` | ServiceBox data | `icon`, `servicetitle`, `servicetext` |

Static files under `public` are accessible to every visitor. Do not store confidential customer, employee, or operational data in them.

## Production requirements

Before production:

1. Agree on the API base URL and response schemas with the backend owner.
2. Replace hard-coded localhost URLs with environment-specific public configuration.
3. Use HTTPS for production API calls.
4. Configure CORS for the deployed website origin.
5. Validate response shapes before accessing nested fields.
6. Add loading, empty, and recoverable error states.
7. Avoid logging full API responses if they can contain personal information.
8. Add backend authorization and rate limiting where endpoints expose non-public data.

## Current gaps

- No API client module or centralized base URL is present.
- No runtime schema validation is visible.
- Components generally log request errors to the browser console.
- The driver application form does not call an API.
- The Login page is a UI shell and has no authentication request.
- The Contact page currently displays contact details but has no contact submission handler.

Do not claim that the site accepts and stores job applications, contact enquiries, or quote orders until a working and tested server-side submission flow exists.
