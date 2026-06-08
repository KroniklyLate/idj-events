export const heroImages = {
  home: "/images/backgrounds/hero-home.jpg",
  packages: "/images/backgrounds/hero-packages.jpg",
  services: "/images/backgrounds/hero-services.jpg",
  about: "/images/backgrounds/hero-about.jpg",
  contact: "/images/backgrounds/hero-contact.jpg",
} as const;

export const siteConfig = {
  name: "I DJ Events",
  tagline: "Tahoe's Premier Wedding DJ — I DJ Events",
  domain: "idj.events",
  phone: "775-233-6501",
  phoneHref: "tel:+17752336501",
  email: "booking@idj.events",
  emailHref: "mailto:booking@idj.events",
  serviceArea: "Lake Tahoe and surrounding areas",
  travelNote: "Travel available",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
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
      "Professional announcements, timeline coordination, and light hosting that keeps your reception flowing effortlessly.",
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
      "Sound system for 25–50 guests",
      "4 Light Bars",
      "4 Hour DJ Service",
    ],
  },
  {
    name: "Step It Up Package",
    price: 2000,
    slug: "step-it-up",
    features: [
      "DJ with light hosting for reception and select announcements",
      "Sound system for 50–75 guests",
      "8 LED PAR cans",
      "2 club-style party lights with lasers",
      "6 Hour DJ Service",
    ],
  },
  {
    name: "Take the Leap Package",
    price: 2500,
    slug: "take-the-leap",
    highlight: true,
    features: [
      "Full DJ and MC services with Ceremony Audio",
      "Sound system for 75–100 guests",
      "12 LED PAR cans",
      "2 LED light bars",
      "4 club-style party lights with lasers",
      "2 moving head wash lights",
      "6 Hour DJ Service",
    ],
  },
  {
    name: "Forever Package",
    price: 3000,
    slug: "forever",
    features: [
      "Acts as day-of wedding planner for music and flow",
      "Sound system for 100–150 guests",
      "Full lighting truss + 2 truss bars",
      "16 LED PAR cans",
      "6 moving head wash lights",
      "Choice of linen colors",
      "6 Hour DJ Service",
    ],
  },
  {
    name: "The I Do Package",
    price: 3500,
    slug: "the-i-do",
    features: [
      "Includes outdoor ceremony sound system",
      "Sound system for 150–200 guests",
      "Full lighting truss + 2 truss bars",
      "20 LED PAR cans",
      "6 moving head wash lights",
      "2 gobo moving heads",
      "2 five-lamp moving head units",
      "7 Hour DJ Service",
    ],
  },
  {
    name: "Till The End Package",
    price: 4000,
    slug: "till-the-end",
    features: [
      "Complete event coordination and ceremony audio",
      "Sound system for 200+ guests",
      "Extended lighting truss + 4 truss bars",
      "24 LED PAR cans",
      "8 moving head wash lights",
      "2 gobo moving heads",
      "4 five-lamp moving head units",
      "8 Hour DJ Service",
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
      "Yes! We serve Lake Tahoe and surrounding areas, and travel is available for destination weddings throughout Northern California and Nevada.",
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