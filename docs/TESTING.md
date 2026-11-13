# Testing and Quality Verification

## Current automated checks

The repository currently defines these npm scripts:

| Command | What it checks |
|---|---|
| `npm run lint` | ESLint analysis |
| `npm run build` | Vite production compilation |
| `npm run dev` | Local development server |
| `npm run preview` | Local preview of production output |

The current GitHub Actions workflow installs dependencies and runs `npm run build`. It does not currently run lint or a unit, component, integration, or browser end-to-end test suite.

A successful build proves that Vite can compile the current source. It does not prove that localhost API calls work in production, that forms submit, or that navigation and content are correct.

## Local checks

```bash
npm ci
npm run lint
npm run build
npm run preview
```

## Manual route smoke test

Open each route directly and refresh it:

- `/`
- `/login`
- `/blog`
- `/blog/page/1`
- `/search?q=concrete`
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

## Content and interaction checks

- Blog JSON loads, titles and excerpts render, and missing images fail gracefully.
- Blog search matches titles, text, and tags.
- Blog pagination does not navigate beyond the available page count.
- Service pages render the expected content and local assets.
- Desktop and mobile navigation lead to valid routes.
- Contact details load from the intended backend environment.
- Instant Quote page handles a missing or failed API response.
- Driver job form validation is understandable and does not falsely claim submission success.
- Embedded maps and videos load with useful fallbacks.
- Footer and social destinations are valid.

## Browser checks

Use the browser developer tools:

- Console for runtime exceptions and React warnings.
- Network panel for failed assets, API calls, CORS, and response status.
- Performance panel for large images and layout shifts.
- Accessibility tree for labels, headings, links, and iframe titles.

## Security and privacy checks

- Do not submit real employee or customer data to a development environment.
- Do not leave personal form data in browser console logs.
- Verify API responses do not expose private records.
- Confirm the site uses HTTPS in production.
- Check the production bundle for development-only API URLs and secrets.

## CI expansion

A future CI improvement can run ESLint after resolving existing lint errors. Add automated tests only when a test framework and meaningful assertions are configured. Avoid placeholder scripts that return success without testing application behavior.
