export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl text-inherit">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-inherit">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">1. Information Collection and Use</h2>
        <p className="mb-6">
          At Online Toolbox, we prioritize user privacy. We do not require registration, and we do not collect personal identification information from our users. Most tools provided on this website perform calculations and data processing locally in your browser using JavaScript. This means your sensitive data, images, and code snippets are never transmitted to our servers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">2. Google AdSense and Cookies</h2>
        <p className="mb-6">
          We use Google AdSense to serve advertisements when you visit our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
        </p>
        <p className="mb-6">
          Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.aboutads.info</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">3. Log Data</h2>
        <p className="mb-6">
          Like many site operators, we collect information that your browser sends whenever you visit our site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, and other statistics. We use this information solely to analyze trends and improve the user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">4. Data Security</h2>
        <p className="mb-6">
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. Since our tools are client-side, the safest way to use them is on a trusted device.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">5. Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
}
