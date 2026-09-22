# PDfolio

A personal portfolio website for Valerie Osuamkpe, built with React and Vite.

## What's inside

- **Hero** – an introduction section with a description, portrait image, and social links
- **Selected Work** – a showcase of featured projects
- **Case Studies** – detailed pages for individual projects
- **About** – background and personal info
- **Articles** – a list of written articles
- **More Work** – additional projects
- **Contact** – a contact form
- **Extras** – light/dark theme toggle, custom cursor effects, and 3D circle animations

## Tech stack

- React
- Vite
- React Router
- Plain CSS (organized into tokens, layout, sections, components, and global style files)

## Getting started

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

3. Open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```
npm run build
```

The production files are output to the `dist` folder. You can preview them with `npm run preview`.

## Project structure

```
public/        Static assets (images, favicon)
src/
  components/  Reusable UI pieces
  data/        Content data (projects, articles, site content)
  hooks/       Custom hooks (theme, scroll behavior)
  pages/       Top-level pages
  sections/    Large page sections (hero, about, contact, etc.)
  styles/      Global CSS files
  App.jsx      App routes and layout
  main.jsx     App entry point
```

## Deployment

This project includes a `vercel.json` config, so it's ready to be deployed on Vercel.