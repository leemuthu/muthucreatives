# Muthu Creatives

Marketing site for [muthucreatives.com](https://muthucreatives.com) — a Houston, TX web design
studio. Next.js App Router, Tailwind CSS v4, React Three Fiber for the homepage hero, and
Framer Motion for scroll reveals.

## Development

```bash
npm install
npm run dev
```

## Contact form

The form at `/contact` posts to `src/app/api/contact/route.ts`, which delivers email through
[Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`
(plus `CONTACT_FROM_EMAIL` once a sending domain is verified). Without a key the API returns
503 and the form shows a mailto fallback.

## Structure

- `src/lib/` — all site content: services, case studies, testimonials, FAQs, and site
  constants (booking URL, email, socials). Copy changes happen here, not in components.
- `src/components/home/` — homepage sections, in page order.
- `src/components/hero/` — the R3F skyline canvas and its static fallback. The canvas only
  mounts on desktop-class devices without `prefers-reduced-motion`.
- `src/app/` — routes: `/services` + one page per service, `/portfolio` + one page per case
  study, `/about`, `/contact`. `sitemap.ts`, `robots.ts`, and `opengraph-image.tsx` are
  generated from the content in `src/lib/`.
- `public/llms.txt` — plain-text site summary for AI answer engines.
