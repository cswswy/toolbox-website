export default function TermsPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl text-inherit">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-inherit">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing and using Online Toolbox, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">2. Use of License</h2>
        <p className="mb-6">
          Permission is granted to temporarily use the tools on Online Toolbox for personal, non-commercial or commercial use. This is the grant of a license, not a transfer of title.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">3. Disclaimer</h2>
        <p className="mb-6">
          The materials on Online Toolbox are provided on an 'as is' basis. Online Toolbox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">4. Limitations</h2>
        <p className="mb-6">
          In no event shall Online Toolbox or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Online Toolbox.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-inherit">5. Governing Law</h2>
        <p className="mb-6">
          Any claim relating to Online Toolbox shall be governed by the laws of the jurisdiction in which the website owner resides without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
}
