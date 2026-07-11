import type { Metadata } from "next";

export const brandAssets = {
  mark128: "/brand/transparent/mark-128.png",
  mark256: "/brand/web/mark-transparent-256.png",
  mark512: "/brand/web/mark-transparent-512.png",
  mark1024: "/brand/transparent/mark-1024.png",
  favicon: "/brand/transparent/mark-128.png",
  appleTouchIcon: "/brand/web/mark-transparent-512.png",
  ogImage: "/brand/web/og-image.jpg",
} as const;

export type SiteImage = {
  src: string;
  alt: string;
};

export const heroImages = {
  home: {
    src: "/images/backgrounds/hero-home.jpg",
    alt: "Lake Tahoe at golden hour with mountains and crystal blue water",
  },
  packages: {
    src: "/images/backgrounds/hero-packages.jpg",
    alt: "Romantic Lake Tahoe lakeside wedding venue at sunset",
  },
  services: {
    src: "/images/backgrounds/hero-services.jpg",
    alt: "Lake Tahoe at twilight with dramatic celebration lighting",
  },
  about: {
    src: "/images/backgrounds/hero-about.jpg",
    alt: "Expansive Lake Tahoe shoreline with mountains and emerald blue water",
  },
  contact: {
    src: "/images/backgrounds/hero-contact.jpg",
    alt: "Wooden pier on calm Lake Tahoe water at dusk with mountain reflections",
  },
  blog: {
    src: "/images/backgrounds/hero-blog.jpg",
    alt: "Lake Tahoe at golden hour with emerald water and snow-capped Sierra mountains",
  },
} as const satisfies Record<string, SiteImage>;

export const brandImageAlt = "I DJ Events — Lake Tahoe wedding DJ logo";

export const siteConfig = {
  name: "I DJ Events",
  tagline: "Tahoe's Premier Wedding DJ — I DJ Events",
  domain: "idj.events",
  siteUrl: "https://idj.events",
  phone: "775-233-6501",
  phoneHref: "tel:+17752336501",
  email: "booking@idj.events",
  emailHref: "mailto:booking@idj.events",
  serviceArea: "Lake Tahoe, Reno, and beyond",
  travelNote: "Travel available",
};

export const ogImageMeta = {
  url: `${siteConfig.siteUrl}${brandAssets.ogImage}`,
  width: 1200,
  height: 630,
  alt: "I DJ Events — Tahoe's Premier Wedding DJ in Lake Tahoe & Reno",
} as const;

export const seo = {
  defaultTitle: "Wedding DJ Lake Tahoe & Reno | I DJ Events",
  defaultDescription:
    "Lake Tahoe's premier wedding DJ. DJ, MC, lighting, ceremony sound, officiant & karaoke for unforgettable weddings in Tahoe, Reno & beyond.",
  titleTemplate: "%s | I DJ Events",
} as const;

export const pageSeo = {
  home: {
    title: { absolute: seo.defaultTitle },
    description: seo.defaultDescription,
    path: "/",
  },
  packages: {
    title: "Lake Tahoe Wedding DJ Packages",
    description:
      "Six custom wedding DJ packages for Lake Tahoe & Reno — sound, lighting, MC & ceremony audio from $1,500 to $4,000. Find the right fit for your celebration.",
    path: "/packages",
  },
  services: {
    title: "Wedding DJ, MC & Lighting Services",
    description:
      "DJ, MC, uplighting, ceremony sound, officiant & karaoke for Lake Tahoe weddings. One team for music, hosting & production at venues across Tahoe & Reno.",
    path: "/services",
  },
  about: {
    title: "About Our Tahoe Wedding DJ Team",
    description:
      "Meet I DJ Events — Lake Tahoe's trusted wedding DJ team. Local venue expertise, full-service production & travel-ready setups for Tahoe, Reno & beyond.",
    path: "/about",
  },
  contact: {
    title: "Book Your Wedding DJ",
    description:
      "Request a quote for your Lake Tahoe wedding DJ. Share your date, venue & vision — call 775-233-6501 or email booking@idj.events. We respond quickly.",
    path: "/contact",
  },
  blog: {
    title: "Lake Tahoe Wedding Blog",
    description:
      "Wedding planning tips, Tahoe venue inspiration, and DJ advice from I DJ Events. Guides for couples celebrating in Lake Tahoe, Reno & beyond.",
    path: "/blog",
  },
} as const;

