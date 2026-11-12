import React from "react";

export default function LabbaikLogo({ lightText = true }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crimson Roofline */}
        <path d="M12 45L50 14L88 45H76L50 24L24 45H12Z" fill="#9B1B30" />
        <rect x="68" y="18" width="8" height="16" fill="#9B1B30" />
        {/* Architectural L */}
        <path d="M18 46H27V82H54V89H18V46Z" fill="#9B1B30" />
        {/* 4-Diamond Emblem */}
        <g transform="translate(50, 48) rotate(45)">
          <rect x="-13" y="-13" width="11" height="11" rx="1.5" fill="#9B1B30" />
          <rect x="2" y="-13" width="11" height="11" rx="1.5" fill="#9B1B30" />
          <rect x="-13" y="2" width="11" height="11" rx="1.5" fill="#9B1B30" />
          <rect x="2" y="2" width="11" height="11" rx="1.5" fill="#9B1B30" />
        </g>
      </svg>
      <div className="leading-none">
        <span className={`block text-xl font-extrabold tracking-wider ${lightText ? "text-white" : "text-brand-charcoal"}`}>
          <span className="text-brand-crimson">L</span>ABBAIK
        </span>
        <span className="block text-[10px] font-semibold tracking-[0.25em] text-neutral-400 mt-1">
          HOME PROJECT
        </span>
      </div>
    </div>
  );
}