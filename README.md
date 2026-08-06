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

**Finish setup** (one-time, in your terminal):

```bash
# Grant workflow scope so the deploy file can be pushed
gh auth refresh -h github.com -s workflow,repo

cd /path/to/GrowSurel
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deploy workflow"
git push
```

Then in GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

**Private repo note:** GitHub Pages on private repos requires a [paid GitHub plan](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites). For free hosting on a private repo, use **Vercel** below.

Live URL (after deploy): `https://aadithya1996.github.io/auxosure-landing/`

**Repo:** https://github.com/aadithya1996/auxosure-landing (private)

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
