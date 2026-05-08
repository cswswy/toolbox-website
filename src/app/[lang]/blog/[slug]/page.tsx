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
  },
  "how-to-optimize-api-speed-with-json-formatter": {
    title: "How to Optimize API Response Speed with JSON Formatter",
    description: "Learn how formatting and minifying JSON can improve your application performance.",
    date: "May 8, 2026",
    readTime: "7 min read",
    category: "Tutorials",
    content: `
      <p>In modern web development, JSON is the backbone of data exchange. However, unoptimized JSON can lead to slower API response times and increased bandwidth usage.</p>
      
      <h3>The Role of JSON Formatting</h3>
      <p>While human-readable JSON is essential for debugging, production environments benefit from minification. Our <strong>JSON Formatter</strong> tool allows you to switch between beautified and minified versions instantly.</p>
      
      <h3>Best Practices for API Speed</h3>
      <ul>
        <li><strong>Remove Whitespace:</strong> Minifying JSON can reduce payload size by up to 20-30%.</li>
        <li><strong>Compress Data:</strong> Use Gzip or Brotli compression on your server in conjunction with minified JSON.</li>
        <li><strong>Validation:</strong> Always validate your JSON structure to prevent parser errors on the client side.</li>
      </ul>
      
      <p>Using a reliable tool like our online JSON formatter ensures that your data is not only readable during development but also optimized for production.</p>
    `
  },
  "boost-website-performance-image-optimization-guide": {
    title: "Boost Website Performance: The Ultimate Image Optimization Guide",
    description: "Discover how to reduce image file sizes and improve page load speeds without sacrificing quality.",
    date: "May 8, 2026",
    readTime: "10 min read",
    category: "SEO",
    content: `
      <p>Images often account for the largest portion of a webpage's total byte size. Slow-loading images directly impact your Google Core Web Vitals and SEO rankings.</p>
      
      <h3>Why Optimization Matters</h3>
      <p>Large, uncompressed images frustrate users and increase bounce rates. By using our <strong>Image Optimizer</strong>, you can significantly reduce file sizes while maintaining visual clarity.</p>
      
      <h3>Step-by-Step Optimization Process</h3>
      <ol>
        <li><strong>Choose the Right Format:</strong> Use WebP for the best balance of quality and size, or JPEG for photographs.</li>
        <li><strong>Resize Before Upload:</strong> Don't upload a 4000px image if it will only be displayed at 800px.</li>
        <li><strong>Lossy vs. Lossless:</strong> Most web use cases benefit from lossy compression, which removes invisible data to save space.</li>
      </ol>
      
      <p>Our tool runs entirely in your browser, ensuring your original high-resolution images never leave your computer while providing you with optimized versions ready for the web.</p>
    `
  },
  "secure-your-digital-life-password-generation-tutorial": {
    title: "Secure Your Digital Life: A Guide to Strong Password Generation",
    description: "Learn why complex passwords are your best defense and how to generate them effectively.",
    date: "May 8, 2026",
    readTime: "6 min read",
    category: "Security",
    content: `
      <p>Data breaches are becoming increasingly common. A weak password is like leaving your front door unlocked. Security experts recommend using unique, complex passwords for every single account.</p>
      
      <h3>What Makes a Password Strong?</h3>
      <p>Entropy is the measure of randomness. A high-entropy password is much harder for hackers to crack using brute-force attacks.</p>
      
      <h3>How to Use the Password Generator</h3>
      <p>Our <strong>Password Generator</strong> uses the secure Web Crypto API to ensure true randomness. Follow these tips:</p>
      <ul>
        <li><strong>Length:</strong> Aim for at least 16 characters.</li>
        <li><strong>Character Variety:</strong> Include numbers, symbols, and a mix of uppercase and lowercase letters.</li>
        <li><strong>Avoid Patterns:</strong> Never use dictionary words or personal information like birthdays.</li>
      </ul>
      
      <p>Your security is our priority. That's why our generator works entirely offline in your browser, so your passwords are never sent over the internet.</p>
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
