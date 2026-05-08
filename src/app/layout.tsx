import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Online Toolbox - Free SEO & Developer Tools",
    template: "%s | Online Toolbox"
  },
  description: "A collection of free, high-quality online tools for developers and SEO professionals. Fast, secure, and easy to use.",
  keywords: ["online tools", "SEO tools", "developer tools", "formatters", "calculators"],
  authors: [{ name: "Online Toolbox Team" }],
  creator: "Online Toolbox",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL("https://cswswy.cn"),
    siteName: "Online Toolbox",
    title: "Online Toolbox - Free SEO & Developer Tools",
    description: "A collection of free, high-quality online tools for developers and SEO professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Online Toolbox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Toolbox - Free SEO & Developer Tools",
    description: "A collection of free, high-quality online tools for developers and SEO professionals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50">
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 dark:border-zinc-800">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <a href="/" className="text-xl font-bold tracking-tight">ToolBox</a>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/tools" className="hover:text-blue-600 transition-colors">All Tools</Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                Get Started
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
                  Making the web better, one tool at a time. Free, fast, and secure.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Tools</h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-zinc-400">
                  <li><a href="#" className="hover:text-blue-600">JSON Formatter</a></li>
                  <li><a href="#" className="hover:text-blue-600">Unit Converter</a></li>
                  <li><a href="#" className="hover:text-blue-600">Password Generator</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-zinc-400">
                  <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t pt-8 text-center text-sm text-slate-500 dark:text-zinc-400">
              <p>&copy; {new Date().getFullYear()} ToolBox. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
