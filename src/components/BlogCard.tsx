import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/lib/blog-posts";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="glass-panel flex h-full flex-col p-6 transition hover:-translate-y-1 sm:p-8">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide uppercase">
        <span className="rounded-full bg-gold-500/15 px-3 py-1 text-gold-700">
          {post.category}
        </span>
        <time dateTime={post.publishedAt} className="text-slate-500">
          {formatBlogDate(post.publishedAt)}
        </time>
        <span className="text-slate-500">{post.readTimeMinutes} min read</span>
      </div>

      <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
        <Link href={`/blog/${post.slug}`} className="transition hover:text-lake-700">
          {post.title}
        </Link>
      </h2>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
        {post.excerpt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-8 inline-flex items-center text-sm font-semibold text-lake-700 transition hover:text-navy-900"
      >
        Read article
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      </Link>
    </article>
  );
}