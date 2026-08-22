import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/20 bg-white/10 text-white/90 backdrop-blur-lg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <BrandLogo href="/" size="md" className="h-16 w-16" />
          <p className="mt-4 font-display text-2xl font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm">
            Serving {siteConfig.serviceArea}
            <br />
            {siteConfig.travelNote}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Get in Touch
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${siteConfig.domain}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.domain}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.nightlifeUrl}
                className="transition-colors hover:text-white"
                rel="noopener noreferrer"
              >
                Nightlife &amp; karaoke · {siteConfig.nightlifeName}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}