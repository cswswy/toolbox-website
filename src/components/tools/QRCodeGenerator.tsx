"use client";

import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download, Trash2, Link as LinkIcon, Type } from "lucide-react";

export default function QRCodeGenerator() {
  const [value, setValue] = useState("");
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadQRCode = () => {
    if (!svgRef.current) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <LinkIcon className="w-4 h-4 text-blue-500" /> Content (URL or Text)
          </label>
          <textarea
            className="w-full h-32 p-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="Enter URL or text to generate QR code..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">QR Size</label>
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full p-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-lg outline-none"
            >
              <option value="128">Small (128px)</option>
              <option value="256">Medium (256px)</option>
              <option value="512">Large (512px)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Colors</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-full h-10 p-1 rounded border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 cursor-pointer"
                title="Foreground Color"
              />
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 p-1 rounded border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 cursor-pointer"
                title="Background Color"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={downloadQRCode}
            disabled={!value}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:shadow-none"
          >
            <Download className="w-5 h-5" /> Download PNG
          </button>
          <button
            onClick={() => setValue("")}
            className="px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-zinc-800 min-h-[300px]">
        {value ? (
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <QRCodeSVG
              ref={svgRef}
              value={value}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
              level="H"
              includeMargin={true}
            />
          </div>
        ) : (
          <div className="text-center space-y-4 text-slate-400">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-full inline-block shadow-sm">
              <LinkIcon className="w-12 h-12" />
            </div>
            <p>Preview will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
