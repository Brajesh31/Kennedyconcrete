# Troubleshooting

## Install or dependency issues

Run `npm ci` from the repository root. This uses the committed lockfile. Confirm the installed Node.js version is compatible with Vite 6.

## Build fails

Run `npm run build` and inspect the first compiler error. Check import paths and filename capitalization. Linux CI and Vercel use case-sensitive paths, unlike some local Windows setups.

## Lint fails

Run `npm run lint`. Resolve the first reported ESLint issue and rerun. The CI workflow currently runs the build rather than lint, so a green CI run does not necessarily mean lint is clean.

## Dynamic About, Contact, or Instant Quote content is empty

These components call `http://localhost:5000`. Confirm the companion service is running on port 5000 and responds to the expected endpoint:

- `GET /about`
- `GET /contact`
- `GET /instant`

Inspect the Network panel for connection errors, CORS failures, 404 responses, or unexpected JSON shapes.

On a deployed site, localhost points to the visitor's own machine. Configure a deployed API origin before release.

## Blog data does not load

The blog components request `/JSON/Blogs.json` and `/JSON/Blogmeta.json`. Confirm these files exist in the deployed public directory and return valid JSON. Check the browser Network panel for 404 or parsing errors.

## Images are missing

Check the exact path and capitalization. Files in `public` are served from the site root. Files imported from `src/assets` are bundled by Vite and should generally be referenced through imports or emitted asset URLs, not assumed source-tree paths.

## Nested route refresh returns 404

The existing `vercel.json` rewrites paths to `/index.html`. Confirm that the deployed Vercel project uses the repository's configuration and that the rewrite is not overridden by project settings.

## Navigation item does nothing

Some current navbar entries are placeholders using `href="#"` and do not correspond to a registered route. Check `src/App.jsx` and `docs/CONTENT_AND_ROUTES.md`. A menu label does not guarantee a working destination.

## Driver application form appears to submit but no application is received

The current form handler logs the submitted object in the browser console. It does not call an application API or send email. Do not use this form for real candidate data until a secure submission service is implemented.

## Instant quote is not an actual order

The current Instant Quote page loads content and embeds a video. It does not create an order or quote request in the inspected frontend implementation.

## Useful diagnostics

- Browser console: runtime errors and warnings.
- Network panel: endpoint, request, response, status, and CORS.
- Vite terminal: development server and build output.
- Vercel deployment logs: build and hosting configuration.
- Companion API logs: server-side errors, with personal information redacted.
