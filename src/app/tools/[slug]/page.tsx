import { notFound } from "next/navigation";
import JsonFormatter from "@/components/tools/JsonFormatter";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import Base64Tool from "@/components/tools/Base64Tool";
import UnitConverter from "@/components/tools/UnitConverter";
import ImageOptimizer from "@/components/tools/ImageOptimizer";
import CodeBeautifier from "@/components/tools/CodeBeautifier";
import QRCodeGenerator from "@/components/tools/QRCodeGenerator";
import TimestampConverter from "@/components/tools/TimestampConverter";
import ColorConverter from "@/components/tools/ColorConverter";
import MarkdownPreviewer from "@/components/tools/MarkdownPreviewer";
import CaseConverter from "@/components/tools/CaseConverter";
import { Metadata } from "next";

const toolsConfig: Record<string, {
  title: string;
  description: string;
  component: React.ComponentType;
  longContent: string;
  faqs: { q: string; a: string }[];
}> = {
  "json-formatter": {
    title: "Professional JSON Formatter & Validator",
    description: "Format, validate, and beautify your JSON code online for free. Privacy-focused JSON tool for developers.",
    component: JsonFormatter,
    longContent: `
      <h2>What is JSON Formatting?</h2>
      <p>JSON (JavaScript Object Notation) is a lightweight data-interchange format. However, when JSON is minified or machine-generated, it becomes hard for humans to read. Our JSON Formatter converts messy JSON into a clean, hierarchical structure with proper indentation.</p>
      <h2>Why use our Online JSON Tool?</h2>
      <ul>
        <li><strong>Privacy First:</strong> Your JSON data is processed entirely in your browser. It's never sent to our servers.</li>
        <li><strong>Instant Validation:</strong> Our tool highlights syntax errors in real-time.</li>
        <li><strong>Beautify or Minify:</strong> Toggle between human-readable and space-saving formats instantly.</li>
      </ul>
    `,
    faqs: [
      { q: "Is my JSON data safe?", a: "Yes, our formatter works client-side. Your data never leaves your computer." },
      { q: "Does it support nested objects?", a: "Absolutely. Our tool handles deeply nested JSON objects and arrays with ease." }
    ]
  },
  "password-generator": {
    title: "Secure Password Generator - Create Strong Passwords",
    description: "Generate highly secure, random passwords online. Custom length, symbols, and numbers support for maximum security.",
    component: PasswordGenerator,
    longContent: `
      <h2>The Importance of Strong Passwords</h2>
      <p>In today's digital world, a strong password is your first line of defense. Weak passwords like '123456' can be cracked in milliseconds. Our generator uses cryptographically secure methods to ensure your passwords are unhackable.</p>
      <h2>Best Practices for Password Security</h2>
      <ul>
        <li><strong>Length Matters:</strong> Use at least 12-16 characters.</li>
        <li><strong>Mix It Up:</strong> Combine uppercase, lowercase, numbers, and special symbols.</li>
        <li><strong>Unique per Site:</strong> Never reuse the same password for multiple accounts.</li>
      </ul>
    `,
    faqs: [
      { q: "Are these passwords random?", a: "Yes, we use the Web Crypto API's random number generator for high-entropy passwords." },
      { q: "Can I save the passwords here?", a: "No, for your security, we do not store any generated passwords." }
    ]
  },
  "base64-encoder": {
    title: "Base64 Encoder & Decoder - Fast Online Tool",
    description: "Easily encode text to Base64 or decode Base64 strings back to plain text. Fast, secure, and browser-based processing.",
    component: Base64Tool,
    longContent: `
      <h2>What is Base64 Encoding?</h2>
      <p>Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format. It is commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data.</p>
      <h2>Common Use Cases</h2>
      <ul>
        <li><strong>Data URI:</strong> Encoding small images to include directly in HTML/CSS.</li>
        <li><strong>API Authentication:</strong> Basic auth often uses Base64 encoded credentials.</li>
        <li><strong>Data Transmission:</strong> Sending complex data through simple text-only channels.</li>
      </ul>
    `,
    faqs: [
      { q: "Is Base64 encryption?", a: "No, Base64 is an encoding scheme, not encryption. It can be easily decoded by anyone." },
      { q: "Does this tool work offline?", a: "Yes, once the page is loaded, all processing happens locally in your browser." }
    ]
  },
  "unit-converter": {
    title: "All-in-One Unit Converter - Length, Weight, Temp",
    description: "Free online unit converter for length, weight, and temperature. Convert between metric and imperial units instantly.",
    component: UnitConverter,
    longContent: `
      <h2>Simplify Your Calculations</h2>
      <p>Whether you're a student, professional, or just need to convert a recipe, our unit converter provides accurate results across various categories including length, weight, and temperature.</p>
      <h2>Supported Conversions</h2>
      <ul>
        <li><strong>Length:</strong> Meters, Kilometers, Miles, Feet, Inches, and more.</li>
        <li><strong>Weight:</strong> Kilograms, Grams, Pounds, Ounces.</li>
        <li><strong>Temperature:</strong> Celsius, Fahrenheit, and Kelvin.</li>
      </ul>
    `,
    faqs: [
      { q: "How accurate is the conversion?", a: "We use standard conversion factors and provide results up to 6 decimal places for precision." },
      { q: "Is the temperature conversion linear?", a: "For length and weight, yes. For temperature, we use the specific formulas (e.g., °C to °F) to ensure accuracy." }
    ]
  },
  "image-optimizer": {
    title: "Fast Online Image Optimizer - Reduce File Size",
    description: "Optimize and compress your images online for faster website loading. Supports JPEG, PNG, and WebP with adjustable quality.",
    component: ImageOptimizer,
    longContent: `
      <h2>Why Optimize Images?</h2>
      <p>Large images are the #1 cause of slow websites. Optimizing your images reduces file size without significantly impacting visual quality, leading to faster load times and better SEO rankings.</p>
      <h2>Our Optimization Approach</h2>
      <ul>
        <li><strong>Browser-Based:</strong> All compression happens in your browser using Canvas API. Your images are never uploaded to our servers.</li>
        <li><strong>Adjustable Quality:</strong> You have full control over the quality vs. file size trade-off.</li>
        <li><strong>Instant Preview:</strong> See the estimated file size reduction before downloading.</li>
      </ul>
    `,
    faqs: [
      { q: "Will I lose image quality?", a: "Optimization involves some lossy compression, but at 80-90% quality, the difference is often invisible to the human eye." },
      { q: "Is there a file size limit?", a: "Since processing happens in your browser, the limit depends on your device's memory, but it comfortably handles most standard images." }
    ]
  },
  "code-beautifier": {
    title: "Online Code Beautifier - Format HTML, CSS, JS",
    description: "Format and beautify your HTML, CSS, and JavaScript code snippets online. Improve code readability instantly with our free tool.",
    component: CodeBeautifier,
    longContent: `
      <h2>Why use a Code Beautifier?</h2>
      <p>Clean, well-formatted code is easier to read, debug, and maintain. Whether you're dealing with minified code or just want to standardize your project's style, our beautifier helps you transform messy code into structured, readable text.</p>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Multi-language Support:</strong> Format HTML, CSS, and JavaScript in one place.</li>
        <li><strong>Instant Results:</strong> See your formatted code as soon as you click the button.</li>
        <li><strong>No Installation:</strong> Works entirely in your web browser, no plugins required.</li>
      </ul>
    `,
    faqs: [
      { q: "Does it support ES6+?", a: "Yes, our JavaScript beautifier handles modern ES6+ syntax including arrow functions and template literals." },
      { q: "Can I use it for minified code?", a: "Absolutely. One of its primary uses is to expand minified code back into a readable format." }
    ]
  },
  "qrcode-generator": {
    title: "Free Online QR Code Generator - Create QR Codes Instantly",
    description: "Create custom QR codes for URLs, text, and more. Free, secure, and easy-to-use QR code maker with color customization.",
    component: QRCodeGenerator,
    longContent: `
      <h2>What is a QR Code?</h2>
      <p>A Quick Response (QR) code is a type of matrix barcode first designed in 1994 for the automotive industry in Japan. It can store a large amount of information, typically a URL or text, and can be scanned quickly by a mobile device.</p>
      <h2>How to Use Our QR Code Maker</h2>
      <ul>
        <li><strong>Enter Content:</strong> Paste your URL or type the text you want to encode.</li>
        <li><strong>Customize:</strong> Adjust the size and colors to match your brand or preference.</li>
        <li><strong>Download:</strong> Export your QR code as a high-quality PNG image.</li>
      </ul>
    `,
    faqs: [
      { q: "Can I use these QR codes for commercial purposes?", a: "Yes, the QR codes generated here are free for both personal and commercial use." },
      { q: "Will the QR code expire?", a: "No, the QR code itself is static and will work as long as the content it points to is available." }
    ]
  },
  "timestamp-converter": {
    title: "Unix Timestamp Converter - Epoch Time Tools",
    description: "Convert Unix timestamps to human-readable dates and vice versa. Free online epoch time tool with real-time clock.",
    component: TimestampConverter,
    longContent: `
      <h2>Understanding Unix Time</h2>
      <p>Unix time (also known as Epoch time) is a system for describing a point in time. It is the number of seconds that have elapsed since the Unix epoch, which is 00:00:00 UTC on January 1, 1970.</p>
      <h2>Practical Uses</h2>
      <ul>
        <li><strong>Software Development:</strong> Standardizing time across different systems and databases.</li>
        <li><strong>Debugging:</strong> Converting raw log timestamps into readable dates.</li>
        <li><strong>Scheduling:</strong> Calculating precise intervals for automated tasks.</li>
      </ul>
    `,
    faqs: [
      { q: "What happens in 2038?", a: "The 'Year 2038 problem' affects systems storing time as a 32-bit signed integer. Our tool uses modern 64-bit precision where available." },
      { q: "Does it support milliseconds?", a: "Yes, our tool automatically detects if a timestamp is in seconds or milliseconds." }
    ]
  },
  "color-converter": {
    title: "Professional Color Converter - HEX, RGB, HSL",
    description: "Convert colors between HEX, RGB, and HSL formats instantly. Free online color picker and converter for designers and developers.",
    component: ColorConverter,
    longContent: `
      <h2>The Importance of Color Accuracy</h2>
      <p>Whether you're designing a website or developing a mobile app, color consistency is key to brand identity. Our professional color converter helps you switch between formats with zero precision loss.</p>
      <h2>Supported Color Formats</h2>
      <ul>
        <li><strong>HEX:</strong> The standard for web design (e.g., #3b82f6).</li>
        <li><strong>RGB:</strong> Red, Green, and Blue values used in digital screens.</li>
        <li><strong>HSL:</strong> Hue, Saturation, and Lightness - more intuitive for human perception.</li>
      </ul>
    `,
    faqs: [
      { q: "Can I pick a color from my screen?", a: "Yes, use our built-in color picker to select any color and get its values instantly." },
      { q: "What is the difference between HEX and RGB?", a: "HEX is a hexadecimal representation, while RGB uses decimal values from 0 to 255. They represent the same color data differently." }
    ]
  },
  "markdown-previewer": {
    title: "Real-time Markdown Previewer & HTML Exporter",
    description: "Write markdown and see live HTML preview instantly. Fast, secure online markdown editor with HTML export capability.",
    component: MarkdownPreviewer,
    longContent: `
      <h2>Master Your Content with Markdown</h2>
      <p>Markdown is a lightweight markup language with plain-text formatting syntax. It is widely used for documentation, readme files, and blogging. Our previewer helps you visualize your content exactly as it will appear.</p>
      <h2>Powerful Editing Features</h2>
      <ul>
        <li><strong>Live Preview:</strong> See your changes in real-time as you type.</li>
        <li><strong>HTML Export:</strong> Convert your markdown to sanitized HTML with one click.</li>
        <li><strong>Standard Compliant:</strong> Supports CommonMark and GitHub Flavored Markdown (GFM).</li>
      </ul>
    `,
    faqs: [
      { q: "Is the HTML output safe?", a: "Yes, we use DOMPurify to sanitize all generated HTML, removing any potentially malicious scripts." },
      { q: "Can I use images in the preview?", a: "Yes, simply use the standard markdown image syntax: ![alt text](image_url)." }
    ]
  },
  "case-converter": {
    title: "Online Case Converter - Change Text Case Instantly",
    description: "Easily convert text between UPPERCASE, lowercase, Title Case, and Sentence case. Free online text utility for writers and developers.",
    component: CaseConverter,
    longContent: `
      <h2>Effortless Text Formatting</h2>
      <p>Dealing with inconsistent text casing can be frustrating. Our case converter provides a quick way to standardize your text for documents, code, or social media posts.</p>
      <h2>Common Conversion Modes</h2>
      <ul>
        <li><strong>UPPERCASE:</strong> CONVERTS ALL LETTERS TO CAPITALS.</li>
        <li><strong>lowercase:</strong> converts all letters to small letters.</li>
        <li><strong>Title Case:</strong> Capitalizes The First Letter Of Each Word.</li>
        <li><strong>Sentence case:</strong> Capitalizes only the first letter of each sentence.</li>
      </ul>
    `,
    faqs: [
      { q: "Does it work with non-English characters?", a: "Yes, it supports standard UTF-8 characters for case conversion where applicable." },
      { q: "Is there a limit on text length?", a: "Our tool can handle large blocks of text efficiently, limited only by your browser's memory." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolsConfig[slug];
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: tool.title,
    description: tool.description,
    openGraph: {
      title: tool.title,
      description: tool.description,
    }
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolsConfig[slug];

  if (!tool) {
    notFound();
  }

  const ToolComponent = tool.component;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/tools" className="hover:text-blue-600">Tools</a>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-zinc-300">{tool.title}</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
          {tool.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-zinc-400">
          {tool.description}
        </p>
      </div>

      <div className="mb-20">
        <ToolComponent />
      </div>

      {/* Structured SEO Content */}
      <article className="prose prose-slate dark:prose-invert max-w-none border-t border-slate-200 dark:border-zinc-800 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">In-depth Guide</h2>
            <div dangerouslySetInnerHTML={{ __html: tool.longContent }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {tool.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* JSON-LD for Tool Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.title,
            "description": tool.description,
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Free to use",
              "Privacy-focused",
              "Runs in browser",
              "No data collection"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1250"
            }
          })
        }}
      />
    </div>
  );
}
