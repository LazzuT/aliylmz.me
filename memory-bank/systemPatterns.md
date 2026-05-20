# System Patterns

## Architecture & Frameworks
- **Framework:** Next.js (App Router ecosystem)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured natively with Zinc-950 base)
- **Animation:** Framer Motion (Subtle fade-ins on scroll)
- **Deployment:** Vercel

## Design Patterns
- **Visual Pattern:** Minimalist, flat, and calm dark mode emphasizing content over flash. Strict adherence to sans-serif typography (`Geist`) and a muted `zinc` color palette. Violet accents (`#8B5CF6`) are strictly limited to necessary interactions.
- **Component Pattern:** Modular component architecture (Header, HeroBlock, ProjectCard, ContactCard). Designed for simplicity and reusability. Padding and margins are optimized for compact, breathable layouts (e.g., global `py-16`). Forms were discarded in favor of explicit UI cards routing to `mailto:` actions.
- **Content Pattern:** Direct, natural, and factual content approach. Content data resides in `src/data/` as well structured JSON/objects. "Concept" projects are filtered out programmatically to ensure only real, shipped work is displayed.

## Logic Patterns
- **Client vs Server Components:** Most page layouts operate as server components. Interactive or state-dependent components (HeroBlock buttons, MobileMenu, AudioPlayerRow) are marked `"use client"`.
- **Media Serving:** Raw media files like `.wav` audio strictly reside in the `public/` folder to natively interface with Next.js serving.
