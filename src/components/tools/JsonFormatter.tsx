"use client";

import { useState } from "react";
import { Copy, Trash2, CheckCircle2 } from "lucide-react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: any) {
      setError("Invalid JSON: " + e.message);
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e: any) {
      setError("Invalid JSON: " + e.message);
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Input JSON</label>
          <textarea
            className="w-full h-80 p-4 font-mono text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder='Paste your JSON here... e.g. {"name": "toolbox", "version": 1}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium flex justify-between items-center">
            Output
            {output && (
              <button
                onClick={copyToClipboard}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-xs"
              >
                {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
          </label>
          <div className="relative h-80">
            <textarea
              readOnly
              className={`w-full h-full p-4 font-mono text-sm border rounded-xl outline-none transition-all ${
                error 
                  ? "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30 text-red-600" 
                  : "bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800"
              }`}
              value={error || output}
              placeholder="Result will appear here..."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={formatJson}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
        >
          Format (Prettify)
        </button>
        <button
          onClick={minifyJson}
          className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-900 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          Minify
        </button>
        <button
          onClick={clearAll}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <Trash2 className="w-4 h-4" /> Clear
        </button>
      </div>
    </div>
  );
}
