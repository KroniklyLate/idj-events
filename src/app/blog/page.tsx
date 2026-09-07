import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTABanner } from "@/components/CTABanner";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getPublishedBlogPosts } from "@/lib/blog-posts";
import { createPageMetadata, heroImages } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("blog");

export default function BlogPage() {
  const posts = getPublishedBlogPosts();

  return (
    <PageBackground
      image={heroImages.blog.src}
      imageAlt={heroImages.blog.alt}
    >
      <PageHero
        eyebrow="Lake Tahoe Wedding Insights"
        title="The I DJ Events Blog"
        description="Planning tips, venue inspiration, and DJ advice for Lake Tahoe and Reno weddings."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <SectionHeading
                eyebrow="Latest Articles"
                title="Stories, tips & celebration inspiration"
                description="Guides for couples planning weddings across Lake Tahoe, Reno, and beyond."
              />

              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {posts.map((post) => (
                  <div key={post.slug} className="w-full md:w-[calc(50%-1rem)]">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="glass-panel mx-auto max-w-2xl p-8 text-center sm:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
                Coming Soon
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900">
                New articles on the way
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                We&apos;re putting together planning guides, Tahoe venue tips, and DJ advice
                for your celebration. Check back soon for the first posts.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}