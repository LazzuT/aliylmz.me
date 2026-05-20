# Tech Context

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS (v4)
- Framer Motion

## Development Setup
- Vibe coding approach utilized throughout the V1 to V1.1 minimalist pivot.
- Project located at `/home/ali/Projects/Works/aliylmz.me/`.
- `cn` utility (clsx + tailwind-merge) implemented in `src/lib/utils.ts` for dynamic class binding.

## Technical Patterns Implemented
- **Data Layer:** `src/data/*.ts` pattern acting as an offline CMS for fast iterations.
- **Component Architecture:** Reusable atomic blocks located in `src/components/`. All components stripped of excessive wrapper layers for pure flat design.
- **Motion:** Standardized `opacity` and `y-axis` transitions applied across elements. All previous heavy blurring or massive scale animations have been neutralized to respect the minimalistic brand.
- **Audio Integration:** Custom-built React module (`AudioPlayerRow.tsx`) wrapping pure HTML5 `<audio>` tags. Utilizes Next.js static serving via the `/public/audio/` directory.

## Constraints & Considerations
- High performance is guaranteed by strictly limiting DOM-heavy CSS filters (like large backend blurs or complex box shadows).
- Accessibility (aria-labels, focus states for links and inputs) is maintained via distinct visual feedback (`focus-visible:ring-zinc-500`).
- Responsive design prioritizes mobile navigation (drawer) and a single-column layout flow.
