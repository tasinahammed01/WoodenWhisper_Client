## Wooden Whisper — Client

A modern, animated, and fully responsive React application showcasing interior design collections, projects, journals, and videos.

---
🌐 **Website Live Link:** [WoodenWhisper]([https://woodenwhisper.netlify.app/)


### Highlights
- GSAP-powered scroll and reveal animations across pages
- Framer Motion page transitions
- Responsive layout with Tailwind CSS
- React Router for nested routing
- Optimized image loading and hover previews in Projects

### Tech Stack
- React js
- Tailwind CSS 4 (+ `@tailwindcss/vite`)
- GSAP 3 (`gsap`, `@gsap/react`, `ScrollTrigger`)
- Framer Motion
- DaisyUI
- Lenis (smooth scrolling)
- Optional: AOS (available in deps)

### Notable Features by Page
- Home: hero video, carousel, collections, and smooth GSAP reveals
- About (Philosophy, People): ScrollTrigger-based section reveals and staggers
- Projects: category filters, grid/list views, hover-follow image preview, responsive images
- Videos: full-screen, pinned scroller with “curtain” and horizontal variants
- Shop (Lighting, Rugs): horizontally pinned card sections with snap

### Getting Started
1) Install dependencies
   - `npm install`
2) Start the dev server
   - `npm run dev`
3) Build for production
   - `npm run build`
4) Preview production build
   - `npm run preview`

### Scripts
- `dev`: start Vite dev server
- `build`: build production assets
- `preview`: preview built assets
- `lint`: run ESLint

### Project Structure (client)
- `src/`
  - `Pages/`: route pages (Home, About, Projects, Journal, Videos, Shop)
  - `Componentes/`: home and shared UI components
  - `Routes/Routes.jsx`: app router
  - `Layout/`: shared layout shell
  - `PageTransition/`: framer-motion transition wrapper

### Animations
- GSAP + ScrollTrigger for scroll-based reveals, pinned sections, and horizontal scrollers
- `@gsap/react` for lifecycle-safe timelines
- Framer Motion for route-level transitions

### Image Performance
- Responsive `srcset`/`sizes` with on-the-fly compression (via image proxy) for Projects grid
- Lightweight, optimized hover preview in list view

### Backend
The repository includes a minimal backend skeleton under `wooden-wishper-backend/`. The client currently fetches:
- Images: `https://woodenwhisper-backend.onrender.com/images`
- Journals: `https://woodenwhisper-backend.onrender.com/journals`

### Requirements
- Node.js 18+

### License
For portfolio/demo use. Replace assets and endpoints as needed for production.
