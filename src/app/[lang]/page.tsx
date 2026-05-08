import { ArrowRight, Calculator, Code, Settings, ShieldCheck, Zap, QrCode, Clock, FileText, Type } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const tools = [
  // ... (keeping tools array as is for now, but name/description will be localized in next step or via dictionary)
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
  {
    name: "Markdown Preview",
    slug: "markdown-previewer",
    description: "Real-time Markdown editor with live HTML preview.",
    icon: FileText,
    color: "bg-orange-600",
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    description: "Convert text to UPPERCASE, lowercase, and more.",
    icon: Type,
    color: "bg-cyan-500",
  },
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'zh');

  return (
    <div className="flex flex-col gap-16 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
          {dict.home.title.split('&').map((part, i) => (
            i === 1 ? <span key={i} className="text-blue-600">& {part}</span> : part
          ))}
        </h1>
        <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10">
          {dict.home.subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Link href={`/${lang}/tools`} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
            {dict.home.exploreAll}
          </Link>
          <Link href={`/${lang}/blog`} className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all">
            {dict.home.viewTutorials}
          </Link>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold tracking-tight">{dict.common.popularTools}</h2>
          <Link href={`/${lang}/tools`} className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
            {dict.common.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link 
              key={tool.name} 
              href={`/${lang}/tools/${tool.slug}`}
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
          <h2 className="text-3xl font-bold mb-6">{dict.home.whyUse}</h2>
          <ul className="space-y-4 text-blue-100">
            <li className="flex gap-3">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" />
              <span><strong>{dict.home.privacyFirst}:</strong> {dict.home.privacyFirstDesc}</span>
            </li>
            <li className="flex gap-3">
              <Zap className="w-6 h-6 flex-shrink-0" />
              <span><strong>{dict.home.lightningFast}:</strong> {dict.home.lightningFastDesc}</span>
            </li>
            <li className="flex gap-3">
              <Calculator className="w-6 h-6 flex-shrink-0" />
              <span><strong>{dict.home.freeForever}:</strong> {dict.home.freeForeverDesc}</span>
            </li>
          </ul>
        </div>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Developer Resources / Features Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{dict.home.builtForPros}</h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {dict.home.builtForProsDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.home.devCentric}</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              {dict.home.devCentricDesc}
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.home.seoOptimized}</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              {dict.home.seoOptimizedDesc}
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.home.safeSecure}</h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
              {dict.home.safeSecureDesc}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 border-t border-slate-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-12 text-center">{dict.home.faq}</h2>
        <div className="max-w-3xl mx-auto grid gap-8">
          <div className="space-y-2">
            <h4 className="font-bold text-lg">{dict.home.faq1Q}</h4>
            <p className="text-slate-600 dark:text-zinc-400">{dict.home.faq1A}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg">{dict.home.faq2Q}</h4>
            <p className="text-slate-600 dark:text-zinc-400">{dict.home.faq2A}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg">{dict.home.faq3Q}</h4>
            <p className="text-slate-600 dark:text-zinc-400">{dict.home.faq3A}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
