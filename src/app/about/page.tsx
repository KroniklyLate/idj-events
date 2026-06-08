import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, heroImages, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About I DJ Events",
  description:
    "Learn about I DJ Events — Lake Tahoe's premier wedding DJ serving Lake Tahoe, Reno, and beyond.",
};

export default function AboutPage() {
  return (
    <PageBackground
      image={heroImages.about}
      imageAlt="Expansive Lake Tahoe shoreline with mountains and emerald blue water"
    >
      <PageHero
        eyebrow="About Us"
        title="Tahoe weddings, elevated"
        description="I DJ Events brings professional DJ, MC, and production expertise to one of the most beautiful places to say 'I do.'"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="glass-panel space-y-6 p-8 text-base leading-relaxed text-slate-700">
              <p>
                Based in the heart of Lake Tahoe, <strong className="text-navy-900">I DJ Events</strong> specializes
                in weddings that blend natural beauty with unforgettable energy.
                Whether you&apos;re planning an intimate shoreline ceremony or a
                grand reception under the stars, we bring the sound, lighting,
                and hosting expertise to match the moment.
              </p>
              <p>
                Our approach is simple: listen first, plan thoughtfully, and
                execute flawlessly. From your first dance to the final song of
                the night, we coordinate with your vendors, honor your timeline,
                and keep the dance floor alive.
              </p>
              <p>
                With packages ranging from elegant starter setups to full
                concert-quality productions with complete event coordination, we
                scale our services to your venue, guest count, and vision — never
                the other way around.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Local expertise",
                  body: `We know ${siteConfig.serviceArea} — the venues, the logistics, and the magic that makes Tahoe weddings unforgettable.`,
                },
                {
                  title: "Full-service production",
                  body: "Sound, lighting, MC, ceremony audio, officiant, and karaoke — coordinated under one roof.",
                },
                {
                  title: "Travel ready",
                  body: `${siteConfig.travelNote} for destination celebrations across Northern California and Nevada.`,
                },
              ].map((item) => (
                <div key={item.title} className="glass-panel p-6">
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Have more questions? Reach out anytime — we're happy to help."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass-panel group p-5">
                <summary className="cursor-pointer list-none font-semibold text-navy-900">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-gold-600 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}