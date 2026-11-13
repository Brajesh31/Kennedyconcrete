# Public Content Data Validation

## Purpose

The site reads public JSON from `public/JSON`. These files are shipped as static assets and are not private storage.

## Current data files

### Blogs.json

The blog card component reads:

- `blogtitle`: title string.
- `blogtext`: excerpt string.
- `blogimg`: image URL or public path.
- `tags`: array of searchable strings.

### Blogmeta.json

The metadata component reads:

- `icon`: CSS icon class string.
- `text`: short display label.

### Servicebox.json

The service box component reads:

- `icon`: image path.
- `servicetitle`: heading.
- `servicetext`: descriptive text.

## Editing checklist

- Keep valid JSON syntax, double-quoted keys and strings.
- Keep required fields present and use the expected types.
- Use an array for `tags`.
- Verify image URLs and paths on the deployed site.
- Avoid empty titles and duplicate records.
- Do not embed HTML that will be rendered as trusted markup.
- Do not include personal applicant/customer information or internal operational details.

## Validation opportunity

The repository currently does not define a dedicated JSON schema or content validation command. A future validation script should parse each JSON file, check required fields and types, and verify local asset references. Add it to CI only after the schema matches the real data.
