# Xylem

Biomimicry × Agentic AI — a modular React site for the Xylem research project.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/) for multi-page routing
- [@chenglou/pretext](https://github.com/chenglou/pretext) for per-character hover typography
- Deployed on [Vercel](https://vercel.com/)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main Xylem site — simulation, chagra, co-evolution |
| `/xylem-of-society` | Xylem of Society research provocation |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Legacy HTML

Original static HTML prototypes live in `legacy/` for reference.

## Deployment

Connected to GitHub (`felipelopezm1/xylem`) and Vercel. Pushes to `main` trigger automatic deploys.

Live: [xylem-site.vercel.app](https://xylem-site.vercel.app) (also [xylem-jec26.vercel.app](https://xylem-jec26.vercel.app), [xylem-bio.vercel.app](https://xylem-bio.vercel.app))

Link previews use Open Graph screenshots in `public/og/`. Regenerate after visual changes: `npm run og:capture` (requires Playwright).
