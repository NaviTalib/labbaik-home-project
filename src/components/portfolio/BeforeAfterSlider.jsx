// src/components/portfolio/BeforeAfterSlider.jsx
import React, { useState } from "react";

export default function BeforeAfterSlider({ beforeImg, afterImg, title }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <div className="relative aspect-video rounded-2xl overflow-hidden select-none border border-neutral-200">
        {/* After Image (Full Background) */}
        <img src={afterImg} alt="After" className="w-full h-full object-cover" />
        <span className="absolute top-3 right-3 bg-brand-charcoal/85 text-white text-xs font-bold px-3 py-1 rounded">
          AFTER
        </span>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 bg-brand-crimson text-white text-xs font-bold px-3 py-1 rounded">
            BEFORE
          </span>
        </div>

        {/* Range Input Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          aria-label="Compare before and after"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10"
          style={{ left: `${position}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-brand-crimson text-white text-xs font-bold flex items-center justify-center shadow -ml-3.5 mt-32">
            ↔
          </div>
        </div>
      </div>
      <h4 className="font-bold text-lg text-brand-charcoal">{title}</h4>
    </div>
  );
}