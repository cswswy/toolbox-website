"use client";

import { useState } from "react";
import { Trash2, CheckCircle2, Copy } from "lucide-react";

export default function CodeBeautifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"html" | "css" | "js">("js");
  const [copied, setCopied] = useState(false);

  const beautify = () => {
    // Simple naive beautifier for demonstration
    // In a real app, you'd use a library like js-beautify or prettier-standalone
    try {
      let result = input.trim();
      if (mode === "js" || mode === "css" || mode === "html") {
        // Very basic formatting logic for demonstration
        result = result
          .replace(/{\s*/g, " {\n  ")
          .replace(/;\s*/g, ";\n  ")
          .replace(/}\s*/g, "\n}\n")
          .replace(/\n\s*\n/g, "\n");
      }
      setOutput(result);
    } catch (e) {
      setOutput("Error processing code.");
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-zinc-800 rounded-xl w-fit">
        {["js", "css", "html"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as any)}
            className={`py-1.5 px-4 rounded-lg text-sm font-semibold uppercase transition-all ${
              mode === m 
                ? "bg-white dark:bg-zinc-700 text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700 dark:text-zinc-400"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          className="w-full h-80 p-4 font-mono text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder={`Paste your ${mode.toUpperCase()} code here...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="relative h-80">
          <textarea
            readOnly
            className="w-full h-full p-4 font-mono text-sm bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl outline-none"
            value={output}
            placeholder="Formatted code will appear here..."
          />
          {output && (
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-slate-200 dark:border-zinc-700 hover:text-blue-600 transition-colors"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={beautify}
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
        >
          Beautify {mode.toUpperCase()}
        </button>
        <button
          onClick={() => { setInput(""); setOutput(""); }}
          className="px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
