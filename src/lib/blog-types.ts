export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogVenue = {
  name: string;
  area: string;
  type: string;
  address?: string;
  phone?: string;
  hours?: string;
  email?: string;
  website: string;
  notes?: string;
};

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; image: BlogImage }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  readTimeMinutes: number;
  coverImage: BlogImage;
  content: BlogContentBlock[];
  venues?: BlogVenue[];
  directoryTitle?: string;
  directoryDescription?: string;
};