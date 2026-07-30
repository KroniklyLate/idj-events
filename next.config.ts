import type { NextConfig } from "next";

/**
 * Proxy client portal traffic from idj.events → your IDJ Ops server (via tunnel).
 * Set PORTAL_ORIGIN in Vercel env (or .env.local) to the live tunnel/backend URL, e.g.:
 *   PORTAL_ORIGIN=https://pitch-accountability-sight-foods.trycloudflare.com
 * Client invite links should use PUBLIC_BASE_URL=https://idj.events in IDJ Ops.
 */
const PORTAL_ORIGIN = (
  process.env.PORTAL_ORIGIN ||
  "https://pitch-accountability-sight-foods.trycloudflare.com"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
