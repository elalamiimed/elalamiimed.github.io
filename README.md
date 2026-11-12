# elalamiimed.github.io

Personal CV / portfolio site of **Mohamed El Alami** — computer science student at Harbin
Institute of Technology, Shenzhen; systematic trading research and AI tooling.

**Live:** https://elalamiimed.github.io

## What's here

```
index.html                  single-page portfolio
cv.html                     printable CV (source for assets/cv.pdf)
styles.css                  design system + layout (design tokens v1, no framework)
main.js                     progressive-enhancement interactions (~120 lines, no deps)
assets/cv.pdf               one-click downloadable CV
assets/img/portrait.jpg     profile photo
assets/img/favicon.svg      monogram favicon
.nojekyll                   serve static files as-is on GitHub Pages
```

## Design system

Every colour, size, weight, radius, shadow, spacing step and breakpoint comes from a single set of
CSS custom properties declared at the top of `styles.css` (`--ds-*`). No utility framework, no
build step, no tracking, no external JavaScript.

## Local preview

```bash
# any static server works
python -m http.server 8000
# → http://localhost:8000
```

Add `?noanim` to skip scroll-reveal animations (useful for screenshots).

## Regenerating the PDF

`assets/cv.pdf` is printed from `cv.html`:

```bash
msedge --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=assets/cv.pdf "cv.html"
```

## Accessibility & performance

- Semantic landmarks, skip link, visible focus rings, `prefers-reduced-motion` support.
- No web fonts beyond Inter + JetBrains Mono, both preconnected.
- No cookies, no analytics, no external requests after fonts load.

---

© Mohamed El Alami. Content is personal; code is free to learn from.
