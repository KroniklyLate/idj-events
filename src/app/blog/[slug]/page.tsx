import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/BlogPostContent";
import { CTABanner } from "@/components/CTABanner";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import {
  blogPosts,
  formatBlogDate,
  getBlogPost,
  getPublishedBlogPosts,
} from "@/lib/blog-posts";
import { createPageMetadata, siteConfig } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    ...createPageMetadata("blog"),
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: `${siteConfig.siteUrl}${post.coverImage.src}`,
          alt: post.coverImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: [`${siteConfig.siteUrl}${post.coverImage.src}`],
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPublishedBlogPosts()
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 2);

  return (
    <PageBackground
      image={post.coverImage.src}
      imageAlt={post.coverImage.alt}
    >
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        showLogo={false}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="glass-panel p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6 text-sm text-slate-600">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTimeMinutes} min read</span>
            </div>

            <BlogPostContent
              content={post.content}
              venues={post.venues}
              directoryTitle={post.directoryTitle}
              directoryDescription={post.directoryDescription}
            />
          </article>

          {relatedPosts.length > 0 && (
            <div className="mt-10 text-center">
              <p className="text-on-image text-sm font-semibold tracking-wide text-white/90 uppercase">
                More from the blog
              </p>
              <ul className="mt-4 space-y-2">
                {relatedPosts.map((entry) => (
                  <li key={entry.slug}>
                    <Link href={`/blog/${entry.slug}`} className="link-on-image text-base">
                      {entry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="link-on-image inline-flex items-center text-sm font-semibold"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}