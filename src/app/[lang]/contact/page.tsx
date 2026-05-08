export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl text-inherit">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800">
        <p className="mb-8 text-slate-600 dark:text-zinc-400">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded-lg border border-slate-200 dark:border-zinc-700 bg-transparent" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded-lg border border-slate-200 dark:border-zinc-700 bg-transparent" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-3 rounded-lg border border-slate-200 dark:border-zinc-700 bg-transparent h-32" placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
