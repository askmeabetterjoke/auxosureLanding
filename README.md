# Auxosure Landing Page

Marketing site for **Auxosure** / **Auxo** — Vite + React.

## Local development

```bash
cd web
npm install
npm run dev
```

## GitHub Pages (automatic)

Pushes to `main` build and deploy via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup** (repo owner):

1. Open **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. If the repo is **private**, you need a [GitHub paid plan](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) for Pages on private repos — or make the repo public for free Pages

Live URL (after deploy): `https://<username>.github.io/auxosure-landing/`

## Vercel (alternative)

```bash
cd web
npm i -g vercel@latest
vercel login
vercel --prod
```

Set **Root Directory** to `web` if importing from the GitHub repo in the Vercel dashboard.

`vercel.json` is included for SPA routing.

## Integration logos

1. Add images to `web/public/integrations/`
2. Set `"logo": "/integrations/your-file.svg"` in `web/src/integrations.json`

## Project structure

```
GrowSurel/
├── web/                 # React app (deploy this)
│   ├── public/hero/     # day.jpg, night.jpg backgrounds
│   └── src/
├── day.jpg / Night.jpg  # source hero photos (also copied to public/hero)
└── implementation_plan.md
```
