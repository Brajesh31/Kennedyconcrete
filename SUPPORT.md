# Support

## Before requesting support

1. Read the root README and relevant guides in `docs/`.
2. Reproduce the issue on the latest deployed version or a clean local install.
3. Run `npm ci`, `npm run lint`, and `npm run build`.
4. Check browser console and Network panel errors.
5. Identify whether the issue belongs to the frontend or the companion API.

## Bug reports

Use the GitHub bug report template. Include the route, browser and device, steps to reproduce, expected behavior, actual behavior, and sanitized console/network output.

## Do not share

Never post candidate applications, customer contact information, phone numbers, email addresses, credentials, access tokens, or private API responses in public issues. Redact screenshots and logs.

## Backend-dependent behavior

About, Contact, and Instant Quote content depend on an external service that is not included in this repository. Driver application submission is not connected to a backend in the current frontend. Include sanitized endpoint and status information when reporting integration failures.

## Security reports

Follow the private reporting process in [SECURITY.md](SECURITY.md). Do not publish exploitable details or personal information in a public issue.
