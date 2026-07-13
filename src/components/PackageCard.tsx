import Link from "next/link";
import type { Package } from "@/lib/site-data";

type PackageCardProps = {
  pkg: Package;
  compact?: boolean;
};

export function PackageCard({ pkg, compact = false }: PackageCardProps) {
  const formattedPrice = pkg.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <article
      className={`glass-panel relative flex h-full flex-col p-6 transition hover:-translate-y-1 sm:p-8 ${
        pkg.highlight ? "ring-2 ring-gold-400/60" : ""
      }`}
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold tracking-wide text-navy-950 uppercase">
          Most Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
          {pkg.name}
        </h3>
        <p className="mt-2 font-display text-3xl font-bold text-lake-700">
          {formattedPrice}
        </p>
        <p className="mt-2 text-sm font-medium text-slate-600">
          {pkg.hours} · {pkg.zones}
        </p>
      </div>

      <ul className={`flex-1 space-y-3 ${compact ? "text-sm" : "text-sm sm:text-base"}`}>
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-slate-700">
            <span className="mt-1 shrink-0 text-gold-600" aria-hidden="true">
              ✦
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/contact?package=${pkg.slug}`}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
          pkg.highlight
            ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
            : "bg-navy-900 text-white hover:bg-navy-800"
        }`}
      >
        Request This Package
      </Link>
    </article>
  );
}