export function createPageMetadata(page: keyof typeof pageSeo): Metadata {
  const { title, description, path } = pageSeo[page];
  const url = `${siteConfig.siteUrl}${path}`;
  const ogTitle = typeof title === "string" ? `${title} | ${siteConfig.name}` : title.absolute;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [ogImageMeta],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImageMeta.url],
    },
  };
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "DJ Services",
    description:
      "Curated playlists, seamless transitions, and a dance floor that stays packed from cocktails through the last song.",
    icon: "🎧",
  },
  {
    title: "MC & Hosting",
    description:
      "Professional announcements, timeline coordination, and MC services that keep your reception flowing effortlessly.",
    icon: "🎤",
  },
  {
    title: "Lighting Design",
    description:
      "From elegant uplighting to full truss packages with moving heads, lasers, and gobos — we set the mood and the energy.",
    icon: "✨",
  },
  {
    title: "Ceremony Sound",
    description:
      "Crystal-clear audio for your vows, readings, and processional — indoors or outdoors at Tahoe's most stunning venues.",
    icon: "💍",
  },
  {
    title: "Officiant Services",
    description:
      "Personalized ceremonies crafted with care, so your \"I do\" moment feels as unique as your love story.",
    icon: "📜",
  },
  {
    title: "Karaoke",
    description:
      "Add a fun twist to your celebration with a full karaoke setup — perfect for after-party energy or rehearsal dinners.",
    icon: "🎶",
  },
];

export type Package = {
  name: string;
  price: number;
  slug: string;
  highlight?: boolean;
  features: string[];
};

export const packages: Package[] = [
  {
    name: "Starter Package",
    price: 1500,
    slug: "starter",
    features: [
      "Professional DJ for reception, cocktails, dinner, and dancing",
      "Sound system for 25-50 guests",
      "4 LED light bars",
    ],
  },
  {
    name: "Step It Up Package",
    price: 2000,
    slug: "step-it-up",
    features: [
      "Everything in the Starter Package",
      "DJ and MC services for reception and select announcements",
      "Sound system for 50-75 guests",
      "4 LEDs for uplighting",
      "2 club-style party lights with lasers",
    ],
  },
  {
    name: "Take the Leap Package",
    price: 2500,
    slug: "take-the-leap",
    highlight: true,
    features: [
      "Everything in the Step It Up Package",
      "Ceremony sound system and mic for officiant",
      "Sound system for 75-100 guests",
      "8 LED Uplights",
      "4 club-style party lights with lasers",
      "2 moving head wash lights",
    ],
  },
  {
    name: "Forever Package",
    price: 3000,
    slug: "forever",
    features: [
      "Everything in the Take the Leap Package",
      "Dedicated MC/host on the mic plus a dedicated DJ on music",
      "Sound system for 100-150 guests",
      "Full lighting truss + 2 truss bars",
      "6 moving head wash lights",
    ],
  },
  {
    name: "The I Do Package",
    price: 3500,
    slug: "the-i-do",
    features: [
      "Everything in the Forever Package",
      "Sound system for 150-200 guests",
      "2 gobo moving heads",
      "2 five-lamp moving head units",
    ],
  },
  {
    name: "Till The End Package",
    price: 4000,
    slug: "till-the-end",
    features: [
      "Everything in The I Do Package",
      "Complete event coordination",
      "Sound system for 200+ guests",
      "8 moving head wash lights",
      "4 five-lamp moving head units",
    ],
  },
];

export const addOnServices = [
  "Makeup Artists",
  "Hair Stylists",
  "Photographer & Videographer",
  "Chef / Catering Services",
  "Bar tending services",
  "Limousine & Transportation Services",
  "Bounce Houses",
  "Photo Booths",
  "Floral Design / Flower Shop",
  "Personalized song for the couple",
];

export const faqs = [
  {
    question: "Do you travel outside of Lake Tahoe?",
    answer:
      "Yes! We serve Lake Tahoe, Reno, and beyond, with travel available for destination weddings throughout Northern California and Nevada.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Tahoe wedding dates fill quickly, especially June through September. We recommend booking 9–12 months ahead, though we welcome last-minute inquiries when availability allows.",
  },
  {
    question: "Can we customize a package?",
    answer:
      "Absolutely. Every wedding is unique. Reach out with your vision and we'll tailor a package that fits your venue, guest count, and timeline.",
  },
  {
    question: "Do you handle ceremony and reception?",
    answer:
      "Yes — several packages include ceremony audio, and our top tiers offer full MC, coordination, and concert-quality sound for your entire day.",
  },
];