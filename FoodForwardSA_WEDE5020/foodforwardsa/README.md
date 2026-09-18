# FoodForward SA — Website Project (Part 2)

## Project Title
FoodForward SA Website Redesign Concept

## Student Information
- Subject: Web Development (WEDE5020)
- Student Name:Phetogo
- Student Number:ST10217316
- Group: 1

## Project Overview
This project is a concept website for **FoodForward SA**, a real South
African NPO established in 2009 that recovers quality surplus food from
farmers, manufacturers and retailers and redistributes it to a vetted
network of beneficiary organisations across all nine provinces.

The site is a **student prototype** built for the WEDE5020 Proof of
Evidence. It is not affiliated with or endorsed by FoodForward SA — all
organisational facts (history, figures, address) are sourced from public
material and cited below, but the site itself, its design, and its copy
are original student work.

## Website Goals and Objectives
- Make it immediately clear how a visitor can help (donate food, donate
  funds, or volunteer).
- Present FoodForward SA's real impact figures clearly and credibly.
- Provide a simple, validated enquiry path that routes different visitor
  types (donors, volunteers, partners) through one form.
- Give visitors a clear route to a physical location via the Contact page.

## Part 2 — CSS Styling and Responsive Design

The Part 2 changes build on the Part 1 site without changing the basic site structure. The main styling is still kept in one external stylesheet (`css/styles.css`).

### CSS and responsive changes
- Added a consistent CSS reset/base layer, typography scale, spacing, colours, borders, buttons, cards and form styling.
- Added CSS Grid/Flexbox layouts for the hero, route, cards, footer and form sections.
- Added tablet and mobile breakpoints at 980px, 860px, 760px, 700px and 430px.
- Added a mobile navigation button that expands/collapses the primary menu.
- Added relative units (`rem`, `em`, `%`, `vw`) and `clamp()` for responsive typography and spacing.
- Added responsive image handling using `<picture>`, `srcset` and `sizes` on the home page.
- Added hover and keyboard focus states and retained the `prefers-reduced-motion` accessibility setting.
- Kept the visual design deliberately simple so the CSS remains understandable for a student project.

### Testing note
The site should be tested in browser developer tools at desktop, tablet and mobile widths before submission. Screenshot evidence can be added to this README after local testing; screenshots should show the homepage at each required breakpoint and demonstrate the mobile navigation.

## Key Features and Functionality
- 5 pages: `index.html`, `about.html`, `programmes.html`, `enquiry.html`,
  `contact.html`.
- Responsive, mobile-first layout (see `css/styles.css`).
- Client-side validated enquiry form and contact form (see `js/main.js`)
  — required fields, inline error messages, focus management on error.
- Scroll-reveal animation via `IntersectionObserver`, with
  `prefers-reduced-motion` respected.
- Two real locations shown on the Contact page (Cape Town national office
  and a Gauteng regional depot), each with an embedded map.
- Semantic HTML5 throughout (`header`, `nav`, `main`, `section`,
  `article`, `address`, `footer`), with a skip-link and visible focus
  states for keyboard users.
- Original SVG mark used as the site favicon/brand icon — no stock
  photography used, to avoid any licensing uncertainty in this prototype.

## Timeline and Milestones (Part 1)
| Week | Milestone |
|------|-----------|
| 1 | Research FoodForward SA; draft two proposals (FoodForward SA, Boxer Superstores) for lecturer approval |
| 2 | Proposal approved; sitemap and low-fidelity wireframes for the approved organisation |
| 3 | Build HTML structure and CSS design system; write and integrate real content |
| 4 | Add JavaScript behaviour (validation, nav, reveal), test across browsers, write README, push to GitHub |

## Part 1 Details
This repository contains the Part 1 deliverables:
1. The approved Website Project Proposal (submitted separately as
   Word/PDF).
2. Researched content and sourcing for FoodForward SA.
3. This initial set of HTML files, in a clear folder structure, pushed to
   GitHub.
4. This README, documenting the project.

Parts 2 and 3 (styling refinement, JavaScript interactivity, and further
iteration) will be added to this same repository in later submissions.

## Sitemap
```
/
├── index.html          Home — hero, impact stats, "the route" overview, CTA
├── about.html           About — history timeline, mission/vision, leadership
├── programmes.html      Our Work — the 4 core programmes in detail
├── enquiry.html          Get Involved — donate/volunteer enquiry form
├── contact.html          Contact — two locations, maps, general contact form
├── css/
│   └── styles.css        Single stylesheet: design tokens + all components
├── js/
│   └── main.js            Scroll reveal + form validation, vanilla JS
└── images/
    └── favicon.svg         Original brand mark (no external assets)
```

## File and Folder Structure
Root-level HTML files with `css/`, `js/`, and `images/` subfolders, per
the brief's required structure. All internal links use relative paths, so
the whole folder can be opened locally or hosted as-is.

## Changelog
- **v0.1** — Initial commit: folder structure, empty HTML shells.
- **v0.2** — Design system in `styles.css` (colour tokens, type scale,
  the "route" waypoint component).
- **v0.3** — Homepage (`index.html`) built and content integrated.
- **v0.4** — About, Programmes, Enquiry, and Contact pages built.
- **v0.5** — `main.js` added: scroll reveal, form validation, error
  states, reduced-motion handling.
- **v0.6** — Favicon added, cross-page nav/link audit, HTML structure
  linted, README written.

## References
- FoodForward SA. (2026). *About Us*. https://www.foodforwardsa.org/about-us/
- FoodForward SA. (2026). *Home*. https://www.foodforwardsa.org/
- FoodForward SA. (2026). *Contact Us*. https://www.foodforwardsa.org/contact-us/
- FoodForward SA. (2026). *Support Food Security and Maximise Your Tax Benefits Before 28 Feb 2026*. https://www.foodforwardsa.org/
- Daily Maverick. (2026). *Tackling food security through partnership and collective action*. https://www.dailymaverick.co.za/article/2026-07-21-tackling-food-security-through-partnership-and-collective-action/
- Daily Maverick. (2026). *FoodForward SA calls for decisive action to address sharp rise in food insecurity*. https://www.dailymaverick.co.za/article/2026-04-12-foodforward-sa-calls-for-decisive-action-to-address-sharp-rise-in-food-insecurity/
- Daily Maverick. (2023). *Using food surpluses to address SA's hunger and malnutrition crisis*. https://www.dailymaverick.co.za/article/2023-10-24-using-food-surpluses-to-address-sas-hunger-malnutrition-crisis/
- ContactOut. (2026). *FoodForward SA — Company Profile*. https://contactout.com/company/FoodForward-SA-55501
- Google Fonts. (2026). *Fraunces, Work Sans, IBM Plex Mono*. https://fonts.google.com/
