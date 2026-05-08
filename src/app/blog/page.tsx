import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev & SEO Blog - Online Toolbox",
  description: "Expert tips, tutorials, and insights on web development, SEO optimization, and digital tools.",
};

const blogPosts = [
  {
    id: 1,
    title: "How to Optimize Your Website for Google Search in 2024",
    excerpt: "Discover the latest SEO trends and techniques to boost your search rankings and drive more organic traffic.",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "SEO",
    slug: "optimize-website-google-search-2024"
  },
  {
    id: 2,
    title: "Top 10 Developer Tools Every Programmer Should Use",
    excerpt: "From formatters to debuggers, these essential tools will significantly improve your coding efficiency and workflow.",
    date: "May 2, 2026",
    readTime: "6 min read",
    category: "Development",
    slug: "top-10-developer-tools"
  },
  {
    id: 3,
    title: "Understanding Unix Timestamps: A Beginner's Guide",
    excerpt: "Learn what Unix timestamps are, how they work, and why they are crucial for modern software development.",
    date: "April 28, 2026",
    readTime: "5 min read",
    category: "Tutorials",
    slug: "understanding-unix-timestamps"
  },
  {
    id: 4,
    title: "How to Optimize API Response Speed with JSON Formatter",
    excerpt: "Learn how formatting and minifying JSON can improve your application performance and reduce bandwidth.",
    date: "May 8, 2026",
    readTime: "7 min read",
    category: "Tutorials",
    slug: "how-to-optimize-api-speed-with-json-formatter"
  },
  {
    id: 5,
    title: "Boost Website Performance: Image Optimization Guide",
    excerpt: "Discover how to reduce image file sizes and improve page load speeds without sacrificing quality.",
    date: "May 8, 2026",
    readTime: "10 min read",
    category: "SEO",
    slug: "boost-website-performance-image-optimization-guide"
  },
  {
    id: 6,
    title: "Secure Your Digital Life: Password Generation Tutorial",
    excerpt: "Learn why complex passwords are your best defense and how to generate them effectively using secure APIs.",
    date: "May 8, 2026",
    readTime: "6 min read",
    category: "Security",
    slug: "secure-your-digital-life-password-generation-tutorial"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Developer & SEO <span className="text-blue-600">Insights</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-zinc-400">
          Stay ahead with the latest tutorials, industry news, and expert tips on web optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full">
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
                <span>{post.category}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 dark:border-zinc-800 pt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
