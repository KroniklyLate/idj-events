# I DJ Events — idj.events

Marketing site for **I DJ Events**, Lake Tahoe's wedding DJ / MC / lighting /
ceremony-sound service. Built with **Next.js 16** (App Router, Turbopack),
**React 19**, **TypeScript**, and **Tailwind CSS v4**. Deployed on **Vercel**.

## Getting started

```powershell
cd C:\Users\Clint\idj-events
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000.

Scripts: `dev`, `build`, `start`, `lint`, plus brand-asset generators
(`export-brand`, `export-embroidery`, `export-og`) in `scripts/`.

## Architecture

- **`src/app/`** — routes: home, packages, services, calendar, blog (+ posts),
  about, contact, plus `sitemap.ts` and `robots.ts`.
- **`src/components/`** — presentational + interactive components
  (`ContactForm`, `PublicCalendar`, `Header`, `Footer`, hero/section building
  blocks).
- **`src/lib/site-data.ts`** — **single source of truth**: packages, pricing,
  add-ons, services, venues, FAQs, nav, and all SEO/metadata. Edit content here.
- **`src/lib/structured-data.ts`** — JSON-LD graph (LocalBusiness, OfferCatalog).
- **`src/lib/calendar.ts`** — typed client for the Ops calendar API.

## IDJ Ops integration

Lead capture and the public calendar are served by the **IDJ Ops** app at
`ops.idj.events` (running on KronServer, exposed via a named Cloudflare
hostname). `next.config.ts` proxies these paths to Ops:

| Path            | Purpose                                  |
|-----------------|------------------------------------------|
| `/client/*`     | Client portal pages                      |
| `/static/*`     | Portal template assets                   |
| `/api/leads`    | Contact-form → Ops CRM                    |
| `/api/calendar` | Public events (karaoke, nightlife, etc.) |

The contact form is resilient: it posts to Ops, falls back to the same-origin
proxy, then to a pre-filled `mailto:` hand-off — so a lead is never lost.
Private weddings are intentionally kept off the public calendar.

## Configuration

No environment variables are required; the app ships with working defaults.
Optional overrides (`PORTAL_ORIGIN`, `NEXT_PUBLIC_LEAD_ENDPOINT`) are documented
in `.env.local.example`.

## Deploying

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the full Vercel + GoDaddy DNS walkthrough.

## Notes

- `public/Insta360/` holds large raw event footage and is git-ignored — it is
  not part of the deploy.
- Read `AGENTS.md` before changing framework-level code: this project tracks a
  fast-moving Next.js release, so check `node_modules/next/dist/docs/` rather
  than relying on older conventions.
</content>
