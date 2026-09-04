import type { NextConfig } from "next";

/**
 * Proxy client portal traffic from idj.events → IDJ Ops on KronServer.
 * Named Cloudflare hostname ops.idj.events is the stable origin (not trycloudflare).
 * Optional override: PORTAL_ORIGIN in Vercel env / .env.local.
 * Client invite links use PUBLIC_BASE_URL=https://www.idj.events in IDJ Ops.
 */
const rawOrigin = (process.env.PORTAL_ORIGIN || "https://ops.idj.events").replace(
  /\/$/,
  "",
);
// Ignore leftover ephemeral quick-tunnel origins; those hostnames die on restart.
const PORTAL_ORIGIN = rawOrigin.includes("trycloudflare.com")
  ? "https://ops.idj.events"
  : rawOrigin;

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json in the
  // home directory otherwise makes Next infer the wrong root (and drags the
  // huge public/ assets into filesystem tracing).
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    if (!PORTAL_ORIGIN) return [];
    return [
      // Client portal pages + form posts + PDFs
      {
        source: "/client/:path*",
        destination: `${PORTAL_ORIGIN}/client/:path*`,
      },
      // Styles/assets used by portal templates (absolute /static/...)
      {
        source: "/static/:path*",
        destination: `${PORTAL_ORIGIN}/static/:path*`,
      },
      // Public booking form → Ops CRM (Lead)
      {
        source: "/api/leads",
        destination: `${PORTAL_ORIGIN}/api/leads`,
      },
      // Public calendars → Ops (recurring karaoke, nightlife, listed events)
      {
        source: "/api/calendar",
        destination: `${PORTAL_ORIGIN}/api/calendar`,
      },
    ];
  },
};

export default nextConfig;
