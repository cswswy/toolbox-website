"use client";

import { useState } from "react";
import { Copy, Trash2, CheckCircle2, ArrowRightLeft } from "lucide-react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const processBase64 = () => {
    try {
      if (!input.trim()) return;
      if (mode === "encode") {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
      setError("");
    } catch (e: any) {
      setError("Error: " + (mode === "decode" ? "Invalid Base64 string" : e.message));
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMode = () => {
    setMode(mode === "encode" ? "decode" : "encode");
    setInput(output);
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <button
          onClick={toggleMode}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all font-medium text-sm"
        >
          <span className={mode === "encode" ? "text-blue-600 font-bold" : ""}>Encode</span>
          <ArrowRightLeft className="w-4 h-4 text-slate-400" />
          <span className={mode === "decode" ? "text-blue-600 font-bold" : ""}>Decode</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Input {mode === "encode" ? "Text" : "Base64"}</label>
          <textarea
            className="w-full h-64 p-4 font-mono text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium flex justify-between items-center">
            Output {mode === "encode" ? "Base64" : "Text"}
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
          <div className="relative h-64">
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

      <div className="flex gap-4">
        <button
          onClick={processBase64}
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
        >
          {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
        </button>
        <button
          onClick={() => { setInput(""); setOutput(""); setError(""); }}
          className="px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
