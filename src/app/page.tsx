import { ArrowRight, Calculator, Code, Settings, ShieldCheck, Zap, QrCode, Clock, FileText, Type } from "lucide-react";
import Link from "next/link";

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
    name: "QR Code Generator",
    slug: "qrcode-generator",
    description: "Generate custom QR codes for URLs and text instantly.",
    icon: QrCode,
    color: "bg-indigo-500",
  },
  {
    name: "Unix Timestamp",
    slug: "timestamp-converter",
    description: "Convert Unix timestamps to human-readable dates and back.",
    icon: Clock,
    color: "bg-emerald-500",
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
  {
    name: "Color Converter",
    slug: "color-converter",
    description: "Convert between HEX, RGB, and HSL color formats.",
    icon: Settings,
    color: "bg-rose-500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
          Everything You Need to <span className="text-blue-600">Build & Optimize</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10">
          Professional-grade online tools for developers, SEO experts, and creators. 
          Fast, free, and privacy-focused.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
            Explore All Tools
          </button>
          <button className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all">
            View Tutorials
          </button>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold tracking-tight">Popular Tools</h2>
          <a href="/tools" className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link 
              key={tool.name} 
              href={`/tools/${tool.slug}`}
              className="group p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer"
            >
              <div className={`${tool.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-inner`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Section / How-to */}
      <section className="container mx-auto bg-blue-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Why use our Online Toolbox?</h2>
          <ul className="space-y-4 text-blue-100">
            <li className="flex gap-3">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" />
              <span><strong>Privacy First:</strong> Your data never leaves your browser. All processing is done locally for maximum security.</span>
            </li>
            <li className="flex gap-3">
              <Zap className="w-6 h-6 flex-shrink-0" />
              <span><strong>Lightning Fast:</strong> Optimized for speed, our tools load instantly and provide results in milliseconds.</span>
            </li>
            <li className="flex gap-3">
              <Calculator className="w-6 h-6 flex-shrink-0" />
              <span><strong>Free Forever:</strong> No subscriptions, no hidden fees. Just high-quality tools for everyone.</span>
            </li>
          </ul>
        </div>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Developer Resources / Features Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for Professionals</h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Our tools are designed to streamline your development and SEO workflow with precision and speed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Developer Centric</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              From JSON formatting to Base64 encoding, we provide the essential utilities developers use every single day.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">SEO Optimized</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              Improve your site's performance with our image optimizer and code beautifier, designed to help your pages load faster.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Safe & Secure</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              We never store your data. Everything happens client-side, making it safe to process even sensitive configuration files.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 border-t border-slate-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto grid gap-8">
          <div className="space-y-2">
            <h4 className="font-bold text-lg">Are these tools really free?</h4>
            <p className="text-slate-600 dark:text-zinc-400">Yes, all our tools are 100% free to use with no hidden costs, subscriptions, or limits.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg">Do you store my data?</h4>
            <p className="text-slate-600 dark:text-zinc-400">Never. Our tools are built to run entirely in your web browser. Your data stays on your machine.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg">Can I request a new tool?</h4>
            <p className="text-slate-600 dark:text-zinc-400">Absolutely! We are constantly adding new utilities. Feel free to contact us with your suggestions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
