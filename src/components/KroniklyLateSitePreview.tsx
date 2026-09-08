import Image from "next/image";
import { siteConfig } from "@/lib/site-data";

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/**
 * Clickable preview of the Kronikly Late nightlife site.
 * Browser-chrome mock with live brand assets; entire card links out.
 */
export function KroniklyLateSitePreview() {
  const displayHost = "www.kroniklylate.com";
  const href = siteConfig.nightlifeUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mx-auto block w-full max-w-3xl rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
      aria-label="Open the Kronikly Late nightlife site (opens in a new tab)"
    >
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-navy-950 shadow-2xl shadow-black/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold-400/50 group-hover:shadow-gold-900/30">
        <div className="flex items-center gap-3 border-b border-white/10 bg-navy-950/95 px-4 py-3">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5">
            <span className="shrink-0 text-[11px] text-emerald-400/90">https://</span>
            <span className="truncate text-xs font-medium tracking-wide text-white/90 sm:text-sm">
              {displayHost}
            </span>
          </div>
          <ExternalLinkIcon className="h-4 w-4 shrink-0 text-white/50 transition-colors group-hover:text-gold-400" />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-navy-950 sm:aspect-[16/9]">
          <Image
            src="https://www.kroniklylate.com/hero.jpg"
            alt="Kronikly Late — Reno and Tahoe nightlife DJ site preview"
            fill
            className="object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/25" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="relative mb-4 h-16 w-16 sm:h-20 sm:w-20">
              <Image
                src="https://www.kroniklylate.com/brand/avatar-512.png"
                alt=""
                fill
                className="object-contain drop-shadow-lg"
                sizes="80px"
              />
            </div>
            <p className="mb-2 text-[10px] uppercase tracking-[3px] text-white/75 sm:text-xs">
              Reno · Sparks · Lake Tahoe · Nightlife
            </p>
            <p className="max-w-md text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl">
              Kronikly Late
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/75">
              Nightclub DJ · Karaoke host · Residencies and late-night sets
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-16 sm:p-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold tracking-wide text-white backdrop-blur transition-colors group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 sm:text-sm">
              Open {displayHost}
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-white/60 transition-colors group-hover:text-white/80">
        Live preview — click to open Kronikly Late booking
      </p>
    </a>
  );
}
