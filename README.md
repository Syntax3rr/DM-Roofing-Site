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

- `src/config/site.ts`: business details, service area, Web3Forms and Geoapify keys
- `src/content/services/`: one file per service
- `src/content/reviews.json`: customer testimonials
- `src/styles/global.css`: colours, fonts, and button styles

## Forms and address search

- Estimate requests are sent through [Web3Forms](https://web3forms.com).
  Put the access key in `web3formsAccessKey`.
- The address field suggests addresses via [Geoapify](https://www.geoapify.com).
  Put the key in `geoapifyKey` and restrict it to the site's domain in the
  Geoapify dashboard.

Both keys are meant to be public, so they're safe to commit.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`. In the repo settings, set **Pages → Source** to
**GitHub Actions**.

For a custom domain, put it in `public/CNAME`, set `site` in
`astro.config.mjs` to match, and point the domain's DNS at GitHub Pages.

## Credits

Started from the [Ridgeline Lite](https://github.com/JulyFire365/ridgeline-lite)
template (MIT, see `LICENSE`).
