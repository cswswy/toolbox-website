import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";

const blogPostsConfig: Record<string, {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  "optimize-website-google-search-2024": {
    title: "How to Optimize Your Website for Google Search in 2024",
    description: "Discover the latest SEO trends and techniques to boost your search rankings.",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "SEO",
    content: `
      <p>Search Engine Optimization (SEO) is a constantly evolving field. As we move through 2024, Google's algorithms have become more sophisticated, focusing heavily on user experience and "helpful content."</p>
      
      <h3>1. Focus on EEAT</h3>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (EEAT) are more important than ever. Ensure your content is written by people with actual experience in the field.</p>
      
      <h3>2. Core Web Vitals</h3>
      <p>Site speed and responsiveness are critical ranking factors. Use tools like our <strong>Image Optimizer</strong> to reduce page load times.</p>
      
      <h3>3. Helpful Content is King</h3>
      <p>Don't just write for keywords. Write to solve actual problems for your users. Google's "Helpful Content Update" specifically rewards sites that provide genuine value.</p>
    `
  },
  "top-10-developer-tools": {
    title: "Top 10 Developer Tools Every Programmer Should Use",
    description: "Essential tools to improve your coding efficiency and workflow.",
    date: "May 2, 2026",
    readTime: "6 min read",
    category: "Development",
    content: `
      <p>Being a productive developer isn't just about writing code; it's about using the right tools to automate mundane tasks.</p>
      
      <h3>1. Visual Studio Code</h3>
      <p>The industry standard for a reason. Its vast extension ecosystem is unmatched.</p>
      
      <h3>2. JSON Formatters</h3>
      <p>When working with APIs, a good formatter is essential. Check out our <strong>JSON Formatter</strong> for instant, browser-based cleaning.</p>
      
      <h3>3. Git and GitHub</h3>
      <p>Version control is non-negotiable for modern software development.</p>
    `
  },
  "understanding-unix-timestamps": {
    title: "Understanding Unix Timestamps: A Beginner's Guide",
    description: "Learn what Unix timestamps are and why they are crucial.",
    date: "April 28, 2026",
    readTime: "5 min read",
    category: "Tutorials",
    content: `
      <p>Unix time is a system for describing points in time. It is defined as the number of seconds that have elapsed since January 1st, 1970 (UTC).</p>
      
      <h3>Why use Unix Timestamps?</h3>
      <p>They are platform-independent and make time calculations (like finding the duration between two events) very simple.</p>
      
      <h3>Converting Timestamps</h3>
      <p>Human-readable dates are great for people, but computers love timestamps. You can use our <strong>Timestamp Converter</strong> to switch between the two formats easily.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsConfig[slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsConfig[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to Blog
      </Link>
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <span>{post.category}</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div 
          className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
