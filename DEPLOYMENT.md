# Deploying I DJ Events to idj.events

This site is built with **Next.js** and is designed to deploy on **Vercel** with your **GoDaddy** domain.

## Step 1 — Preview locally

```powershell
cd C:\Users\Clint\idj-events
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm.cmd run dev
```

Open http://localhost:3000

## Step 2 — Set up form delivery (Formspree)

1. Create a free account at https://formspree.io
2. Create a new form with destination email: `booking@idj.events`
3. Copy your form ID (the part after `/f/` in the form URL)
4. Create a file `.env.local` in the project root:

```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

5. Redeploy after adding the env var on Vercel (Step 4)

Until this is configured, the contact form shows a fallback message with your phone and email.

## Step 3 — Push to GitHub

1. Create a new repository on https://github.com (e.g. `idj-events`)
2. From the project folder:

```powershell
git init
git add .
git commit -m "Initial I DJ Events website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/idj-events.git
git push -u origin main
```

## Step 4 — Deploy on Vercel

1. Sign up at https://vercel.com (use your GitHub account)
2. **Add New Project** → import your `idj-events` repo
3. Add environment variable:
   - `NEXT_PUBLIC_FORMSPREE_ID` = your Formspree form ID
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
- [ ] Contact form sends email to booking@idj.events
- [ ] Phone link works on mobile (775-233-6501)

## Optional next steps

- Add Google Analytics
- Add social media links in `src/components/Footer.tsx`
- Add a photo gallery page when you have event images
- Set up `booking@idj.events` email in GoDaddy or Google Workspace