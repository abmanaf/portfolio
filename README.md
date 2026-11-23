# Aliu Abdul Manaf — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui primitives, organised with atomic design.

## Run it

```bash
pnpm install
pnpm run dev      # http://localhost:3000
pnpm run build    # production build
```

## Structure

```
src/
  app/                    layout, globals.css (design tokens), page
  data/portfolio.ts       ALL copy lives here — edit text, projects, links
  lib/utils.ts            cn() helper
  components/
    ui/                   shadcn components (button, badge, card, separator)
    atoms/                container, heading, text, tag, nav-link, external-link, logo, section
    molecules/            section-intro, project-row, experience-item, skill-group,
                          contact-link, focus-area-card, nav-links, fit-plot
    organisms/            header, hero, current-focus, selected-work, experience,
                          expertise, about, contact, footer
    templates/            portfolio-template (page composition)
```

Add more shadcn components any time with `pnpm dlx shadcn@latest add <name>` (`components.json` is already configured).

