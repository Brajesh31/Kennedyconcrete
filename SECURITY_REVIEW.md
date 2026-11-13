# Security Review

## Scope and limitations

This is a source-level review of the frontend repository. It is not a penetration test and does not assess the companion API, hosting account, domain/DNS configuration, or third-party services.

## Findings

### 1. Driver application form only logs submitted data

**Evidence:** `src/Views/Pages/About/DriverJobs/Form.jsx` logs the form object in `onSubmit`. The API request is commented out.

**Impact:** Applicants may believe they have submitted an application when no server-side submission occurs. Form values are also exposed in browser console output.

**Action:** Do not collect real candidate data through this UI until a secure backend endpoint exists. Remove data logging, implement server-side validation, access controls, retention policy, and clear success/failure feedback.

### 2. Localhost API URLs are hard-coded

**Evidence:** About, Contact, and Instant Quote components call `http://localhost:5000`.

**Impact:** Deployed visitors will send requests to their own device. Plain HTTP also creates mixed-content failures when a secure production site calls an HTTP service.

**Action:** Configure a public API base URL per environment and use HTTPS in production. Do not place private credentials in `VITE_*` variables.

### 3. Dynamic contact details are loaded from an external API

**Evidence:** ContactMap renders location phone and email values returned by `GET /contact`.

**Impact:** The browser trusts the response for display and constructs `tel:` and `mailto:` links. Incorrect or compromised content could misdirect visitors.

**Action:** Validate and moderate contact data server-side. Restrict who can update it and verify all deployed contact destinations.

### 4. Login route is not an authentication implementation

**Evidence:** `src/Views/Pages/Login/Login.jsx` currently renders a visual shell with no sign-in flow.

**Impact:** The route may create a false impression that account authentication is available.

**Action:** Implement a real authentication provider and server-side session enforcement if required, or remove/rename the incomplete route.

### 5. Placeholder links and social destinations

**Evidence:** Contact social destinations use `#`, and several Navbar items are placeholder anchors.

**Impact:** Visitors may be unable to reach intended destinations or may be sent to the top of the page.

**Action:** Replace placeholders with verified destinations or remove the controls until valid destinations are available.

### 6. Third-party embedded content

**Evidence:** The site embeds Google My Maps and YouTube content.

**Impact:** Embedded providers may receive visitor network and browser information. External content availability and privacy behavior are outside this repository's control.

**Action:** Review provider privacy requirements, use descriptive iframe titles, consider consent requirements, and provide accessible fallbacks.

## Additional hardening

- Avoid logging API response bodies or form values.
- Validate API response structures before rendering nested fields.
- Add rate limiting and abuse protection to all public submission endpoints.
- Use server-side validation for job applications and contact requests.
- Keep public JSON free of confidential information.
- Review dependency alerts and update dependencies deliberately.
- Confirm HTTPS, security headers, and an appropriate Content Security Policy at hosting level.
- Do not rely on client-side checks for authorization or data integrity.

## Remediation order

| Priority | Action |
|---|---|
| Critical before collecting applications | Implement secure server-side job application submission and remove console logging |
| High | Replace localhost API origins for production |
| High | Add validation, access controls, and abuse protection to companion API |
| Medium | Implement or remove the login shell |
| Medium | Replace placeholder links with verified destinations |
| Medium | Review embedded content privacy and security |

A frontend-only change cannot establish secure data handling without corresponding backend controls.
