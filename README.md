# Muthu Creatives

Marketing site for [muthucreatives.com](https://muthucreatives.com), a Houston, TX web
design agency. Next.js App Router, Tailwind CSS v4, React Three Fiber for the homepage
hero and Framer Motion for scroll work.

## Development

```bash
npm install
npm run dev
```

## Contact form

The forms on the homepage and `/contact` post directly to [Formspree](https://formspree.io).
The endpoint lives in `src/lib/site.ts` (`formEndpoint`); change it there to point at a
different Formspree form. There are no server routes and no secrets to configure, so the
form works on any host, static or dynamic.

## Deployment

Connect the GitHub repo to [Vercel](https://vercel.com) and point the domain at the
project. No environment variables are needed. Any push to `main` redeploys.

## Structure

- `src/lib/` holds all site content: services, case studies, testimonials, FAQs and
  site constants (booking URL, email, socials). Copy changes happen here, not in
  components.
- `src/components/home/` holds the homepage sections, in page order.
- `src/components/hero/` holds the R3F exploded-site canvas and its static fallback.
  The canvas only mounts on desktop-class devices without `prefers-reduced-motion`.
- `src/app/` holds the routes: `/services` plus one page per service, `/portfolio`
  plus one page per case study, `/about` and `/contact`. `sitemap.ts`, `robots.ts`
  and `opengraph-image.tsx` are generated from the content in `src/lib/`.
- `public/work/` holds screenshots of the live demo builds used as portfolio imagery.
- `public/demos/` holds the live demo pages linked from each case study.
- `public/llms.txt` is a plain-text site summary for AI answer engines.
