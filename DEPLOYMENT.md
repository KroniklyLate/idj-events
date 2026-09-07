# Deploying I DJ Events to idj.events

This site is built with **Next.js** and is designed to deploy on **Vercel** with your **GoDaddy** domain.

## Step 1 — Preview locally

```powershell
cd C:\Users\Clint\idj-events
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm.cmd run dev
```

Open http://localhost:3000

## Step 2 — Form delivery (IDJ Ops)

Contact-form inquiries are delivered by the **IDJ Ops** app at `ops.idj.events`
(the CRM's `/api/leads` endpoint). No third-party form service is required.

Delivery is resilient, so a lead is never lost:

1. POST to same-origin `/api/leads` (rewritten to Ops via `next.config.ts`)
2. Fall back to opening the visitor's email app with their details pre-filled

Optional overrides: `PORTAL_ORIGIN`, `NEXT_PUBLIC_LEAD_ENDPOINT` — see `.env.local.example`.
For a normal deploy you don't need to set anything.

## Step 3 — Push to GitHub

1. Create a new repository at https://github.com/new (e.g. `idj-events`) under account **KroniklyLate**
2. From the project folder:

```powershell
git init
git add .
git commit -m "Initial I DJ Events website"
git branch -M main
git remote add origin https://github.com/KroniklyLate/idj-events.git
git push -u origin main
```

## Step 4 — Deploy on Vercel

1. Sign up at https://vercel.com (use your GitHub account)
2. **Add New Project** → import your `idj-events` repo
3. No environment variables are required. (Optional overrides:
   `PORTAL_ORIGIN`, `NEXT_PUBLIC_LEAD_ENDPOINT` — see `.env.local.example`.)
4. Click **Deploy**
5. Vercel gives you a preview URL like `idj-events.vercel.app`

## Step 5 — Connect GoDaddy domain (idj.events)

### In Vercel

1. Project → **Settings** → **Domains**
2. Add `idj.events`
3. Add `www.idj.events`
4. Vercel shows the DNS records you need

### In GoDaddy

1. Log in → **My Products** → **idj.events** → **DNS** (Manage DNS)
2. Add/update records as Vercel instructs. Typically:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 76.76.21.21              |
| CNAME | www  | cname.vercel-dns.com     |

> Use the exact values Vercel shows — they may differ slightly.

3. Remove old A/CNAME records that conflict (e.g. GoDaddy parking page)
4. Save and wait 15 minutes to 48 hours for DNS propagation

## Step 6 — Verify launch

- [ ] https://idj.events loads with padlock (HTTPS)
- [ ] All pages work on mobile
- [ ] Contact form creates a lead in IDJ Ops (or falls back to email)
- [ ] Calendar page loads public events from ops.idj.events
- [ ] Phone link works on mobile (775-233-6501)

## Optional next steps

- Add Google Analytics
- Add social media links in `src/components/Footer.tsx`
- Add a photo gallery page when you have event images
- Set up `booking@idj.events` email in GoDaddy or Google Workspace