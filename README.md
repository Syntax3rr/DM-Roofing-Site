# DM Roofing & Siding website

Website for DM Roofing & Siding (Niagara Falls, Ontario). Built with
[Astro](https://astro.build) and Tailwind CSS, hosted on GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

- `src/config/site.ts`: business details and service area
- `src/content/services/`: one file per service
- `src/content/reviews.json`: customer testimonials (`/review/` sends
  customers to Google; copy good ones here by hand)
- `src/styles/global.css`: colours, fonts, and button styles

## Forms and address search

- Estimate requests are sent through [Web3Forms](https://web3forms.com).
- The address field suggests addresses via [Geoapify](https://www.geoapify.com).
  Restrict the key to the site's domain in the Geoapify dashboard.

The keys are read from environment variables at build time, not committed:

- Locally, copy `.env.example` to `.env` and fill in the values.
- For deploys, add `PUBLIC_WEB3FORMS_KEY` and `PUBLIC_GEOAPIFY_KEY` as
  repository secrets (Settings → Secrets and variables → Actions).

Both keys still end up in the built pages, so this keeps them out of the
repo, not out of view.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`. In the repo settings, set **Pages → Source** to
**GitHub Actions**.

For a custom domain, put it in `public/CNAME`, set `site` in
`astro.config.mjs` to match, and point the domain's DNS at GitHub Pages.

## Credits

Started from the [Ridgeline Lite](https://github.com/JulyFire365/ridgeline-lite)
template (MIT, see `LICENSE`).
