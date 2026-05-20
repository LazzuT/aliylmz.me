# Active Context

## Current Work Focus
- The portfolio site is undergoing final content and structural refinements to solidify Ali Yılmaz's dual professional identity (Software/AI vs. Media/Voiceover).
- Contact mechanisms have been explicitly split to route software and voiceover inquiries to separate email addresses.

## Recent Changes
- **Contact Split:** Replaced the generic contact form with two distinct `ContactCard` components, routing users to `lazzut@proton.me` for software and `aliyilmaziletisim@hotmail.com` for media projects.
- **Project Focus:** Promoted the open-source platform "Pengui" as the primary featured project. "Concept" or placeholder projects were hidden to ensure the portfolio only highlights real, credible work.
- **About Section Update:** Rewrote the about text to accurately reflect Ali's personal history (born 2007, university student, transitioning into Vibe Coding) and removed abstract philosophy sections for a more direct approach.
- **UI/UX Polish:** Updated the footer and contact page to use `mailto:` links, removing the need for a backend form service while maintaining the minimalist aesthetic.

## Next Steps
- Final user approval of the new dual-channel contact structure and project display.
- Custom domain mapping and Vercel final deployment.

## Active Decisions and Considerations
- **Content:** Kept strictly inside `src/data/`. All dynamic routing (like hidden concept projects) is handled via data attributes (e.g., `isConcept: true`).
- **Styling:** Adhering strictly to a minimalist, low-contrast dark mode. No more dramatic purples or neon glows; using restrained violet accents occasionally.
- **Architecture:** Replaced functional contact forms with static `mailto:` links to simplify architecture and ensure immediate deliverability without backend dependencies.
