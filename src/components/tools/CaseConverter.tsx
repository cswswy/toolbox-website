"use client";

import { useState } from "react";
import { Type, ArrowDown, ArrowUp, Copy, CheckCircle2, Trash2 } from "lucide-react";

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const convertToSentenceCase = () => {
    const result = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(result);
  };

  const convertToTitleCase = () => {
    const result = text.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(result);
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-bold flex items-center gap-2">
            <Type className="w-4 h-4 text-blue-500" /> Input Text
          </label>
          <div className="flex gap-4">
            {text && (
              <button
                onClick={copyToClipboard}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied!" : "Copy Text"}
              </button>
            )}
            <button
              onClick={() => setText("")}
              className="text-xs font-semibold text-red-500 hover:text-red-600 flex items-center gap-1"
            >
              <Trash2 className="w-3 h-3" /> Clear
            </button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-64 p-6 font-mono text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none shadow-sm"
          placeholder="Paste your text here..."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={convertToUpperCase}
          className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-4 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm flex flex-col items-center gap-2"
        >
          <ArrowUp className="w-5 h-5" />
          <span>UPPERCASE</span>
        </button>
        <button
          onClick={convertToLowerCase}
          className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-4 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm flex flex-col items-center gap-2"
        >
          <ArrowDown className="w-5 h-5" />
          <span>lowercase</span>
        </button>
        <button
          onClick={convertToSentenceCase}
          className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-4 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm flex flex-col items-center gap-2"
        >
          <Type className="w-5 h-5" />
          <span>Sentence case</span>
        </button>
        <button
          onClick={convertToTitleCase}
          className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-4 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm flex flex-col items-center gap-2"
        >
          <Type className="w-5 h-5 rotate-12" />
          <span>Title Case</span>
        </button>
      </div>
    </div>
  );
}
