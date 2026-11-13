# Accessibility and SEO Checklist

This guide records practical review criteria for the public business website. It does not claim that every item is currently implemented.

## Accessibility

### Navigation and structure

- Use one clear page-level heading and a logical heading hierarchy.
- Use real links for navigation and buttons for actions.
- Ensure mobile navigation can be operated with keyboard and assistive technology.
- Keep focus visible after opening and closing menus.
- Provide a skip link to the main content.
- Add a not-found page with a useful heading and return navigation.

### Forms

- Associate every input with a visible label.
- Mark required fields programmatically, not only with a red asterisk.
- Associate validation text with the relevant input.
- Group related radio controls with a fieldset and legend.
- Provide a clear submission status and error state.
- Do not silently discard form data.
- Avoid collecting more personal data than the business needs.

The driver application form currently logs form values to the browser console and does not send them to a server. It must not be treated as a working application intake form.

### Images, maps, and video

- Supply descriptive alt text for meaningful images.
- Use empty alt text for decorative images.
- Provide iframe titles and explain the purpose of embedded maps and videos.
- Ensure video content has captions or an equivalent text alternative where required.
- Avoid autoplaying audio or video.
- Ensure controls have accessible names.

### Motion and contrast

- Respect reduced-motion preferences for carousels and animation.
- Do not use color alone to communicate status.
- Check text contrast over image backgrounds.
- Test zoom and narrow viewport layouts.

## SEO

### Page metadata

- Give each route a unique, descriptive title and meta description.
- Use a canonical URL for indexable pages.
- Keep robots directives appropriate for the page.
- Provide Open Graph and social preview metadata.
- Avoid duplicate titles across service and location pages.

### Content

- Use clear service and location headings.
- Write original descriptions for each concrete service and service area.
- Ensure claims, service locations, and business details are accurate.
- Avoid thin or duplicated location pages.
- Add descriptive internal links between relevant service and location pages.
- Provide a useful not-found page and correct status behavior where hosting allows.

### Technical checks

- Generate and maintain a sitemap for canonical public routes.
- Ensure `robots.txt` points to the sitemap.
- Confirm the deployed site uses HTTPS.
- Verify images are optimized and have stable dimensions.
- Test mobile performance and Core Web Vitals.
- Check canonical routes and redirects after deployment.
- Verify the Vercel SPA rewrite does not unintentionally expose non-page paths as indexable content.

## Release verification

Run Lighthouse or an equivalent audit against the deployed website, then manually test keyboard navigation, screen reader labels, mobile layout, route metadata, and page content. Automated scores do not replace manual review.
