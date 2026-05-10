# Earl John Duruin — Portfolio

A single-page React portfolio built with Vite.

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → /docs
npm run preview  # preview the build locally
```

## Project Structure

```
portfolio/
├── index.html                        # HTML entry point
├── vite.config.js                    # Vite config (base path, output dir)
├── package.json
│
├── public/                           # Static assets (copied as-is to build)
│   ├── favicon.svg
│   ├── assets/
│   │   └── Earl_John_Duruin_CV.pdf   # Downloadable résumé
│   └── images/
│       ├── IMG_9107.jpeg             # Profile photo
│       ├── Java_Fundamentals.jpg     # Certificate image
│       └── System_Administration.jpg # Certificate image
│
└── src/
    ├── main.jsx                      # React entry — mounts <App />
    ├── App.jsx                       # Root app component
    │
    ├── data/
    │   └── portfolioData.js          # All site content (sections, skills,
    │                                 #   projects, experience, education,
    │                                 #   certifications, contact info)
    │
    ├── hooks/
    │   └── useScroll.js              # useScroll() + useTheme() custom hooks
    │
    ├── styles/
    │   └── global.css                # Global styles, CSS variables, all
    │                                 #   component styles (dark/light theme)
    │
    └── components/
        ├── layout/
        │   ├── Navbar.jsx            # Fixed top nav + mobile menu overlay
        │   └── Footer.jsx            # Bottom copyright bar
        │
        ├── ui/
        │   └── Timeline.jsx          # Reusable timeline + cert lightbox
        │
        └── sections/
            ├── Portfolio.jsx         # Root — composes all sections
            ├── Hero.jsx              # Landing: name, tagline, photo, CTAs
            ├── About.jsx             # Bio text + info cards grid
            ├── Experience.jsx        # OJT / capstone timeline
            ├── Projects.jsx          # Project cards grid
            ├── Skills.jsx            # Skill cards grid
            ├── EducationAndCerts.jsx # Education + certifications (two-col)
            └── Contact.jsx           # Contact form + info chips
```

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| UI         | React 18                            |
| Bundler    | Vite 5                              |
| Styling    | Plain CSS with CSS custom properties|
| Fonts      | Syne (headings) · Manrope (body)    |
| Deployment | GitHub Pages (`/docs` output dir)   |

## Updating Content

All portfolio content lives in **`src/data/portfolioData.js`**. Edit that
single file to update:

- `SECTIONS` — nav order
- `EXPERIENCE` — work / OJT / capstone entries
- `SKILLS` — skill cards
- `PROJECTS` — project cards with links
- `EDUCATION` — school entries
- `CERTIFICATIONS` — cert entries with image paths
- `INFO_CARDS` — about-section quick info
- `CONTACT_CHIPS` — contact info shown beside the form
- `SOCIALS` — social link buttons in the hero
