# Embassy of the Free Mind — Website

<!-- Tech stack badges (only for technologies used in this repo) -->
[![SvelteKit](https://img.shields.io/badge/SvelteKit-%23FF3E00?logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Directus](https://img.shields.io/badge/Directus-%2364f?logo=directus&logoColor=white)](https://directus.io/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)](https://gsa)

A clean, responsive website built with SvelteKit for the Embassy of the Free Mind (project).

## Project Description

Embassy of the Free Mind is a cultural and educational organization in Amsterdam that preserves, studies, and shares a unique collection of books, manuscripts, and ideas about free thought and the history of knowledge.

During this semester, we created a redesign of their website. We worked on the homepage and the exhibitions page, and built several reusable components that appear across the site to present content in a clear, modern, and consistent way.

## Illustration
<img width="700" alt="efm-desktop" src="https://github.com/user-attachments/assets/bc364c8c-8f1e-478a-96d3-c1af1467d426" />
<img width="300" alt="efm-mobile" src="https://github.com/user-attachments/assets/12b49a6b-be01-4fd7-b649-7b783c314366" />

## Tech Stack

- Svelte (v5)
- SvelteKit (v2)
- Vite (v7)
- TypeScript (dev dependency)
- Prettier (code formatting)
- GSAP (animations)
- Adapter(s): `@sveltejs/adapter-netlify` (present in devDependencies)

Files and structure highlights
- `src/routes/` — page routes (About, Exhibitions, Academy, Guided Tours, Online Collection, Visit)
- `src/lib/components/` — UI components (molecules/organisms folders present)
- `static/` and `build/` — static assets and build output

## Installation

Prerequisites
- Node.js 18 or later (recommended). 
- npm (bundled with Node) or an alternative package manager such as pnpm/yarn.

Steps to run locally

1. Clone the repository

	git clone https://github.com/fdnd-agency/embassyofthefreemind.git
	cd embassyofthefreemind

2. Install dependencies

	npm install

3. Start the development server

	npm run dev

4. Open the site in your browser

	Visit http://localhost:5173 (Vite default) or the address printed by the dev server.

Build for production

	npm run build
	npm run preview

## Usage / User Guide

Main features and flows
- Browse informational pages: About, About Museum, Academy, Exhibitions, Guided Tours, Online Collection, Visit.
- The site contains static pages and server routes (some pages use `+page.server.js` for data fetching).
- Responsive design and animations are implemented using GSAP for enhanced visual interaction.

Example user steps
1. Open the homepage. Use the homepage to explore the embassy.
2. Navigate to `Tickets Kopen` to read about current and upcoming exhibitions.

## Live Demo

- Live Demo: https://embassyofthefreemind.dev.fdnd.nl/

## Changelog

- v1.0.0 — Initial release (project scaffold and first public pages) — 2026-01-20

## Related Documentation

- CONTRIBUTING: [`CONTRIBUTING.md` ](https://github.com/fdnd-agency/embassyofthefreemind/blob/dev/CONTRIBUTING.md)
- HANDOVER: `HANDOVER.md`

## Team

Current maintainers / team

- [Alisa](https://github.com/aliceafanasieva)
- [Sebastiaan](https://github.com/Sebastiaan-hva)
- [Recep](https://github.com/Recss68)

## Contributing

Please read [`CONTRIBUTING.md` ](https://github.com/fdnd-agency/embassyofthefreemind/blob/dev/CONTRIBUTING.md) for contribution guidelines. If you plan to make larger changes, open an issue or a draft PR first to discuss the design and approach.

## License

No license file found in the repository. If this project should be open source, add a `LICENSE` file (for example, MIT) to make the licensing explicit.

