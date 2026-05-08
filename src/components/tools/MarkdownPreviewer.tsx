"use client";

import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { FileText, Eye, Code, Copy, CheckCircle2 } from "lucide-react";

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState("# Welcome to Markdown Previewer\n\n## Subheading\n\nThis is a **bold** text and *italic* text.\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log('Hello World');\n```\n\n> Quote block\n\n[Link](https://google.com)");
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const parseMarkdown = async () => {
      const parsed = await marked.parse(markdown);
      setHtml(DOMPurify.sanitize(parsed));
    };
    parseMarkdown();
  }, [markdown]);

  const copyHtml = () => {
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-500" /> Editor
            </label>
          </div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-[500px] p-6 font-mono text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none shadow-sm"
            placeholder="Type your markdown here..."
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold flex items-center gap-2">
              <Eye className="w-4 h-4 text-green-500" /> Live Preview
            </label>
            <button
              onClick={copyHtml}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
            >
              {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied HTML!" : "Copy HTML"}
            </button>
          </div>
          <div 
            className="w-full h-[500px] p-6 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-auto prose prose-slate dark:prose-invert max-w-none shadow-inner"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
