# Content Model and Route Reference

## Route reference

Routes are registered in `src/App.jsx`.

| Path | Content area | Layout |
|---|---|---|
| `/` | Homepage slider, company overview, team, contact section | Shared |
| `/login` | Login visual shell | Standalone |
| `/blog` | Blog listing | Shared |
| `/blog/page/:page` | Blog card page route | Shared |
| `/search` | Blog search results | Shared |
| `/driver-jobs` | Driver job information and form | Shared |
| `/concrete-delivery-service` | Concrete delivery information | Shared |
| `/sidewalk` | Sidewalk concrete project information | Shared |
| `/driveway` | Driveway concrete project information | Shared |
| `/slab` | Concrete slab information | Shared |
| `/cell-fill` | Cell fill information | Shared |
| `/commercial` | Commercial concrete information | Shared |
| `/shotcrete` | Shotcrete information | Shared |
| `/decorative-concrete` | Decorative concrete information | Shared |
| `/construction-building-materials` | Building materials information | Shared |
| `/preferred-contractors` | Preferred contractor information | Shared |
| `/instance-quote` | Instant quote information/video | Shared |
| `/contact-us` | Contact details and map | Shared |

## Blog data

The public blog dataset is `public/JSON/Blogs.json`. The blog card component reads:

| Field | Use |
|---|---|
| `blogtitle` | Blog heading and search |
| `blogtext` | Blog excerpt and search |
| `blogimg` | Blog image URL/path |
| `tags` | Search matching |

The listing displays 10 items per page. Search results display 6 items per page. Search matching checks title, excerpt text, and tags.

`public/JSON/Blogmeta.json` supplies metadata icon class names and text. The current component renders metadata links with placeholder `#` destinations.

## Service card data

`public/JSON/Servicebox.json` contains:

- `icon`: image path.
- `servicetitle`: heading.
- `servicetext`: descriptive text.

Check icon paths in the production build. A path that points into `/src/assets` may not resolve after Vite bundles the source tree.

## Content editing guidelines

- Preserve existing field names unless the consuming component is updated.
- Keep text factual and approved by the business.
- Use descriptive image alternatives.
- Avoid duplicating the same article or image under multiple records.
- Verify all image URLs and paths in the production preview.
- Keep customer and employee personal information out of public JSON.
- Do not add fake contact details, pricing, service availability, or testimonials.

## Navigation alignment

Some navigation items in the current Navbar use placeholder anchors or do not point to registered routes. When adding or changing navigation:

1. Confirm the target route exists in `src/App.jsx`.
2. Use React Router navigation for internal pages.
3. Remove placeholder `href="#"` when it does not represent a real action.
4. Verify desktop and mobile menus.
5. Update this route table when the route set changes.

## Missing route behavior

There is no explicit catch-all route in the current App. Add a branded not-found page as a separate implementation change if desired, then test unknown paths and refresh behavior.
