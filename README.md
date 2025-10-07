# Moveto – Moving Company Landing Page

Responsive landing page inspired by the provided reference layout. Built with React + TypeScript, Vite, and Tailwind CSS. Tablet and mobile friendly.

## Features
- Fixed, responsive header with tablet-friendly nav and mobile drawer
- Hero section with gradient overlay and floating “Estimate” card
- ZIP estimate form with accessible labels
- “Who We Are” About section with badge and feature bullets
- “Why Choose Us” feature cards grid
- Services section with rating chip, image, and two‑column list with icons
- Clean, scalable component structure

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

## Project Structure
```
src/
  App.tsx
  main.tsx
  index.css
  components/
    Header.tsx
    Hero.tsx
    EstimateForm.tsx
    AboutSection.tsx
    FeaturesSection.tsx
    ServicesSection.tsx
assets/
public/
```

## Getting Started (Windows)
1. Install dependencies:
   ```
   npm install
   ```
2. Start dev server:
   ```
   npm run dev
   ```
   Vite prints a local URL (http://localhost:5173 by default).

3. Build for production:
   ```
   npm run build
   ```
4. Preview production build:
   ```
   npm run preview
   ```

## Key Files
- Header.tsx
  - Centered tablet nav, nowrap to avoid wrapping, mobile hamburger.
- Hero.tsx
  - Full-bleed background, headline, CTA, floating EstimateForm centered at the bottom.
- EstimateForm.tsx
  - 3-column layout on desktop, stacks on tablet/mobile.
- AboutSection.tsx
  - Image left, badge (17+), features on the right.
- FeaturesSection.tsx
  - “Why Choose Us” heading with 4 cards.
- ServicesSection.tsx
  - Left image with rating chip (4.8, reviews, stars), right content with icon bullets.

## Tailwind Setup
Tailwind is used via utility classes in index.css:
```
import "@tailwindcss"
```

## Assets
- Images reference royalty‑free placeholders (Pexels). Replace with production assets in public/ or your CDN.

## Deployment
- Vercel / Netlify: import repo, framework “Vite,” build command `npm run build`, output `dist`.
- GitHub Pages: build locally, push `dist` to gh-pages branch or use an action.

## Accessibility
- Semantic headings, label associations on form inputs.
- Keyboard/focusable mobile menu button.
- Alt text on images.

## Scripts
- dev: `npm run dev`
- build: `npm run build`
- preview: `npm run preview`
- lint (if enabled): `npm run lint`

## Customization
- Colors/spacing: tweak Tailwind classes in components.
- Icons: lucide-react import list in ServicesSection.tsx.
- Content: update strings in components.

## License
For learning/demo use only. Replace assets and branding before production.