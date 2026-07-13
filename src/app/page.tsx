import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CTABanner } from "@/components/CTABanner";
import { PackageCard } from "@/components/PackageCard";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  createPageMetadata,
  heroImages,
  packages,
  reviewLinks,
  services,
  siteConfig,
  testimonialPlaceholders,
  trustSignals,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("home");

export default function HomePage() {
  const featuredPackages = packages.filter((pkg) =>
    ["starter", "take-the-leap", "till-the-end"].includes(pkg.slug),
  );

  return (
    <PageBackground
      image={heroImages.home.src}
      imageAlt={heroImages.home.alt}
    >
      <PageHero
        eyebrow="Lake Tahoe · Weddings · Celebrations"
        title={
          <>
            Tahoe&apos;s Premier Wedding DJ —
            <span className="mt-1 block">I&nbsp;DJ&nbsp;Events</span>
          </>
        }
        description="From intimate lakeside ceremonies to all-night dance parties, I DJ Events delivers professional DJ, MC, lighting, and ceremony sound tailored to your Tahoe wedding vision."
        tall
      >
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            View Packages
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/15 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            { label: "Service Area", value: siteConfig.serviceArea },
            { label: "Starting at", value: "$1,500" },
            { label: "Travel", value: siteConfig.travelNote },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-panel-soft w-full px-5 py-4 sm:w-[calc((100%-3rem)/3)]"
            >
              <p className="text-xs font-semibold tracking-widest text-lake-700 uppercase">
                {stat.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-navy-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything your celebration needs"
            description="DJ, MC, lighting, ceremony audio, officiant services, and karaoke — all coordinated with Tahoe venues in mind."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="glass-panel w-full p-6 transition hover:-translate-y-0.5 sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
              >
                <span className="text-3xl" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="link-on-image text-sm">
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Clear pricing, unforgettable experiences"
            description="Six thoughtfully designed packages — from elegant receptions to full concert-quality productions with complete event coordination."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.slug}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]"
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
            >
              See All Packages & Add-Ons
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why I DJ Events"
                title="Built for Lake Tahoe weddings"
                description="Mountain venues, outdoor ceremonies, and unpredictable weather — we know Tahoe and we come prepared."
                centered={false}
              />
              <ul className="mt-8 space-y-4">
                {trustSignals.slice(0, 4).map((item) => (
                  <li key={item.title} className="text-on-image flex gap-3 text-white">
                    <span className="text-gold-300" aria-hidden="true">
                      ✦
                    </span>
                    <span>
                      <strong className="font-semibold">{item.title}.</strong>{" "}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="link-on-image mt-8 inline-flex text-sm">
                Learn more about us →
              </Link>
            </div>

            <div className="glass-panel p-8 sm:p-10">
              <div className="mb-6 flex justify-center sm:justify-start">
                <BrandLogo size="sm" className="h-14 w-14" />
              </div>
              <p className="font-display text-2xl leading-snug font-medium italic text-navy-900 sm:text-3xl">
                &ldquo;{testimonialPlaceholders[0].quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold tracking-wide text-gold-600 uppercase">
                — {testimonialPlaceholders[0].attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kind Words"
            title="What couples can expect"
            description="Client reviews are coming soon on The Knot, WeddingWire, and Google. Until then, here’s our commitment to every couple we serve."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {testimonialPlaceholders.map((item) => (
              <blockquote
                key={item.context}
                className="glass-panel flex w-full flex-col p-6 sm:w-[calc(50%-0.75rem)] sm:p-8 md:w-[calc((100%-3rem)/3)]"
              >
                <p className="flex-1 text-base leading-relaxed text-slate-700 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold text-navy-900">{item.attribution}</p>
                  <p className="text-xs tracking-wide text-gold-600 uppercase">
                    {item.context}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {reviewLinks.map((link) => (
              <span
                key={link.label}
                className="glass-panel-soft rounded-full px-4 py-2 text-sm font-medium text-slate-700"
                title={link.comingSoon ? "Profile coming soon" : undefined}
              >
                {link.label}
                {link.comingSoon ? " · Coming soon" : ""}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}