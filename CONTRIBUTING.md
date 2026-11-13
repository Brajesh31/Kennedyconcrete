# Contributing

Thank you for considering a contribution to the Kennedy Concrete website.

## Before you start
- Check existing issues and discussions before opening a new request.
- For substantial changes, describe the proposed approach before implementation.
- Do not include customer information, credentials, API keys, or private business data.

## Local setup
```bash
npm ci
npm run dev
```

## Quality checks
Run both checks before submitting:
```bash
npm run lint
npm run build
```
If lint reports existing unrelated issues, include the exact output and do not hide or suppress them.

## Change guidelines
- Keep the React/Vite structure and current routing conventions.
- Use reusable components where practical.
- Preserve responsive behavior and test mobile and desktop widths.
- Use semantic HTML, accessible labels, keyboard focus states, and descriptive image alternatives.
- Optimize images and avoid adding dependencies for trivial functionality.
- Do not commit generated output, local environment files, or secrets.

## Pull requests
Explain the problem, summarize the change, list tests, and attach screenshots for visual changes. Call out any new environment variables or external service dependencies.
