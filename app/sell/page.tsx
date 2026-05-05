'use client';

import { useState } from 'react';
import { Upload, X, Image as ImageIcon, Video } from 'lucide-react';

export default function SellPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-serif mb-3">Sell Your Diamond</h1>
      <p className="text-zinc-400 text-lg mb-12">Upload photos and videos to get the best offers</p>

      {/* Photos */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <ImageIcon className="w-7 h-7" /> Photos
        </h3>
        <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-16 text-center hover:border-cyan-500 transition">
          <Upload className="w-16 h-16 mx-auto mb-6 text-zinc-500" />
          <p className="text-xl">Drop photos here or click to upload</p>
        </div>
      </div>

      {/* Videos */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <Video className="w-7 h-7" /> Videos
        </h3>
        <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-16 text-center hover:border-cyan-500 transition">
          <Upload className="w-16 h-16 mx-auto mb-6 text-zinc-500" />
          <p className="text-xl">Drop video here or click to upload</p>
        </div>
      </div>

      <button className="w-full bg-cyan-400 text-black py-7 rounded-3xl text-xl font-semibold">
        Submit Diamond for Review
      </button>
    </div>
  );
}
