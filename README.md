# Logesh S — Personal Portfolio

Personal portfolio website of **Logesh S**, a B.Sc. Data Science graduate based in Hosur, Tamil Nadu, India. The site presents my skills, projects, résumé, technical writing and coding profiles.

**Live site:** https://logesh-personal-portfolio-brown.vercel.app/

## Overview

A single-page React application with dedicated sections:

| Route       | Content                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Introduction, headline stats, areas of work, featured projects |
| `/about`    | Background, working principles and journey timeline            |
| `/skills`   | Proficiency by category plus certifications                    |
| `/projects` | Project case cards with a working category filter              |
| `/resume`   | Structured résumé, printable / exportable to PDF               |
| `/articles` | Technical writing with platform filter                         |
| `/profiles` | Competitive coding and data science platform profiles          |
| `/contact`  | Contact channels, message form and FAQ                         |

## Tech stack

- **React 18** with **TypeScript**
- **Vite** for development and builds
- **Tailwind CSS** with a custom design system (CSS variables, HSL colour tokens)
- **shadcn/ui** component primitives (Radix UI)
- **Framer Motion** for scroll-reveal and interaction animations
- **React Router** for client-side navigation

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Type-check, lint and build for production
npx tsc --noEmit -p tsconfig.app.json
npm run lint
npm run build
```

## Project structure

```
src/
├── components/        # Layout (Navigation, Footer), PageHeader, ui/ primitives
├── pages/             # One component per route
├── lib/
│   ├── site.ts        # Shared identity, contact and social data
│   └── utils.ts
└── index.css          # Design tokens + component utility classes
```

## Design principles

- Dark, ink-navy palette with a single restrained teal accent
- Solid typography (no gradient text); JetBrains Mono for labels
- Hairline borders and quiet motion instead of glow effects
- Lucide iconography throughout — no emoji stand-ins

## Contact

- Email: logeshds247@gmail.com
- GitHub: https://github.com/Logesh0247
- Location: Hosur, Tamil Nadu, India
