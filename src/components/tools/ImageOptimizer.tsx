"use client";

import { useState, useRef } from "react";
import { Upload, Download, Image as ImageIcon, Trash2, CheckCircle2 } from "lucide-react";

export default function ImageOptimizer() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [quality, setQuality] = useState(80);
  const [optimizedImage, setOptimizedImage] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setOriginalSize(file.size);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        optimizeImage(event.target?.result as string, quality);
      };
      reader.readAsDataURL(file);
    }
  };

  const optimizeImage = (src: string, q: number) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg", q / 100);
      setOptimizedImage(dataUrl);
      
      // Estimate size from base64
      const stringLength = dataUrl.split(",")[1].length;
      const sizeInBytes = Math.floor(stringLength * 0.75);
      setOptimizedSize(sizeInBytes);
    };
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const downloadImage = () => {
    if (!optimizedImage) return;
    const link = document.createElement("a");
    link.href = optimizedImage;
    link.download = `optimized-${fileName.split('.')[0]}.jpg`;
    link.click();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-2xl p-12 bg-white dark:bg-zinc-900 transition-all hover:border-blue-500">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {!image ? (
          <div className="text-center space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full inline-block">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-lg font-semibold">Drop your image here</p>
              <p className="text-sm text-slate-500">Supports JPG, PNG, WEBP (Outputs JPEG)</p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Select Image
            </button>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-500">Original ({formatSize(originalSize)})</p>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                <img src={image} alt="Original" className="object-contain w-full h-full" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-500">Optimized ({formatSize(optimizedSize)})</p>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800">
                <img src={optimizedImage || ""} alt="Optimized" className="object-contain w-full h-full" />
              </div>
            </div>
          </div>
        )}
      </div>

      {image && (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Optimization Quality: {quality}%</label>
              <span className="text-xs text-green-600 font-bold">
                -{Math.round((1 - optimizedSize / originalSize) * 100)}% Reduction
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setQuality(val);
                optimizeImage(image, val);
              }}
              className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={downloadImage}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              <Download className="w-5 h-5" /> Download Optimized Image
            </button>
            <button
              onClick={() => { setImage(null); setOptimizedImage(null); }}
              className="px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
