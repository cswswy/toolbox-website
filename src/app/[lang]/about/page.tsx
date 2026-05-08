export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl text-inherit">
      <h1 className="text-4xl font-bold mb-8">About Online Toolbox</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-inherit">
        <p className="text-lg mb-6">
          Online Toolbox is a dedicated platform providing high-quality, free, and privacy-focused tools for developers, SEO professionals, and digital creators.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">Our Mission</h2>
        <p className="mb-6">
          Our mission is to simplify the daily workflow of technical professionals by providing instant access to essential tools without the need for heavy software installations or compromising data privacy.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">Privacy First</h2>
        <p className="mb-6">
          We believe your data belongs to you. Most of our tools process data directly in your browser, meaning your sensitive information never even reaches our servers.
        </p>
      </div>
    </div>
  );
}
