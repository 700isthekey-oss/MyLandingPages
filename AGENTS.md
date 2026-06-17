# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a lightweight landing page project. Keep the root simple:

- `index.html` for the main page structure.
- `style.css` for global styles and responsive layout.
- `script.js` for small interactive behavior.
- `assets/` for images, icons, fonts, and other static files.
- `tests/` for future automated tests, if the project grows.

Avoid deeply nested folders until the site has multiple pages or reusable modules.

## Build, Test, and Development Commands

No package manager or build tool is configured yet. For now:

- Open `index.html` directly in a browser to preview the site.
- Use a simple local server if needed, for example:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

If Node tooling is added later, document commands such as `npm install`, `npm run dev`, `npm test`, and `npm run build` here.

## Coding Style & Naming Conventions

Use clear, beginner-friendly code:

- Indent HTML, CSS, and JavaScript with 2 spaces.
- Use lowercase, hyphenated filenames such as `product-card.png` or `hero-banner.jpg`.
- Use semantic HTML elements where possible: `header`, `main`, `section`, `footer`.
- Prefer class names that describe purpose, for example `product-grid`, `site-header`, and `cart-button`.
- Keep CSS grouped by page area, then by component.

Do not add unused frameworks or dependencies without a clear need.

## Testing Guidelines

There is no test framework configured yet. Before committing changes, manually check:

- The page loads without console errors.
- Layout works on desktop and mobile widths.
- Buttons, links, and interactive elements respond as expected.
- Images load from the correct `assets/` paths.

If automated tests are introduced, place them in `tests/` and name files by feature, such as `cart.test.js`.

## Commit & Pull Request Guidelines

Git history is not available in this environment, so no existing commit convention could be detected. Use short, descriptive commit messages:

- `Add landing page hero`
- `Style product grid`
- `Fix mobile navigation`

Pull requests should include a brief summary, screenshots for visual changes, steps to preview or test, and any related issue links.

## Agent-Specific Instructions

Keep changes small and easy to review. Preserve the simple static-site structure unless the user asks to introduce a framework, build system, or backend.
