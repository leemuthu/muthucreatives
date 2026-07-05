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

The forms on the homepage and `/contact` post to `src/app/api/contact/route.ts`, which
delivers email through [Resend](https://resend.com). Copy `.env.example` to `.env.local`
and set `RESEND_API_KEY` (plus `CONTACT_FROM_EMAIL` once a sending domain is verified).
Without a key the API returns 503 and the form tells the visitor to email directly.

Because this is a server route, the site needs a host that runs Next.js (Vercel,
Netlify, a Node server). It will not work as a purely static export unless the form is
pointed at an external service instead.

## Deployment

The site is built to deploy on [Vercel](https://vercel.com): connect the GitHub repo,
add the `RESEND_*` and `CONTACT_*` environment variables, and point the domain at the
project. Any push to `main` redeploys.

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
