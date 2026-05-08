"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, ArrowRight, Copy, CheckCircle2 } from "lucide-react";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    setTimestamp(Math.floor(Date.now() / 1000).toString());
    return () => clearInterval(timer);
  }, []);

  const convertToDate = () => {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) return;
      // Handle both seconds and milliseconds
      const date = ts > 9999999999 ? new Date(ts) : new Date(ts * 1000);
      setDateStr(date.toLocaleString());
    } catch (e) {
      setDateStr("Invalid Timestamp");
    }
  };

  const convertToTimestamp = () => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return;
      setTimestamp(Math.floor(date.getTime() / 1000).toString());
    } catch (e) {
      setTimestamp("Invalid Date");
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Current Time Section */}
      <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 p-3 rounded-2xl">
            <Clock className="w-8 h-8" />
          </div>
          <div>
            <p className="text-blue-100 text-sm font-medium">Current Unix Timestamp</p>
            <p className="text-4xl font-mono font-bold tracking-wider">{currentTimestamp}</p>
          </div>
        </div>
        <button 
          onClick={() => copyToClipboard(currentTimestamp.toString(), 'current')}
          className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/10 flex items-center gap-2"
        >
          {copied === 'current' ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          <span>{copied === 'current' ? "Copied" : "Copy Timestamp"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TS to Date */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" /> Timestamp to Date
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="Enter Unix Timestamp..."
              className="w-full p-4 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-mono"
            />
            <button
              onClick={convertToDate}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Convert <ArrowRight className="w-5 h-5" />
            </button>
            {dateStr && (
              <div className="p-4 bg-slate-50 dark:bg-zinc-950 rounded-2xl border border-dashed border-slate-200 dark:border-zinc-700">
                <p className="text-xs text-slate-500 mb-1">Local Time</p>
                <p className="font-semibold text-lg">{dateStr}</p>
              </div>
            )}
          </div>
        </div>

        {/* Date to TS */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-200 dark:border-zinc-800 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-500" /> Date to Timestamp
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              value={dateStr}
              onChange={(e) => setDateStr(e.target.value)}
              placeholder="e.g. 2024-05-08 12:00:00"
              className="w-full p-4 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={convertToTimestamp}
              className="w-full bg-slate-800 dark:bg-zinc-800 text-white py-4 rounded-2xl font-bold hover:bg-slate-900 dark:hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
            >
              Convert <ArrowRight className="w-5 h-5" />
            </button>
            {timestamp && !isNaN(parseInt(timestamp)) && (
              <div className="p-4 bg-slate-50 dark:bg-zinc-950 rounded-2xl border border-dashed border-slate-200 dark:border-zinc-700">
                <p className="text-xs text-slate-500 mb-1">Unix Timestamp</p>
                <p className="font-mono font-bold text-lg">{timestamp}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
