# Vikram Anupa — Portfolio

A responsive personal portfolio for Vikram Anupa, built with Angular 20, Tailwind CSS, Bootstrap 5, and Devicon.

## Features

- Responsive hero, skills, experience, projects, and contact sections.
- Technology logos for skills, with an experience timeline.
- Floating WhatsApp contact link.
- Contact form that opens a prefilled email in the visitor's email app; it does not submit to a server.
- Local profile photo, resume, and favicon served from `public/`.
- Project cards are kept in the code but hidden for now. The Projects section displays a coming-soon message until real project details and links are ready.

## Requirements

- Node.js and npm

## Development

Install dependencies and start the Angular development server:

```bash
npm install
npm start
```

Open <http://localhost:4200/>. The development server reloads when application files change.

## Build

Create an optimized production build:

```bash
npm run build
```

Build output is written to `dist/`.

## Tests

Run the unit tests in Chrome:

```bash
npm test -- --watch=false
```

## Updating portfolio content

- Profile image: replace `public/vicky.jpeg` and keep the same filename, or update the image path in `src/app/components/hero/hero.html`.
- Resume: replace `public/Vikram_Anupa_Resume.pdf` and keep the same filename, or update the resume links in `src/app/components/navbar/navbar.html`.
- Skills and work history: update `skillCategories` and `experiences` in `src/app/components/skills-experience/skills-experience.ts`.
- Projects: update the `projects` array in `src/app/components/projects/projects.ts` with real project descriptions, repository URLs, and live demo URLs. Set `showProjects` to `true` in `src/app/components/projects/projects.ts` to display the cards instead of the coming-soon message.
- Contact details: update the WhatsApp link in `src/app/app.html` and the email address in `src/app/components/contact/contact.ts` and `src/app/components/contact/contact.html` if they change.

## Project structure

```text
public/                         Static assets (photo, resume, favicon)
src/app/components/
  contact/                      Contact details and email form
  hero/                         Hero and About section
  navbar/                       Responsive navigation
  projects/                     Project card data and coming-soon state
  skills-experience/            Technology skills and career timeline
src/styles.css                  Global Bootstrap, Tailwind, and Devicon styles
```
