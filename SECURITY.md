# Security Policy

## Scope
This repository contains a public-facing React/Vite website. The browser bundle is public by design. Never place passwords, private API keys, signing secrets, customer records, or privileged credentials in frontend code or Vite-exposed environment variables.

## Reporting a vulnerability
Do not publish exploitable details in a public issue. Contact the repository owner privately through GitHub's private vulnerability reporting feature when available. Include affected paths, impact, reproduction steps, and a suggested mitigation.

## Deployment guidance
- Keep privileged operations behind a trusted server-side service.
- Validate and rate-limit form submissions on the receiving service.
- Restrict CORS and upload destinations where applicable.
- Keep dependencies updated and review security advisories.
- Do not treat client-side validation as a security boundary.
