import { Calculator, Code, Settings, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Online Tools | Free SEO & Developer Utility Toolbox",
  description: "Browse our complete collection of free online tools including JSON formatters, password generators, unit converters, and more.",
};

const tools = [
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    description: "Clean and format your JSON data for better readability.",
    icon: Code,
    color: "bg-blue-500",
  },
  {
    name: "Unit Converter",
    slug: "unit-converter",
    description: "Convert between different units of measurement instantly.",
    icon: Calculator,
    color: "bg-green-500",
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    description: "Create secure, random passwords to keep your accounts safe.",
    icon: ShieldCheck,
    color: "bg-purple-500",
  },
  {
    name: "Base64 Encoder",
    slug: "base64-encoder",
    description: "Easily encode and decode strings to Base64 format.",
    icon: Settings,
    color: "bg-orange-500",
  },
  {
    name: "Image Optimizer",
    slug: "image-optimizer",
    description: "Reduce image file size without losing quality.",
    icon: Zap,
    color: "bg-yellow-500",
  },
  {
    name: "Code Beautifier",
    slug: "code-beautifier",
    description: "Format your HTML, CSS, and JS code snippets.",
    icon: Code,
    color: "bg-pink-500",
  },
];

export default function ToolsListPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Our Full <span className="text-blue-600">Tool Collection</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-zinc-400">
          A comprehensive suite of high-quality, privacy-focused utilities designed to speed up your workflow. All tools run directly in your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link 
            key={tool.name} 
            href={`/tools/${tool.slug}`}
            className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl cursor-pointer flex flex-col h-full"
          >
            <div className={`${tool.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inner`}>
              <tool.icon className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{tool.name}</h2>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
              {tool.description}
            </p>
            <div className="flex items-center text-blue-600 font-semibold text-sm">
              Open Tool <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Structured Content for SEO */}
      <section className="mt-24 prose prose-slate dark:prose-invert max-w-none border-t border-slate-200 dark:border-zinc-800 pt-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Why Use Online Toolbox?</h2>
          <p>
            In the modern web development and SEO landscape, having quick access to reliable utilities is crucial. Our online toolbox provides a centralized hub for all your common tasks, from formatting complex JSON structures to generating secure passwords.
          </p>
          <h3>100% Client-Side Processing</h3>
          <p>
            Unlike many other tool sites, we prioritize your security. All calculations and data processing happen within your own browser session. Your sensitive data, images, and code snippets are never transmitted to our servers.
          </p>
          <h3>SEO Optimized and Fast</h3>
          <p>
            Built with Next.js 15, our platform is optimized for lightning-fast load times and perfect SEO scores, ensuring you get the answers you need as quickly as possible.
          </p>
        </div>
      </section>
    </div>
  );
}
