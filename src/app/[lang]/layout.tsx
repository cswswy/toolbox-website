import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "../globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: {
      default: lang === 'zh' ? "在线工具箱 - 免费 SEO 与开发者工具" : "Online Toolbox - Free SEO & Developer Tools",
      template: "%s | Online Toolbox"
    },
    description: lang === 'zh' ? "为开发者和 SEO 专业人士提供的一系列免费、高质量的在线工具。快速、安全且易于使用。" : "A collection of free, high-quality online tools for developers and SEO professionals. Fast, secure, and easy to use.",
    metadataBase: new URL("https://cswswy.cn"),
    alternates: {
      canonical: `https://cswswy.cn/${lang}`,
      languages: {
        'en': 'https://cswswy.cn/en',
        'zh': 'https://cswswy.cn/zh',
      },
    },
    verification: {
      google: "Zy9c22J9I91n6lacSWUgKEBxsGl89w6OScBLWbMv4Ww",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'zh');

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50">
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 dark:border-zinc-800">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <Link href={`/${lang}`} className="text-xl font-bold tracking-tight">ToolBox</Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link href={`/${lang}/tools`} className="hover:text-blue-600 transition-colors">{dict.common.allTools}</Link>
                <Link href={`/${lang}/blog`} className="hover:text-blue-600 transition-colors">{dict.common.blog}</Link>
                <Link href={`/${lang}/about`} className="hover:text-blue-600 transition-colors">{dict.common.about}</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher lang={lang} />
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                {dict.common.getStarted}
              </button>
            </div>
          </div>
        </header>
        
        <main className="flex-1 text-inherit">
          {children}
        </main>

        <footer className="border-t bg-white dark:bg-zinc-900 dark:border-zinc-800">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold mb-4">ToolBox</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  {lang === 'zh' ? "让网络变得更好，一次一个工具。免费、快速、安全。" : "Making the web better, one tool at a time. Free, fast, and secure."}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{dict.common.tools}</h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-zinc-400">
                  <li><Link href={`/${lang}/tools/json-formatter`} className="hover:text-blue-600">JSON Formatter</Link></li>
                  <li><Link href={`/${lang}/tools/unit-converter`} className="hover:text-blue-600">Unit Converter</Link></li>
                  <li><Link href={`/${lang}/tools/password-generator`} className="hover:text-blue-600">Password Generator</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{lang === 'zh' ? "公司" : "Company"}</h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-zinc-400">
                  <li><Link href={`/${lang}/about`} className="hover:text-blue-600">{dict.common.about}</Link></li>
                  <li><Link href={`/${lang}/contact`} className="hover:text-blue-600">{dict.common.contact}</Link></li>
                  <li><Link href={`/${lang}/privacy`} className="hover:text-blue-600">{dict.common.privacy}</Link></li>
                  <li><Link href={`/${lang}/terms`} className="hover:text-blue-600">{dict.common.terms}</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t pt-8 text-center text-sm text-slate-500 dark:text-zinc-400">
              <p>&copy; {new Date().getFullYear()} ToolBox. {dict.common.rightsReserved}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
