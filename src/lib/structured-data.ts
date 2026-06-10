import { brandAssets, packages, seo, services, siteConfig } from "@/lib/site-data";

const organizationId = `${siteConfig.siteUrl}/#organization`;
const websiteId = `${siteConfig.siteUrl}/#website`;

function absoluteUrl(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}

export function getStructuredDataGraph() {
  const offerCatalog = {
    "@type": "OfferCatalog",
    name: "Wedding DJ Packages",
    itemListElement: packages.map((pkg, index) => ({
      "@type": "Offer",
      position: index + 1,
      url: absoluteUrl("/packages"),
      price: pkg.price,
      priceCurrency: "USD",
      itemOffered: {
        "@type": "Service",
        name: pkg.name,
        description: pkg.features.join(". "),
        provider: { "@id": organizationId },
        areaServed: siteConfig.serviceArea,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description: seo.defaultDescription,
        publisher: { "@id": organizationId },
        inLanguage: "en-US",
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": organizationId,
        name: siteConfig.name,
        description: seo.defaultDescription,
        url: siteConfig.siteUrl,
        image: absoluteUrl(brandAssets.mark512),
        logo: absoluteUrl(brandAssets.mark512),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$1500-$4000",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Check",
        founder: {
          "@type": "Person",
          name: "Clint Davidson",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "South Lake Tahoe",
          addressRegion: "CA",
          postalCode: "96150",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "Place", name: "Lake Tahoe" },
          {
            "@type": "City",
            name: "South Lake Tahoe",
            containedInPlace: { "@type": "State", name: "California" },
          },
          {
            "@type": "City",
            name: "Incline Village",
            containedInPlace: { "@type": "State", name: "Nevada" },
          },
          {
            "@type": "City",
            name: "Reno",
            containedInPlace: { "@type": "State", name: "Nevada" },
          },
          {
            "@type": "AdministrativeArea",
            name: "Northern California",
          },
          {
            "@type": "AdministrativeArea",
            name: "Northern Nevada",
          },
        ],
        serviceType: services.map((service) => service.title),
        knowsAbout: [
          "Wedding DJ",
          "Wedding MC",
          "Wedding lighting design",
          "Ceremony sound",
          "Wedding officiant",
          "Karaoke",
          "Lake Tahoe weddings",
        ],
        hasOfferCatalog: offerCatalog,
      },
    ],
  };
}